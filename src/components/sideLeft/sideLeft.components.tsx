import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Dash } from "../../const/dash"
import "./sideleft.styles.css"

const SideLeft = () => {
    const [btn,setBtn]=useState(false)
    let num=0
    return (
        <div className="sideleft">
            <div className="sideleft_title">
                <h1>Tchitcha{}</h1>
            </div>
            <div className="sideleft_link">
            {Dash.map((m) => (
                <div className="sideleft_link_item">
                    
                   
                        <NavLink
                            key={m.name}
                            to={m.href}
                            className={({ isActive }) => isActive && m.href!="/admin"? " active" : "btn"}
                            
                        >
                            <div className="logo">
                            {m.icon}
                            </div>
                            
                          {m.name}
                        </NavLink>
                  

                   
                </div>
                  ))}
              
            </div>
        </div>
    )
}
export default SideLeft