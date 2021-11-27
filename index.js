//Desafio Uno

/* // let nombre;
// let year = 2021;
// let resultado = 0;
// let edad = 0;
// nombre = prompt("Cual es tu nombre?");
// alert("Woow, que bello nombre.");
// edad = prompt("Y tu edad?");
// alert("Que genial, y si te digo que puedo adivinar el año en el que naciste...");
// resultado = year - edad;
// alert("El año en el que naciste es.." + resultado); */

//desafio Dos
/* 
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
} */

// Desafio Tres

let numUno, numDos, operacion, salida;

operacion = prompt("Que operacion quieres hacer?(+, -, *, /)");
alert("ahora te pedire dos numeros");
numUno = parseInt(prompt("Ingresa un numero: "));
numDos = parseInt(prompt("Ingrese un numero: "));
while(salida != "Salir"){
    switch(operacion){
        case "+":
            operacion = numUno + numDos;
            alert("el resultado es "+ operacion);
            break;
        case "-":
            operacion = numUno - numDos;
            alert("el resultado es "+ operacion);
            break;
        case "*":
            operacion = numUno * numDos;
            alert("el resultado es "+ operacion);
            break;
        case "/":
            operacion = numUno / numDos;
            alert("el resultado es "+ operacion);
            break;  
    }
    salida = prompt("Para salir escriba Salir o si quieres seguir haciendo calculos no ponga nada y acepte");
    if(salida == ""){
        operacion = prompt("Que operacion quieres hacer?(+, -, *, /)");
        alert("ahora te pedire dos numeros");
        numUno = parseInt(prompt("Ingresa un numero: "));
        numDos = parseInt(prompt("Ingrese un numero: "));
    }
}


