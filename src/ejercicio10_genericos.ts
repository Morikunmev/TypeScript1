// Genéricos
// Permiten crear componentes reutilizables que pueden trabajar con diferentes tipos

// Función genérica básica
function identity<T>(arg: T): T {
    return arg;
}
let output1 = identity<string>("myString");
let output2 = identity(123); // Inferencia de tipo

// Interfaz genérica
interface Box<T> {
    value: T;
}
let box: Box<number> = { value: 42 };

// Clase genérica
class Queue<T> {
    private data: T[] = [];
    push(item: T) { this.data.push(item); }
    pop(): T | undefined { return this.data.shift(); }
}