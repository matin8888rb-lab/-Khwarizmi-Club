(() => {
  const pages = [...document.querySelectorAll(".page")];
  const nav = document.querySelector(".desktop-nav");
  const menuToggle = document.getElementById("menuToggle");
  function showPage() {
    const id = (location.hash || "#home").slice(1);
    const page = pages.find(p => p.id === id) || pages[0];
    pages.forEach(p => p.classList.toggle("active", p === page));
    if (!pages.some(p => p.id === id)) history.replaceState(null, "", "#home");
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    window.scrollTo({top:0,behavior:"instant"});
  }
  window.addEventListener("hashchange", showPage);
  showPage();
  menuToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });
  const langToggle = document.getElementById("langToggle");
  let language = "en";
  langToggle.addEventListener("click", () => {
    language = language === "en" ? "fa" : "en";
    document.documentElement.lang = language;
    document.body.dir = language === "fa" ? "rtl" : "ltr";
    document.querySelectorAll("[data-en][data-fa]").forEach(el => {
      el.innerHTML = el.dataset[language];
    });
    langToggle.textContent = language === "en" ? "FA / EN" : "EN / FA";
  });
  const options = [...document.querySelectorAll(".quiz-option")];
  const feedback = document.getElementById("quizFeedback");
  options.forEach(option => option.addEventListener("click", () => {
    options.forEach(o => { o.disabled = true; o.classList.remove("correct","wrong"); });
    if (option.dataset.answer === "since") {
      option.classList.add("correct");
      feedback.textContent = "Exactly! Use “since” with a starting point in time: since 2022.";
    } else {
      option.classList.add("wrong");
      options.find(o => o.dataset.answer === "since").classList.add("correct");
      feedback.textContent = "Not quite. “Since” introduces the point when something began.";
    }
  }));
  document.getElementById("resetQuiz").addEventListener("click", () => {
    options.forEach(o => { o.disabled = false; o.classList.remove("correct","wrong"); });
    feedback.textContent = "One answer is correct. Trust what you know.";
  });
  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
  }
})();