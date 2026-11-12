(() => {
  const root = document.documentElement;
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  const url = new URL(window.location.href);
  const oldPalette = url.searchParams.get('palette');
  const requestedTheme = url.searchParams.get('theme') ||
    (oldPalette === 'cream' ? 'light' : oldPalette === 'charcoal' ? 'dark' : null);
  const isTheme = value => value === 'light' || value === 'dark';
  let preference = isTheme(requestedTheme) ? requestedTheme : null;
  try {
    if (!preference) {
      const saved = localStorage.getItem('midelim-theme');
      const legacy = localStorage.getItem('midelim-palette');
      preference = isTheme(saved) ? saved :
        legacy === 'cream' ? 'light' : legacy === 'charcoal' ? 'dark' : null;
    }
    if (preference) localStorage.setItem('midelim-theme', preference);
    localStorage.removeItem('midelim-palette');
  } catch {}
  function applyTheme(theme) {
    root.dataset.theme = theme;
    root.dataset.palette = theme === 'light' ? 'cream' : 'charcoal';
    document.querySelector('meta[name="theme-color"]').content =
      theme === 'light' ? '#F3EEE3' : '#1E1E1C';
    const button = document.getElementById('theme-toggle');
    if (button) {
      const action = theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro';
      button.title = action;
      button.setAttribute('aria-label', action);
      button.querySelector('.theme-icon').textContent = theme === 'light' ? '☀' : '◐';
      button.querySelector('.theme-name').textContent = theme === 'light' ? 'Claro' : 'Escuro';
    }
  }
  applyTheme(preference || (systemTheme.matches ? 'dark' : 'light'));
  if (url.searchParams.has('palette') || url.searchParams.has('theme')) {
    url.searchParams.delete('palette');
    url.searchParams.delete('theme');
    history.replaceState(null, '', url);
  }
  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(root.dataset.theme);
    document.getElementById('theme-toggle').addEventListener('click', () => {
      preference = root.dataset.theme === 'light' ? 'dark' : 'light';
      applyTheme(preference);
      try { localStorage.setItem('midelim-theme', preference); } catch {}
    });
  });
  systemTheme.addEventListener('change', event => {
    if (!preference) applyTheme(event.matches ? 'dark' : 'light');
  });
})();