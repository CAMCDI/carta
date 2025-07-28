// Cuando haces clic en el sobre, se abre
document.getElementById("envelope").addEventListener("click", () => {
  document.getElementById("envelope").classList.add("open");
});

// Botón de mensaje secreto
document.getElementById("secretBtn").addEventListener("click", (e) => {
  e.stopPropagation(); // Evita que se vuelva a cerrar accidentalmente
  document.getElementById("secretMessage").style.display = "block";
});
