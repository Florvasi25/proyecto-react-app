import CartWidget from "./CartWidget"
import {Link, NavLink } from 'react-router-dom'

const NavBar = () => {

    const handleClick = () => {
        const mensaje = "Clickeaste este botón"
        alert(mensaje)
    }

    return (
        <div>
            <nav className="barraNavegacion">
                <ul className="contenedorNav">
                    <li className="boton"><Link to={'/'}>Home</Link></li>
                    <li className="boton"><Link to={'/function'}>Catalogo</Link></li>
                    <li className="boton"><NavLink to={'/function'}>Solo uno</NavLink></li>
                </ul>
                <div>
                    <CartWidget/>
                </div>
            </nav>
        </div>
    )
}

export default NavBar