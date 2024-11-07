/**CONCEPTOS DE NARROWING */

/**Primera forma de hacer narrowing */
function mostrarLongitud(objeto: number | string) {
  if (typeof objeto === "number") {
    console.log(objeto.toString().length);
  }
  return objeto.toString().length;
}
mostrarLongitud(1);
/**Segunda forma de hacer narrowing */
interface Mario {
  company: "Nintendo";
  nombre: string;
  saltar: () => void;
}

interface Sonic {
  company: "Sega";
  nombre: string;
  correr: () => void;
}
type Personaje = Mario | Sonic;

function jugar1(personaje: Personaje) {
  if (personaje.company === "Nintendo") {
    personaje.saltar() // ESTE ES MARIO
    return
  }
  personaje.correr() // SEGURO QUE SOLO LLEGA A SONIC
}
