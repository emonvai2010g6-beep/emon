document.getElementById("year").textContent = new Date().getFullYear();
if ("serviceWorker" in navigator && location.protocol.startsWith("https")) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
}
