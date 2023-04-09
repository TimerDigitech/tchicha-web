import { Outlet } from "react-router-dom"
import Header from "../components/header/header.components"

const HomeOutlet=()=>{
    return(
        <div className="homeoulet">
    <Header />
    <Outlet/>
        </div>
    )
}
export default HomeOutlet