function IndustrySection(content) {
  const industries = content.industries;
  return `
    <section class="section industries" id="industries">
      <div class="section-title reveal">
        <span>${industries.eyebrow}</span>
        <h2>${industries.title}</h2>
        <p>${industries.description}</p>
      </div>
      <div class="industry-grid">
        ${industries.items.map(item => `
          <article class="industry-card reveal">
            <div class="industry-icon">${item.icon}</div>
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
          </article>
        `).join('')}
      </div>
    </section>
  `;
}
