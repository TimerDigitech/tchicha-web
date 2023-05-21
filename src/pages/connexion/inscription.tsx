import "./connexion.styles.css"
import con from "../../assets/conn.png"
import { NavLink,useNavigate} from "react-router-dom"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useState } from "react";
import axios from "axios";
import { API } from "../../const/api";

const Inscription = () => {
    const navigate=useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [nom, setNom] = useState("")
    const [telephone, setTelephone] = useState("")
    const [date_naissance, setDate] = useState("")
    const [lieu_naissance, setLieu] = useState("")
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

        const signup=()=>{
            axios.post(API+'register',{
            email,
            nom,
            date_naissance,
            lieu_naissance,
            telephone,
            password
            }).then(
                ()=>navigate('/admin')
            )
        }
    return (
        <div className="row col-12">
            <div className="col-7 connexion_img">
                <img src={con} alt="logo" />
            </div>
            <div className="col-5 d-flex justify-content-center align-items-center flex-column">
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
                <div className="my-2 w-50">
                    <input type='text' placeholder="email" onChange={(e) => setEmail(e.target.value)} className="form-control" />

                </div>
                <div className="my-2 w-50">
                    <input type='text' placeholder="nom" onChange={(e) => setNom(e.target.value)} className="form-control" />

                </div>
              
                <div className="my-2 w-50">
                    <input type='text' placeholder="lieu de naissance" onChange={(e) => setLieu(e.target.value)} className="form-control" />

                </div>
                <div className="my-2 w-50">
                    <input type='text' placeholder="telephone" onChange={(e) => setTelephone(e.target.value)} className="form-control" />

                </div>
                <div className="my-2 w-50">
                    <input type='date' placeholder="date de naissance" onChange={(e) => setDate(e.target.value)} className="form-control" />

                </div>
                <div className="my-2 w-50">

                    <input type='text' placeholder="mot de passe" onChange={(e) => setPassword(e.target.value)} className="form-control" />

                </div>
                
                <div className="my-2 w-50">

                    <button
                        key="conne"

                        className="conn form-control"
                        onClick={() => signup()}
                    >
                        enregistrer
                    </button>
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