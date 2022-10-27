import { useCartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import { useState } from "react"

function suma(acumulador) {
    return acumulador + 1;
}

function resta(acumulador) {
    if (acumulador === 1) {
        return acumulador
    } else {
        return acumulador - 1
    }
}

export const ItemDetail = ({item}) => {
    
    const {agregarAlCarrito} = useCartContext()
    const [contador, setContador] = useState(1)

    return(
        <div className="containerCardDetail">
            <div>
                <img src={item.image} alt="" className="imgCard"></img>
            </div>
            <div>
                <div className="cardBodyDetail">
                    <h1 className="textoCard principal">{item.name}</h1>
                    <h2>${item.price}</h2>
                    <div className="botonesCantidad">
                        <button className="botonCount"  onClick={() => setContador(resta)}>-</button>{contador}<button className="botonCount"  onClick={() => setContador(suma)}>+</button>
                    </div>
                    <Link><button className="botonAgregar" id="addToCart" onClick={() => agregarAlCarrito(item, contador)}>AGREGAR AL CARRITO</button></Link>
                </div>
            </div>
        </div>
    )
}

