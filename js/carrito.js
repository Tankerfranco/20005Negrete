function agregarAlCarrito(item) {

    let aux = carrito.find(Element => Element.id == item.id)

    const verificarRepeticion = element => element.id === item.id;
    if (carrito.some(verificarRepeticion)) {

        carrito.find(Element => Element.id === item.id).cantidad++;
        carritoStorage()

    } else {
        carrito.push(item)
        carrito.find(Element => Element.id === item.id).cantidad++;
        carritoStorage()

    }
}