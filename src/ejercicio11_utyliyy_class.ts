// Utility Types más comunes:

// 1. Partial<T> - Hace todas las propiedades opcionales
interface User {
    name: string;
    age: number;
}
type PartialUser = Partial<User>;
// Equivalente a: { name?: string; age?: number; }

// 2. Required<T> - Hace todas las propiedades requeridas
interface Config {
    name?: string;
    age?: number;
}
type RequiredConfig = Required<Config>;
// Equivalente a: { name: string; age: number; }

// 3. Pick<T, K> - Selecciona un subconjunto de propiedades
type NameOnly = Pick<User, 'name'>;
// Equivalente a: { name: string; }

// 4. Omit<T, K> - Omite ciertas propiedades
type UserWithoutAge = Omit<User, 'age'>;
// Equivalente a: { name: string; }

// 5. Record<K, T> - Crea un objeto con claves K y valores T
type UserRoles = Record<string, boolean>;
// Equivalente a: { [key: string]: boolean }

// 6. Readonly<T> - Hace todas las propiedades de solo lectura
type ReadonlyUser = Readonly<User>;
// Equivalente a: { readonly name: string; readonly age: number; }

// 7. ReturnType<T> - Obtiene el tipo de retorno de una función
function getMessage(): string {
    return "Hello";
}
type MessageType = ReturnType<typeof getMessage>; // string

// 8. Parameters<T> - Obtiene los tipos de los parámetros de una función
function buildUser(name: string, age: number) {}
type UserParams = Parameters<typeof buildUser>; // [string, number]

// Ejemplo práctico combinando varios conceptos
interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
}

type UserResponse = ApiResponse<User>;
type PartialUserResponse = ApiResponse<Partial<User>>;