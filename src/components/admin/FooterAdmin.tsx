import { Link } from "react-router-dom"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


export default function FooterAdmin() {

    const navigate = useNavigate()
    // verifica si el usuario tiene un token de autenticacion
    useEffect( () => { 
        
        const token = localStorage.getItem("AUTH_TOKEN")
        
        if( !token ) { 
            navigate('/')
        }
        
    } , [navigate])

    // funcion para cerrar sesion
    const HandleLogout = () => { 
        localStorage.removeItem('AUTH_TOKEN')
        navigate('/')
    }

    return (
        <footer className="bg-gray-800 px-0 pt-4 pb-6 ">
            <div className="container mx-auto p-4">

                <div className="w-full mt-0  flex justify-between items-center text-white  ">
                    
                    <nav className=" flex gap-2 text-xl">
                        <Link to="/" className="px-2 py-1 hover:text-gray-400 hover:font-bold">Ver Pagina</Link>
                        
                        <Link to="/admin/perfil" className="px-2 py-1 hover:text-gray-400 hover:font-bold">Perfil</Link>

                        <button onClick={() =>  HandleLogout() } className="px-2 py-1 hover:text-gray-400 hover:font-bold">Cerrar Sesion </button>
                    </nav>

                    <p className="text-xl">Todos los derechos Reservados  &copy;</p>

                </div>

            </div>
    </footer> 
    )
}
