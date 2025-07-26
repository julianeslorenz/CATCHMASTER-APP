const translations = {
  en: {
    welcome: "Welcome!",
    searchFisherfolks: "Search for Fisherfolks",
    categories: "CATEGORIES",
    scanFish: "Scan Fish Catch",
    addFish: "Add Fish Catch",
    viewSummary: "View Catch Summary",
    viewSpecies: "View Fish Species",
    recentCatches: "Recents Fish Catch",
    fishCatch: "Fish Catch",
    viewHistory: "View History",
    me: "Me"
  },
  fil: {
    welcome: "Maligayang Pagdating!",
    searchFisherfolks: "Maghanap ng mga Mangingisda",
    categories: "MGA KATEGORYA",
    scanFish: "I-scan ang Huli",
    addFish: "Magdagdag ng Huli",
    viewSummary: "Tingnan ang Buod ng Huli",
    viewSpecies: "Tingnan ang Mga Uri ng Isda",
    recentCatches: "Mga Kamakailang Huli",
    fishCatch: "Huli ng Isda",
    viewHistory: "Tingnan ang Kasaysayan",
    me: "Ako"
  }
};

function applyLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  localStorage.setItem("language", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("language") || "en";
  applyLanguage(savedLang);
  const langSelect = document.getElementById("langSelect");
  if (langSelect) {
    langSelect.value = savedLang;
    langSelect.addEventListener("change", e => applyLanguage(e.target.value));
  }
});
