// script.js
<script>
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formReserva");
  const mensaje = document.getElementById("mensajeConfirmacion");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Capturar datos del formulario
    const reserva = {
      nombre: document.getElementById("nombre").value.trim(),
      email: document.getElementById("email").value.trim(),
      telefono: document.getElementById("telefono").value.trim(),
      fecha: document.getElementById("fecha").value,
      hora: document.getElementById("hora").value,
      personas: document.getElementById("personas").value
    };

    // Validar que todos los campos estén llenos
    if (Object.values(reserva).some(campo => campo === "")) {
      alert("Por favor, completá todos los campos.");
      return;
    }

    // Guardar reserva en localStorage
    const reservasGuardadas = JSON.parse(localStorage.getItem("reservas")) || [];
    reservasGuardadas.push(reserva);
    localStorage.setItem("reservas", JSON.stringify(reservasGuardadas));

    // Mostrar mensaje y resetear formulario
    mensaje.classList.remove("d-none");
    form.reset();
  });
});
</script>
