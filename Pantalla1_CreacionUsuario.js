document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");
  const nombreInput = document.getElementById("nombre");
  const apellidoInput = document.getElementById("apellido");
  const telefonoInput = document.getElementById("telefono");
  const correoInput = document.getElementById("correo"); 
  const contrasenaInput = document.getElementById("contraseña");
  const confirmarContrasenaInput = document.getElementById("confirmar");

  form.addEventListener("submit", function(event) {
    const inputs = form.querySelectorAll("input");
    let errorMessages = [];
    let foundEmptyField = false;

    for (let input of inputs) {
      if (input.value.trim() === "") {
        foundEmptyField = true;
        break; 
      }
    }

    if (foundEmptyField) {
      errorMessages.push("Tienes que llenar todos los campos.");
    }

    // Validar el campo de nombre
    const nombreValue = nombreInput.value;
    const regexNombre = /^[a-zA-Z]+$/; 

    if (!regexNombre.test(nombreValue)) {
      errorMessages.push("Escriba bien su nombre, por favor.");
    }

    // Validar el campo de apellido
    const apellidoValue = apellidoInput.value;

    if (!regexNombre.test(apellidoValue)) {
      errorMessages.push("Escriba bien su apellido, por favor.");
    }

    // Validar el campo de teléfono
    const telefonoValue = telefonoInput.value;
    const regexTelefono = /^[0-9]+$/; 

    if (!regexTelefono.test(telefonoValue) || telefonoValue.length !== 10) {
      errorMessages.push("El campo de teléfono debe contener exactamente 10 dígitos numéricos.");
    }

    // Validar el campo de correo
    const correoValue = correoInput.value;
    const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 

    if (!regexCorreo.test(correoValue)) {
      errorMessages.push("Escriba bien su correo, por favor.");
    }

    // Validar las contraseñas
    const contrasenaValue = contrasenaInput.value;
    const confirmarContrasenaValue = confirmarContrasenaInput.value;

    if (contrasenaValue !== confirmarContrasenaValue) {
      errorMessages.push("Las contraseñas no coinciden.");
    }

    if (errorMessages.length > 0) {
      event.preventDefault(); 
      alert(errorMessages.join("\n")); 
    }
  });
});
