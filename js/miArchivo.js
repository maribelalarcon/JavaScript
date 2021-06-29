
// //pedir una opcion a ingresar
// let precio;
// const producto = prompt("Que desea comprar? \n A-TAZA \n B-VASOS").toUpperCase()
// switch(producto){
//     case "A":
//         precio = 500;
//         alert("Elegiste TAZA--> Su precio es $500")
//         break
//     case "B":
//         precio = 200;
//         alert("Elegiste VASO--> Su precio es $200")
//         break
// }

// //solicitar tipo de tarjeta y cantidad a cuotas a pagar. Luego mostrar valor.
// let tarjetaDisponible = prompt("Que tarjeta tiene?").toLowerCase();
// let cuotasTotal = parseInt(prompt("En cuantas cuotas desea pagar?"));
// const intereses = interesPorTarjeta(tarjetaDisponible);
// if(intereses == null){
//     alert("No trabajamos con esa tarjeta")
// }else{
//     const total = calcularTotal(precio, intereses);
//     alert("El precio total con interes es de $" + total);
//     alert("El valor de cada cuota es de $" +total/cuotasTotal);
    
// }

// function interesPorTarjeta(tarjeta){
//     if(tarjeta == "santander"){
//         return 20;
//     }else if (tarjeta == "visa"){
//         return 10;
//     }else if (tarjeta == "mastercard"){
//         return 15;
//     }else {
//         return null;
//     }
// }

// function calcularTotal(precio, intereses){
//     return precio+ (precio * intereses)/100;
// }

//Desafio 5 "Incorporar Objetos"

// class Vaso{
//     constructor(elegirColor, unidades){
//         this.elegirColor = elegirColor;
//         this.unidades = unidades;
//         this.precio = 200;
//     }
//     compro(){
//         this.precioAPagar = (this.precio * this.unidades);
//         alert("El vaso que selecciono es de color: "  + (this.elegirColor) +"\n"+ (this.unidades) + "  unidades \n El precio a pagar es " + (this.precioAPagar));
//     }
// }

// let elegirColor = prompt("Que color de vaso desea elegir?");
// let unidades = prompt("Cuantas unidades desea llevar?")
// const vaso1 = new Vaso (elegirColor,unidades);
// vaso1.compro()

//Desafio 6 "CONCEPTO DE OBJETO"

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

class Carrito{
    constructor(){
        this.productos = []
    }
    agregarProducto (producto){
        this.productos.push(producto);
    }

    mostrarProductos(){
        for (let producto of this.productos){
            console.log ("El producto ingresado es: " + producto.nombre );
            console.log ("El precio del producto con Iva es: $" + producto.precio);
        }
    }

    sumarIva (){
        this.productos = this.productos.map(producto => {
            producto.sumarIva()
            return producto;
        }
    }
 
}

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








