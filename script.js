const form = document.querySelector("#lead-form");
const whatsappDestination = "5538984176478";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.reportValidity()) return;

  const formData = new FormData(form);
  const name = String(formData.get("name")).trim();
  const phone = String(formData.get("whatsapp")).trim();
  const email = String(formData.get("email")).trim();
  const message = [
    "Olá, Mateus! Quero receber minha estratégia gratuita.",
    "",
    `Nome: ${name}`,
    `WhatsApp: ${phone}`,
    `E-mail: ${email}`
  ].join("\n");

  const whatsappUrl = `https://api.whatsapp.com/send/?phone=${whatsappDestination}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
  window.location.assign(whatsappUrl);
});

document.querySelector("#current-year").textContent = new Date().getFullYear();

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal:not(.is-visible)").forEach((element) => revealObserver.observe(element));
