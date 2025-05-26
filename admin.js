// admin.js
document.addEventListener("DOMContentLoaded", () => {
  const tabla = document.getElementById("tablaReservas");
  const reservas = JSON.parse(localStorage.getItem("reservas")) || [];

  if (reservas.length === 0) {
    tabla.innerHTML = `<p class="text-warning">No hay reservas registradas.</p>`;
    return;
  }

  let html = `
    <table class="table table-bordered table-hover table-dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Teléfono</th>
          <th>Fecha</th>
          <th>Hora</th>
          <th>Personas</th>
        </tr>
      </thead>
      <tbody>
  `;

  reservas.forEach((reserva, index) => {
    html += `
      <tr>
        <td>${index + 1}</td>
        <td>${reserva.nombre}</td>
        <td>${reserva.email}</td>
        <td>${reserva.telefono}</td>
        <td>${reserva.fecha}</td>
        <td>${reserva.hora}</td>
        <td>${reserva.personas}</td>
      </tr>
    `;
  });

  html += "</tbody></table>";
  tabla.innerHTML = html;
});
