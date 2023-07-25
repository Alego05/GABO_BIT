let eleccion = prompt ("¿Quieres beber o comer?");
let bebidas = prompt ("Elige entre: vino, ceveza, refresco o agua.");

if (eleccion == "beber"){
    if (bebidas=="vino" ||bebidas=="cerveza"){
        alert ("Dirijase a la barra");
    }else{
        alert("Dirijase a la tienda ");
    }
}else {
    alert ("Dirijase fuera de aqui");
}