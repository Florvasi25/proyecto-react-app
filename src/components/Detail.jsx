export const Detail = ({card}) => {

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
                    <button className="botonAgregar" id="addToCart">AGREGAR AL CARRITO</button>
                </div>
            </div>
        </div>
    )
}

