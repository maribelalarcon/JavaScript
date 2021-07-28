$(document).ready(() => {

    const carritoJson = localStorage.getItem("carrito");
    const carrito = JSON.parse(carritoJson);

    let cantidad = 0;
    carrito.forEach(p => cantidad += p.cantidad);

    $("#cantidad-carrito").text(cantidad);

    const elementoProductos = $("#productos");
    let total = 0;

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

    const elTotal = $("<tr></tr>");
    elTotal.html(`
        <td/>
        <td>TOTAL</td>
        <td>$${total}</td>
    `)
    elementoProductos.append(elTotal);

    $("#boton-comprar").on("click", () => {
        alert("Compra realizada correctamente!")
    });
});