import { useCartContext } from "../context/CartContext"
import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Checkout = () => {

    const {cart, precioTotal, vaciarCarrito} = useCartContext();
    const [orderId, setOrderId] = useState("");
    const [inputs, setInputs] = useState({});
    const [disableSumit, setDisableSubmit] = useState(true)

    
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const copyInputs = {...inputs, [name]: value}

        setInputs(copyInputs);
        
        if (copyInputs.email !== copyInputs.emailrepetition || copyInputs.email === "" || copyInputs.emailrepetition === "") {
            setDisableSubmit(true)
        } else {
            setDisableSubmit(false)
        }
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        const order = {
            buyer: {name: inputs.username, tel: inputs.tel, email: inputs.email},
            items: cart,
            total: precioTotal(),
        }

        const db = getFirestore()
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(({id}) => setOrderId(id))

        vaciarCarrito()
    };

    return (
        <Row className="containerCuerpoPrincipal">
            <h1>Resumen de compra</h1>
            <Col lg="8">
            {cart.map((value) => {
                return <Row className="tabla">
                <Col className="colImage">
                    <img src={value.image} alt="" className="tableImage"/>
                </Col>
                <Col className="colText">
                    <h4>{value.name}</h4><br />
                </Col>
                <Col >                    
                    <div className="botonesCantidad">
                    <p>x {value.qty}</p>
                    </div>
                </Col>
                <Col>
                    <h3>${value.qty * value.price}</h3>
                </Col>
            </Row>
            })}
            <h3 className="total">Total: ${precioTotal()}</h3>
            </Col>
            <Col lg="4">
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <p>Nombre y Apellido</p>
                    <input
                    type="text"
                    name="username"
                    value={inputs.username || ''}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <p>Teléfono</p>
                    <input
                    type="number"
                    name="tel"
                    value={inputs.tel || ''}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <p>Email</p>
                    <input
                    type="email"
                    name="email"
                    value={inputs.email || ''}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <p>Repetir e-mail</p>
                    <input
                    type="email"
                    name="emailrepetition"
                    value={inputs.emailrepetition || ''}
                    onChange={handleChange}
                    />
                </div>
                <button className="botonCard terminar" disabled={disableSumit}>TERMINAR COMPRA</button>
                <p>OrderID: {orderId}</p>
            </form>
            </Col>
        </Row>
    )
}