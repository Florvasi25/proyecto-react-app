import { useCartContext } from "../context/CartContext"
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const CartWidget = () => {

    const {cart, suma, resta, quitar, precioTotal} = useCartContext()
    
    if (cart.length === 0) {
        return <p>ERROR</p>
    } else {
        return(
            <Container className="containerCuerpoCart">
                {cart.map((value) => {
                return <Row className="tabla">
                    <Col lg="3" className="colImage">
                        <img src={value.image} alt="" className="tableImage"/>
                    </Col>
                    <Col lg="6" className="colText">
                        <h4>{value.name}</h4><br />
                        <button className="botonCard" onClick={() => quitar(value)}>Quitar</button>
                    </Col>
                    <Col lg="2">                    
                        <div className="botonesCantidad">
                        <button className="botonCount" onClick={() => resta(value)}>-</button>{value.qty}<button className="botonCount" onClick={() => suma(value)}>+</button>
                        </div>
                    </Col>
                    <Col lg="1">
                        <h3>${value.qty * value.price}</h3>
                    </Col>
                </Row>
                })}
                <h3 className="cartTotal">Total: ${precioTotal()}</h3>
                <button className="botonCard checkout"><Link to="/checkout">CONTINUAR COMPRA</Link></button>
            </Container>
        )
    }
}