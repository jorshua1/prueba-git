/*Una tienda aplica un descuento del 15% para las compras que incluyan más de 10 artículos iguales,
donde el precio supere los 40 euros. Tu programa debe comprobar y calcular la cantidad a pagar
sabiendo el número de artículos y el precio de un articulo. */

let articulos = parseInt(prompt("Ingrese la cantidad de articulos de la compra"));
let precio = parseInt(prompt("Ingrese el precio de un articulo"));
let x = (precio*articulos)
let descuento = x - (x * 0.15)

if ((isNaN(articulos)) || (isNaN(precio))){
    alert("Digite valores validos ")
}else if(articulos > 10 && precio > 40){
    alert("Tiene un descuento del 15% el valor a pagar es de: " + descuento )
}else {
    alert("No tiene descuento")
}