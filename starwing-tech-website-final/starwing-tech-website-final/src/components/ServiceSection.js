function ServiceSection(content) {
  const services = content.services;
  return `
    <section class="section services" id="services">
      <div class="section-title reveal">
        <span>${services.eyebrow}</span>
        <h2>${services.title}</h2>
        <p>${services.description}</p>
      </div>
      <div class="service-grid">
        ${services.items.map(item => `
          <article class="service-card reveal">
            <div class="service-icon">${item.icon}</div>
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
          </article>
        `).join('')}
      </div>
      <div class="process-panel reveal">
        <div class="process-title">
          <span>${services.processEyebrow}</span>
          <h3>${services.processTitle}</h3>
        </div>
        <div class="process-line">
          ${services.process.map((item, index) => `
            <div class="process-step">
              <span>${index + 1}</span>
              <p>${item}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
