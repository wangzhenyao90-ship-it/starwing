function ContactSection(content) {
  const contact = content.contact;
  return `
    <section class="section contact" id="contact">
      <div class="contact-shell reveal">
        <div class="contact-card contact-info-card">
          <span class="section-kicker">${contact.eyebrow}</span>
          <h2>${contact.title}</h2>
          <p>${contact.description}</p>
          <ul class="contact-list">
            <li><strong>${contact.labels.phone}</strong>${contact.info.phone}</li>
            <li><strong>${contact.labels.email}</strong>${contact.info.email}</li>
            <li><strong>${contact.labels.address}</strong>${contact.info.address}</li>
            <li><strong>${contact.labels.website}</strong>${contact.info.website}</li>
          </ul>
          <div class="qr-box">
            <img src="${contact.info.qr}" alt="${contact.qrAlt}">
            <div>
              <strong>${contact.qrTitle}</strong>
              <p>${contact.qrDescription}</p>
            </div>
          </div>
        </div>
        <div class="contact-card">
          <form class="contact-form">
            <input name="name" autocomplete="name" placeholder="${contact.form.name}" required>
            <input name="company" autocomplete="organization" placeholder="${contact.form.company}">
            <input name="phone" autocomplete="tel" placeholder="${contact.form.phone}" required>
            <select name="requirement">
              <option value="">${contact.form.requirement}</option>
              ${contact.form.options.map(option => `<option>${option}</option>`).join('')}
            </select>
            <textarea name="details" placeholder="${contact.form.details}"></textarea>
            <button type="submit">${contact.form.submit}</button>
          </form>
        </div>
      </div>
    </section>
  `;
}
