import { PropertyApiType } from "../types"

type DepartCardProps = {
    deparments: PropertyApiType[]   
}


export default function DepartCard( { deparments  } : DepartCardProps )  { 

    console.log( deparments )

    return (
        <>

            { deparments.map( (propiedad) => (

                <div className=" flex-1/3" key={propiedad._id}>
                    <div className="w-full  aspect-[3901/2926] overflow-hidden rounded-xl shadow"> 

                        <img src={propiedad.image} alt="Anuncio casa en el lago" className=" rounded-xl h-full w-full" />
                        
                    </div>
                    
                    <div className="flex flex-col gap-3 p-3 ">

                        <h3 className="text-3xl text-center mt-2"> {propiedad.name}</h3>
                        <p className="text-xl"> {propiedad.description}</p>
                        <p className="text-2xl text-green-600 font-bold text-center"> { propiedad.price } </p>

                        <ul className="flex justify-around my-4">
                            <li className="flex items-center gap-4">
                                <img src="/img/icono_wc.svg" alt="icono wc"/>
                                <p className="text-2xl font-bold">{ propiedad.wc }</p>
                            </li>
                            <li className="flex items-center gap-4">
                                <img src="/img/icono_estacionamiento.svg" alt="icono autos"/>
                                <p className="text-2xl font-bold"> { propiedad.parking } </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <img src="/img/icono_dormitorio.svg" alt="icono habitaciones"/>
                                <p className="text-2xl font-bold"> { propiedad.room } </p>
                            </li>
                        </ul>

                        <a href="/propiedad?id=<?php echo $propiedad->id; ?>" className=" uppercase text-white text-center text-xl font-bold w-full bg-orange-400 py-4 rounded hover:bg-orange-500">Ver Propiedad</a>

                    </div>
                </div>

            ))} 

        </>


    )
}
