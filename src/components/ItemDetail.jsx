import { useCartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

export const ItemDetail = ({item}) => {
    
    const {agregarAlCarrito, suma, resta, count} = useCartContext()


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
                        <button className="botonCount" onClick={resta}>-</button>{count}<button className="botonCount" onClick={suma}>+</button>
                    </div>
                    <Link><button className="botonAgregar" id="addToCart" onClick={() => agregarAlCarrito(item, count)}>AGREGAR AL CARRITO</button></Link>
                </div>
            </div>
        </div>
    )
}

