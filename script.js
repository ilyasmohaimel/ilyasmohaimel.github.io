const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const languageToggle = document.querySelector("[data-language-toggle]");
const translatable = document.querySelectorAll("[data-en][data-fr]");

const setLanguage = (language) => {
  const activeLanguage = language === "fr" ? "fr" : "en";

  document.documentElement.lang = activeLanguage;
  localStorage.setItem("portfolio-language", activeLanguage);

  for (const item of translatable) {
    const value = item.dataset[activeLanguage];
    if (!value) continue;

    if (item.hasAttribute("data-i18n-html")) {
      item.innerHTML = value;
    } else {
      item.textContent = value;
    }
  }

  if (languageToggle) {
    languageToggle.textContent = activeLanguage === "fr" ? "EN" : "FR";
    languageToggle.setAttribute(
      "aria-label",
      activeLanguage === "fr" ? "Switch to English" : "Switch to French"
    );
  }
};

setLanguage(localStorage.getItem("portfolio-language") || "en");

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    const nextLanguage = document.documentElement.lang === "fr" ? "en" : "fr";
    setLanguage(nextLanguage);
  });
}

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      document.body.classList.remove("nav-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

const homeLinks = document.querySelectorAll('a[href="#home"]');

for (const link of homeLinks) {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    document.body.classList.remove("nav-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

const revealTargets = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12 }
  );

  for (const item of revealTargets) {
    observer.observe(item);
  }
} else {
  for (const item of revealTargets) {
    item.classList.add("is-visible");
  }
}
