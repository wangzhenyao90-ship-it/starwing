function AdvantageSection(content) {
  const advantages = content.advantages;
  return `
    <section class="section advantages" id="advantages">
      <div class="section-title reveal">
        <span>${advantages.eyebrow}</span>
        <h2>${advantages.title}</h2>
        <p>${advantages.description}</p>
      </div>
      <div class="advantage-grid">
        ${advantages.items.map(item => `
          <article class="adv-card reveal">
            <div class="adv-index">${item.index}</div>
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
            <ul>
              ${item.bullets.map(text => `<li>${text}</li>`).join('')}
            </ul>
          </article>
        `).join('')}
      </div>
    </section>
  `;
}
