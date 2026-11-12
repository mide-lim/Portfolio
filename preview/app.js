const projects=[
{id:'megabrain',name:'MEGA-BRAIN',category:'IA aplicada · Projeto autoral',group:['author'],type:'mb',summary:'Transformar vídeos salvos em um acervo consultável.',description:'Projeto autoral de processamento de vídeos e organização de informação com análise multimodal. A proposta é criar um acervo que permita recuperar e reutilizar conteúdo.',focus:'O fluxo reúne coleta, processamento, análise e registro por vídeo. Registrar o resultado de cada item permite retomar as pendências e acompanhar o progresso do acervo.',tags:['IA multimodal','Processamento de dados','Acervo'],repo:'https://github.com/mide-lim/MEGA-BRAIN'},
{id:'cub3d',name:'Cub3D',category:'Computação gráfica · 42 Rio',group:['42'],type:'cube',summary:'Um labirinto em primeira pessoa, construído com raycasting.',description:'Projeto da 42 Rio inspirado nos jogos em primeira pessoa dos anos 1990. O raycasting permite transformar um mapa bidimensional em uma visão navegável.',focus:'O projeto conecta representação de mapas, cálculo de raios, renderização e interação. O histórico da 42 registra aprovação com bônus em julho de 2026.',tags:['C','Raycasting','Gráficos'],repo:'https://github.com/mide-lim/Cub3D'},
{id:'minishell',name:'Minishell',category:'Programação de sistemas · 42 Rio',group:['42','systems'],type:'terminal',summary:'Do texto no terminal à execução de processos.',description:'Um shell desenvolvido em dupla na 42 Rio. O projeto envolve interpretar comandos e coordenar sua execução em um ambiente Unix.',focus:'O README registra funcionalidades de parsing, pipelines, redirecionamentos, variáveis, built-ins e tratamento de sinais. A descrição detalhada da minha contribuição será adicionada ao estudo de caso.',tags:['C','Unix','Processos','Pipes']},
{id:'webserv',name:'Webserv',category:'Redes & sistemas · 42 Rio',group:['42','systems'],type:'web',summary:'Construção de um servidor HTTP em C++.',description:'Projeto de implementação de um servidor HTTP, explorando a comunicação entre clientes e servidores e o funcionamento do protocolo.',focus:'O histórico registra aprovação com bônus em agosto de 2026. O estudo de caso será ampliado com a arquitetura da implementação e exemplos de requisições.',tags:['C++','HTTP','Redes']},
{id:'philosophers',name:'Philosophers',category:'Concorrência · 42 Rio',group:['42','systems'],type:'philo',summary:'Threads e sincronização em torno de recursos compartilhados.',description:'Implementação do problema dos filósofos utilizando C, threads POSIX e mutexes. A simulação envolve tarefas concorrentes que precisam compartilhar recursos.',focus:'O projeto permite explorar sincronização, disputa por recursos e prevenção de deadlocks. A documentação do repositório apresenta as estruturas e o fluxo da simulação.',tags:['C','Threads','Mutexes'],repo:'https://github.com/mide-lim/Philosophers'},
{id:'inception',name:'Inception',category:'Infraestrutura · 42 Rio',group:['42','systems'],type:'infra',summary:'Serviços organizados em uma infraestrutura de containers.',description:'Projeto de administração de sistemas com Docker e Docker Compose. A proposta reúne serviços em containers e explora sua comunicação e persistência.',focus:'O escopo da formação inclui NGINX com TLS, WordPress e MariaDB. O histórico registra aprovação em agosto de 2026.',tags:['Docker','Compose','NGINX','MariaDB']}
];
const cover=p=>'<div class="cover '+(p.type==='web'?'terminal':p.type)+'">'+({mb:'<span class="word">MEGA<br>BRAIN.</span><div class="orb"></div>',cube:'<div class="scene"><span></span></div><span class="cover-label">CUB3D / RAYCASTING</span>',terminal:'<div class="bar"><i></i><i></i><i></i></div><code><span class="prompt">mide-lim $</span> echo hello | cat<br>hello<br><span class="prompt">mide-lim $</span> pwd<br>/home/mide-lim</code><span class="title">minishell_</span>',web:'<div class="bar"><i></i><i></i><i></i></div><code><span class="prompt">GET / HTTP/1.1</span><br>Host: localhost<br><br>HTTP/1.1 200 OK</code><span class="title">webserv.</span>',philo:'<div class="table"><span></span><span></span><span></span><span></span><span></span></div><span class="cover-label">THREADS / RECURSOS COMPARTILHADOS</span>',infra:'<div class="blocks"><span>NGINX</span><span>WP</span><span>DB</span></div><span class="cover-label">INCEPTION / CONTAINERS</span>'}[p.type])+'<span class="open" aria-hidden="true">↗</span></div>';
const card=p=>'<a class="project-card" href="#project-'+p.id+'">'+cover(p)+'<div class="card-copy"><small>'+p.category+'</small><h3>'+p.name+'</h3><p>'+p.summary+'</p></div></a>';
document.querySelector('[data-projects="featured"]').innerHTML=projects.slice(0,4).map(card).join('');
const allProjects=document.querySelector('[data-projects="all"]');
allProjects.innerHTML=projects.map(card).join('');
let observer;
function reveal(){
 if(observer)observer.disconnect();
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.08});
 document.querySelectorAll('[data-page]:not([hidden]) .project-card,[data-page]:not([hidden]) .section-heading,[data-page]:not([hidden]) .timeline article,[data-page]:not([hidden]) .service-list article').forEach(el=>{
 el.classList.add('reveal');el.classList.toggle('visible',reduced);observer.observe(el);
 });
}
function navigate(){
 const hash=location.hash.slice(1)||'home';
 const project=hash.startsWith('project-')?projects.find(p=>p.id===hash.slice(8)):null;
 const route=project?'project':(['home','about','portfolio','blog','services'].includes(hash)?hash:'home');
 if(project){
 document.getElementById('project-detail').innerHTML='<div class="page-hero"><a class="text-link" href="#portfolio">← Todos os projetos</a><h1>'+project.name+'</h1><p class="intro">'+project.summary+'</p><div class="tags">'+project.tags.map(t=>'<span>'+t+'</span>').join('')+'</div></div><div class="detail-cover">'+cover(project)+'</div><p class="detail-note">Composição visual ilustrativa do projeto.</p><div class="detail-copy"><h2>Sobre o projeto</h2><div><p>'+project.description+'</p><p>'+project.focus+'</p>'+(project.repo?'<a class="button" href="'+project.repo+'" target="_blank" rel="noopener">Explorar código ↗</a>':'')+'</div></div><div class="section"><span class="eyebrow">CONTINUE EXPLORANDO</span><div class="projects" style="margin-top:30px">'+projects.filter(p=>p.id!==project.id).slice(0,2).map(card).join('')+'</div></div>';
 }
 document.querySelectorAll('[data-page]').forEach(el=>el.hidden=el.dataset.page!==route);
 document.querySelectorAll('nav a').forEach(el=>{
  if(el.hash==='#'+(route==='project'?'portfolio':route))el.setAttribute('aria-current','page');else el.removeAttribute('aria-current');
 });
 document.title=(project?project.name:route==='home'?'Michel Marques':route.charAt(0).toUpperCase()+route.slice(1))+' — midelim';
 if(hash==='destaques')document.getElementById('destaques').scrollIntoView({behavior:'smooth'});
 else window.scrollTo({top:0,behavior:'instant'});
 reveal();
}
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button))});
 allProjects.innerHTML=projects.filter(p=>button.dataset.filter==='all'||p.group.includes(button.dataset.filter)).map(card).join('');
 reveal();
}));
let ticking=false;
addEventListener('scroll',()=>{
 if(ticking)return;ticking=true;
 requestAnimationFrame(()=>{
 const total=document.documentElement.scrollHeight-innerHeight;
 document.querySelector('.progress').style.width=(total>0?scrollY/total*100:0)+'%';
 ticking=false;
 });
},{passive:true});
addEventListener('hashchange',navigate);navigate();