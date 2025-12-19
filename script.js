const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  const isLight = document.documentElement.getAttribute("data-theme") === "light";

  if (isLight) {
    document.documentElement.removeAttribute("data-theme");
    toggleBtn.textContent = "🌙";
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    toggleBtn.textContent = "☀️";
  }
});

// Accent color picker
document.getElementById("accentPicker").addEventListener("input", (e) => {
  document.documentElement.style.setProperty("--accent", e.target.value);
});