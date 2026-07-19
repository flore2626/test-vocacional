function calcularResultado(){

let respuesta = document.querySelector('input[name="pregunta1"]:checked');

if(!respuesta){
alert("Por favor selecciona una opción");
return;
}

localStorage.setItem("carrera", respuesta.value);

window.location.href = "resultado.html";

}
