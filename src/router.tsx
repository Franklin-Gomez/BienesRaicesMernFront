import { Route , Routes , BrowserRouter } from "react-router-dom"
import App from "./App"
import Nosotros from "./views/Pages/Nosotros"
import Anuncios from "./views/Pages/Anuncios"
import Blog from "./views/Pages/Blog"
import Contacto from "./views/Pages/Contacto"
import ClientDashboard from "./views/ClientDashboard"
import Login from "./views/Pages/Login"
import AdminDashboard from "./views/AdminDashboard"
import InicioAdmin from "./views/Pages/admin/InicioAdmin"
import CreatePropertyAdmin from "./views/Pages/admin/CreatePropertyAdmin"
import EditProperty from "./views/Pages/admin/EditProperty"

export default function Router() {
    return (
        
        <BrowserRouter>
            <Routes>
                <Route element={<ClientDashboard/>}  >
                
                    <Route index path='/' element={<App/>} />
                    <Route path='/nosotros' element={<Nosotros/>} />
                    <Route path='/Anuncios' element={<Anuncios/>} />
                    <Route path='/Blog' element={<Blog/>} />
                    <Route path='/Contacto' element={<Contacto/>} />
                    <Route path="/login" element={ <Login/>} />
                    

                </Route>

                <Route element={<AdminDashboard/>} >
                
                    <Route index path="/admin" element={<InicioAdmin/>} />
                    <Route path="/admin/create_property" element={<CreatePropertyAdmin/>}/>
                    <Route path="/admin/edit_property/:id" element={<EditProperty/>}/>

                </Route>
                
            </Routes>   
        </BrowserRouter>
        
    )   
}

