// creamos la función principal
function test() {
    // creamos 2 alerts, uno para definir de que trata el script y otro para explicar el significado de las respuestas
    alert("Durante las últimas 2 semanas, ¿con qué frecuencia ha sentido molestias por los siguientes problemas?");
    alert("Ingrese un Número del 0 al 3 para indicar la frecuencia, 0 - nunca, 1 - varios días, 2 - más de la mitad de los días, 3 - casi todos los días");

    //creamos un array que contiene las preguntas

    const preguntas = [

        "1- Sentirse nervioso/a, intranquilo/a o con los nervios de punta. 0 - nunca, 1 - varios días, 2 - más de la mitad de los días, 3 - casi todos los días",
        "2- No poder dejar de preocuparse o no poder controlar la preocupación. 0 - nunca, 1 - varios días, 2 - más de la mitad de los días, 3 - casi todos los días",
        "3- Preocuparse demasiado por diferentes cosas. 0 - nunca, 1 - varios días, 2 - más de la mitad de los días, 3 - casi todos los días",
        "4- Dificultad para relajarse",
        "5- Estar inquieto/a que es difícil permanecer sentado/a tranquilamente. 0 - nunca, 1 - varios días, 2 - más de la mitad de los días, 3 - casi todos los días",
        "6- Molestarse o ponerse irritable fácilmente. 0 - nunca, 1 - varios días, 2 - más de la mitad de los días, 3 - casi todos los días",
        "7- Sentir miedo como si algo terrible pudiera pasar. 0 - nunca, 1 - varios días, 2 - más de la mitad de los días, 3 - casi todos los días"

    ];

   // creamos un segundo array que contendrá cada una de las respuestas 
    const respuestas = [];

    // se inicia un bucle for para iterar cada una de las preguntas del array
    for (let i = 0; i < preguntas.length; i++) {

        let valor; //creamos la variable que contendrá cada una de las respuestas que el usario ingresa
        while (true) { 
            valor = prompt(preguntas[i]);
            valor = Number(valor); //nos aseguramos que el valor sea un número

            if (!isNaN(valor) && valor >= 0 && valor <= 3) {  //creamos un condicional if para que analice los valores proporcionados por el usuario y se asegure que sea un valor entre 0 y 3
                break;
            } else {
                alert("Valor inválido. Por favor ingrese un número entre 0 y 3.") //de lo contrario no permitirá seguir con el test
            };
        };

        respuestas.push(valor);  //agrega las respuestas del usuario al array creado anteriormente mediante el método push

    };
    
    //sumamos el puntaje obtenido en base a las respuestas del usuario mediante el método reduce
    const valorInicial = 0;
    const puntaje = respuestas.reduce(
        (acumulador, valorActual) => acumulador + valorActual,
        valorInicial,      
    );

    //creamos una función switch con rangos de puntaje para mostrar los resultados del test en base al puntaje obtenido
    switch (true) {
        case (puntaje >= 0 && puntaje <= 4):
            return alert("Su puntaje fue: " + puntaje + ". Su nivel de ansiedad es Mínimo.");
        
        case (puntaje >= 5 && puntaje <= 9):
            return alert("Su puntaje fue: " + puntaje + ". Su nivel de ansiedad es Leve.");

        case (puntaje >= 10 && puntaje <= 14):
            return alert("Su puntaje fue: " + puntaje + ". Su nivel de ansiedad es Moderado.");

        case (puntaje >= 15):
            return alert("Su puntaje fue: " + puntaje + ". Su nivel de ansiedad es Severo.");
        
        default:
            return alert("Puntaje no válido.");
    };

};

//seleccionamos el botón que se encuentra en el index para que al hacer click inicie con el test
const startButton = document.querySelector(".start");

startButton.addEventListener("click", test); 






