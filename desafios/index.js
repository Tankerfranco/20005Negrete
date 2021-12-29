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
            
    }
}

saludo();
compras = prompt("Que desea comprar? (Milanesas, Hamburguesas o Helado)");
pedido();
alert("Espero alla disfrutado de su comida, ahora le traigo la cuenta.");
cuenta();  */

//Desafio Complementario

/* let nombre, direccion, edad;

function nombre(){
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
nombre();
adress();
age();
alert("Tus datos son "+ nombre +" " + direccion +" " + edad);
 */
//Desafio Cinco

/* let pedido, cuenta = 0;

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
 */

//Desafio Seis

/* const food = ["hamburguesa de lentejas", "macarrones veganos", "pizza vegana", "brochetas veggie"];
const precios = [200, 300, 250, 150];
console.log(food);


let otraCosa = prompt("Muy buenas, bienvenido! Desea pedir? ");
if(otraCosa == "si"){
    alert("Deje le muestro el menu");
    for(const comida of food){
        console.log(food);
    }
    otraCosa = prompt(`que desea del menu? (${food})`)
    switch (otraCosa) {
        case food[0]:
            alert(`ok, serian $${precios[0]}, disfrute de su comida.`);
            break;
        case food[1]:
            alert(`ok, serian $${precios[1]}, disfrute de su comida.`);
            break;
        case food[2]:
            alert(`ok, serian $${precios[2]}, disfrute de su comida.`);
            break;
        case food[3]:
            alert(`ok, serian $${precios[3]}, disfrute de su comida.`);
            break;
        default:
            alert("no tenemos eso, vuelva a pedir");
    }
}else if(otraCosa == "no"){
    alert("Disfrute el dia")
}else{
    alert("esta bien, disfrute su comida!");
}
 */

//Desafio Complementario 2
/* const comida = [{
    nombre: "Hamburguesa",
    precio: 300
},
{
    nombre: "pizza",
    precio: 250
},
{
    nombre: "macarrones",
    precio: 270
}
];

function mostrarComida() {
    console.log(`${comida[0].nombre}, sale $${comida[0].precio}.
    ${comida[1].nombre}, sale $${comida[1].precio}.
    ${comida[2].nombre}, sale $${comida[2].precio}. `)
}

mostrarComida();

comida.sort(function(a, b){return a.precio - b.precio});

mostrarComida();
 */

//Primera Entrega del Proyecto Final
/* let pedido, cuenta;

function saludo() {
    alert("Bienvenido a La Tierra Bendita, ahora le decimos el menu.");
}

function orden() { 
    pedido = prompt(`Que quiere pedir? (${comida.join(" - ")})`);
    while(pedido != "Esc"){
        switch (pedido) {
            case comida[0]:
                alert(`Disfrute de su ${combo1.nombre}.`);
                pedido = prompt(`y en un rato volveremos con la cuenta. (Escriba Esc)`);
                break;
            case comida[1]:
                alert(`Disfrute de sus ${combo2.nombre}.`);
                pedido = prompt(`y en un rato volveremos con la cuenta. (Escriba Esc)`);
                break;
            case comida[2]:
                alert(`Disfrute de su ${combo3.nombre}.`);
                pedido = prompt(`y en un rato volveremos con la cuenta. (Escriba Esc)`);
                break;
            case comida[3]:
                alert(`Disfrute de sus ${combo4.nombre}.`);
                pedido = prompt(`y en un rato volveremos con la cuenta. (Escriba Esc)`);
                break;
            default:
                alert("Disculpe, no tenemos eso.")
        }
    }
}

function recibo() {
    cuenta = prompt(`Disculpe, la computadora se descompuso asi que podria decirnos que pidio? (${comida.join(" - ")})`);
    if (cuenta === combo1.nombre) {
        alert(`Su cuenta es de $${combo1.precio}`);
    }else if (cuenta === combo2.nombre){
        alert(`Su cuenta es de $${combo2.precio}`);
    
    }else if (cuenta === combo3.nombre){
        alert(`Su cuenta es de $${combo3.precio}`);
    
    }else if (cuenta === combo4.nombre){
        alert(`Su cuenta es de $${combo4.precio}`);
    }
}

class Food {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = Number(precio);
    }
}

const combo1 = new Food("Pizza Napolitana Veggie", "350");
const combo2 = new Food("Brochetas Veganas", "300");
const combo3 = new Food("Hamburguesa con Lentejas", "325");
const combo4 = new Food("Macarrones Veganos", "400");

const comida = ["Pizza Napolitana Veggie", "Brochetas Veganas", "Hamburguesa con Lentejas", "Macarrones Veganos"];

saludo();
alert(`Tenemos en el menu ${comida.join(" - ")}.`);
orden();
recibo();
 */


