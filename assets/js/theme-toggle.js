// Theme Toggle Functionality
(function() {
  const THEME_KEY = 'theme';

  // Get saved theme or default to light
  function getStoredTheme() {
    return localStorage.getItem(THEME_KEY) || 'light';
  }

  // Apply theme to document
  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }

  // Apply theme immediately to prevent flash
  applyTheme(getStoredTheme());

  // Set up toggle button after DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('theme-toggle');

    if (toggle) {
      toggle.addEventListener('click', function() {
        const currentTheme = getStoredTheme();
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        localStorage.setItem(THEME_KEY, newTheme);
        applyTheme(newTheme);
      });
    }
  });
})();
