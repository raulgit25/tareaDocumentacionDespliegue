# Documentación del archivo `compras.js`

Este archivo implementa un sistema básico de compras en JavaScript, compuesto por tres clases principales: **Producto**, **Carrito** y **Usuario**.  
Permite simular la adición de productos a un carrito, calcular el total y finalizar una compra.

---

## Clase `Producto`

### Descripción  
Representa un producto disponible para comprar.  
Cada producto tiene un **nombre**, un **precio unitario** y una **cantidad**.

### Atributos
- `nombre` *(string)*: Nombre del producto (por ejemplo, `"Laptop"`).  
- `precio` *(number)*: Precio unitario del producto.  
- `cantidad` *(number)*: Cantidad de unidades que se van a comprar.

### Métodos
- `calcularTotal()`: Retorna el precio total del producto (`precio * cantidad`).

### Ejemplo de uso
```javascript
const laptop = new Producto("Laptop", 1200, 1);
console.log(laptop.calcularTotal()); // 1200


## Conclusión

El archivo `compras.js` demuestra un pequeño sistema orientado a objetos en JavaScript, donde:
- Los **productos** encapsulan datos individuales.  
- El **carrito** administra una colección de productos.  
- El **usuario** integra ambas partes para simular una compra real.
