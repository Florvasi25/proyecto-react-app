export const Detail = ({card}) => {

    return(
        <div className="containerCard">
            <div className="cardBody">
                <p className="textoCard principal">{card.name}</p>
                <p className="textoCard">Location: {card.location.name}</p>
                <p className="textoCard">Species: {card.species}</p>
                <img src={card.image} alt="" className="imgCard"></img>
            </div>
        </div>
    )
}

