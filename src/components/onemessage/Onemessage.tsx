import "./onemessage.css"
const OMessage = (props: any) => {
    return (
        <div className={props.usr?"onemessage-r":"onemessage"}>
            <div className="onemessage_photo">
                {props.photo}
            </div>
            <div className="onemessage_msg">
                <span>{props.name}</span>
                
                {props.msg}
            </div>
        </div>
    )
}

export default OMessage