//admin.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formReserva");
  const mensaje = document.getElementById("mensajeConfirmacion");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Capturar los valores
      const nombre = document.getElementById("nombre").value.trim();
      const email = document.getElementById("email").value.trim();
      const telefono = document.getElementById("telefono").value.trim();
      const fecha = document.getElementById("fecha").value;
      const hora = document.getElementById("hora").value;
      const personas = document.getElementById("personas").value;

      // Validación básica
      if (!nombre || !email || !telefono || !fecha || !hora || !personas) {
        alert("Por favor, completá todos los campos.");
        return;
      }

      // Crear objeto reserva
      const nuevaReserva = {
        nombre,
        email,
        telefono,
        fecha,
        hora,
        personas
      };

      // Guardar en localStorage
      const reservas = JSON.parse(localStorage.getItem("reservas")) || [];
      reservas.push(nuevaReserva);
      localStorage.setItem("reservas", JSON.stringify(reservas));

      // Mostrar mensaje de confirmación
      mensaje.classList.remove("d-none");
      form.reset();

      // Ocultar el mensaje después de 3 segundos
      setTimeout(() => {
        mensaje.classList.add("d-none");
      }, 3000);
    });
  }
});
