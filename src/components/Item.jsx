import { Link } from "react-router-dom";

export const Item = ({item}) => {
    return(
        <div className="cardBody">
            <p className="textoCard principal">{item.name}</p>
            <img src={item.image} alt="" className="imgCard"></img>
            <p><Link to={`/item/${item.id}`} className="botonCard">VER MÁS</Link></p>
        </div>
    )
}