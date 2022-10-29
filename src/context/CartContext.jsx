import { createContext, useContext, useState } from "react";


const CartContext = createContext()

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({children}) => {
    
    const [cart, setCart] = useState([])

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
            precioTotal += producto.price * producto.qty;
        });
        return precioTotal
    }

    const suma = (producto) => {
        console.log(producto);
        const copiaCart = [...cart]

        const productoModificado = copiaCart.find((p) => p.id === producto.id);
        if (productoModificado) {
            productoModificado.qty ++
        }
        return setCart(copiaCart)
    }

    const resta = (producto) => {
        const copiaCart = [...cart]

        const productoModificado = copiaCart.find((p) => p.id === producto.id);

        if (productoModificado) {
            if (producto.qty === 1) {
                return quitar(producto)
            } else {
                productoModificado.qty --
            }
        }
        return setCart(copiaCart)
    }

    const quitar = (producto) => {
        const quitarElemento = cart.filter((elemento) => elemento.id !== producto.id)
        return setCart(quitarElemento)
    }

    const vaciarCarrito = () => {
        setCart([])
    }

    return <CartContext.Provider value={{calcularTotalCarrito, precioTotal, agregarAlCarrito, cart, suma, resta, quitar, vaciarCarrito}}>
        {children}
    </CartContext.Provider>
}