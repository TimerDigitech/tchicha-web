import "./user.styles.css"
import * as  Icon from "react-bootstrap-icons"
const UserItem = (props: any) => {
    return (
        <div className="useritem">

            <div className="useritem_txt">
                <div className="useritem_img">
                    {props.numero}.
                </div>
                <div className="useritem_txt_name">
                    <div>{props.name}</div>
                </div>
                <div className="useritem_txt_groupe">
                    <div>{props.groupe}</div>
                </div>
                <div className="useritem_txt_role">
                    <div> {props.role}</div>
                </div>



            </div>
            <div className="useritem_action">
                {
                    props.his ? <div></div> : <div className="useritem_action_edit">
                        <button><Icon.PenFill /></button>
                    </div>
                }

                <div className="useritem_action_delete">
                    <button><Icon.Basket3Fill /></button>
                </div>
            </div>
        </div>
    )
}
export default UserItem