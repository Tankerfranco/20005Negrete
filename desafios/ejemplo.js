// Desafio ocho

//bienvenida
/* let bienvenida = document.createElement("div");

bienvenida.innerHTML = "<h1>Bienvenido a la Tierra Bendita</h1>";

bienvenida.classList.add("bienvenida");

document.body.appendChild(bienvenida);
 */
//MENU
/* let texto = document.createElement("p");

texto.innerHTML = "<p>Menu</p>";

texto.classList.add("texto");

document.body.appendChild(texto); */

//Comida del menu
/* 
let text = "";
const comida = ["hamburguesa $150", "pizza $200", "lomito $300", "sopa $350"];
comida.forEach(foodList);

document.getElementById("menu").innerHTML = text;

function foodList(item, index){
    text += index + " : " + item + "<br>";
}
document.body.appendChild(menu); */

//Desafio nueve y complementario
/* document.addEventListener('DOMContentLoaded', () => {
    cards()
  })
  
let productos = [];

class Producto{
    constructor (id, nombre, precio, descripcion, img, categoria){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.img = img;
        this.categoria;
    }
}

productos.push(new Producto(1, "Pizza Napolitana Veggie", 350, "Pizza Napolitana con una deliciosa masa y productos veganos.", "./imagenes/pizzaNapoVege.jpg", "pizza"));
productos.push(new Producto(2, "Brochetas Veganas", 300, "Brochetas Veganas 100% naturales y con los mejores vegetales.", "./imagenes/brochetasVeganas.jpg", "brochetas"));
productos.push(new Producto(3, "Hamburguesa con Lentejas", 325, "Hamburguesa con Lenteja que simula el sabor de la carne.", "./imagenes/hamburguesa.jpg", "hamburguesa"));
productos.push(new Producto(4, "Macarrones Veganos", 400, "Macarrones Veganos muy deliciosos y de un sabor inigualable.", "./imagenes/macarronesVeganos.jpg", "pastas"));

const cardHtml = document.getElementById("producto");

const cards = () => {

    cardHtml.innerHTML = ``
    
    for (let i of productos) {
      let card = document.createElement("div")
      card.innerHTML = `
          <div class="cont__carta">
            <img src="${i.img}" alt="brochetas veganas" class="cont__carta--imagen"></img>
            <h3 class="cont__carta--comida">${i.nombre}</h3>
            <p>${i.descripcion}</p>
            <p>$${i.precio}</p>
            <button id="btn">Agregar al carrito</button>`;

            cardHtml.appendChild(card)
            let button = document.getElementById("btn");
            button.addEventListener("click", respuestaClick)
            
            function respuestaClick(){
                console.log("Agregado al carrito");
            }
    }
}
 */

//Desafio Once y complementario.
/* 
$("h1").mouseenter(function(){
    $("#primero").fadeOut();
})
$("h1").mouseleave(function(){
    $("#primero").fadeIn();
})
$("#primero").css({"background-color": "blue"});
$("button").click(function(){
    console.log("soy un texto");
})
$(".hide").click(function(){
    $(".texto").hide();
})
$(".show").dblclick(function(){
    $(".texto").show();
})

$("#1").mouseenter(function(){
    $("#2").slideUp();
})

$("#1").mouseleave(function(){
    $("#2").slideDown();
})

$(".creador").click(function(){
    $("#3").after("<p>Hola apareci espontaneamente</p>");
})

$(".borrador").click(function(){
    $("#3").remove();
})

$(".doy").click(function(){
    $("h1").addClass("blue")
})

$(".quito").click(function(){
    $("h1").removeClass("blue")
})
 */

//Desafio Ajax
let boton = document.getElementById("pagar")
let botonMostrar = document.getElementById("mostrar")
let text = document.getElementById("text")

$("#pagar").click(function(){
    pagar();
})

$("#mostrar").click(function(){
    traerDatos(text.value);
})

/* botonMostrar.addEventListener("click", (e) => {
traerDatos(text.value)
}) */

async function traerDatos (product) {
    console.log(product)
    let response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${product}`)
    let data = await response.json()
    console.log(response)
    console.error(data)
}

const carrito = [
    {nombre: "Auricular", descripcion: "otra cosa", img: "imagen", id: 1, cantidad: 2, precio: 100},
    {nombre: "Auricular", descripcion: "otra cosa", img: "imagen", id: 2, cantidad: 1, precio: 1400},
    {nombre: "Auricular", descripcion: "otra cosa", img: "imagen", id: 2, cantidad: 3, precio: 100},
    {nombre: "Auricular", descripcion: "otra cosa", img: "imagen", id: 2, cantidad: 4, precio: 100}]



async function pagar() {
    const productsToMP = carrito.map((element) => {
      let nuevoElemento = {
        title: element.nombre,
        description: element.descripcion,
        picture_url: element.img,
        category_id: element.id,
        quantity: Number(element.cantidad),
        currency_id: "ARS",
        unit_price: Number(element.precio),
      };
      return nuevoElemento;
    });
    console.log(productsToMP)
    const response = await fetch(
      "https://api.mercadopago.com/checkout/preferences",
      {
        method: "POST",
        headers: {
          Authorization:
            "Bearer TEST-680675151110839-052307-64069089337ab3707ea2f547622a1b6a-60191006",
        },
        body: JSON.stringify({
          items: productsToMP,
        }),
      }
    );
    console.warn(response)
    const data = await response.json();
    console.log(data)
    window.open(data.init_point, "_blank");
  }
