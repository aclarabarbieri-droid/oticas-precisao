document.documentElement.lang = "pt-BR";
document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contact-text").textContent = SITE.contatoTexto;

const email = document.getElementById("contact-email");
email.textContent = SITE.email;
email.href = "mailto:" + SITE.email;

const instagram = document.getElementById("instagram");
instagram.href = SITE.instagram;

const list = document.getElementById("store-list");
SITE.lojas.forEach((loja) => {
  const card = document.createElement("article");
  card.className = "store-card";
  const whatsapp = loja.whatsapp
    ? `<a class="store-link" href="https://wa.me/${loja.whatsapp}" target="_blank" rel="noopener">WhatsApp ↗</a>`
    : "";
  card.innerHTML = `
    <p class="store-city">${loja.nome}</p>
    <p class="address">${loja.endereco}</p>
    <p class="hours">${loja.horario}</p>
    <div class="store-actions">
      ${whatsapp}
      <a class="store-link" href="${loja.mapa}" target="_blank" rel="noopener">Ver no mapa ↗</a>
    </div>
  `;
  list.appendChild(card);
});
