// arreglo de objetos "producto", cada objeto
// del arreglo va a tener todas las propiedades que necesitan
// los productos: nombre, descripcion, precio, imagen, etc.

const productos = [
    { id: "1", nombre: "Taza", precio: 200, imagen: "../images/taza.jpeg"},
    { id: "2", nombre: "Plato", precio: 500, imagen: "../images/platos.jpeg"},
    { id: "3", nombre: "Silla", precio: 1200, imagen: "../images/silla.jpg"},
]

// arreglo vacio que va a representar los productos
// en el carrito
let carrito = [];

const elementoCantidadCarrito = document.getElementById("cantidad-carrito");

const carritoJson = localStorage.getItem("carrito");

if (carritoJson !== null) {
    carrito = JSON.parse(carritoJson);
}

const actualizarCarrito = () => {

    let total = 0;

    carrito.forEach(producto => {
        total = total + producto.precio;
    });

    elementoCantidadCarrito.innerText = `${carrito.length} ($${total})`;

    const carritoJson = JSON.stringify(carrito);
    localStorage.setItem("carrito", carritoJson);
}

//funcion que tome los datos del arreglo,
// y los inserte en el DOM

const contendorDeProductos = document.getElementById("productos");

const actualizarProductos = () => {
    for (let producto of productos) {
        const elProducto = document.createElement("div");
        elProducto.innerHTML = 
            `<div class="col-md-4 text-center animate-box">
                <div class="product">
                    <div class="product-grid" style="background-position:center; background-image:url(${producto.imagen});">
                        <div class="inner">
                            <p>
                                <a href="#" data-id="${producto.id}" class="icon boton-agregar-carrito"><i class="icon-shopping-cart"></i></a>
                            </p>
                        </div>
                    </div>

                    <div class="desc">
                        <h3><a href="single.html">${producto.nombre}</a></h3>
                        <span class="price">$${producto.precio}</span>
                    </div>
                </div>
            </div>`;
        contendorDeProductos.appendChild(elProducto);
    }
}

actualizarProductos();
actualizarCarrito();

const botonesCarrito = document.getElementsByClassName("boton-agregar-carrito");

for (let boton of botonesCarrito) {
    boton.addEventListener("click", (event) => {
        const id = event.currentTarget.getAttribute("data-id");
        producto = productos.find((p) => p.id === id);
        carrito.push(producto);
        actualizarCarrito();
    })
}
