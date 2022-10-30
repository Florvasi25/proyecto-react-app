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
                <Link to="/" className='tituloNav'><Navbar.Brand>Inicio</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className='containerNav'>           
                        <Nav className="me-auto">
                            <NavDropdown title="Categorías" className='tituloCategory'>
                                {categorias.map((value) => {
                                    return <NavDropdown.Item key={value.key} className="dropdown"><NavLink to={`/categoria/${value.name}`} className="dropdown">{value.name}</NavLink></NavDropdown.Item>
                                })}
                            </NavDropdown>
                        </Nav>
                        <NavLink to="/cart"><img className="imagenCarrito" src="../imagenes/carrito.png" alt=""></img></NavLink>
                        <p className="cantidadNav">{calcularTotalCarrito(cart)}</p>
                </Navbar.Collapse>                    
            </Container>
        </Navbar>
    )
}