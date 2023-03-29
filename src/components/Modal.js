import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import "./Modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <p>Enregistrement d'utilisateur</p>
          
        </div>
        <div className="body">
         <input type="text" placeholder="nom"/>
         <input type="text" placeholder="numero cni"/>
        
         <select >
          <option>Administrateur</option>
          <option>Manager</option>
         </select>
         <button
            onClick={() => {
              setOpenModal(false);
            }}
           
          >
           Enregistrer 
          </button>
        </div>
        <div className="footer">
         
         
        </div>
      </div>
    </div>
  );
}

export default Modal;
