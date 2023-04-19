import Groupe from "../../components/groupe/groupe.components"
import "./cours.css"
import mat from "../../assets/math.png"
const CListe = () => {
    return (
        <div className="cliste">
            <div className="cliste_title">
            <h3>les cours les plus populaires</h3>
            </div>
             
            <div className="cliste_cours">
            <button>
            <Groupe cours="Mathematique" image={mat}/>
            </button>
            <Groupe cours="Mathematique" image={mat}/>
            <Groupe cours="Mathematique" image={mat}/>
            <Groupe cours="Mathematique" image={mat}/>
            <Groupe cours="Mathematique" image={mat}/>
            <Groupe cours="Mathematique" image={mat}/>
            <Groupe cours="Mathematique" image={mat}/>
            <Groupe cours="Mathematique" image={mat}/> 
            <Groupe cours="Mathematique" image={mat}/>
            <Groupe cours="Mathematique" image={mat}/>
            <Groupe cours="Mathematique" image={mat}/>
            <Groupe cours="Mathematique" image={mat}/>
            <Groupe cours="Mathematique" image={mat}/>
           
            </div>
            <div className="cliste_title">
            <h3>les cours au programme officiel</h3>
           
            </div>
            <div className="cliste_cours_office">
            

            <Groupe cours="Mathematique" image={mat}/>
            <Groupe cours="Mathematique" image={mat}/>
            <Groupe cours="Mathematique" image={mat}/>
            <Groupe cours="Mathematique" image={mat}/>
            <Groupe cours="Mathematique" image={mat}/>
            <Groupe cours="Mathematique" image={mat}/> 
            <Groupe cours="Mathematique" image={mat}/>
            <Groupe cours="Mathematique" image={mat}/>
            <Groupe cours="Mathematique" image={mat}/>
            <Groupe cours="Mathematique" image={mat}/>
           
            </div>
            
        </div>
    )
}

export default CListe