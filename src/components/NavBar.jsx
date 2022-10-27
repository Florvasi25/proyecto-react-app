import {Link, NavLink} from 'react-router-dom'
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

    const {cart, calcularTotalCarrito} = useCartContext()

    return (
        <Navbar collapseOnSelect expand="lg" className='barraNavegacion' variant="dark">
            <Container>
                <Link to="/"><Navbar.Brand href="#home">Inicio</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">           
                            <Nav className="me-auto">
                            <NavDropdown title="Categorías" id="collasible-nav-dropdown">
                            {categorias.map((value) => {
                                return <NavDropdown.Item key={value.key}><NavLink to={`/categoria/${value.name}`}>{value.name}</NavLink></NavDropdown.Item>
                            })}
                            </NavDropdown>
                        </Nav>
                </Navbar.Collapse>
                    
                    <NavLink to="/cart"><img className="imagenCarrito" src="../imagenes/carrito.png" alt=""></img></NavLink>
                    <p className="cantidad">{calcularTotalCarrito(cart)}</p>
                    {/* <p className="cantidad">Precio: {precioTotal(cart)}</p> */}
            </Container>
        </Navbar>
    )
}