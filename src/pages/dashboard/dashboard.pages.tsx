import { Outlet } from "react-router-dom"
import SideLeft from "../../components/sideLeft/sideLeft.components"
import "./dash.styles.css"
import Topbar from "../../components/topbar/topbar.compenents"
import MainNavigation from "../../navigations/mainNavigation.navigation"
import { useState } from "react"

const Dashboard = () => {
    const [cuser,setCuser]=useState("admin")
    return (
        <div className="dash">

            <div className="dash_sideleft">
                <SideLeft cuser={cuser}/>
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