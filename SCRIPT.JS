javascript
const boton = document.getElementById("modoBtn");

boton.addEventListener("click", () => {
  document.body.classList.toggle("modoOscuro");
});
