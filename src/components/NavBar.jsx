// import CartWidget from "./CartWidget"
import {Link} from 'react-router-dom'
import {CartWidget} from './CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useCartContext } from '../context/CartContext';
import {collection, getDocs, getFirestore} from 'firebase/firestore'
import { useEffect, useState } from 'react';

export const NavBar = () => {

    const [categorias, setCategorias] = useState([])
    
    useEffect(() => {

        const db = getFirestore()

        const data = collection(db, "categorias")
        getDocs(data).then((value) => {
            setCategorias(value.docs.map((value) => {
                return value.data()
            }))
        })

    },[]);

    const {cart, calcularTotalCarrito, precioTotal} = useCartContext()

    return (
        <Navbar collapseOnSelect expand="lg" className='barraNavegacion' variant="dark">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">           
                            <Nav className="me-auto">
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            {categorias.map((value) => {
                                return <NavDropdown.Item key={value.key}>{value.name}</NavDropdown.Item>
                            })}
                            </NavDropdown>
                        </Nav>
                </Navbar.Collapse>
                <Link to="/"><Navbar.Brand href="#home">Home</Navbar.Brand></Link>
                <CartWidget/>
                <p className="cantidad">{calcularTotalCarrito(cart)}</p>
                {/* <p className="cantidad">Precio: {precioTotal(cart)}</p> */}
            </Container>
        </Navbar>
    )
}