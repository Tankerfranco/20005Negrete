//Desafio Uno


/*let nombre = prompt("Cual es tu nombre?");
alert("Woow, que bello nombre.");
let edad = prompt("Y tu edad?");
alert("Que genial, y si te digo que puedo adivinar el año en el que naciste...");
let year = 2021;
let resultado = 0;
resultado = year - edad;
alert("El año en el que naciste es.." + resultado);
*/

//desafio Dos

let nombre = prompt("Ingresa tu nombre");
if (nombre != ""){
    alert("Hola "+ nombre);
}else if (nombre === ""){
    alert("No ha ingresado ningun nombre.")
}
let edad = prompt("Ingresa tu edad");
if (edad <= 18){
    alert("Woow, que joven eres!")
}else if (edad > 18){
    alert("estas en tus años dorados, aprovechalos!")
}


