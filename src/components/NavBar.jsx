// import CartWidget from "./CartWidget"
import {Link, NavLink } from 'react-router-dom'

const NavBar = () => {

    return (
        <div>
            <nav className="barraNavegacion">
                <ul className="contenedorNav">
                    <li className="boton"><Link to={'/'}>Home</Link></li>
                    <li className="boton"><Link to={`/human`}>Human</Link></li>
                    <li className="boton"><NavLink to={'/alien'}>Alien</NavLink></li>
                </ul>
                {/* <div>
                    <CartWidget/>
                </div> */}
            </nav>
        </div>
    )
}

export default NavBar