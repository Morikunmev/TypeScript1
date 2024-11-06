let valorAny: any = 4;
valorAny = "hola";
valorAny = true;
function procesarAny(dato: any): any {
  return dato;
}
//Uknow
let valorUnknown: unknown = 4;
function procesarUnknown(dato: unknown): string {
  if (typeof dato === "string") {
    return dato.toUpperCase();
  }
  return String(dato);
}
//Never - Para funcioens que nunca retornan
function error(mensaje: string): never {
  throw new Error(mensaje);
}
function loopfinito(): never {
  while (true) {
    console.log("Esto nunca termina");
  }
}

//Void
function logMensaje(mensaje: string): void {
  console.log(mensaje);
}
//Tuple - Array con numero fijo de elementos de tipos especificos
type Coordenadas = [number, number];
function procesarCoordenadas(punto: Coordenadas): number {
  const [x, y] = punto;
  return Math.sqrt(x * x + y * y);
}

const punto: Coordenadas = [3, 4];
procesarCoordenadas([3, 2]);

//Enum - conjunto de constantes nombradas
enum DiaSemana {
  Lunes,
  Martes,
  Miercoles,
  Jueves,
  Viernes,
}
function obtenerMensajeDia(dia: DiaSemana): string {
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

function esDiaLaborable(dia: DiaSemana): boolean {
  return dia >= DiaSemana.Lunes && dia <= DiaSemana.Viernes;
}

//*Para llamar las fuc
console.log(esDiaLaborable(DiaSemana.Lunes));
console.log(obtenerMensajeDia(DiaSemana.Viernes));

/*Funcion que retorna el nombre del dia*/
function obtenerNombreDia(dia: DiaSemana): string {
  return DiaSemana[dia];
}
