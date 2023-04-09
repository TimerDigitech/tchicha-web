import "./groupe.styles.css"
const Groupe=(props:any)=>{
    return(
        <div className="groupe">
            <div className="groupe_img">
                <img src={props.image}/>
            </div>
            <div className="groupe_txt">
            <p>{props.cours}</p>
            </div>
        </div>
    )
}

export default Groupe