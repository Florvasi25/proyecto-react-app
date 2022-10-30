import { useCartContext } from "../context/CartContext"
import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Checkout = () => {

    const {cart, precioTotal, vaciarCarrito} = useCartContext();
    const [orderId, setOrderId] = useState("");
    const [inputs, setInputs] = useState({
        email: "",
        emailrepetition: "",
        username: "",
        tel: ""
    });
    const [disableSumit, setDisableSubmit] = useState(true)
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const copyInputs = {...inputs, [name]: value}

        setInputs(copyInputs);
        if (
            copyInputs.email !== copyInputs.emailrepetition || 
            copyInputs.email === "" || 
            copyInputs.emailrepetition === "" || 
            copyInputs.username === "" || 
            copyInputs.tel === ""
            ) {
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
            fecha: Date(),
            total: precioTotal(),
            estado: "generada"
        }

        const db = getFirestore()
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(({id}) => setOrderId(id))

        vaciarCarrito()
    };

    if (cart.length === 0) {
        return <p>ta vacio, rey</p>
    } else {
        return (
            <div>
                <h1 className="tituloCheck">Resumen de compra:</h1>
                <Row className="containerTablaCheckout">
                    <Col lg="9">
                    {cart.map((value) => {
                        return <Row className="containerTablaDetalleCheckout">
                        <Col lg="3" className="colCheckout">
                            <img src={value.image} alt="" className="tableImage"/>
                        </Col>
                        <Col lg="5" className="colCheckout">
                            <h4>{value.name}</h4><br />
                        </Col>
                        <Col lg="2" className="colCheckout">           
                            <p className="cantidad">
                                x{value.qty}
                            </p>
                        </Col>
                        <Col lg="2" className="colCheckout">
                            <h3>${value.qty * value.price}</h3>
                        </Col>
                    </Row>
                    })}
                    <h3 className="checkoutTotal">Total: ${precioTotal()}</h3>
                    </Col>
                    <Col fluid lg="3" className="containerForm">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <div>
                                    <p className="textInput">Nombre y Apellido</p>
                                    <input
                                    type="text"
                                    name="username"
                                    value={inputs.username || ''}
                                    onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <p className="textInput">Teléfono</p>
                                    <input
                                    type="number"
                                    name="tel"
                                    value={inputs.tel || ''}
                                    onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <p className="textInput">Email</p>
                                    <input
                                    type="email"
                                    name="email"
                                    value={inputs.email || ''}
                                    onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <p className="textInput">Repetir e-mail</p>
                                    <input
                                    type="email"
                                    name="emailrepetition"
                                    value={inputs.emailrepetition || ''}
                                    onChange={handleChange}
                                    className="input"/>
                                </div>
                            </div>
                            <div className="containerBoton">
                                <button className="botonCard terminar" disabled={disableSumit}>TERMINAR COMPRA</button>
                                {/* <p>OrderID: {orderId}</p> */}
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        )
    }
}