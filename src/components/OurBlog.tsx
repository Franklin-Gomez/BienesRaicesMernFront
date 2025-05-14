
export default function OurBlog() {
    return (
        <div className=" container mx-auto grid grid-cols-[2fr_1fr] gap-4">
            <section className="blog">
                <h3 className="text-3xl text-center mt-2">Nuestro Blog</h3>

                <article className="flex gap-4 items-center my-4 ">
                    <div className="flex-1/4">
                        <img src="/img/blog1.jpg" alt="Entrada de blog" className="rounded"/>
                    </div>
                    <div className="flex-3/4">
                        <a href="entrada.php">
                            <h4 className="text-2xl font-bold mb-1 "> 
                                <span className="border-b-2 border-green-500">Terraza en el techo</span> de tu casa
                            </h4>
                        </a>
                        <p className="text-md mb-1">Escrito el: <span className="text-amber-500 font-bold"> 20/10/2019 </span> por: <span className="text-amber-500 font-bold"> Admin </span> </p>
                        <p className="text-xl mb-1">Consejos para construir una terraza en el techo de tu casa, con los mejores materiales y ahorrando dinero</p>
                    </div>
                </article>

                <article className="flex gap-4 items-center my-4 ">
                    <div className="flex-1/4">
                        <img src="/img/blog2.jpg" alt="Entrada de blog" className="rounded"/>
                    </div>
                    <div className="flex-3/4">
                        <a href="entrada.php">
                            <h4 className="text-2xl font-bold mb-1 "> 
                                <span className="border-b-2 border-green-500">Guia para la Decoracion</span> de tu hogar
                            </h4>
                        </a>
                        <p className="text-md mb-1">Escrito el: <span className="text-amber-500 font-bold"> 20/10/2019 </span> por: <span className="text-amber-500 font-bold"> Admin </span> </p>
                        <p className="text-xl mb-1">Consejos para construir una terraza en el techo de tu casa, con los mejores materiales y ahorrando dinero</p>
                    </div>
                </article>
            </section>

            <section className="testimoniales flex flex-col flex-1/3 gap-3 items-center ">

                <h3 className="text-3xl text-center mt-2">Testimoniales</h3>

                <div className="bg-green-600  rounded-2xl p-4 h-98 w-1/2 ">
            
                    <div className="grid grid-cols-[1fr_2fr]">
                        <img src="/img/comilla.svg" className="size-18" />

                        <blockquote className="text-xl text-white">
                            El personal se comportó de una excelente forma, muy buena atención y la casa que me ofrecieron cumple con todas mis expectativas.
                        </blockquote>

                    </div>

                    <p className="text-end mt-4 text-white">- Juan De la torre</p>
                    
                </div>
            </section>
        </div>

    )
}
