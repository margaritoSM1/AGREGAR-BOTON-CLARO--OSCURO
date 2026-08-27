const boton = document.getElementById("modoBtn");

// Por defecto inicia en modo oscuro
document.body.classList.add("dark-mode");

boton.addEventListener("click", () => {
  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
  } else {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
  }
});
