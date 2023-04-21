import "./gitem.css"
const GItem = (props: any) => {
    return (
        <div className="gitem">
            <div className="gitem_photo">
                <img src={props.image} />
            </div>
            <div className="gitem_dsc">
                {props.dsc}
            </div>
        </div>
    )
}

export default GItem