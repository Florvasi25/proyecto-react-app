import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const agregarAlCarrito = (producto) => {
        // let indexProductoAgregado = cart.some((p) => p.id === producto.id);
        // if (indexProductoAgregado) {
        //     cart[indexProductoAgregado].qty += 1;
        // } else {
            // producto.qty = 1;
            // cart.push(producto);
        // }
        const nuevoCart = [...cart, producto] 
        console.log("agregarAlCarrito")
        console.log(nuevoCart)
        return setCart(nuevoCart)
    }

    const calcularTotalCarrito = () => {
        let totalProductos = 0;
        cart.forEach((producto) => {
            totalProductos += 1 //producto.qty;
        });
        return totalProductos;
    }

    const precioTotal = () => {
        let precioTotal = 0;
        cart.forEach((producto) => {
            precioTotal += 1 //producto.price * producto.qty;
        });
        return precioTotal
        // document.getElementById("precioTotal").innerHTML = `<div>
        //     <p class="total">TOTAL: $${precioTotal}</p>
        // </div>`;
    }

    return <CartContext.Provider value={{calcularTotalCarrito, precioTotal, agregarAlCarrito, cart}}>
        {children}
    </CartContext.Provider>
}