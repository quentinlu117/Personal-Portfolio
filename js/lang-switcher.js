// lang-switcher.js - Gestion du toggle de langue pour les pages statiques (projets)
// Ce script gère uniquement la navigation entre versions FR/EN

document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname;
  const isEnglish = currentPath.includes('/en/');
  const currentLang = isEnglish ? 'en' : 'fr';

  // Met à jour l'état actif des toggles
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });

  document.querySelectorAll('.lang-dropdown-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });

  // Met à jour le label du dropdown mobile
  const currentLabel = document.querySelector('.lang-current');
  if (currentLabel) {
    currentLabel.textContent = currentLang.toUpperCase();
  }

  // Gestion du clic sur les toggles
  document.querySelectorAll('.lang-toggle, .lang-dropdown-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLang = btn.dataset.lang;
      if (targetLang === currentLang) return;

      // Construit l'URL relative pour la version alternative
      let newPath;
      const fileName = currentPath.split('/').pop(); // ex: "kurso.html"

      if (targetLang === 'en' && !isEnglish) {
        // FR → EN : ajoute /en/ avant le fichier
        newPath = currentPath.replace(fileName, 'en/' + fileName);
      } else if (targetLang === 'fr' && isEnglish) {
        // EN → FR : retire /en/
        newPath = currentPath.replace('/en/', '/');
      }

      if (newPath) {
        window.location.href = newPath;
      }
    });
  });

  // Toggle dropdown mobile
  const dropdownToggle = document.querySelector('.lang-dropdown-toggle');
  const switcher = document.querySelector('.lang-switcher');

  if (dropdownToggle && switcher) {
    dropdownToggle.addEventListener('click', () => {
      switcher.classList.toggle('open');
      dropdownToggle.setAttribute('aria-expanded', switcher.classList.contains('open'));
    });

    // Ferme le dropdown si on clique ailleurs
    document.addEventListener('click', (event) => {
      if (!switcher.contains(event.target)) {
        switcher.classList.remove('open');
        dropdownToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
});
