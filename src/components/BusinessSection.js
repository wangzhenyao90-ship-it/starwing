function BusinessSection(content) {
  const business = content.business;
  return `
    <section class="section business" id="business">
      <div class="section-title reveal">
        <span>${business.eyebrow}</span>
        <h2>${business.title}</h2>
        <p>${business.description}</p>
      </div>
      <div class="business-stack">
        ${business.items.map((item, index) => `
          <article class="business-row reveal ${index % 2 ? 'reverse' : ''}">
            <div class="business-visual">
              <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="business-content">
              <span class="business-subtitle">${item.subtitle}</span>
              <h3>${item.title}</h3>
              <p class="business-intro">${item.intro}</p>
              <div class="tag-list">
                ${item.tags.map(tag => `<span>${tag}</span>`).join('')}
              </div>
              <ul class="business-list">
                ${item.items.map(text => `<li>${text}</li>`).join('')}
              </ul>
            </div>
          </article>
        `).join('')}
      </div>
    </section>
  `;
}
