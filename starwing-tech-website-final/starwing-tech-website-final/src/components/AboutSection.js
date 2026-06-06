function AboutSection(content) {
  const about = content.about;
  return `
    <section class="section about" id="about">
      <div class="about-panel reveal">
        <div class="about-copy">
          <span class="section-kicker">${about.eyebrow}</span>
          <h2>${about.title}</h2>
          <p>${about.introBefore}<strong>${about.introStrong}</strong>${about.introAfter}</p>
          <ul class="about-points">
            ${about.points.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
        <div class="about-side">
          <div class="about-value-card">
            <small>${about.valuesLabel}</small>
            ${about.values.map(value => `<strong>${value}</strong>`).join('')}
          </div>
          <div class="about-value-card soft">
            <small>${about.visionLabel}</small>
            <p>${about.vision}</p>
          </div>
        </div>
      </div>
    </section>
  `;
}
