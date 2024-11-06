"use strict";
let valorAny = 4;
valorAny = "hola";
valorAny = true;
function procesarAny(dato) {
    return dato;
}
let valorUnknown = 4;
function procesarUnknown(dato) {
    if (typeof dato === "string") {
        return dato.toUpperCase();
    }
    return String(dato);
}
function error(mensaje) {
    throw new Error(mensaje);
}
function loopfinito() {
    while (true) {
        console.log("Esto nunca termina");
    }
}
function logMensaje(mensaje) {
    console.log(mensaje);
}
function procesarCoordenadas(punto) {
    const [x, y] = punto;
    return Math.sqrt(x * x + y * y);
}
const punto = [3, 4];
procesarCoordenadas([3, 2]);
var DiaSemana;
(function (DiaSemana) {
    DiaSemana[DiaSemana["Lunes"] = 0] = "Lunes";
    DiaSemana[DiaSemana["Martes"] = 1] = "Martes";
    DiaSemana[DiaSemana["Miercoles"] = 2] = "Miercoles";
    DiaSemana[DiaSemana["Jueves"] = 3] = "Jueves";
    DiaSemana[DiaSemana["Viernes"] = 4] = "Viernes";
})(DiaSemana || (DiaSemana = {}));
function obtenerMensajeDia(dia) {
    switch (dia) {
        case DiaSemana.Lunes:
            return "Inicio de semana";
        case DiaSemana.Martes:
            return "Segunda";
        case DiaSemana.Miercoles:
            return "Tercera";
        case DiaSemana.Jueves:
            return "Cuarta";
        case DiaSemana.Viernes:
            return "Quinta";
        default:
            return "Dia desconocido";
    }
}
function esDiaLaborable(dia) {
    return dia >= DiaSemana.Lunes && dia <= DiaSemana.Viernes;
}
console.log(esDiaLaborable(DiaSemana.Lunes));
console.log(obtenerMensajeDia(DiaSemana.Viernes));
function obtenerNombreDia(dia) {
    return DiaSemana[dia];
}
//# sourceMappingURL=ejercicio1.js.map