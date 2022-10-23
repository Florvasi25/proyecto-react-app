import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Item = ({item}) => {
    
    return(
        <Card style={{ width: '18rem' }} className="cardBody">
            <Card.Img className="imgCard" src={item.image} />
            <Card.Body>
                <Card.Title className="textoCard principal">{item.name}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Link to={`/item/${item.id}`}><Button className="botonCard">VER MÁS</Button></Link>
            </Card.Body>
        </Card>
    )
}