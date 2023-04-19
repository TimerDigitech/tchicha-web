import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import "./Modal.css";

function ValideIns(props) {
  return (
    <div className="scr modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              props.setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <p>demande d'inscription</p>

        </div>
        <div className="body">
          {
            props.eleve.map((e) => (
              <div className="body_item">
                <div className="body_item_name">
               <p>{e.name}</p> 
                </div>
                <div className="body_item_btn">
                <button
            onClick={() => {
             
            }}

          >
            valider
          </button>
                </div>
              </div>
            ))
          }


          
        </div>
        <div className="footer">


        </div>
      </div>
    </div>
  );
}

export default ValideIns;
