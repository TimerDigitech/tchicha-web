import "../components/styles/profile.styles.css"
const Profile = (props: any) => {
    return (
        <div className="profile">
            <div className="profile_p">
            <div className="profile_img">
                <img src={props.img} />
            </div>
            <div className="profile_txt">
                <div className="profile_txt_name">
                    {props.name}
                </div>
                <div className="profile_txt_niveau">
                    {props.classe}
                </div>
            </div>
            </div>
            <div className="profile_out">
                <button>sortir</button>
            </div>
        </div>
    )

}
export default Profile