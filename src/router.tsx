import { Route , Routes , BrowserRouter } from "react-router-dom"
import App from "./App"
import Nosotros from "./views/Pages/Nosotros"
import Anuncios from "./views/Pages/Anuncios"
import Blog from "./views/Pages/Blog"
import Contacto from "./views/Pages/Contacto"
import ClientDashboard from "./views/ClientDashboard"
import Login from "./views/Pages/Login"
import AdminDashboard from "./views/AdminDashboard"
import { lazy , Suspense   } from "react"
import Clientes from "./views/Pages/admin/Clientes"
import Propiedad from "./views/Pages/Propiedad"

export default function Router() {

    const InicioAdmin = lazy(() => import('./views/Pages/admin/InicioAdmin'));
    const CreatePropertyAdmin = lazy(() => import('./views/Pages/admin/CreatePropertyAdmin'));
    const EditProperty = lazy(() => import('./views/Pages/admin/EditProperty'));

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
                    <Route path="/propiedad/:id" element={ <Propiedad/>} />
                    
                </Route>

                <Route element={<AdminDashboard/>} >

                    <Route index path='/admin' element={ <Suspense fallback="Cargando..."> <InicioAdmin/> </Suspense> } />
                    <Route index path='/admin/clientes' element={ <Suspense fallback="Cargando..."> <Clientes/> </Suspense> } />
                    <Route index path='/admin/create_property' element={ <Suspense fallback="Cargando..."> <CreatePropertyAdmin/> </Suspense> } />
                    <Route index path='/admin/edit_property/:id' element={ <Suspense fallback="Cargando..."> <EditProperty/> </Suspense> } />

                </Route>
                
            </Routes>   
        </BrowserRouter>
        
    )   
}

