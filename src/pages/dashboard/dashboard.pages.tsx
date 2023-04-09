import { Outlet } from "react-router-dom"
import SideLeft from "../../components/sideLeft/sideLeft.components"
import "./dash.styles.css"
import Topbar from "../../components/topbar/topbar.compenents"
import MainNavigation from "../../navigations/mainNavigation.navigation"

const Dashboard = () => {
    return (
        <div className="dash">

            <div className="dash_sideleft">
                <SideLeft />
            </div>
            <div className="dash_ctn">
                <div className="dash_ctn_topbar">
                    <Topbar name="mirofa" />
                </div>
                <div className="dash_ctn_body">

                   <Outlet/>
                </div>
            </div>

        </div>
    )
}
export default Dashboard