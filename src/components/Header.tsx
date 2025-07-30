import { Link, useLocation, useNavigate } from "react-router-dom"

export default function Header() {

    const navigate = useNavigate()

    const location = useLocation()
    const index = location.pathname == '/'

    const token = localStorage.getItem("AUTH_TOKEN")

    const HandleLogout = () => { 
        localStorage.removeItem('AUTH_TOKEN')
        navigate('/')
    }
    
    return (
        <>
            <header className={ index ? 
            
                "px-0 pb-12 bg-[url('/img/header.jpg')] bg-cover bg-center flex flex-col md:flex-row  h-[500px] items-center"

                : 

                "px-0 bg-gray-800"

            }>


                <div className="container mx-auto p-4 flex flex-col justify-between h-full">

                    <div className="w-full max-w-7xl mt-0 mb-auto ">
                          
                        {/* <div className="flex justify-between w-full mx-auto"> */}
                        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4">

                            <Link to="/">
                                <img src="/img/logo.svg" className="w-48 mx-auto md:mx-0" alt="Logotipo de Bienes Raices"/>
                            </Link>

                            {/* <div className=" lg:hidden">
                                <img src="/img/barras.svg" className="w-20" alt="icono menu responsive"/>
                            </div> */}

                            {/* <div className="flex flex-row-reverse items-center  gap-3 text-white"> */}
                            <div className="flex flex-col md:flex-row items-center gap-4 text-white w-full md:w-auto">

                                {/* <img className=" w-20" src="/img/dark-mode.svg"/> */}

                                {/* <nav className=" flex gap-2 text-xl"  > */}
                                <nav className="flex flex-col md:flex-row gap-2 text-xl text-center w-full">
                                    <Link to="/nosotros" className="px-2 py-1 hover:text-gray-400 hover:font-bold">Nosotros</Link>
                                    <Link to="/anuncios" className="px-2 py-1 hover:text-gray-400 hover:font-bold">Anuncios</Link>
                                    <Link to="/blog" className="px-2 py-1 hover:text-gray-400 hover:font-bold">Blog</Link>
                                    <Link to="/contacto" className="px-2 py-1 hover:text-gray-400 hover:font-bold">Contacto</Link>
                                    
                                    { token ? 

                                        <>  
                                            <Link to="/admin" className="px-2 py-1 hover:text-gray-400 hover:font-bold">Admin</Link>

                                            <button onClick={() =>  HandleLogout() } className="px-2 py-1 hover:text-gray-400 hover:font-bold">Cerrar Sesion
                                            
                                            </button>

                                        </>
                                       
                                        :

                                        <Link to="/login" className="px-2 py-1 hover:text-gray-400 hover:font-bold">Iniciar Sesion</Link>

                                    }

                                </nav>
                            </div>
                            
                        </div> 

                    </div>

                    { index  && 
                        <h1 className="text-white text-4xl px-5 pb-10">Venta de Casas y Departamentos Exclusivos de Lujo</h1>
                    }


                </div>

            </header> 
        </>

    )
}
