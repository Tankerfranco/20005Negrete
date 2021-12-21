// Desafio ocho

//bienvenida
let bienvenida = document.createElement("div");

bienvenida.innerHTML = "<h1>Bienvenido a la Tierra Bendita</h1>";

bienvenida.classList.add("bienvenida");

document.body.appendChild(bienvenida);

//MENU
let texto = document.createElement("p");

texto.innerHTML = "<p>Menu</p>";

texto.classList.add("texto");

document.body.appendChild(texto);

//Comida del menu

let text = "";
const comida = ["hamburguesa $150", "pizza $200", "lomito $300", "sopa $350"];
comida.forEach(foodList);

document.getElementById("menu").innerHTML = text;

function foodList(item, index){
    text += index + " : " + item + "<br>";
}
document.body.appendChild(menu);