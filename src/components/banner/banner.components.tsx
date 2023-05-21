import { NavLink } from "react-router-dom"
import ban from "../../assets/ban.jpg"
import "./banner.styles.css"

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner_txt">
                
                <h1>Lorem ipsum</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, id! Iure itaque ducimus molestiae. Obcaecati, numquam modi quas autem molestiae facilis asperiores nam unde quisquam. Sit vero deleniti pariatur. Illum! </p>
                <div className="banner_txt_btn">
                <NavLink
                            key="ins"
                            to="/inscription"
                            className={({ isActive }) => isActive ? " active" : "btn"}
                            id="connexion"
                        >
                             commencer
                        </NavLink>
                </div>
            </div >
            <div className="banner_img">
                <img src={ban} alt=''/>
            </div>
        </div>
    )
}

export default Banner