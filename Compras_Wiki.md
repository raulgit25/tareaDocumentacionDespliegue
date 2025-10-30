# 🛒 Documentación del archivo `compras.js`

Este archivo implementa un sistema básico de compras en JavaScript, compuesto por tres clases principales: **Producto**, **Carrito** y **Usuario**.  
Permite simular la adición de productos a un carrito, calcular el total y finalizar una compra.

---

## 📦 Clase `Producto`

**Descripción:**  
Representa un producto disponible para comprar.  
Cada producto tiene un **nombre**, un **precio unitario** y una **cantidad**.

**Atributos:**
- `nombre` *(string)*: Nombre del producto (por ejemplo, `"Laptop"`).  
- `precio` *(number)*: Precio unitario del producto.  
- `cantidad` *(number)*: Cantidad de unidades que se van a comprar.

**Métodos:**
- `calcularTotal()`: Retorna el precio total del producto (`precio * cantidad`).

**Ejemplo de uso:**
```javascript
const laptop = new Producto("Laptop", 1200, 1);
console.log(laptop.calcularTotal()); // 1200
```

---

## 🛍️ Clase `Carrito`

**Descripción:**  
Representa el carrito de compras de un usuario.  
Permite agregar productos, calcular el total y vaciar el carrito.

**Atributos:**
- `productos` *(array)*: Lista de objetos de tipo `Producto` agregados al carrito.

**Métodos:**
- `agregarProducto(producto)`: Agrega un producto al carrito.  
- `calcularTotalCarrito()`: Retorna el total acumulado de todos los productos del carrito.  
- `vaciarCarrito()`: Elimina todos los productos del carrito.

**Ejemplo de uso:**
```javascript
const carrito = new Carrito();
carrito.agregarProducto(new Producto("Mouse", 20, 2));
console.log(carrito.calcularTotalCarrito()); // 40
```

---

## 👤 Clase `Usuario`

**Descripción:**  
Representa a un usuario que puede tener su propio carrito de compras.

**Atributos:**
- `nombre` *(string)*: Nombre del usuario.  
- `correo` *(string)*: Correo electrónico del usuario.  
- `carrito` *(Carrito)*: Instancia del carrito personal del usuario.

**Métodos:**
- `agregarProductoAlCarrito(producto)`: Agrega un producto al carrito del usuario.  
- `finalizarCompra()`: Calcula el total del carrito, muestra un mensaje en consola con el total y vacía el carrito.

**Ejemplo de uso:**
```javascript
const usuario = new Usuario("Juan", "juan@example.com");
usuario.agregarProductoAlCarrito(new Producto("Laptop", 1200, 1));
usuario.finalizarCompra(); // "Usuario Juan ha realizado una compra por un total de 1200€"
```

---

## ⚙️ Funcionamiento general del archivo `compras.js`

1. Se crean instancias de productos (`Producto`).
2. Se crea un usuario (`Usuario`) con su propio carrito.
3. El usuario agrega productos al carrito usando `agregarProductoAlCarrito()`.
4. Al finalizar, llama a `finalizarCompra()`, que:
   - Calcula el total del carrito.
   - Muestra un mensaje con el total de la compra.
   - Vacía el carrito.

**Ejemplo completo:**
```javascript
const producto1 = new Producto("Laptop", 1200, 1);
const producto2 = new Producto("Mouse", 20, 2);

const usuario = new Usuario("Juan", "juan@example.com");

usuario.agregarProductoAlCarrito(producto1);
usuario.agregarProductoAlCarrito(producto2);

usuario.finalizarCompra();
// Usuario Juan ha realizado una compra por un total de 1240€
```

---

## 🧩 Conclusión

El archivo `compras.js` demuestra un pequeño sistema orientado a objetos en JavaScript, donde:
- Los **productos** encapsulan datos individuales.  
- El **carrito** administra una colección de productos.  
- El **usuario** integra ambas partes para simular una compra real.
