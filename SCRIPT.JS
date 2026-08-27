const boton = document.getElementById("modoBtn");

// Inicia en modo claro
document.body.classList.add("light-mode");

boton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
});

