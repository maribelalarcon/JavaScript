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
class Carrito{
    constructor(){
        this.productos = []
    }
    agregarProducto (producto){
        this.productos.push(producto);
    }
    //document.write ("<h3> El producto y precio es...")
    mostrarProductos(){
        for (let producto of this.productos){
            document.write("<ul> <li> El producto ingresado es: " + producto.nombre + "</li>")
            document.write("<li> El precio del producto con Iva es: $" + producto.precio + "</li> </ul>");
        }
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
miCarrito.mostrarProductos();


//solicitar tipo de tarjeta y cantidad a cuotas a pagar. Luego mostrar valor. Document.write

const tarjeta = prompt("Que tarjeta tiene?").toLowerCase();
const cuotas = parseInt(prompt("En cuantas cuotas desea pagar?"));
const intereses = interesPorTarjeta(tarjeta);

 if(intereses == null){
     alert("No trabajamos con esa tarjeta")
 }else{
     const total = miCarrito.calcularTotal();
     document.write("<ul> <li> El precio total con interes es de $" + total + "</li>");
     document.write("<li>El valor de cada cuota es de $" + total / cuotas + "</li> </ul>");
    
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







