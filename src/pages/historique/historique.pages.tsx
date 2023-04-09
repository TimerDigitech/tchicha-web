import Shead from "../../components/shead/shead.components"
import UserItem from "../../components/user/user.components"
import "../../components/topbar/topbar.styles.css"
const Historique=()=>{
    const users = [
        {
            name: "Minamou jean",
            conn: "24 mars 2023 09:57",
            decon: "24 mars 2023 09:57",
        },
        {
            name: "Dinnamou ferdinand",
            conn: "24 mars 2023 09:57",
            decon: "24 mars 2023 09:57",
        },
    ]
    let num=0

    return(
        <div className="historique">
          
        <div className="sh">
               <div></div>
               <div></div>
            </div>
 {
            users.map((us:any)=>(
               
                <UserItem numero={Number(num+=1)} name={us.name} groupe={us.conn} role={us.decon} his={true}/>
            ))
        }
        </div>
    )
}

export default Historique