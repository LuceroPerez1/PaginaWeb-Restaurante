console.log("¡Mi archivo JavaScript está funcionando!");

document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("miFormulario");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    if (validarFormulario()) {
      mostrarMensajeAgradecimiento();
      redirigirANuevaPagina();
    } else {
      alert("Los datos son incorrectos. Por favor, revíselos y vuelva a intentarlo.");
    }
  });

  function validarFormulario() {
    const nombreInput = document.getElementById("Nombre");
    const emailInput = document.getElementsByName("email")[0];
    const telefonoInput = document.getElementById("TELEFONO");
    const estadoSelect = document.getElementById("select-estado");
    const mensajeTextarea = document.getElementById("MENSAJE");
    const regexSoloLetras = /^[A-Za-z\s]+$/;

    if (nombreInput.value.trim() === "" || !regexSoloLetras.test(nombreInput.value)) {
      alert("El campo Nombre debe contener solo letras mayúsculas y minúsculas.");
      return false;
    }

    if (emailInput.value.trim() === "" || !esCorreoValido(emailInput.value)) {
      alert("Ingresa un correo electrónico válido.");
      return false;
    }

    if (telefonoInput.value.trim() === "" || !esTelefonoValido(telefonoInput.value)) {
      alert("Ingresa un número de teléfono válido de 10 dígitos.");
      return false;
    }

    if (estadoSelect.value.trim() === "--Selecciona un estado--") {
      alert("Selecciona un estado.");
      return false;
    }

    if (mensajeTextarea.value.trim() === "") {
      alert("El campo Mensaje es obligatorio.");
      return false;
    }

    return true;
  }

  function esCorreoValido(correo) {
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexCorreo.test(correo);
  }

  function esTelefonoValido(telefono) {
    const regexTelefono = /^\d{10}$/;
    return regexTelefono.test(telefono);
  }

  function mostrarMensajeAgradecimiento() {
    alert("¡Gracias por enviar el formulario! Hemos recibido tus datos.");
  }

  function redirigirANuevaPagina() {
    // Redirige a una nueva página HTML
    window.location.href = "Pantalla1_CreacionUsuario.html";
  }
});

