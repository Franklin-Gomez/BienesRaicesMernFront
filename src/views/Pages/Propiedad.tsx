import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query";
import { getProperty } from "../../api";  
import { redirect } from "react-router-dom";
import { formatCurrency } from "../../utils";

export default function Propiedad() {

    const params = useParams();
    const { id } = params;

    if(!id) {
        redirect('/'); // Redirect to home if no id is provided
        return null; // Return null to avoid rendering the component
    }

    // sobrenombre de data 
    const { data : propiedad } = useQuery({
        queryKey: ['Property', id],
        queryFn: () => getProperty(id),
    });

    if(!propiedad) {
        redirect('/'); 
        return null; 
    }

    return (
        <div className="container mx-auto w-1/2">
            <h2 className="font-light text-center my-6 text-5xl">Propiedad</h2>

            <div className="p-4" key={propiedad._id}>
                    <div className="w-2/3 aspect-[3901/2926] overflow-hidden rounded-xl shadow items-center mx-auto"> 

                        <img src={propiedad.image} alt="Anuncio casa en el lago" className=" rounded-xl h-full w-full" />
                        
                    </div>
                    
                    <div className="flex flex-col gap-3 p-3 w-2/3 mx-auto">

                        <h3 className="text-3xl text-center mt-2"> {propiedad.name}</h3>
                        <p className="text-xl"> {propiedad.description}</p>
                        <p className="text-2xl text-green-600 font-bold text-center"> { formatCurrency (propiedad.price) } </p>

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

                        <a href={`/contacto`} className=" uppercase text-white text-center text-xl font-bold w-full bg-orange-400 py-4 rounded hover:bg-orange-500"> Me Interesa  </a>

                        </div>
                </div>
        </div>
    )
}
