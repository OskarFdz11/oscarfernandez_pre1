function diagnosticoAnsiedad() {
    const preguntas = [
        "1- Sentirse nervioso/a, intranquilo/a o con los nervios de punta.",
        "2- No poder dejar de preocuparse o no poder controlar la preocupación.",
        "3- Preocuparse demasiado por diferentes cosas.",
        "4- Dificultad para relajarse.",
        "5- Estar inquieto/a que es difícil permanecer sentado/a tranquilamente.",
        "6- Molestarse o ponerse irritable fácilmente.",
        "7- Sentir miedo como si algo terrible pudiera pasar."
    ];

    let respuestas = [];
    let preguntaActual = 0;

    const questionContainer = document.querySelector(".question-container");
    const questionElement = document.getElementById("question");
    const answerInput = document.getElementById("answer");
    const nextButton = document.getElementById("next-button");
    const resultContainer = document.getElementById("result");
    const startButton = document.querySelector(".start");
    const resetButton = document.getElementById("reset-button");
    const historialButton = document.getElementById("historial-button");

    // Mostrar la primera pregunta
    function mostrarPregunta() {
        questionElement.textContent = preguntas[preguntaActual];
        answerInput.value = ''; // Resetear el valor del input
    }

    // Procesar la respuesta y avanzar a la siguiente pregunta
    function siguientePregunta() {
        const valor = Number(answerInput.value);
        
        if (!isNaN(valor) && valor >= 0 && valor <= 3) {
            respuestas.push(valor);
            preguntaActual++;

            if (preguntaActual < preguntas.length) {
                mostrarPregunta();
            } else {
                calcularResultado();
            }
        } else {
            alert("Por favor, ingrese un número entre 0 y 3.");
        }
    }

    // Calcular el resultado del test
    function calcularResultado() {
        const puntaje = respuestas.reduce((acumulador, valor) => acumulador + valor, 0);

        let resultadoTexto;
        let nivelAnsiedad;

        switch (true) {
            case (puntaje >= 0 && puntaje <= 4):
                nivelAnsiedad = "Mínimo";
                resultadoTexto = `Su puntaje fue: ${puntaje}. Su nivel de ansiedad es Mínimo.`;
                break;
            case (puntaje >= 5 && puntaje <= 9):
                nivelAnsiedad = "Leve";
                resultadoTexto = `Su puntaje fue: ${puntaje}. Su nivel de ansiedad es Leve.`;
                break;
            case (puntaje >= 10 && puntaje <= 14):
                nivelAnsiedad = "Moderado";
                resultadoTexto = `Su puntaje fue: ${puntaje}. Su nivel de ansiedad es Moderado.`;
                break;
            case (puntaje >= 15):
                nivelAnsiedad = "Severo";
                resultadoTexto = `Su puntaje fue: ${puntaje}. Su nivel de ansiedad es Severo.`;
                break;
            default:
                resultadoTexto = "Puntaje no válido.";
                nivelAnsiedad = "Desconocido";
        }

        // Guardar el resultado en el historial
        const fecha = new Date().toLocaleString();
        historialResultados.agregarResultado(fecha, puntaje, nivelAnsiedad);

        resultContainer.textContent = resultadoTexto;
        resultContainer.classList.remove("hidden");
        questionContainer.classList.add("hidden");
        resetButton.classList.remove("hidden");
    }
    

    // Mostrar el historial de resultados caprurados 
    const historialResultados = {
        resultados: [],
        
        agregarResultado: function(fecha, puntaje, nivel) {
            this.resultados.push({ fecha, puntaje, nivel });
        },
    
        mostrarResultados: function() {
            if (this.resultados.length === 0) {
                return "No hay resultados previos.";
            }
    
            return this.resultados.map(resultado => {
                return `Fecha: ${resultado.fecha} | Puntaje: ${resultado.puntaje} | Nivel: ${resultado.nivel}`;
            }).join("\n");
        }
    };

    // Reiniciar test
    function reiniciarTest() {
        respuestas = [];
        preguntaActual = 0;
        resultContainer.classList.add("hidden");
        resetButton.classList.add("hidden");
        questionContainer.classList.remove("hidden");
        mostrarPregunta();
    }

    startButton.addEventListener("click", () => {
        startButton.classList.add("hidden");
        questionContainer.classList.remove("hidden");
        mostrarPregunta();
    });

    nextButton.addEventListener("click", siguientePregunta);
    resetButton.addEventListener("click", reiniciarTest);
    historialButton.addEventListener("click", () => {
        alert(historialResultados.mostrarResultados());
    });
}

diagnosticoAnsiedad();
