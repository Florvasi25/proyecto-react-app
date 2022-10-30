import { useCartContext } from "../context/CartContext"
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const CartWidget = () => {

    const {cart, suma, resta, quitar, precioTotal} = useCartContext()
    
    if (cart.length === 0) {
        return (
            <div className='containerError'>
                <img src="../imagenes/carritoVacio.png" alt="" />
                <h2 className='tituloError'>El carrito está vacío</h2>
                <Link to="/"><button className='botonCard'>Volver al Inicio</button></Link>
            </div>
        )
    } else {
        return(
            <Container className="containerCuerpoCart">
                {cart.map((value) => {
                return <Row className="containerTabla" key={value.id}>
                    <Col lg="3" className="colImage">
                        <img src={value.image} alt="" className="tableImage"/>
                    </Col>
                    <Col lg="5" className="colText">
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
                    <Link to="/checkout"><button className="botonAgregar checkout">CONTINUAR COMPRA</button></Link>
            </Container>
        )
    }
}