$(document).ready(() => {

    const carritoJson = localStorage.getItem("carrito");

    // si hay datos en localStorage los parseamos, si no por defecto usamos
    // un arreglo vacio
    const carrito = carritoJson ? JSON.parse(carritoJson) : [];

    // contamos la cantidad de productos
    let cantidad = 0;
    carrito.forEach(p => cantidad += p.cantidad);

    // actualizamos el dom para reflejar la cantidad de productos
    // en el icono de carrito
    $("#cantidad-carrito").text(cantidad);

    const elementoProductos = $("#productos");
    let total = 0;

    // agregamos productos a la tabla de productos, y contamos el total
    carrito.forEach((producto) => {
        const el = $("<tr></tr>");
        el.html(`
            <td>${producto.nombre}</td>
            <td>${producto.cantidad}</td>
            <td>$${producto.precio}</td>
        `)
        elementoProductos.append(el);
        total += producto.precio * producto.cantidad;
    });

    // agregamos el total al dom
    const elTotal = $("<tr></tr>");
    elTotal.html(`
        <td/>
        <td>TOTAL</td>
        <td>$${total}</td>
    `)
    elementoProductos.append(elTotal);

    // mostramos mensaje de confirmacion al clickear "comprar"
    $("#boton-comprar").on("click", () => {
        $("#contenedor-carrito").html(`
            <h2>Gracias por tu compra!</h2>
            <p>Nos comunicaremos a la brevedad para completar tu checkout</p>
        `)
    });
});