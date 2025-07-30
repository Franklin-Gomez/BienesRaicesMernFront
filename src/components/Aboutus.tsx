
export default function Aboutus() {
    return (
        <section className="container mx-auto p-4">
            <h2 className="font-bold text-orange-400 text-center text-5xl my-6">Más Sobre Nosotros</h2>

            <div className="iconos-nosotros flex  flex-col md:flex-row justify-between gap-4">

                <div className="text-center md:w-1/3 flex flex-col items-center">
                    <img src="/img/icono1.svg" className="w-42 h-42" alt="Icono Seguridad"/>
                    <h3 className=" uppercase font-bold my-4">Seguridad</h3>
                    <p className="text-xl"> Nuestra plataforma protege tus datos y operaciones con cifrado avanzado, brindándote tranquilidad en cada paso.
                    </p>
                </div>

                <div className="icono text-center md:w-1/3 flex flex-col items-center">
                    <img src="/img/icono2.svg" className="w-42 h-38" alt="Icono Mejor Precio"/>
                    <h3 className=" uppercase font-bold my-4">El Mejor Precio</h3>
                    <p className="text-xl">  Compara cientos de propiedades y encuentra la opción perfecta al mejor precio, sin comisiones ocultas ni sorpresas.
                    </p>
                </div>

                <div className="icono text-center md:w-1/3 flex flex-col items-center">
                    <img src="/img/icono3.svg" className="w-42 h-38" alt="Icono a Tiempo"/>
                    <h3 className=" uppercase font-bold my-4">A Tiempo</h3>
                    <p className="text-xl">        Filtra, compara y agenda visitas en minutos. Hacemos que el proceso de compra o venta sea rápido y eficiente.
                    </p>
                </div>
            </div>
        </section>
    )
}
