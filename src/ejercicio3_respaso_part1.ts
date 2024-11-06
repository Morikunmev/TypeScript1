//Primeros ejemplos de ts sin escribir tipos
const a = 1;
const b = 2;
const c = a + b;

const obj = { name: "Pepe", agre: 30 };

//Unition types
type Hero = {
  readonly id?: `${string}-${string}-${string}-${string}-${string}`;
  name: String;
  age: Number;
  isActive?: boolean;
};
function createHero(hero: Hero): Hero {
  const { name, age } = hero;
  return {
    id: crypto.randomUUID(),
    name,
    age,
    isActive: true,
  };
}

type Color = `#${string}`;
const hexadecimalColor: Color = `#f22222`;

/*Templates Literal Types (tipos de Literales de Plantilla) en TS. Es una caracteristica que permite crear tipos basados en patrones de strings utilizando la sintaxis de template literlas (plantillas literales) que */
/**1. En el tipo Hero, la propiedad id usa un template literal type que define un patron especifico para UUIDs */
/**En el tipo Color, defines un tipo qeu debe comenzar con # seguido de cualquier string */

type Greeting = `hello ${string}`;
type EmailAddress = `${string}@${string}.${string}`;
type RGB = `rgb(${number},${number},${number})`;

let greeting: Greeting;
greeting = "hello world";
greeting = "hello 123";

//*Para valores (Template Literal)*/
const email: EmailAddress = `john@example.com`;
const color: RGB = `rgb(255,0,0)`;

// Ejemplo combinando ambos:
type UserRole = "admin" | "user" | "guest";
type Permission = `can_${UserRole}_${string}`;

const adminPermission: Permission = `can_admin_delete`;
const userPermission: Permission = `can_user_read`;
type CellValue = "X" | "O" | "";

const gameBoard: [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue]
] = [
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["X", "", "O"],
];

type RGB1 = [number, number, number];

const black: RGB1 = [0, 0, 0];
const white: RGB1 = [255, 255, 255];

/**Con esto no se puede modificar, ya que el mayor error de ts es que se le pueden añadir mas numeross */
/**
 * 
type RGB1 = readonly [number, number, number];
const black: RGB1 = [0, 0, 0];
const white: RGB1 = [255, 255, 255];
back.push(4)
 * 
 * 
 */