import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function ClientDashboard() {
    return (
        <div className="flex flex-col min-h-dvh ">
            <Header/>
                            
                <Outlet/>

            <Footer/>   
        </div>
    )
}
