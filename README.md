# Proyecto Final React JS: E-commerce


## Acerca del proyecto

El objetivo del proyecto es crear una app de un e-commerce para poder vender productos de tecnología.


## Uso

La app está creada a partir del uso de React JS como Framework utilizando HTML para la diagramación de los componentes además de CSS y Bootstrap para darle estilo. Utilicé Firestore como base de datos NoSQL. Firestore sirve para guardar datos en la nube y poder acceder y hacer consultas a ellos a través de su intalación en nuestra app.

_Para más información, consultar su [Documentación](https://firebase.google.com/docs/firestore?hl=es-419)_


## Roadmap

- [ ] Inicio
- [ ] Detalle del Producto
- [ ] Carrito
- [ ] Checkout
- [ ] ID de la orden


## Componentes

Los componentes con los que cuenta este proyecto son:

- **NavBar**: se puede visualizar en todas las rutas de la app. Cuenta con la posibilidad de volver al inicio, ver las categorías, ir al carrito y poder visualizar la cantidad de productos que se encuentran agregados a este útlimo.

- **ItemListContainer**: contiene la lógica para traer una colección de productos que se encuentran alojados en la nube de Firestore.

- **ItemList**: utiliza los datos traídos por el componente anterior y muestra los mismos de una manera ordenada en forma de cards.

- **ItemDetailContainer**: contiene la lógica para traer los datos en particular de solo un documento de Firestore.

- **ItemDetail**: utiliza los datos de ese documento y los muestra de manera ordenada los mismos datos que se muestra en la lista además de un detalle del producto, un contador (para agregar o restar productos) y el botón principal para agregar al carrito.

- **CartWidget**: visualización de los productos agregados al carrito. Cuenta con un contador que permite agregar o restar elementos, un botón para quitar todos los elementos de un mismo producto y la visualización de subtotales y total final. Y finalmente un botón que lleva al Checkout.

- **Checkout**: vista resumida final de todo lo agregado al carrito. Dispone de un formulario para llenar con los datos del comprador (nombre, teléfono, e-mail y confirmación del e-mail) además de visualizar los subtotales y el total final. Luego de confirmar la compra se muestra un mensaje de éxito con el ID de la compra. Para que la compra pueda ser realizada el formulario debe estar completo en su totalidad y hacer que los dos campos de e-mail coincidan entre sí. 


## Firebase

Como base de datos utilizamos Firebase que es una plataforma de desarrollo de apps que ayuda a compilar y desarrollar apps. Firebase cuenta con una nube llamada Firestore la cual es una base de datos NoSQL que aloja nuestros datos y nos permite acceder o hacer consultas a ella desde nuestra app.
En este proyecto, Firestore se utiliza de la siguientes formas:

- **traer datos**: trae datos a alojados en la nube que después puedo usar para mostrar de manera ordenada.
- **consultas**: mediante el uso de querys puedo preguntar a la base de datos si existen ciertos items (como por ejemplo las categorías) y me devuelve los datos que coinciden con la consulta.
- **generar colecciones**: almacena los ID de las ordenes que se crean al finalizar la compra.


## Librerías

Las librerías utilizadas fueron sugeridas por las rúbricas de este proyecto:

1. react-router-dom
2. firebase

En mi caso en particular decidí incorporar React Bootstrap como librería ya que ofrece soluciones rápidas para mejorar el estilo de la app.

3. react-bootstrap

## Requerimientos opcionales

Como requerimiento opciones opté por agregar los siguientes:

1. Categorías dinámicas: para relizar consultas a la base de datos y que muestre las categorías de manera filtrada. Esto se logró mediante la creación de una colección de categorías en Firestore y luego haciendo una consulta a esta nueva categoría desde nuestra app para que solo se muestren los ítems que contengan el mismo valor de categoría que la de la consulta. El dropdown muestra dinámicamente las categorías que se incluyan en la colección de categorías.
2. LocalStorage: para que las modificaciones que se le hagan al carrito de compras ya sea, agregar nuevos productos, borrar la lista, modificar cantidad, etc, se mantengan aún refrescando o cerrando el navegador.