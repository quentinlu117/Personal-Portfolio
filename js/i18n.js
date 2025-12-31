// i18n.js - Système de traduction pour quentinlu.fr

const translations = {
  fr: {
    // Nav
    "nav.work": "Work",
    "nav.about": "About",
    "nav.contact": "Let's Talk",
    "nav.available": "Available",

    // Hero
    "hero.hello": "Hello, moi c'est Quentin 🤙",
    "hero.title": "Product Designer depuis plus de 5 ans",
    "hero.cta": "Contact",

    // Projects section
    "projects.badge": "🚀 Featured Work • 2020 - 2024",
    "projects.title": "Mes derniers projets",
    "projects.dribbble": "En voir plus sur Dribbble",
    "projects.figma": "\"Figmaster\"",

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
    "about.title": "Je suis Product designer passionné par la création de produits numériques.",
    "about.description": "Au cours des 5 dernières années, j'ai travaillé sur de nombreux projets dans de nombreux secteurs, des applications mobiles aux produits web. Je traduis les idées en solutions efficaces et bien conçues. Mon approche du design est basée sur la recherche et la collaboration. J'essaie toujours de concevoir des produits et interfaces innovants. Je suis passionné par le design et j'aime apprendre constamment de nouvelles choses !",
    
    // Stats
    "stats.years.label": "Années d'expériences",
    "stats.years.value": "5+",
    "stats.clients.label": "Clients",
    "stats.clients.value": "20+",
    "stats.projects.label": "Projets terminés",
    "stats.projects.value": "30+",
    "stats.hours.label": "Heures de design",
    "stats.hours.value": "10 000+",

    // Career section
    "career.badge": "💼 Carrière",
    "career.title": "Petit récap de mon Expérience",
    "career.cv": "Voir mon CV complet",

    // Job titles
    "job.lachouette.title": "Lead Ux/Ui Designer",
    "job.ripple.title": "Designer Ux/Ui",
    "job.9h.title": "Designer Ux/Ui (Stage Erasmus)",
    "job.awsmd.title": "Designer Ux/Ui (Stage Erasmus)",
    "job.zandko.title": "Graphic / Web Designer (Stage)",

    // Contact section
    "contact.badge": "🤝 Contact",
    "contact.title": "Vous souhaitez que l'on travaille ensemble ?",
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

    // Hero
    "hero.hello": "Hello, I'm Quentin 🤙",
    "hero.title": "Product Designer for over 5 years",
    "hero.cta": "Contact",

    // Projects section
    "projects.badge": "🚀 Featured Work • 2020 - 2024",
    "projects.title": "My latest projects",
    "projects.dribbble": "See more on Dribbble",
    "projects.figma": "\"Figmaster\"",

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
    "about.title": "I'm a Product Designer passionate about creating digital products.",
    "about.description": "Over the past 5 years, I've worked on numerous projects across various industries, from mobile apps to web products. I translate ideas into effective, well-designed solutions. My approach to design is based on research and collaboration. I always strive to create innovative products and interfaces. I'm passionate about design and love constantly learning new things!",
    
    // Stats
    "stats.years.label": "Years of experience",
    "stats.years.value": "5+",
    "stats.clients.label": "Clients",
    "stats.clients.value": "20+",
    "stats.projects.label": "Completed projects",
    "stats.projects.value": "30+",
    "stats.hours.label": "Hours of design",
    "stats.hours.value": "10,000+",

    // Career section
    "career.badge": "💼 Career",
    "career.title": "A quick overview of my Experience",
    "career.cv": "View my full resume",

    // Job titles
    "job.lachouette.title": "Lead UX/UI Designer",
    "job.ripple.title": "UX/UI Designer",
    "job.9h.title": "UX/UI Designer (Erasmus Internship)",
    "job.awsmd.title": "UX/UI Designer (Erasmus Internship)",
    "job.zandko.title": "Graphic / Web Designer (Internship)",

    // Contact section
    "contact.badge": "🤝 Contact",
    "contact.title": "Want to work together?",
    "contact.description": "Feel free to reach out to discuss a project, collaboration, or just to say hello 👋",
    "contact.copy": "Copy",
    "contact.copied": "Copied!",

    // Footer
    "footer.rights": "2024 © Quentin Luylier — All rights reserved."
  }
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

  // Met à jour les attributs data-i18n-attr (pour placeholder, title, etc.)
  document.querySelectorAll('[data-i18n-attr]').forEach(element => {
    const config = element.getAttribute('data-i18n-attr');
    const [attr, key] = config.split(':');
    if (translations[lang] && translations[lang][key]) {
      element.setAttribute(attr, translations[lang][key]);
    }
  });

  // Met à jour le toggle actif
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Met à jour l'attribut lang du HTML
  document.documentElement.lang = lang;
}

// Change la langue
function setLanguage(lang) {
  localStorage.setItem('portfolio-lang', lang);
  applyTranslations(lang);
}

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', () => {
  const initialLang = getInitialLanguage();
  applyTranslations(initialLang);

  // Écoute les clics sur les toggles de langue
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
    });
  });
});
