function Footer(content) {
  return `
    <footer class="footer">
      <p>${content.footer.copyright}</p>
      <a href="#hero">${content.footer.backToTop}</a>
    </footer>
  `;
}
