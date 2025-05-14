import { useEffect } from "react"
import { Link, useNavigate  } from "react-router-dom"

export default function HeaderAdmin() {
    
    const navigate = useNavigate()
    
    useEffect( () => { 
        
        const token = localStorage.getItem("AUTH_TOKEN")
        
        if( !token ) { 
            navigate('/')
        }
        
    } , [navigate])
    


    return (
        <>
            <header className="px-0 bg-gray-800" >

                <div className="container mx-auto p-4 ">

                    <div className="w-full mt-0 mb-auto ">
                          
                        <div className="flex justify-between w-full mx-auto">
                            <Link to="/admin">
                                <img src="/img/logo.svg" className="w-full " alt="Logotipo de Bienes Raices"/>
                            </Link>

                            <div className=" lg:hidden">
                                <img src="/img/barras.svg" className="w-20" alt="icono menu responsive"/>
                            </div>

                            <div className="flex flex-row-reverse items-center  gap-3 text-white ">
                                <img className=" w-20" src="/img/dark-mode.svg"/>

                                <nav className=" flex gap-2 text-xl">
                                    <Link to="/" className="px-2 py-1 hover:text-gray-400 hover:font-bold">Ver Pagina</Link>
                                    
                                    <Link to="/admin/perfil" className="px-2 py-1 hover:text-gray-400 hover:font-bold">Perfil</Link>

                                    <Link to="/log_out" className="px-2 py-1 hover:text-gray-400 hover:font-bold">Cerrar Sesion</Link>
                                </nav>
                            </div>
                            
                        </div> 

                    </div>

                </div>

            </header> 
        </>

    )
}
