import { useLocation } from "react-router-dom"

export const Footer = () => {

    const {pathname} = useLocation()
    if (pathname === "/checkout") return null

    return (
        <div className="footer">
            <p>Soy un Footer</p>
        </div>
    )
}