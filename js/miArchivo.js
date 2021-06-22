
//pedir una opcion a ingresar
let precio;
const producto = prompt("Que desea comprar? \n A-TAZA \n B-VASOS").toUpperCase()
switch(producto){
    case "A":
        precio = 500;
        alert("Elegiste TAZA--> Su precio es $500")
        break
    case "B":
        precio = 200;
        alert("Elegiste VASO--> Su precio es $200")
        break
}

//solicitar tipo de tarjeta y cantidad a cuotas a pagar. Luego mostrar valor.
let tarjetaDisponible = prompt("Que tarjeta tiene?").toLowerCase();
let cuotasTotal = parseInt(prompt("En cuantas cuotas desea pagar?"));
const intereses = interesPorTarjeta(tarjetaDisponible);
if(intereses == null){
    alert("No trabajamos con esa tarjeta")
}else{
    const total = calcularTotal(precio, intereses);
    alert("El precio total con interes es de $" + total);
    alert("El valor de cada cuota es de $" +total/cuotasTotal);
    
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
    }
}

function calcularTotal(precio, intereses){
    return precio+ (precio * intereses)/100;
}
