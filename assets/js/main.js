(function () {
  var KEY = "vd-theme";
  var root = document.documentElement;
  var mq = window.matchMedia("(prefers-color-scheme: dark)");

  function stored() {
    try { return localStorage.getItem(KEY) || "system"; } catch (e) { return "system"; }
  }
  function apply(mode) {
    var dark = mode === "dark" || (mode === "system" && mq.matches);
    root.setAttribute("data-theme", dark ? "dark" : "light");
    document.querySelectorAll("[data-theme-set]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-theme-set") === mode));
    });
  }

  apply(stored());
  mq.addEventListener("change", function () { if (stored() === "system") apply("system"); });
  document.querySelectorAll("[data-theme-set]").forEach(function (b) {
    b.addEventListener("click", function () {
      var m = b.getAttribute("data-theme-set");
      try { localStorage.setItem(KEY, m); } catch (e) {}
      apply(m);
    });
  });

  var btn = document.getElementById("menu-btn");
  var panel = document.getElementById("mobile-nav");
  if (btn && panel) {
    function set(open) {
      btn.setAttribute("aria-expanded", String(open));
      btn.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
      panel.classList.toggle("open", open);
    }
    btn.addEventListener("click", function () { set(btn.getAttribute("aria-expanded") !== "true"); });
    panel.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { set(false); }); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") set(false); });
  }

  // aktiven Menüpunkt beim Scrollen markieren (Einzelseite)
  var links = document.querySelectorAll(".nav a[href^='#']");
  if (links.length && "IntersectionObserver" in window) {
    var map = {};
    links.forEach(function (l) { map[l.getAttribute("href").slice(1)] = l; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && map[en.target.id]) {
          links.forEach(function (l) { l.classList.remove("active"); });
          map[en.target.id].classList.add("active");
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    Object.keys(map).forEach(function (id) { var el = document.getElementById(id); if (el) io.observe(el); });
  }
})();
