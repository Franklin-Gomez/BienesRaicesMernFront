
export default function Footer() {
    return (
        <>
            <footer className="bg-gray-800 px-0 pt-4 pb-6 ">
                <div className="container mx-auto p-4">

                    <div className="w-full max-w-7xl mt-0  flex justify-between items-center text-white  ">
                        
                        <nav className="flex p-6 gap-3 text-xl">
                            <a href="/nosotros" className=" py-1 hover:text-gray-400 hover:font-bold">Nosotros</a>
                            <a href="/propiedades" className=" py-1 hover:text-gray-400 hover:font-bold">Anuncios</a>
                            <a href="/blog" className=" py-1 hover:text-gray-400 hover:font-bold">Blog</a>
                            <a href="/contacto" className=" py-1 hover:text-gray-400 hover:font-bold">Contacto</a>
                        </nav>

                        <p className="text-xl">Todos los derechos Reservados  &copy;</p>

                    </div>

                </div>
            </footer> 
        </>

    )
}
