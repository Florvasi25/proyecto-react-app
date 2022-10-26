import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

export const ItemList = ({itemList}) => {

    return(
        <div className="containerCuerpoPrincipal">
            {itemList.map((value) => {
                return <Card style={{ width: '18rem' }} className="cardBody">
                <Card.Img className="imgCard" src={value.image} />
                <Card.Body>
                    <Card.Title className="textoCard principal">{value.name}</Card.Title>
                    <p>{value.price}</p>
                    <Link to={`/item/${value.id}`}><button className="botonCard">VER MÁS</button></Link>
                </Card.Body>
                </Card>
            })}
        </div>

    );
};