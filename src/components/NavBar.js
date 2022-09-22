import CartWidget from "../components/CartWidget"

const NavBar = () => {

    const handleClick = () => {
        const mensaje = "Clickeaste este botón"
        alert(mensaje)
    }

    return (
        <div>
            <nav className="barraNavegacion">
                <ul className="contenedorNav">
                    <li className="boton">Botón</li>
                    <li className="boton">Botón</li>
                    <li className="boton" onClick={handleClick}>Botón</li>
                </ul>
                <div>
                    <CartWidget/>
                </div>
            </nav>
        </div>
    )
}

export default NavBar