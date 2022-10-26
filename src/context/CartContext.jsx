import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [count, setCount] = useState (1)

    const agregarAlCarrito = (producto, cantidad) => {

        const copiaCart = [...cart]
        const indexProductoAgregado = copiaCart.findIndex((p) => p.id === producto.id);
        if (indexProductoAgregado !== -1) {
            copiaCart[indexProductoAgregado].qty += cantidad;
        } else {
            producto.qty = cantidad;
            copiaCart.push(producto);
        }
       
        return setCart(copiaCart)
       
        // const nuevoCart = copiaCart.map((nuevo) => {
        //     if (nuevo.id === producto.id) {
        //         return {...nuevo, qty: nuevo.qty + cantidad}
        //     } else {
        //         return {...nuevo, qty: cantidad}
        //     }
        // });

        // if (nuevoCart.length === 0) {
        //     return setCart([{...producto, qty: cantidad}])
        // } else {
        // }

    }

    const calcularTotalCarrito = () => {
        let totalProductos = 0;
        cart.forEach((producto) => {
            totalProductos += producto.qty;
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

    const suma = () => {
        return setCount(count + 1)
    }

    const resta = () => {
        if (count !== 1) {
            return setCount(count - 1)
        }
    }

    const quitar = (producto) => {
        const quitarElemento = cart.filter((elemento) => elemento.id !== producto.id)
        return setCart(quitarElemento)
    }
    return <CartContext.Provider value={{calcularTotalCarrito, precioTotal, agregarAlCarrito, cart, suma, resta, count, quitar}}>
        {children}
    </CartContext.Provider>
}