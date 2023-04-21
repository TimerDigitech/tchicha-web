import "./connexion.styles.css"
import con from "../../assets/conn.png"
import { NavLink } from "react-router-dom"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useState } from "react";

const Inscription = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
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
                    <h2>inscription</h2>
                </div>
                <div className="connexion_form_input">
                    <input type='text' placeholder="email" onChange={(e) => setEmail(e.target.value)} />

                </div>
                <div className="connexion_form_input">
                    <input type='text' placeholder="mot de passe" onChange={(e) => setPassword(e.target.value)} />

                </div>
                <div className="connexion_form_input">
                    <input type='text' placeholder="confirmer mot de passe" />

                </div>
                <div className="connexion_form_input">

                    <NavLink
                        key="conne"
                        to="/admin"
                        className="con"
                        onClick={() => createUserWithEmailAndPassword(auth, email, password)}
                    >
                        enregistrer
                    </NavLink>
                </div>
                <div className="connexion_form_input">
                    <p>j'ai deja un compte?  
                        
                     <NavLink
                        key="conne"
                        to="/connexion"
                        className="inscrire_form"

                    >se connecter
                    </NavLink> </p>

                </div>
            </div>
        </div>
    )
}

export default Inscription