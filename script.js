document.addEventListener("DOMContentLoaded", function() {
    let preguntaActual = 1;
    const totalPreguntas = 6;
    const btnSiguiente = document.getElementById("btn-siguiente");
    const progresoTexto = document.getElementById("progreso-texto");

    if (btnSiguiente) {
        btnSiguiente.addEventListener("click", function() {
            // Validar que se haya seleccionado una respuesta en la pregunta visible
            const opcionSeleccionada = document.querySelector(`input[name="r${preguntaActual}"]:checked`);
            
            if (!opcionSeleccionada) {
                alert("Por favor, selecciona una opción antes de continuar.");
                return;
            }

            // Si quedan preguntas, avanzamos a la siguiente tarjeta
            if (preguntaActual < totalPreguntas) {
                document.getElementById(`p${preguntaActual}`).classList.remove("activa");
                preguntaActual++;
                document.getElementById(`p${preguntaActual}`).classList.add("activa");
                
                progresoTexto.innerText = `Pregunta ${preguntaActual} de ${totalPreguntas}`;
                
                // Cambiar el texto del botón en la última pregunta
                if (preguntaActual === totalPreguntas) {
                    btnSiguiente.innerText = "Ver mi Resultado";
                }
            } else {
                // Si ya fue la última pregunta, calculamos el resultado ganador
                calcularResultado();
            }
        });
    }

    function calcularResultado() {
        // Inicializar contadores para cada una de las 6 carreras
        let puntajes = {
            administracion: 0,
            arquitectura: 0,
            contaduria: 0,
            politicas: 0,
            derecho: 0,
            pedagogia: 0
        };

        // Sumar las respuestas elegidas
        for (let i = 1; i <= totalPreguntas; i++) {
            const voto = document.querySelector(`input[name="r${i}"]:checked`).value;
            if (puntajes[voto] !== undefined) {
                puntajes[voto]++;
            }
        }

        // Encontrar cuál carrera obtuvo el mayor puntaje
        let carreraGanadora = "administracion";
        let maxPuntos = -1;

        for (let carrera in puntajes) {
            if (puntajes[carrera] > maxPuntos) {
                maxPuntos = puntajes[carrera];
                carreraGanadora = carrera;
            }
        }

        // Guardar el resultado en la memoria local (localStorage) y redirigir
        localStorage.setItem("carreraFinal", carreraGanadora);
        window.location.href = "resultado.html";
    }
});
