import "./styles/topbar.styles.css"
import * as Icon from "react-bootstrap-icons"
import { NavLink } from "react-router-dom"
const Topbar = (props: any) => {
    return (
        <div className="topbar">
            <div className="topbar_title">
                <h3>Welcome back, {props.name}</h3>
                <p>21 mars 2021</p>
            </div>
            <div className="topbar_icon">

                <NavLink
                    key='message'
                    to='message'
                   
                >
                    <Icon.Messenger color="#436cf4" />
                </NavLink>
                <NavLink
                    key='connexion'
                    to='/connexion'
                    className="btns"
                >
                    <Icon.LockFill color="#436cf4" />
                </NavLink>
            </div>
        </div>
    )
}

export default Topbar