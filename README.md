# oscarfernandez_pre1

El proyecto consiste en una mini encuesta para saber el nivel de ansiedad en una persona.
Inicia con un alert el cual explica brevemente en que consisten las preguntas, así como qué datos debe ingresar el usuario y que significan cada uno.

Me adelanté un poco y utilicé elementos que aún no hemos visto en las clases, como los arrays, pero creí que era necesario para hacer bien la primer preentrega.

Creamos 2 arrays, uno que contiene las preguntas y otro para guardar las respuestas.

Mediante un bucle for, el se mostrarán cada una de las preguntas que contiene el array y el usuario deberá responder a cada una de ellas con un número entre 0 y 3, un condicional if determinará que los datos del que ingrese el usuario sean válidos, de lo contrario no procederá con la siguiente pregunta.

También utilicé métodos como push y reduce para guardar las respuestas del usuario en un nuevo arreglo y posteriormente sumarlas entre sí.

Mediante un switch, en base al puntaje obtenido por el usuario se determinará su nivel de ansiedad con rangos, cada salida del swith representa un rango de números.

Por último, seleccionamos el elemento button para que al momento de hacer click en él vuelva a iniciar el test.