
class Producto {
    constructor({ id, nombre, precio, imagen }) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}


$(document).ready(function(){

    $("#boton-cargar-productos").click(() => {

        $.get("productos.json", function(respuesta, estado) {


            // agregar "producto" por json
            const productos = [];

            // recibimos los productos del JSON y creamos instancias
            // de la clase Producto para cada uno
            respuesta.forEach((productoRespuesta) => {
                const p = new Producto(productoRespuesta);
                productos.push(p);
            })
    
            const carritoJson = localStorage.getItem("carrito");
            const carrito = carritoJson ? JSON.parse(carritoJson) : [];
        
            let cantidad = 0;
            carrito.forEach(p => cantidad += p.cantidad);
        
            $("#cantidad-carrito").text(cantidad);
        
            //funcion para agregar la propiedad cantidad al objeto literal para el carriti
            function agregarItem(objeto){
                console.log("Agregar objeto: ");
                Object.defineProperty(objeto, "cant", {value:1, writable:true});
                carrito.push(objeto);
            }
        
            //Funcion Actualizar Carrito
            function actualizarCarrito(){
                console.log("carrito", carrito.length)
                const carritoJson = JSON.stringify(carrito);
                localStorage.setItem("carrito", carritoJson);
                let cantidad = 0;
                carrito.forEach(producto => cantidad += producto.cantidad);
                $("#cantidad-carrito").text(cantidad);
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
        
                const productoCarrito = carrito.find((p)=>{
                    return p.id === idProducto;
                });
        
                if (productoCarrito) {
                    productoCarrito.cantidad = productoCarrito.cantidad + 1;
                } else {
                    producto.cantidad = 1;
                    carrito.push(producto);
                }
        
                actualizarCarrito();
        
        
                //agregar producto al carrito
                $('.alerta').fadeIn();
                setTimeout(() => $('.alerta').fadeOut(), 1000);
        
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
    
    
        })


    })

});








