import './citem.css'
import * as Icon from "react-bootstrap-icons"
const CItem = (props: any) => {
    return (
        <div className="citem">
            <div className="citem_photo">
                <img src={props.image} />
                <div className="citem_photo_vue">
                   <Icon.Eye size={22}/> <span>{props.vue}</span>
                </div>
            </div>
            
        </div>
    )
}

export default CItem