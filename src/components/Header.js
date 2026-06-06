function Header(content, language) {
  const links = content.navigation.map(item => `<a href="#${item.target}">${item.label}</a>`).join('');
  const nextLanguage = language === 'zh' ? 'en' : 'zh';
  return `
    <header class="site-header">
      <div class="brand">
        <img src="figs/logo-starwing.svg" alt="${content.brand.logoAlt}">
        <div>
          <strong>${content.brand.name}</strong>
          <span>${content.brand.subtitle}</span>
        </div>
      </div>
      <nav class="nav-links" id="site-navigation">${links}</nav>
      <a class="header-cta" href="#contact">${content.header.consult}</a>
      <button class="language-switch" type="button" data-language="${nextLanguage}" aria-label="${content.header.languageAria}">${content.header.languageLabel}</button>
      <button class="menu-btn" type="button" aria-label="${content.header.openMenu}" aria-expanded="false" aria-controls="site-navigation">☰</button>
    </header>
  `;
}
