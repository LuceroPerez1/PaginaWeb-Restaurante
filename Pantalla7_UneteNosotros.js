
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
    alert("Favor de ingresar solamente letras.");
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
        alert("Favor de ingresar solamente números.");
        return false;
    }
}
