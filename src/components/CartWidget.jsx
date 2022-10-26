import { useCartContext } from "../context/CartContext"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const CartWidget = () => {

    const {cart, suma, resta, count, quitar} = useCartContext()

    return(
        <Container fluid="lg">
            {cart.map((value) => {
            console.log("Value:");
            console.log(value);
            return <Row className="tabla">
                    <Col lg="3" className="colImage">
                        <img src={value.image} alt="" className="tableImage"/>
                    </Col>
                    <Col lg="6" className="colText">
                        <h4>{value.name}</h4><br />
                        <p>{value.description}</p><br />
                        <button className="botonCard" onClick={() => quitar(value)}>Quitar</button>
                    </Col>
                    <Col lg="2">                    
                        <div className="botonesCantidad">
                        <button className="botonCount" onClick={resta}>-</button>{value.qty}<button className="botonCount" onClick={suma}>+</button>
                        </div>
                    </Col>
                    <Col lg="1">
                        <h3>${value.price}</h3>
                    </Col>
                </Row>
        })}
        <h3 className="total">Total: $40000</h3>
        </Container>
    )
}