
function SoloLetras(e){
    
  key = e.keyCode || e.which;
  tecla = String.fromCharCode(key).toString();
  letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyzÁÉÍÓÚáéíóú";

  especiales = [8,13,32];
  tecla_especial = false
      for(var i in especiales) {
          if (key == especiales[i]) {
              tecla_especial = true;
              break;
          }
      }

  if(letras.indexOf(tecla) == -1 && !tecla_especial) {
  alert("Ingresar solo letras");
  return false;
  }

}

function SoloNumeros(evt){

  if(window.Event){
      keynum = evt.keyCode;
  }
  else{
      keymun = evt.which;
  }

  if((keynum > 47 && keynum < 58) || keynum == 8 || keynum == 13){
      return true;
  }
  else{
      alert("Ingresar solo números");
      return false;
  }
}

function validarCorreo(correo) {
  var regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  var mensajeCorreo = document.getElementById("mensajeCorreo");

  if (regex.test(correo)) {
    mensajeCorreo.innerHTML = "Correo válido";
    mensajeCorreo.style.color = "green";
  } else {
    mensajeCorreo.innerHTML = "Correo no válido";
    mensajeCorreo.style.color = "red";
  }
}

function validarContraseñas() {
  var contraseña = document.getElementById("contraseña").value;
  var confirmar = document.getElementById("confirmar").value;
  var mensajeContraseña = document.getElementById("mensajeContraseña");

  if (contraseña === confirmar) {
    mensajeContraseña.innerHTML = "Las contraseñas coinciden";
    mensajeContraseña.style.color = "green";
  } else {
    mensajeContraseña.innerHTML = "Las contraseñas no coinciden";
    mensajeContraseña.style.color = "red";
  }
}
document.getElementById("contraseña").addEventListener("input", validarContraseñas);
document.getElementById("confirmar").addEventListener("input", validarContraseñas);
