// Clase que representa un producto individual
class Producto {
  /**
   * Constructor de la clase Producto
   * @param {string} nombre - Nombre del producto
   * @param {number} precio - Precio unitario del producto
   * @param {number} cantidad - Cantidad de unidades del producto
   */
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  /**
   * Calcula el precio total del producto multiplicando su precio unitario por la cantidad
   * @returns {number} Total del producto (precio * cantidad)
   */
  calcularTotal() {
    return this.precio * this.cantidad;
  }
}

// Clase que representa un carrito de compras
class Carrito {
  /**
   * Constructor de la clase Carrito
   * Inicializa un arreglo vacío para almacenar los productos
   */
  constructor() {
    this.productos = [];
  }

  /**
   * Agrega un producto al carrito
   * @param {Producto} producto - Instancia de la clase Producto a agregar
   */
  agregarProducto(producto) {
    this.productos.push(producto);
  }

  /**
   * Calcula el total del carrito sumando el total de todos los productos
   * @returns {number} Total acumulado de la compra
   */
  calcularTotalCarrito() {
    return this.productos.reduce(
      (total, producto) => total + producto.calcularTotal(),
      0
    );
  }

  /**
   * Vacía el carrito eliminando todos los productos
   */
  vaciarCarrito() {
    this.productos = [];
  }
}

// Clase que representa un usuario con su propio carrito
class Usuario {
  /**
   * Constructor de la clase Usuario
   * @param {string} nombre - Nombre del usuario
   * @param {string} correo - Correo electrónico del usuario
   */
  constructor(nombre, correo) {
    this.nombre = nombre;
    this.correo = correo;
    this.carrito = new Carrito(); // Cada usuario tiene su propio carrito
  }

  /**
   * Agrega un producto al carrito del usuario
   * @param {Producto} producto - Producto a agregar
   */
  agregarProductoAlCarrito(producto) {
    this.carrito.agregarProducto(producto);
  }

  /**
   * Finaliza la compra del usuario, mostrando el total en consola
   * y vaciando el carrito después del pago
   */
  finalizarCompra() {
    const total = this.carrito.calcularTotalCarrito();
    console.log(
      `Usuario ${this.nombre} ha realizado una compra por un total de ${total}€`
    );
    this.carrito.vaciarCarrito();
  }
}

// Ejemplo de uso:

// Se crean algunos productos
const producto1 = new Producto("Laptop", 1200, 1);
const producto2 = new Producto("Mouse", 20, 2);

// Se crea un usuario con su correo
const usuario = new Usuario("Juan", "juan@example.com");

// El usuario agrega productos al carrito
usuario.agregarProductoAlCarrito(producto1);
usuario.agregarProductoAlCarrito(producto2);

// El usuario finaliza la compra
usuario.finalizarCompra();