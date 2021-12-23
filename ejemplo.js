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
document.addEventListener('DOMContentLoaded', () => {
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
