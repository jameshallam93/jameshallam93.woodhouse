import "./navbar.css"
import { Link, useLocation } from "react-router-dom"

const NavBar = () => {

    const location = useLocation()
    const returnIsCurrentLocation = (linkLocation) => {
        console.log(location.pathname)
        if (location.pathname === linkLocation) {
            return "current"
        }
        return ""
    }

    return (
        <nav>
            <ul>
                <li><Link className={returnIsCurrentLocation("/")} to="/">Home</Link></li>
                <li><Link className={returnIsCurrentLocation("/contact")} to="/contact">Contact</Link></li>
                <li><Link className={returnIsCurrentLocation("/gallery")} to="/gallery">Gallery</Link></li>

            </ul>
        </nav>
    )
}
export { NavBar }