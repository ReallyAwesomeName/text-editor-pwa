// Logic for installing the PWA

const butInstall = document.getElementById("buttonInstall");

// event handler for `beforeinstallprompt`
window.addEventListener("beforeinstallprompt", (event) => {
  window.installPrompt = event;
  butInstall.style.display = "block";
  butInstall.textContent = "Install";
});

// event handler for `butInstall`
butInstall.addEventListener("click", async () => {
  const result = window.installPrompt;
  result.prompt();
  window.installPrompt = null;
  butInstall.style.display = "none";
});

// event handler for `appinstalled`
window.addEventListener("appinstalled", (event) => {
  window.installPrompt = null;
});
