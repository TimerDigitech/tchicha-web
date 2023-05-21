import CItem from "./citem"
import tof from "../../assets/math.png"
import "./cours.css"
const Cours = () => {
    return (
        <div className="cours">
            <div className="sh">
                <div></div>
                <div><button>creer un cours</button></div>
            </div>
            <div className="cours_liste">
            <CItem name='chapitre 1 maintenance informatique' vue='30' image={tof}/>
            <CItem name='chapitre 1 maintenance informatique' vue='30' image={tof}/>
            <CItem name='chapitre 1 maintenance informatique' vue='30' image={tof}/>
            <CItem name='chapitre 1 maintenance informatique' vue='30' image={tof}/>
            </div>
            
        </div>
    )
}

export default Cours