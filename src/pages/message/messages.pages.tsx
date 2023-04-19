import { useState } from "react"
import "./message.css"
import OMessage from "../../components/onemessage/Onemessage"
const Message = () => {
    const [show, setShow] = useState(false)
    const [texto, setTexto] = useState("")
    return (
        <div className="message">
            <div className="sh">
                <div></div>
                <div></div>
            </div>
            <OMessage photo="M" name='Minina' msg="bonjour  je me nomme" />
            <OMessage photo="Y" name='Youri birkof' msg="je vais bien" usr={true} />
            <div className="message_contact">
                <div className="message_contact_oc">
                    <span>
                        contacts
                    </span>
                    <button onClick={() => setShow(!show)}>
                        {
                            !show ? <i className="fa fa-chevron-up" aria-hidden="true"> </i> : <i className="fa fa-chevron-down" aria-hidden="true">

                            </i>
                        }

                    </button>
                </div>

                {
                    show ? <div className="message_contact_sh">
                        <div className="message_contact_item">
                            <div className="message_contact_item_photo">
                                M
                            </div>
                            <div className="message_contact_item_name">
                                Mininamou jean-calvaire
                                <span>bonsoir</span>
                            </div>
                        </div>
                    </div> : <div></div>
                }
            </div>
            <div className="message_send">
                <input type="text" placeholder="Message" value={texto} onChange={(e) => setTexto(e
                    .target.value)} />
                <button>send</button>
            </div>
        </div>
    )
}

export default Message