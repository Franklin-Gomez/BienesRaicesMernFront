import { useQuery } from "@tanstack/react-query";
import { getThreePropertiesAPI } from "../api";
import DepartCard from "./DepartCard";

export default function Depart() {

    const { data } = useQuery({
        queryKey: ['TresDepartamentos'],
        queryFn: () => getThreePropertiesAPI(),
    });

    return (
        <main className="container mx-auto">
            <h2 className="font-light text-center my-6 text-5xl">Casas y Depas en Venta</h2>
            
            <div className="flex">
                <div className=" flex flex-col  md:flex-row gap-4 ">

                    { data && 

                        <DepartCard
                            deparments={data} 
                        />

                    }
                    
                </div> {/* Card*/}
            </div>

        </main>
    ) 
}
