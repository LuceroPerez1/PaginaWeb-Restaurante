// se crea una variable constante "no cambia su valor " donde le ponemos un nombre que sea igual al id del elementos del docuemnto html 
const usuario = document.getElementById("correo");
const contraseña = document.getElementById("contraseña");

// cree un id para el boton "continuar" para poder referenciarlo en js
const boton = document.getElementById("boton");

// estas 2 son para los mensajitos donde se piden las condiciones (que sea  mayor a 8 caracteres y que solo acepte letras)
const parrafoUsuario = document.getElementById("parrafoCorreo")
const parrafoContraseña = document.getElementById("parrafoContraseña")




// las funciones siempre llevan parentesis, dentro de estos () se definen los parametros de entrada de la funcion 
// la funcion puede no tener parametros de entrada depende del caso, pero aun sin parametro de entrada siempre tiene que definirse la funcion con parentesis 
 // porque todo el if raro   porque estamos validando condiciones para la variable nombre y esas condiciones son
// '^[A-Z]+$', 'i' esto siginifica que estamos permitiendo solo texto  a la variable nombre tanto como mayusculas y minusculas 


function verificaUsuario(){
    let nombre = correo.value;
    if(/^[a-zA-Z]+$/.test(nombre)){
        parrafoUsuario.innerHTML = "CORREO VALIDO"
    }
    else{
        parrafoUsuario.innerHTML = "COLOCAR EN EL FORMATO CORRESPONDIENTE"
    };
};

// '^[a-zA-Z0-9 ]+$'
// funcion para la contraseña
function verificaContraseña(){
    let password = contraseña.value;
    if(/^[a-zA-Z0-9 ]+$/.test(password)){
        if(password.length >= 8){
            parrafoContraseña.innerHTML = "CONTRASEÑA VALIDA"
        }
        else{
            parrafoContraseña.innerHTML = "CONTRASEÑA NO VALIDA, SE OCUPA UN MINIMO DE 8 CARACTERES"
        }
    }
    else{
        parrafoContraseña.innerHTML = "CONTRASEÑA NO VALIDA, SE NECESITAN NUMEROS Y LETRAS "
    };
};

// AHORA QUE LAS 2 FUNCIONES SE EJECUTEN CORRERCTAMENTE AL PRECIONAR EL BOTON CONTINUAR
//addeventlistener desencadena un evento que este dentro de los parentesis
// preventdefault para evitar que se borre lo que puse en la contraseña y usuario al recargar la pagina 
boton.addEventListener("click", (e) => {
    e.preventDefault();
    verificaUsuario();
    verificaContraseña();
})

