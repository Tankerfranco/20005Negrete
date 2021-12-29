let validarCarrito = localStorage.getItem("carrito");

if (validarCarrito == null){
    carrito = [];
 }else{
   carrito = JSON.parse(validarCarrito)
   console.log( carrito)
}

const carritoStorage = () => {
   localStorage.setItem("carrito", JSON.stringify(carrito))
}