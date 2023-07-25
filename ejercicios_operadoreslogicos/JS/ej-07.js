//Una tienda aplica un descuento del 15% para las compras que incluyan más de 10 artículos iguales cuyo precio sea superior a 30 dolares. Tu programa debe comprobar y calcular la cantidad a pagar sabiendo el número de artículos y el precio de cada uno y convertirlo a pesos Colombianos
let numA = parseInt (prompt("Cuantos articulos esta comprando"))
let preA = parseInt (prompt("Cual es el precio del articulo en dolares"))

if (numA > 10 && preA > 30 ){
    let precio = ((numA*preA)-( 0.15*(numA*preA)))*4
    alert("La cantidad a pagar en pesos colombianos es de " +precio+ ".")}
    else { precio = (numA*preA)*4}
    alert("La cantidad a pagar es de pesos "+precio+" colombianos.");