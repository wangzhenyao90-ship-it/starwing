function Hero(content) {
  const hero = content.hero;
  return `
    <section class="hero" id="hero">
      <div class="hero-bg"></div>
      <div class="hero-shell reveal">
        <div class="hero-copy">
          <div class="hero-kicker">${hero.kicker}</div>
          <h1>${hero.title}<br><span>${hero.highlight}</span></h1>
          <p class="hero-desc">${hero.description}</p>
          <div class="hero-tags">
            ${hero.tags.map(tag => `<span>${tag}</span>`).join('')}
          </div>
          <div class="hero-actions">
            <a class="btn primary" href="#products">${hero.primaryAction}</a>
            <a class="btn ghost" href="#contact">${hero.secondaryAction}</a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="hero-visual-title">${hero.visualTitle}</div>
          <div class="hero-visual-grid">
            ${hero.products.map(item => `
              <article class="hero-mini-card">
                <div class="hero-mini-image" style="background-image:url('${item.image}')"></div>
                <div class="hero-mini-label">${item.label}</div>
              </article>
            `).join('')}
          </div>
        </div>
      </div>
      <div class="hero-stats reveal">
        ${hero.stats.map(item => `
          <div class="stat-card">
            <strong>${item.value}</strong>
            <span>${item.label}</span>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}
