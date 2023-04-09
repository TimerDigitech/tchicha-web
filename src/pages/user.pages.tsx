import UserItem from "../components/user/user.components"
import "../components/user/user.styles.css"
import { useState } from "react"
import Modal from "../components/Modal";
const User = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const users = [
        {
            name: "Minamou jean",
            groupe: "goune",
            role: "manager"
        },
        {
            name: "Dinnamou ferdinand",
            groupe: "goune",
            role: "apprenant"
        },
    ]
    let num=0
    return (
        <div className="user">
            
            <div className="sh">
               <div></div>
               <div><button 
                className="openModalBtn"
                onClick={() => {
                  setModalOpen(true);
                }}
                >creer un utilisateur</button></div>
            </div>
        {
            users.map((us:any)=>(
               
                <UserItem numero={Number(num+=1)} name={us.name} groupe={us.groupe} role={us.role}/>
            ))
        }
    




      {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>
    )
}

export default User