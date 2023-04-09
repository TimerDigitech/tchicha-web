import Banner from "../../components/banner/banner.components"
import Groupe from "../../components/groupe/groupe.components"
import Header from "../../components/header/header.components"
import "./home.styles.css"
import phy from "../../assets/phy.png"
import anglais from "../../assets/anglais.png"
import math from "../../assets/math.png"
const Home = () => {
    return (
        <div className="home">
            <div className="home_head">
            
                <Banner />
            </div>

            <div className="home_footer_title">
                <h3>parcourez vos meilleurs cours</h3>
            </div>

            <div className="home_footer">

            </div>
            <div className="home_other">
                <Groupe cours="Mathematique" image={math} />
                <Groupe cours="Informatique" image={math} />
                <Groupe cours="Physique" image={phy} />
                <Groupe cours="Anglais" image={anglais} />
            </div>
        </div>
    )
}
export default Home