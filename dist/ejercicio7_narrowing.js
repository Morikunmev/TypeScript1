"use strict";
function mostrarLongitud(objeto) {
    if (typeof objeto === "number") {
        console.log(objeto.toString().length);
    }
    return objeto.toString().length;
}
mostrarLongitud(1);
function jugar1(personaje) {
    if (personaje.company === "Nintendo") {
        personaje.saltar();
        return;
    }
    personaje.correr();
}
//# sourceMappingURL=ejercicio7_narrowing.js.map