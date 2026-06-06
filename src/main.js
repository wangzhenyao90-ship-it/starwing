const app = document.querySelector('#app');
const languageStorageKey = 'starwing-language';
let currentLanguage = getInitialLanguage();

function getInitialLanguage() {
  const requestedLanguage = new URLSearchParams(window.location.search).get('lang');
  if (requestedLanguage && siteContent[requestedLanguage]) return requestedLanguage;

  try {
    const savedLanguage = localStorage.getItem(languageStorageKey);
    if (savedLanguage && siteContent[savedLanguage]) return savedLanguage;
  } catch (error) {
    // Some browsers restrict storage for local files.
  }

  return navigator.language && navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

function updatePageMetadata(content) {
  document.documentElement.lang = content.meta.lang;
  document.title = content.meta.title;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute('content', content.meta.description);
}

function renderSite(language, preserveScroll = false) {
  const content = siteContent[language] || siteContent.en;
  const scrollPosition = window.scrollY;
  currentLanguage = language;
  updatePageMetadata(content);

  app.innerHTML = [
    Header(content, language),
    Hero(content),
    ProductShowcase(content),
    BusinessSection(content),
    AdvantageSection(content),
    ServiceSection(content),
    IndustrySection(content),
    AboutSection(content),
    ContactSection(content),
    Footer(content)
  ].join('');

  bindInteractions(content);

  try {
    localStorage.setItem(languageStorageKey, language);
  } catch (error) {
    // The language still works for this session when storage is unavailable.
  }

  if (preserveScroll) {
    requestAnimationFrame(() => window.scrollTo({ top: scrollPosition, behavior: 'auto' }));
  }
}

function bindInteractions(content) {
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if (menuBtn && navLinks) {
    const setMenuOpen = isOpen => {
      navLinks.classList.toggle('open', isOpen);
      menuBtn.setAttribute('aria-expanded', String(isOpen));
      menuBtn.setAttribute('aria-label', isOpen ? content.header.closeMenu : content.header.openMenu);
    };

    menuBtn.addEventListener('click', () => {
      setMenuOpen(!navLinks.classList.contains('open'));
    });
    navLinks.addEventListener('click', event => {
      if (event.target.closest('a')) setMenuOpen(false);
    });
  }

  const languageSwitch = document.querySelector('.language-switch');
  if (languageSwitch) {
    languageSwitch.addEventListener('click', () => {
      const nextLanguage = languageSwitch.dataset.language;
      try {
        const url = new URL(window.location.href);
        url.searchParams.set('lang', nextLanguage);
        history.replaceState(null, '', url);
      } catch (error) {
        // Language switching does not depend on URL updates.
      }
      renderSite(nextLanguage, true);
    });
  }

  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      alert(content.contact.form.success);
      event.target.reset();
    });
  }
}

document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if (!menuBtn || !navLinks) return;
  navLinks.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
  menuBtn.setAttribute('aria-label', siteContent[currentLanguage].header.openMenu);
});

renderSite(currentLanguage);
