//Desafio Uno

// let nombre;
// let year = 2021;
// let resultado = 0;
// let edad = 0;
// nombre = prompt("Cual es tu nombre?");
// alert("Woow, que bello nombre.");
// edad = prompt("Y tu edad?");
// alert("Que genial, y si te digo que puedo adivinar el año en el que naciste...");
// resultado = year - edad;
// alert("El año en el que naciste es.." + resultado);

//desafio Dos

let nombre;
let edad = 0;
nombre = prompt("Ingresa tu nombre");
if (nombre != ""){
    alert("Hola "+ nombre);
}else if (nombre === ""){
    alert("No ha ingresado ningun nombre.")
}
edad = prompt("Ingresa tu edad");
if (edad <= 18){
    alert("Woow, que joven eres!")
}else if (edad > 18){
    alert("estas en tus años dorados, aprovechalos!")
}