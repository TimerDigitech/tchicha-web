import React from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import GItem from "./gitem";
import gr from "../../assets/info.png"
import "./groupes.css"
const Groupes = () => {
    const [modalOpen, setModalOpen] = useState(true);

    return (
        <div className="groupes">
            <div className="sh">
                <div></div>
                <div><button onClick={() => setModalOpen(true)}>creer un groupe</button></div>
            </div>
            <div className="groupes_liste">
            <GItem image={gr} dsc="leaders coorporation"/>
            <GItem image={gr} dsc="leaders coorporation"/>
            <GItem image={gr} dsc="leaders coorporation"/>
            <GItem image={gr} dsc="leaders coorporation"/>
            </div>
          
            {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>
    )
}

export default Groupes