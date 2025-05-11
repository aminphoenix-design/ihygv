document.addEventListener("DOMContentLoaded", () => {
  const fenix = document.querySelector(".simbolo-fenix");
  const music = document.getElementById("bg-music");

  fenix.addEventListener("click", () => {
    // Oculta el umbral
    document.getElementById("umbral").classList.remove("activa");

    // Muestra la siguiente sección
    document.getElementById("cenizas").classList.add("activa");

    // Reproduce la música
    music.play().catch((e) => {
      console.warn("No se pudo reproducir el audio automáticamente:", e);
    });
  });
});
