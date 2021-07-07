// "CONCEPTO DE OBJETO"
class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.disponible = true;
    }

    vender(){
        this.disponible = false;
    }

    sumarIva (){
        this.precio = this.precio * 1.21;
    }
}
 //Agregar carrito
class Carrito {
    constructor(){
        this.productos = []
    }

    agregarProducto (producto){
        this.productos.push(producto);
    }

    sumarIva (){
        this.productos = this.productos.map(producto => {
            producto.sumarIva()
            return producto;
        })
    }

    calcularTotal(){
        let total= 0;
        for(const producto of this.productos){
            total = total + producto.precio;
        }
        return total;
    }
 
}
//pedir una opcion a ingresar
const miCarrito = new Carrito();

let continuar = "SI";
do {
    let nombre = prompt ("Ingrese el nombre del producto a comprar");
    let precioIngresado = prompt("Ingrese el precio del producto");
    const miProducto = new Producto(nombre, precioIngresado);
    miCarrito.agregarProducto(miProducto);
    continuar = prompt("Desea seguir agregando productos? \n SI - NO")
} while(continuar == "SI")
    
miCarrito.sumarIva(); 

//solicitar tipo de tarjeta y cantidad a cuotas a pagar. Luego mostrar valor. Document.write

const tarjeta = prompt("Que tarjeta tiene?").toLowerCase();
const cuotas = parseInt(prompt("En cuantas cuotas desea pagar?"));
const intereses = interesPorTarjeta(tarjeta);

 if(intereses == null){
     alert("No trabajamos con esa tarjeta")
 }else{
     const total = miCarrito.calcularTotal();
     
    //TRABAJE SOBRE DESAFIO 8 -DOM-
     const elementoListaDeProductos = document.getElementById("lista-de-productos")
     const elementoTotal = document.getElementById("total")

     for (let producto of miCarrito.productos) {
         const elementoProducto = document.createElement("li");
         elementoProducto.innerText = `${producto.nombre}: ($${producto.precio})`;
         elementoListaDeProductos.appendChild(elementoProducto);
     }

     elementoTotal.innerText = `$${total}`;
 }

 function interesPorTarjeta(tarjeta){
     if(tarjeta == "santander"){
        return 20;
     }else if (tarjeta == "visa"){
         return 10;
     }else if (tarjeta == "mastercard"){
        return 15;
     }else {
         return null;
     } }

function calcularTotal(precio, intereses){
    return precio + (precio * intereses) / 100;
}







