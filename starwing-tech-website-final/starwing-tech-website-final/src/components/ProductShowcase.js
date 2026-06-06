function ProductShowcase(content) {
  const products = content.products;
  return `
    <section class="section product-showcase" id="products">
      <div class="section-title reveal">
        <span>${products.eyebrow}</span>
        <h2>${products.title}</h2>
        <p>${products.description}</p>
      </div>
      <div class="product-grid">
        ${products.items.map(item => `
          <article class="product-card reveal">
            <div class="product-image-wrap">
              <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="product-body">
              <h3>${item.title}</h3>
              <p>${item.desc}</p>
            </div>
          </article>
        `).join('')}
      </div>
    </section>
  `;
}
