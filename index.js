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

/* let nombre;
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

/* let numUno, numDos, operacion, salida;

operacion = prompt("Que operacion quieres hacer?(+, -, *, /)");
alert("ahora te pedire dos numeros");
numUno = parseFloat(prompt("Ingresa un numero: "));
numDos = parseFloat(prompt("Ingrese un numero: "));
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
        numUno = parseFloat(prompt("Ingresa un numero: "));
        numDos = parseFloat(prompt("Ingrese un numero: "));
    }
} */

//Desafio Cuatro

/* let compras, salida;

function saludo(){ //Esta funcion te saluda cuando ingresas a la pagina.
    return alert("Bienvenido a la Tierra Bendita");
}

function pedido(){ //Esta funcion es para ver que pedido quiere el usuario.
    while (salida != "Esc"){
        switch(compras){
            case "Milanesas":
                alert("Ahora le traemos sus milanesas.");
                break;
            case "Hamburguesas":
                alert("Ahora le traemos su hamburguesas");
                break;
            case "Helado":
                alert("Ahora le traemos su helado");
                break;    
            default:
                alert("Disculpe eso no esta en el menu");
                break;
        }
        salida = prompt("Quiere pedir algo mas?");
        if (salida === "si") {
            compras = prompt("que mas quiere comer? (Milanesas, Hamburguesas o Helado)");
        }
        else {
            salida = prompt("Sino desea nada mas.. escriba 'Esc'");
        }
    }
}

function cuenta(){ //Esta funcion es para ver cuanto tiene que pagar el usuario.
    recibo = prompt("Disculpe que lo moleste, pero nuestro mesero es nuevo y olvido que pidio usted, seria tan amable de decirme que pidio?(Milanesas, Helado o Hamburguesas)");
    switch(recibo){
        case "Milanesas":
            alert("Esta bien, serian 200 pesos.");
            break;
        case "hamburguesas":
            alert("Esta bien, serian 300 pesos.");
            break;
        case "Helado":
            alert("Esta bien, serian 150 pesos.");
            break;
        default:
            alert("Disculpe, podria repetirlo.");
            recibo = prompt("seria tan amable de decirme que pidio?(Milaneas, Helado o Hamburguesas)");
            break;
    }
}

saludo();
compras = prompt("Que desea comprar? (Milanesas, Hamburguesas o Helado)");
pedido();
alert("Espero alla disfrutado de su comida, ahora le traigo la cuenta.");
cuenta();  */

//Desafio Complementario

/* let nombre, direccion, edad;

function name(){
    nombre = prompt("Cual es tu nombre? ");
    return nombre;
}

function adress(){
    direccion = prompt("Donde vives? ");
    return direccion;
}

function age(){
    edad = prompt("Cual es tu edad? ");
    return edad;
}

alert("Hola, necesito los siguientes datos para tu carnet.");
name();
adress();
age();
alert("Tus datos son "+ nombre +" " + direccion +" " + edad);
 */
//Desafio Cinco

let pedido, cuenta = 0;

class Food {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = Number(precio);
    }
}

const combo1 = new Food("Hamburguesa con papas fritas", "200");
const combo2 = new Food("Milanesas de Soja con ensalada", "300");

function saludo() {//un saludito
    alert("Bienvenido a La Tierra Bendita, ahora le traemos el menu (el menu sale en console).");
}

function orden() { //esta funcion es para pedir la comida y devuelve el valor de la cuenta. Me gustaria agregarle que puedas pedir mas de una cosa y que ese valor se vaya sumando.
    pedido = prompt("Quiere pedir...? (combo1 o combo2)");
    while(pedido != "no"){
        if(pedido === "combo1"){
            alert(`oh usted quiere ${combo1.nombre}, buena eleccion.`);
            return cuenta = cuenta + combo1.precio;
        }else if(pedido === "combo2"){
            alert(`oh usted quiere ${combo2.nombre}, buena eleccion.`);
            return cuenta = cuenta + combo2.precio;
        }else{
            alert("No tenemos de eso, vuelva a pedir.");
        }
        pedido = prompt("Quiere pedir...? (combo1 o combo2)");
    }
}

saludo();
console.log(combo1, combo2);
orden();
alert("disfrute de la comida!");
alert("oh quiere la cuenta, ahi se la traemos.");
alert(`su cuenta es de ${cuenta}`)





