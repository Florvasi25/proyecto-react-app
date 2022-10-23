import { useCartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

export const ItemDetail = ({card}) => {
    
    const {agregarAlCarrito} = useCartContext()

    return(
        <div className="containerCardDetail">
            <div>
                <img src={card.image} alt="" className="imgCard"></img>
            </div>
            <div>
                <div className="cardBodyDetail">
                    <p className="textoCard principal">{card.name}</p>
                    <p className="textoCard">Location: {card.location.name}</p>
                    <p className="textoCard">Species: {card.species}</p>
                    <div className="botonesCantidad">
                        <button id="removeOne">-</button>COUNT<button id="addOne">+</button>
                    </div>
                    <Link to="/cart"><button className="botonAgregar" id="addToCart" onClick={() => agregarAlCarrito(`${card.name}`)}>AGREGAR AL CARRITO</button></Link>
                </div>
            </div>
        </div>
    )
}

