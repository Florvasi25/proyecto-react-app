import { Link } from "react-router-dom";

export const Item = ({item}) => {
    return(
        <div className="containerCuerpoPrincipal">
            <div className="cardBody">
                <p className="textoCard principal">{item.name}</p>
                <img src={item.image} alt="" className="imgCard"></img>
                <p className="botonCard"><Link to={`/item/${item.id}`}>VER MÁS</Link></p>
            </div>
        </div>
    )
}