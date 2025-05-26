// script.js
document.addEventListener("DOMContentLoaded", () => {
  const modal = new bootstrap.Modal(document.getElementById("modalPlato"));
  const titulo = document.getElementById("modalPlatoLabel");
  const descripcion = document.getElementById("modalDescripcion");
  const imagen = document.getElementById("modalImg");
  const receta = document.getElementById("modalReceta");
  const textoReceta = document.getElementById("textoReceta");
  const btnVerReceta = document.getElementById("btnVerReceta");

  // Recetas por nombre de plato
  const recetas = {
    "Asado": "Marinar los cortes con sal gruesa. Asar a fuego lento por al menos 1 hora por lado. Acompañar con chimichurri.",
    "Empanadas": "Preparar masa y rellenar con carne, huevo, cebolla y aceitunas. Cerrar y hornear a 180°C hasta dorar.",
    "Milanesa": "Pasar la carne por huevo batido y pan rallado. Freír en aceite caliente hasta dorar.",
    "Locro": "Cocinar maíz, porotos y zapallo junto con cortes de carne y chorizo. Hervir lentamente por 2-3 horas.",
    "Choripán": "Asar el chorizo, cortar el pan y agregar chimichurri. Servir caliente.",
    "Alfajores": "Unir tapas con dulce de leche. Pasar por coco rallado o bañar en chocolate.",
    "Dulce de Leche": "Cocer leche y azúcar revolviendo constantemente por horas hasta caramelizar.",
    "Flan con Dulce de Leche": "Preparar con huevos, leche y azúcar. Hornear a baño maría. Servir con dulce de leche.",
    "Mate": "Llenar un mate con yerba, agregar agua caliente (no hervida) y cebar lentamente.",
    "Vino Malbec": "Servir a 16-18°C, ideal para carnes rojas y platos intensos. Vino típico de Mendoza."
  };

  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      const nombre = card.querySelector(".card-title").innerText;
      const texto = card.querySelector(".card-text").innerText;
      const src = card.querySelector("img").getAttribute("src");

      titulo.innerText = nombre;
      descripcion.innerText = texto;
      imagen.setAttribute("src", src);
      imagen.setAttribute("alt", nombre);

      // Ocultar receta hasta que se pida
      receta.classList.add("d-none");
      textoReceta.innerText = recetas[nombre] || "Pronto agregaremos esta receta.";

      modal.show();
    });
  });

  btnVerReceta.addEventListener("click", () => {
    receta.classList.toggle("d-none");
  });
});
