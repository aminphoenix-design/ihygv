
document.addEventListener("DOMContentLoaded", () => {
  const fenix = document.querySelector(".simbolo-fenix");
  const music = document.getElementById("bg-music");
  fenix.addEventListener("click", () => {
    document.getElementById("umbral").classList.remove("activa");
    music.play();
    // Aquí iría la transición a la siguiente pantalla
  });
});
