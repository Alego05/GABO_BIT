let nombre = prompt("Ingresa tu nombre: ");
let edad = prompt("Ingresa tu edad: ");

switch (edad) {
    case "18":
        alert("Tienes acceso a la disco");
        break;
    case "17":
        alert("Te falta un año para ingresar a la disco");
        break;
    default:
        alert("no pudimos validar tu edad")
        break;
}