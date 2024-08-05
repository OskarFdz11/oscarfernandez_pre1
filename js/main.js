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
        const puntaje = respuestas.reduce((acumulador, valorActual) => acumulador + valorActual, 0);

        let resultadoTexto;

        switch (true) {
            case (puntaje >= 0 && puntaje <= 4):
                resultadoTexto = `Su puntaje fue: ${puntaje}. Su nivel de ansiedad es Mínimo.`;
                break;
            case (puntaje >= 5 && puntaje <= 9):
                resultadoTexto = `Su puntaje fue: ${puntaje}. Su nivel de ansiedad es Leve.`;
                break;
            case (puntaje >= 10 && puntaje <= 14):
                resultadoTexto = `Su puntaje fue: ${puntaje}. Su nivel de ansiedad es Moderado.`;
                break;
            case (puntaje >= 15):
                resultadoTexto = `Su puntaje fue: ${puntaje}. Su nivel de ansiedad es Severo.`;
                break;
            default:
                resultadoTexto = "Puntaje no válido.";
        }

        resultContainer.textContent = resultadoTexto;
        resultContainer.classList.remove("hidden");
        questionContainer.classList.add("hidden");
        resetButton.classList.remove("hidden");
    }

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
}

diagnosticoAnsiedad();





