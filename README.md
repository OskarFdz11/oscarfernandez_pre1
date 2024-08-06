# oscarfernandez_pre2

El proyecto consiste en una mini encuesta para saber el nivel de ansiedad en una persona.
Se creó un archivo index.html sencillo, con una hoja de estilos sencilla, en el cual interactúa el usario.

Se emplea el uso de arrays, objetos y funciones para mostrar las preguntas, guardar las respuestas y registrarlas en un historial de resultados que se muestra mediante un alert, cada vez que el usuario lo selecciona en el botón.

Mediante un una función que interactúa con el primer array, se mostrarán cada una de las preguntas que contiene el array y el usuario deberá responder a cada una de ellas con un número entre 0 y 3, un condicional if determinará que los datos del que ingrese el usuario sean válidos, de lo contrario no procederá con la siguiente pregunta.

Se utilizan diferentes elementos métodos como push, reduce, map para guardar las respuestas del usuario en un nuevo arreglo, posteriormente sumarlas entre sí y mostrarlas en la interfaz cuando el usuario termina de responder las preguntas.

Mediante un switch, en base al puntaje obtenido por el usuario se determinará su nivel de ansiedad con rangos, cada salida del swith representa un rango de números.

Al final, aparece nuevamente un botón para reiniciar el test o ver el historial de resultados que ha ingresado el usuario.
