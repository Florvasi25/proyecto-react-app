// import CartWidget from "./CartWidget"
import {Link, NavLink } from 'react-router-dom'

const NavBar = () => {

    return (
        <div>
            <nav className="barraNavegacion">
                <ul className="contenedorNav">
                    <li><Link to={'/'} className="boton home">Home</Link></li>
                    <li><Link to={`/human`} className="boton">Human</Link></li>
                    <li><NavLink to={'/alien'} className="boton">Alien</NavLink></li>
                </ul>
                {/* <div>
                    <CartWidget/>
                </div> */}
            </nav>
        </div>
    )
}

export default NavBar