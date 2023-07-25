let numero1 = parseInt (prompt("ingrese un numero entero"))
let numero2 = parseInt (prompt("ingrese otro numero entero"))
let respuesta= numero1/numero2

if (numero1==0 || numero2==0){
    alert("error")
}else{
    alert(respuesta)
}