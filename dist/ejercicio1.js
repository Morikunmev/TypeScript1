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
loopfinito();
//# sourceMappingURL=ejercicio1.js.map