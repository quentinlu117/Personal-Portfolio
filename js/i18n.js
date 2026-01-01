// i18n.js - Système de traduction pour quentinlu.fr

const translations = {
  fr: {
    // Nav
    "nav.work": "Projets",
    "nav.about": "À propos",
    "nav.contact": "Contact",
    "nav.available": "Disponible",
    "nav.available.long": "Disponible",

    // Hero
    "hero.hello": "Bonjour, moi c'est Quentin 🤙",
    "hero.title": "Designer Ux/Ui",
    "hero.subtitle": "depuis plus de 5 ans",
    "hero.cta": "Contact",

    // Projects section
    "projects.badge": "🚀 Featured Work • 2020 - 2024",
    "projects.title.prefix": "Mes derniers ",
    "projects.title": "projets",
    "projects.dribbble": "En voir plus sur Dribbble",

    // Project cards
    "project.edf.tag": "Ux Ui Design",
    "project.edf.title": "Espace Client Photovoltaïque",
    "project.kurso.tag": "Branding — Ux Ui Design",
    "project.kurso.title": "Kurso App",
    "project.serenisia.tag": "Webapp",
    "project.serenisia.title": "Logiciel Serenisia",
    "project.butterfly.tag": "Webapp",
    "project.butterfly.title": "Logiciel Butterfly",

    // About section
    "about.badge": "👨‍💻 About Me — Quentin Luylier",
    "about.title.prefix": "Je suis Product designer ",
    "about.title": "passionné par la création de produits numériques.",
    "about.description": "Au cours des 5 dernières années, j'ai travaillé sur de nombreux projets dans de nombreux secteurs, des applications mobiles aux produits web. Je traduis les idées en solutions efficaces et bien conçues. Mon approche du design est basée sur la recherche et la collaboration. J'essaie toujours de concevoir des produits et interfaces innovants. Je suis passionné par le design et j'aime apprendre constamment de nouvelles choses !",

    // Stats
    "stats.years.label": "Années d'expériences",
    "stats.clients.label": "Clients",
    "stats.projects.label": "Projets terminés",
    "stats.hours.label": "Heures de design",

    // Career section
    "career.badge": "💼 Carrière",
    "career.title.prefix": "Petit récap de ",
    "career.title": "mon Expérience",
    "career.cv": "Voir mon CV complet",

    // Job titles
    "job.lachouette.title": "Lead Ux/Ui Designer",
    "job.ripple.title": "Designer Ux/Ui",
    "job.9h.title": "Designer Ux/Ui (Stage Erasmus)",
    "job.awsmd.title": "Designer Ux/Ui (Stage Erasmus)",
    "job.zandko.title": "Graphic / Web Designer (Stage)",

    // Contact section
    "contact.badge": "🤝 Contact",
    "contact.title.prefix": "Vous souhaitez que l'on ",
    "contact.title": "travaille ensemble ?",
    "contact.description": "N'hésitez pas à me contacter pour parler d'un projet professionnel, d'une collaboration ou simplement dire bonjour 👋",
    "contact.copy": "Copier",
    "contact.copied": "Copié !",

    // Footer
    "footer.rights": "2024 © Quentin Luylier — Tous droits réservés."
  },

  en: {
    // Nav
    "nav.work": "Work",
    "nav.about": "About",
    "nav.contact": "Let's Talk",
    "nav.available": "Available",
    "nav.available.long": "Available for work",

    // Hero
    "hero.hello": "Hello, I'm Quentin 🤙",
    "hero.title": "Ux/Ui Designer",
    "hero.subtitle": "for over 5 years",
    "hero.cta": "Contact",

    // Projects section
    "projects.badge": "🚀 Featured Work • 2020 - 2024",
    "projects.title.prefix": "My latest ",
    "projects.title": "projects",
    "projects.dribbble": "See more on Dribbble",

    // Project cards
    "project.edf.tag": "UX UI Design",
    "project.edf.title": "Photovoltaic Customer Portal",
    "project.kurso.tag": "Branding — UX UI Design",
    "project.kurso.title": "Kurso App",
    "project.serenisia.tag": "Webapp",
    "project.serenisia.title": "Serenisia Software",
    "project.butterfly.tag": "Webapp",
    "project.butterfly.title": "Butterfly Software",

    // About section
    "about.badge": "👨‍💻 About Me — Quentin Luylier",
    "about.title.prefix": "I'm a Product Designer ",
    "about.title": "passionate about creating digital products.",
    "about.description": "Over the past 5 years, I've worked on numerous projects across various industries, from mobile apps to web products. I translate ideas into effective, well-designed solutions. My approach to design is based on research and collaboration. I always strive to create innovative products and interfaces. I'm passionate about design and love constantly learning new things!",

    // Stats
    "stats.years.label": "Years of experience",
    "stats.clients.label": "Clients",
    "stats.projects.label": "Completed projects",
    "stats.hours.label": "Hours of design",

    // Career section
    "career.badge": "💼 Career",
    "career.title.prefix": "A quick look at ",
    "career.title": "my Experience",
    "career.cv": "View my full resume",

    // Job titles
    "job.lachouette.title": "Lead UX/UI Designer",
    "job.ripple.title": "UX/UI Designer",
    "job.9h.title": "UX/UI Designer (Erasmus Internship)",
    "job.awsmd.title": "UX/UI Designer (Erasmus Internship)",
    "job.zandko.title": "Graphic / Web Designer (Internship)",

    // Contact section
    "contact.badge": "🤝 Contact",
    "contact.title.prefix": "Want to ",
    "contact.title": "work together?",
    "contact.description": "Feel free to reach out to discuss a project, collaboration, or just to say hello 👋",
    "contact.copy": "Copy",
    "contact.copied": "Copied!",

    // Footer
    "footer.rights": "2024 © Quentin Luylier — All rights reserved."
  }
};

const langLabels = {
  fr: 'FR',
  en: 'EN'
};

// Récupère la langue sauvegardée ou détecte celle du navigateur
function getInitialLanguage() {
  const saved = localStorage.getItem('portfolio-lang');
  if (saved) return saved;

  const browserLang = navigator.language.slice(0, 2);
  return browserLang === 'fr' ? 'fr' : 'en';
}

// Applique les traductions à tous les éléments avec data-i18n
function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // Met à jour les toggles desktop
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Met à jour les items dropdown mobile
  document.querySelectorAll('.lang-dropdown-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Met à jour le label du dropdown mobile
  const currentLabel = document.querySelector('.lang-current');
  if (currentLabel) {
    currentLabel.textContent = langLabels[lang];
  }

  // Met à jour l'attribut lang du HTML
  document.documentElement.lang = lang;

  // Met à jour le lien du CV selon la langue
  const cvLink = document.getElementById('cv-link');
  if (cvLink) {
    cvLink.href = lang === 'fr'
      ? 'elements/FR_CV_QL_2026.pdf'
      : 'elements/EN_RESUME_QL_2026.pdf';
  }

  // Met à jour les liens vers les projets selon la langue
  updateProjectLinks(lang);
}

// Met à jour les liens des projets (FR ↔ EN)
function updateProjectLinks(lang) {
  const projectLinks = document.querySelectorAll('a[href$=".html"]');

  projectLinks.forEach(link => {
    let href = link.getAttribute('href');

    // Ignore les liens externes et index.html
    if (href.startsWith('http') || href.startsWith('index.html') || href.startsWith('#')) {
      return;
    }

    // Récupère le nom du fichier (ex: "kurso.html" ou "en/kurso.html")
    const isEnglishLink = href.startsWith('en/');
    const fileName = isEnglishLink ? href.replace('en/', '') : href;

    if (lang === 'en' && !isEnglishLink) {
      // FR → EN : ajoute en/
      link.setAttribute('href', 'en/' + fileName);
    } else if (lang === 'fr' && isEnglishLink) {
      // EN → FR : retire en/
      link.setAttribute('href', fileName);
    }
  });
}

// Change la langue
function setLanguage(lang) {
  localStorage.setItem('portfolio-lang', lang);
  applyTranslations(lang);

  // Ferme le dropdown après sélection
  const switcher = document.querySelector('.lang-switcher');
  if (switcher) {
    switcher.classList.remove('open');
  }
}

// Toggle le dropdown mobile
function toggleDropdown() {
  const switcher = document.querySelector('.lang-switcher');
  if (switcher) {
    switcher.classList.toggle('open');
    const toggle = switcher.querySelector('.lang-dropdown-toggle');
    if (toggle) {
      toggle.setAttribute('aria-expanded', switcher.classList.contains('open'));
    }
  }
}

// Ferme le dropdown si on clique ailleurs
function handleClickOutside(event) {
  const switcher = document.querySelector('.lang-switcher');
  if (switcher && !switcher.contains(event.target)) {
    switcher.classList.remove('open');
    const toggle = switcher.querySelector('.lang-dropdown-toggle');
    if (toggle) {
      toggle.setAttribute('aria-expanded', 'false');
    }
  }
}

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', () => {
  const initialLang = getInitialLanguage();
  applyTranslations(initialLang);

  // Écoute les clics sur les toggles desktop
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
    });
  });

  // Écoute le clic sur le bouton dropdown mobile
  const dropdownToggle = document.querySelector('.lang-dropdown-toggle');
  if (dropdownToggle) {
    dropdownToggle.addEventListener('click', toggleDropdown);
  }

  // Écoute les clics sur les items du dropdown
  document.querySelectorAll('.lang-dropdown-item').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
    });
  });

  // Ferme le dropdown si on clique ailleurs
  document.addEventListener('click', handleClickOutside);
});
