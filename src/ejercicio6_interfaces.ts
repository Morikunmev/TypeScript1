interface Producto {
  id: number;
  nombre: string;
  precio: number;
  quantity: number;
}
interface Zapatilla extends Producto {
  talla: number;
}
interface CarritoDeCompras {
  totalPrice: number;
  productos: (Producto | Zapatilla)[];
}
const carrito: CarritoDeCompras = {
  totalPrice: 100,
  productos: [
    {
      id: 1,
      nombre: "Producto 1",
      precio: 100,
      quantity: 1,
      talla: 5,
    },
  ],
};

interface CarritoOps{
    add: (product: Producto) => void,
    remove: (productId: number) => void,
    updateQuantity: (productId: number, quantity: number) => void)
}
interface CarritoOps{
    clear: () => void
}
const ops: CarritoOps ={
    add: (product: Producto) => {},
    remove: (productId: number) => {},
    updateQuantity: (productId: number, quantity: number) => {},
    clear: () => {}
}