// Fichier : script.js
document.addEventListener("DOMContentLoaded", () => {
  const splash = document.querySelector(".splash");
  const mainContent = document.querySelector(".main-content");

  setTimeout(() => {
    splash.style.opacity = 0;
    setTimeout(() => {
      splash.style.display = "none";
      mainContent.style.display = "block";
    }, 1000);
  }, 3000);
});
