document.addEventListener("DOMContentLoaded", function() {
    const btnSiguiente = document.getElementById("btn-siguiente");
    
    if (btnSiguiente) {
        btnSiguiente.addEventListener("click", function() {
            const opciones = document.getElementsByName("vocacion");
            let seleccionada = false;
            
            for (let i = 0; i < opciones.length; i++) {
                if (opciones[i].checked) {
                    seleccionada = true;
                    break;
                }
            }
            
            if (seleccionada) {
                // Avanza a la página de resultados
                window.location.href = "resultado.html";
            } else {
                alert("Por favor, selecciona una opción antes de continuar.");
            }
        });
    }
});
