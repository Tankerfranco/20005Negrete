// variables globales
const cardHtml = document.getElementById("product");
let productos = [];
let carrito;

//Desafio nueve y complementario
document.addEventListener('DOMContentLoaded', () => {
    cards();
    cardHtml.addEventListener('click', agregarProducto);
  })
  
  
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

const cards = () => {

    cardHtml.innerHTML = ``
    
    for (let i of productos) {
      let card = document.createElement("div");
      card.classList.add(`cont`);
      card.innerHTML = `
      <div class="cont__carta">
        <img src="${i.img}" alt="brochetas veganas" class="cont__carta--imagen"></img>
        <h3 class="cont__carta--comida">${i.nombre}</h3>
        <p>${i.descripcion}</p>
        <p>$${i.precio}</p>
        <button id="${i.id}">Agregar al carrito</button>`;
      cardHtml.appendChild(card);
      let button = document.getElementById(i.id);
      button.addEventListener("click", () => agregarAlCarrito(i))
    }
}

function agregarProducto() {

  console.log("Producto agregado al carrito");
}
  

