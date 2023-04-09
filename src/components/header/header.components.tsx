import { NavLink } from "react-router-dom"
import { Menu } from "../../const/menu"
import "./header.style.css"
const Header = () => {
    return (
        <div className="header">
            <div className="header_logo">
                <h2>Tchicha</h2>
            </div>
            <div className="header_link">
                {
                    Menu.map((m: any) => (
                        <NavLink
                            key={m.name}
                            to={m.href}
                            className={({ isActive }) => isActive ? " active" : "btn"}
                        >
                             {m.name}
                        </NavLink>
                    ))
                }


                <div className="header_link_btn">
                   
                    <NavLink
                            key="con"
                            to="/connexion"
                            className={({ isActive }) => isActive ? " active" : "btn"}
                            id="connexion"
                        >
                             connexion
                        </NavLink>
                </div>

            </div>
        </div>
    )
}
export default Header