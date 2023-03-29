import { useState } from "react";
import { Modal } from "react-bootstrap";

const Groupes=()=>{
    const [modalOpen, setModalOpen] = useState(false);

    return(
        <div className="groupes">
            <div className="sh">
               <div></div>
               <div><button>creer un groupe</button></div>
            </div>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>
    )
}

export default Groupes