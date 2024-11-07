/*Type Guard */

interface Mario {
    name: string;
    saltar: () => void;
}

interface Sonic {
    nombre: string;
    correr: () => void;
}

type Persona = Mario | Sonic;

// Type guard
//Dejame comprobar si personaje es sonic
//Y esta funcion determina si es sonic o no
function checkIsSonic(personaje: Persona): personaje is Sonic {
    return (personaje as Sonic).correr !== undefined;
}

function jugar(personaje: Persona) {
    if (checkIsSonic(personaje)) {
        // TypeScript ahora sabe que personaje es Sonic
        personaje.correr();
    } else {
        // TypeScript sabe que personaje es Mario
        personaje.saltar();
    }
}

/**EJEMPLO DE NEVER */
function fn(x: string | number) {
    if (typeof x === 'string') {
      // x es string
      x.toUpperCase();
    } else if (typeof x === 'number') {
      // do something
      x.toFixed(2);
    } else {
      // never
      x;
    }
  }
  