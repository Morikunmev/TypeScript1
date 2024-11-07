"use strict";
function checkIsSonic(personaje) {
    return personaje.correr !== undefined;
}
function jugar(personaje) {
    if (checkIsSonic(personaje)) {
        personaje.correr();
    }
    else {
        personaje.saltar();
    }
}
function fn(x) {
    if (typeof x === 'string') {
        x.toUpperCase();
    }
    else if (typeof x === 'number') {
        x.toFixed(2);
    }
    else {
        x;
    }
}
//# sourceMappingURL=ejercicio8_interface2.js.map