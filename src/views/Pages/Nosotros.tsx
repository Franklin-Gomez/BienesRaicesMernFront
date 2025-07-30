import Aboutus from "../../components/Aboutus";

export default function Nosotros() {

    return (
        <>

            <section className=" container mx-auto my-10">

                <h1 className="text-center text-4xl"> Conoce Sobre Nosotros </h1>
            
                <div className="my-4 grid grid-cols-2 gap-4" >
                    
                    <img src="/img/blog3.jpg" className="rounded"/>
                    

                    <p className=" text-2xl">
                        En Bienes Raices, nos apasiona ayudarte a encontrar el lugar perfecto para vivir o invertir. Con años de experiencia en el sector inmobiliario, nos hemos consolidado como una empresa confiable que ofrece un servicio personalizado, transparente y enfocado en tus necesidades.
                        <br></br>
                        <br></br>
                        Ya sea que busques tu primera vivienda, un nuevo hogar para tu familia o una propiedad para rentabilizar, nuestro equipo está comprometido en acompañarte en cada paso del proceso. Creemos en construir relaciones duraderas basadas en la confianza, la honestidad y los resultados.
                        <br></br>
                        <br></br>
                        Nuestro objetivo es que disfrutes de una experiencia inmobiliaria simple, segura y sin complicaciones. Nos enorgullece ofrecerte un servicio excepcional, asesoramiento experto y un amplio portafolio de propiedades que se adaptan a tus necesidades y presupuesto.
                    </p>

                </div>

                <Aboutus/>

            </section>

        </>
    )
}
