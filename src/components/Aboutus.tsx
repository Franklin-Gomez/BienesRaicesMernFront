
export default function Aboutus() {
    return (
        <section className="container mx-auto p-4">
            <h2 className="font-bold text-orange-400 text-center text-5xl my-6">Más Sobre Nosotros</h2>

            <div className="iconos-nosotros flex justify-between gap-4">

                <div className="text-center w-1/3 flex flex-col items-center">
                    <img src="/img/icono1.svg" className="w-42 h-42" alt="Icono Seguridad"/>
                    <h3 className=" uppercase font-bold my-4">Seguridad</h3>
                    <p className="text-xl">Quasi quibusdam, quos deserunt, recusandae iusto dolorem voluptatibus quaerat veritatis consectetur culpa sit dignissimos maiores iure id, magnam non voluptatum molestiae doloremque.</p>
                </div>

                <div className="icono text-center w-1/3 flex flex-col items-center">
                    <img src="/img/icono2.svg" className="w-42 h-38" alt="Icono Mejor Precio"/>
                    <h3 className=" uppercase font-bold my-4">El Mejor Precio</h3>
                    <p className="text-xl">Quasi quibusdam, quos deserunt, recusandae iusto dolorem voluptatibus quaerat veritatis consectetur culpa sit dignissimos maiores iure id, magnam non voluptatum molestiae doloremque.</p>
                </div>

                <div className="icono text-center w-1/3 flex flex-col items-center">
                    <img src="/img/icono3.svg" className="w-42 h-38" alt="Icono a Tiempo"/>
                    <h3 className=" uppercase font-bold my-4">A Tiempo</h3>
                    <p className="text-xl">Quasi quibusdam, quos deserunt, recusandae iusto dolorem voluptatibus quaerat veritatis consectetur culpa sit dignissimos maiores iure id, magnam non voluptatum molestiae doloremque.</p>
                </div>
            </div>
        </section>
    )
}
