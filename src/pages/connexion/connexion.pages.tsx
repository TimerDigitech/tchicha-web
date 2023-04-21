import "./connexion.styles.css"
import con from "../../assets/conn.png"
import { NavLink } from "react-router-dom"
const Connexion = () => {
    return (
        <div className="connexion">
            <div className="connexion_img">
                <img src={con} />
            </div>
            <div className="connexion_form">
            <div className="connexion_form_title">
            <NavLink
                        key="conne"
                        to="/"
                        className="con"

                    >
                          <h2>TCHICHA</h2>
                    </NavLink>
              

                </div>

                <div className="connexion_form_intitu">
                    <h2>connexion</h2>
                </div>
                <div className="connexion_form_input">
                    <input type='text' placeholder="email" />

                </div>
                <div className="connexion_form_input">
                    <input type='text' placeholder="password" />

                </div>
                <div className="connexion_form_input">

                    <NavLink
                        key="conne"
                        to="/admin"
                        className="con"

                    >
                        connexion
                    </NavLink>
                </div>
                <div className="connexion_form_input">
                    <p>Vous n'avez pas de compte?<NavLink
                        key="conne"
                        to="/inscription"
                    
                        className="c inscrire_form" 
                    >
                        S'inscrire
                    </NavLink></p>

                </div>
            </div>
        </div>
    )
}

export default Connexion