import Profile from "../components/profile/profile.components"
import * as Icon from "react-bootstrap-icons"
import "../components/styles/classe.components.css"
const Classe = () => {
    return (
        <div className="classe">
            <div className="classe_sideleft">
                <div className="classe_sideleft_profile">
                    <Profile name='minina jean' classe='terminale' />
                    <div className="classe_sideleft_s">
                        <div className="classe_sideleft_sc">
                            <Icon.ArrowDownCircle /> 200
                        </div>
                        <div className="classe_sideleft_st">
                            <Icon.ArrowClockwise /> 300
                        </div>
                    </div>

                </div>
                <p>programme </p>
            </div>
            <div className="classe_cours">

            </div>
            <div className="classe_chat">

            </div>
        </div>
    )
}

export default Classe