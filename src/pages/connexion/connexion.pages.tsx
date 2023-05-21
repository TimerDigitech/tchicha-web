import "./connexion.styles.css"
import con from "../../assets/conn.png"
import { NavLink,useNavigate} from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import { API } from "../../const/api"
const Connexion = () => {
    const [email, setEmail] = useState('')
    const [mdp, setMdp] = useState('')
    const login = () => {
        axios.post(API + 'login',
            {
                "email": email
                , "password": mdp
            }
        ).then(
            () => navigate('/admin')
        )
    }
    const navigate=useNavigate()
    return (
        <div className="row col-12">
            <div className="col-7 connexion_img">
                <img src={con} alt='' />
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
                    <h2>connexion</h2>
                </div>
                <div className="">
                    <div className="my-4">
                        <input className="form-control" type='text' placeholder="email" onChange={(e) => setEmail(e.target.value)} />

                    </div>
                    <div className="my-4">
                        <input className="form-control" type='text' placeholder="password" onChange={(e) => setMdp(e.target.value)} />

                    </div>
                    <div className="my-4">

                        <button
                            key="conne"
                            
                            onClick={()=>login()}
                            className="form-control conn"

                        >
                            connexion
                        </button>
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
        </div>
    )
}

export default Connexion