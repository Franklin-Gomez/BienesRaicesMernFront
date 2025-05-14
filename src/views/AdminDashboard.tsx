import { Outlet } from "react-router-dom";
import HeaderAdmin from "../components/admin/HeaderAdmin";
import FooterAdmin from "../components/admin/FooterAdmin";

export default function AdminDashboard() {
  return (
    <>

      <div className="flex flex-col min-h-dvh">

        <HeaderAdmin/> 

            
          <Outlet/>


        <FooterAdmin/>

      </div>
      
    </>
  )
}
