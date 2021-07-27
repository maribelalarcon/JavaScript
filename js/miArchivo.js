$(document).ready(function(){
    console.log("El DOM esta listo")

});
// arreglo de objetos "producto"
const productos = [
    { id: "1", nombre: "Taza", precio: 200, imagen: "images/taza.jpeg"},
    { id: "2", nombre: "Plato", precio: 500, imagen: "images/platos.jpeg"},
    { id: "3", nombre: "Silla", precio: 1200, imagen: "images/silla.jpg"},
]

let carrito = [];

//funcion para agregar la propiedad cantidad al objeto literal para el carriti
function agregarItem(objeto){
    console.log("Agregar objeto: ");
    Object.defineProperty(objeto, "cant", {value:1, writable:true});
    carrito.push(objeto);
}

//Funcion Actualizar Carrito
function actualizarCarrito(){
    console.log("carrito", carrito.length)
    $("#cantidad-carrito").text(carrito.length);
}

//Recorro producto
for(const producto of productos) {
    $("#productos").append(`<div class="col-sm-4">
                                <img class="w-100" src="${producto.imagen}" />  
                                <p> Producto: ${producto.nombre}</p>
                                <b>$ ${producto.precio} </b>
                                <button class="btn" id="${producto.id}"> Comprar </button> 
                                <input type="number" min="1" value="1/>
                            </div>`)}
//definir funcion cuando ocurre evento
$("#productos .btn").on('click',function(evento) {
    console.log (`Compraste `,evento.target.id);
    const idProducto = evento.target.id;
    const producto = productos.find((p)=>{
        return p.id === idProducto;
    });
    console.log("producto ", producto);
    //agregar producto al carrito
    carrito.push(producto);
    actualizarCarrito();
})


function suscribir() {
    $("#alerta-suscripcion").removeClass("hide");
    $("#email").val("");
}


// Suscripcion
$("#email").on("keypress", (evento) => {
    if (evento.key === "Enter") {
        suscribir();
    }
});

$("#boton-suscribirse").on("click", () => {
    suscribir();
});









