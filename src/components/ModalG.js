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
          <p>Creation d'un groupe</p>
          
        </div>
        <div className="body">
         <input type="text" placeholder="nom du groupe"/>
         <textarea
         rows={10}
         cols={10}
         />
         <input type="text" placeholder="description"/>
        
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
