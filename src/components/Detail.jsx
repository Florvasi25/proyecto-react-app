import { NavLink } from "react-router-dom"

 export const Detail = ({card}) => {

    return(
        <div className="containerCuerpoPrincipal">
            <div className="cardBody">
                <p className="textoCard principal">{card.name}</p>
                <p className="textoCard principal">{card.name}</p>
                <p className="textoCard principal">{card.name}</p>
                <img src={card.image} alt="" className="imgCard"></img>
            </div>
        </div>
    )
}

