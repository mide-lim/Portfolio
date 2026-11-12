// Runs before the first paint. React owns only the interactive toggle.
export const themeScript = `(function(){
  var root=document.documentElement;
  var url=new URL(location.href);
  var old=url.searchParams.get('palette');
  var preference=url.searchParams.get('theme')||(old==='cream'?'light':old==='charcoal'?'dark':null);
  var valid=function(v){return v==='light'||v==='dark'};
  if(!valid(preference))preference=null;
  try {
    if(!preference){
      var saved=localStorage.getItem('midelim-theme');
      var legacy=localStorage.getItem('midelim-palette');
      preference=valid(saved)?saved:legacy==='cream'?'light':legacy==='charcoal'?'dark':null;
    }
    if(preference)localStorage.setItem('midelim-theme',preference);
    localStorage.removeItem('midelim-palette');
  }catch(e){}
  var theme=preference||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
  root.dataset.theme=theme;
  root.dataset.palette=theme==='light'?'cream':'charcoal';
  root.dataset.themePreference=preference?'manual':'system';
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content',theme==='light'?'#F3EEE3':'#1E1E1C');
  if(url.searchParams.has('palette')||url.searchParams.has('theme')){
    url.searchParams.delete('palette');url.searchParams.delete('theme');
    history.replaceState(history.state,'',url);
  }
})();`;
