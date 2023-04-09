import "./connexion.styles.css"
import con from "../../assets/conn.png"
import { NavLink } from "react-router-dom"
const Inscription = () => {
    return (
        <div className="connexion">
            <div className="connexion_img">
                <img src={con} />
            </div>
            <div className="connexion_form">

                <div className="connexion_form_intitu">
                    <h2>s'inscrire</h2>
                </div>
                <div className="connexion_form_input">
                    <input type='text' placeholder="login" />

                </div>
                <div className="connexion_form_input">
                    <input type='text' placeholder="mot de passe" />

                </div>
                <div className="connexion_form_input">
                    <input type='text' placeholder="confirmer mot de passe" />

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
                    <p>j'ai deja un compte?  <a className="inscrire_form" href="">se connecter</a></p>

                </div>
            </div>
        </div>
    )
}

export default Inscription