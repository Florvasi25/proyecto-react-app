import { Link } from "react-router-dom";

export const ItemList = ({itemList}) => {

    return(
        <div className="containerCuerpoPrincipal">
            {itemList.map((value) => {
                return (
                    <div className="cardBody">
                        <div className="containerImg">
                            <img className="imgCard" src={value.image} alt=""/>
                        </div>
                        <div className="containerTexto">
                            <h1 className="textoCard principal">{value.name}</h1>
                            <p className="textoCard precio">${value.price}</p>
                            <Link to={`/item/${value.id}`}><button className="botonCard">VER MÁS</button></Link>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};