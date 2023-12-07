import {Link} from "react-router-dom"

const NavBar=()=>{
    return(
        <ul>
            <li>
                <Link to={"/Login"}>Login </Link>
            </li>
            <li>
            <Link to={"/Registro"}> Registrarse</Link>
            </li>
            <li>
            <Link to={"/"}> Home</Link>
            </li>
        </ul>
    )
}

export default NavBar
