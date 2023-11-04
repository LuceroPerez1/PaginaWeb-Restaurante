document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const nombreInput = document.getElementById("nombre");
    const apellidoInput = document.getElementById("apellido");
    const telefonoInput = document.getElementById("telefono");
  
    form.addEventListener("submit", function(event) {
      const inputs = form.querySelectorAll("input");
      let allFieldsFilled = true;
  
      for (let input of inputs) {
        if (input.value.trim() === "") {
          allFieldsFilled = false;
          break;
        }
      }
  
      if (!allFieldsFilled) {
        event.preventDefault(); // Evita el envío del formulario
        alert("Tienes que llenar todos los campos.");
      }
  
      // Validar el campo de nombre
      const nombreValue = nombreInput.value;
      const regexNombre = /^[a-zA-Z]+$/; // Expresión regular que acepta solo letras
  
      if (!regexNombre.test(nombreValue)) {
        event.preventDefault(); // Evita el envío del formulario
        alert("Escriba bien su nombre, por favor.");
      }
  
      // Validar el campo de apellido
      const apellidoValue = apellidoInput.value;
  
      if (!regexNombre.test(apellidoValue)) {
        event.preventDefault(); // Evita el envío del formulario
        alert("Escriba bien su apellido, por favor.");
      }
  
      // Validar el campo de teléfono
      const telefonoValue = telefonoInput.value;
      const regex = /^[0-9]+$/; // Expresión regular que acepta solo números
  
      if (!regex.test(telefonoValue)) {
        event.preventDefault(); // Evita el envío del formulario
        alert("Solo se pueden poner números en el campo de teléfono.");
      }
    });
  });
  