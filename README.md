# tareaDocumentacionDespliegue
## Funcionamiento de `compras.js`

## Creación de productos  
Se crean instancias de la clase `Producto` indicando su nombre, precio y cantidad.

## Creación de usuario  
Se instancia un `Usuario` con su nombre y correo, generando automáticamente un carrito vacío.

## Agregar productos al carrito  
El usuario puede agregar cualquier producto al carrito mediante el método `agregarProductoAlCarrito()`.

## Calcular total del carrito  
El carrito calcula el total sumando los totales de cada producto (`precio * cantidad`) usando `calcularTotalCarrito()`.

## Finalizar compra  
Al llamar `finalizarCompra()`:
- Se calcula el total de la compra.  
- Se muestra un mensaje en consola indicando el nombre del usuario y el total a pagar.  
- Se vacía el carrito para comenzar una nueva compra.

## Ejemplo completo
```javascript
const producto1 = new Producto("Laptop", 1200, 1);
const producto2 = new Producto("Mouse", 20, 2);

const usuario = new Usuario("Juan", "juan@example.com");

usuario.agregarProductoAlCarrito(producto1);
usuario.agregarProductoAlCarrito(producto2);

usuario.finalizarCompra();
// Usuario Juan ha realizado una compra por un total de 1240€
