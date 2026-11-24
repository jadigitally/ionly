// Light/dark theme toggle. Pairs with the inline head script in each page
// (which applies any saved choice before first paint) and the data-theme
// CSS overrides in styles.css.
(function () {
  var STORAGE_KEY = "ionly-theme";
  var btn = document.getElementById("theme-toggle");
  if (!btn) return;

  function effectiveTheme() {
    var attr = document.documentElement.getAttribute("data-theme");
    if (attr === "light" || attr === "dark") return attr;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function updateLabel() {
    var theme = effectiveTheme();
    btn.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
  }

  updateLabel();

  // Keep the label in sync if the OS-level theme changes while no manual
  // choice has been made yet (the CSS media query already updates live).
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", updateLabel);

  btn.addEventListener("click", function () {
    var next = effectiveTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (e) {
      // Private browsing or storage disabled — the toggle still works for this page view.
    }
    updateLabel();
  });
})();
