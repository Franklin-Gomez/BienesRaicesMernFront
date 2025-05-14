
export default function Anuncios() {

    return (
        <div className="container mx-auto my-4">

            <h1 className="text-center text-4xl my-4"> Casa y Depas en Venta </h1>

            <div className="flex">
                <div className="grid grid-cols-3  gap-5">

                    <div className=" border rounded-xl">
                        <img src="/img/anuncio1.jpg" alt="Anuncio casa en el lago" className="rounded-t-xl" />
                        <div className="flex flex-col gap-3 p-3 bg-gray-100 rounded-b-xl ">
                            <h3 className="text-3xl text-center mt-2"> Casa de Lujo en el Lago </h3>
                            <p className="text-xl"> 
                                Casa en el lago con excelente vista , acabados  de lujo  a un excelente precio
                            </p>
                            <p className="text-2xl text-green-600 font-bold text-center">$3'000.000</p>

                            <ul className="flex justify-around my-4">
                                <li className="flex items-center gap-4">
                                    <img src="/img/icono_wc.svg" alt="icono wc"/>
                                    <p className="text-2xl font-bold">3</p>
                                </li>
                                <li className="flex items-center gap-4">
                                    <img src="/img/icono_estacionamiento.svg" alt="icono autos"/>
                                    <p className="text-2xl font-bold">3</p>
                                </li>
                                <li className="flex items-center gap-4">
                                    <img src="/img/icono_dormitorio.svg" alt="icono habitaciones"/>
                                    <p className="text-2xl font-bold">4</p>
                                </li>
                            </ul>
                            <a href="/propiedad?id=<?php echo $propiedad->id; ?>" className=" uppercase text-white text-center text-xl font-bold w-full bg-orange-400 py-4 rounded hover:bg-orange-500">Ver Propiedad</a>
                        </div>
                    </div>

                    <div className=" border rounded-xl">
                        <img src="/img/anuncio2.jpg" alt="Anuncio casa en el lago" className=" rounded-xl" />
                        <div className="flex flex-col gap-3 p-3 bg-gray-100 rounded-b-xl  ">
                            <h3 className="text-3xl text-center mt-2"> Casa de Lujo en el Lago </h3>
                            <p className="text-xl"> 
                                Casa en el lago con excelente vista , acabados  de lujo  a un excelente precio
                            </p>
                            <p className="text-2xl text-green-600 font-bold text-center">$3'000.000</p>

                            <ul className="flex justify-around my-4">
                                <li className="flex items-center gap-4">
                                    <img src="/img/icono_wc.svg" alt="icono wc"/>
                                    <p className="text-2xl font-bold">3</p>
                                </li>
                                <li className="flex items-center gap-4">
                                    <img src="/img/icono_estacionamiento.svg" alt="icono autos"/>
                                    <p className="text-2xl font-bold">3</p>
                                </li>
                                <li className="flex items-center gap-4">
                                    <img src="/img/icono_dormitorio.svg" alt="icono habitaciones"/>
                                    <p className="text-2xl font-bold">4</p>
                                </li>
                            </ul>
                            <a href="/propiedad?id=<?php echo $propiedad->id; ?>" className=" uppercase text-white text-center text-xl font-bold w-full bg-orange-400 py-4 rounded hover:bg-orange-500">Ver Propiedad</a>
                        </div>
                    </div>

                    <div className=" rounded-xl border">
                        <img src="/img/anuncio3.jpg" alt="Anuncio casa en el lago" className=" rounded-t-xl" />
                        <div className="flex flex-col gap-3 p-3 bg-gray-100 rounded-b-xl ">
                            <h3 className="text-3xl text-center mt-2"> Casa de Lujo en el Lago </h3>
                            <p className="text-xl"> 
                                Casa en el lago con excelente vista , acabados  de lujo  a un excelente precio
                            </p>
                            <p className="text-2xl text-green-600 font-bold text-center">$3'000.000</p>

                            <ul className="flex justify-around my-4">
                                <li className="flex items-center gap-4">
                                    <img src="/img/icono_wc.svg" alt="icono wc"/>
                                    <p className="text-2xl font-bold">3</p>
                                </li>
                                <li className="flex items-center gap-4">
                                    <img src="/img/icono_estacionamiento.svg" alt="icono autos"/>
                                    <p className="text-2xl font-bold">3</p>
                                </li>
                                <li className="flex items-center gap-4">
                                    <img src="/img/icono_dormitorio.svg" alt="icono habitaciones"/>
                                    <p className="text-2xl font-bold">4</p>
                                </li>
                            </ul>
                            <a href="/propiedad?id=<?php echo $propiedad->id; ?>" className=" uppercase text-white text-center text-xl font-bold w-full bg-orange-400 py-4 rounded hover:bg-orange-500">Ver Propiedad</a>
                        </div>
                    </div>

                    <div className=" border rounded-xl">
                        <img src="/img/anuncio4.jpg" alt="Anuncio casa en el lago" className=" rounded-t-xl" />
                        <div className="flex flex-col gap-3 p-3 bg-gray-100 rounded-b-xl  ">
                            <h3 className="text-3xl text-center mt-2"> Casa de Lujo en el Lago </h3>
                            <p className="text-xl"> 
                                Casa en el lago con excelente vista , acabados  de lujo  a un excelente precio
                            </p>
                            <p className="text-2xl text-green-600 font-bold text-center">$3'000.000</p>

                            <ul className="flex justify-around my-4">
                                <li className="flex items-center gap-4">
                                    <img src="/img/icono_wc.svg" alt="icono wc"/>
                                    <p className="text-2xl font-bold">3</p>
                                </li>
                                <li className="flex items-center gap-4">
                                    <img src="/img/icono_estacionamiento.svg" alt="icono autos"/>
                                    <p className="text-2xl font-bold">3</p>
                                </li>
                                <li className="flex items-center gap-4">
                                    <img src="/img/icono_dormitorio.svg" alt="icono habitaciones"/>
                                    <p className="text-2xl font-bold">4</p>
                                </li>
                            </ul>
                            <a href="/propiedad?id=<?php echo $propiedad->id; ?>" className=" uppercase text-white text-center text-xl font-bold w-full bg-orange-400 py-4 rounded hover:bg-orange-500">Ver Propiedad</a>
                        </div>
                    </div>

                    <div className=" border rounded-xl">
                        <img src="/img/anuncio5.jpg" alt="Anuncio casa en el lago" className=" rounded-t-xl" />
                        <div className="flex flex-col gap-3 p-3 bg-gray-100 rounded-b-xl  ">
                            <h3 className="text-3xl text-center mt-2"> Casa de Lujo en el Lago </h3>
                            <p className="text-xl"> 
                                Casa en el lago con excelente vista , acabados  de lujo  a un excelente precio
                            </p>
                            <p className="text-2xl text-green-600 font-bold text-center">$2'000.000</p>

                            <ul className="flex justify-around my-4">
                                <li className="flex items-center gap-4">
                                    <img src="/img/icono_wc.svg" alt="icono wc"/>
                                    <p className="text-2xl font-bold">3</p>
                                </li>
                                <li className="flex items-center gap-4">
                                    <img src="/img/icono_estacionamiento.svg" alt="icono autos"/>
                                    <p className="text-2xl font-bold">3</p>
                                </li>
                                <li className="flex items-center gap-4">
                                    <img src="/img/icono_dormitorio.svg" alt="icono habitaciones"/>
                                    <p className="text-2xl font-bold">4</p>
                                </li>
                            </ul>
                            <a href="/propiedad?id=<?php echo $propiedad->id; ?>" className=" uppercase text-white text-center text-xl font-bold w-full bg-orange-400 py-4 rounded hover:bg-orange-500">Ver Propiedad</a>
                        </div>
                    </div>

                    <div className=" border rounded-xl">
                        <img src="/img/anuncio6.jpg" alt="Anuncio casa en el lago" className=" rounded-t-xl" />
                        <div className="flex flex-col gap-3 p-3 bg-gray-100 rounded-b-xl  ">
                            <h3 className="text-3xl text-center mt-2"> Casa de Lujo en el Lago </h3>
                            <p className="text-xl"> 
                                Casa en el lago con excelente vista , acabados  de lujo  a un excelente precio
                            </p>
                            <p className="text-2xl text-green-600 font-bold text-center">$3'500.000</p>

                            <ul className="flex justify-around my-4">
                                <li className="flex items-center gap-4">
                                    <img src="/img/icono_wc.svg" alt="icono wc"/>
                                    <p className="text-2xl font-bold">3</p>
                                </li>
                                <li className="flex items-center gap-4">
                                    <img src="/img/icono_estacionamiento.svg" alt="icono autos"/>
                                    <p className="text-2xl font-bold">3</p>
                                </li>
                                <li className="flex items-center gap-4">
                                    <img src="/img/icono_dormitorio.svg" alt="icono habitaciones"/>
                                    <p className="text-2xl font-bold">4</p>
                                </li>
                            </ul>
                            <a href="/propiedad?id=<?php echo $propiedad->id; ?>" className=" uppercase text-white text-center text-xl font-bold w-full bg-orange-400 py-4 rounded hover:bg-orange-500">Ver Propiedad</a>
                        </div>
                    </div>

                </div> {/* Card*/}
            </div>
            
            
        </div>
    )
}
