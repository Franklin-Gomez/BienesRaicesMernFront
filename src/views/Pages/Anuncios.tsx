import { useQuery } from "@tanstack/react-query";
import { getAllPropertyAPI } from "../../api";
import DepartCard from "../../components/DepartCard";

export default function Anuncios() {
    const { data } = useQuery({
        queryKey: ['Properties'],
        queryFn: () => getAllPropertyAPI(),
    })


    return (
        <div className="container mx-auto my-4">

            <h1 className="text-center text-4xl my-4"> Casa y Depas en Venta </h1>

            <div className="flex">
                <div className="grid grid-cols-3  gap-5">

                    { data && 
                        <DepartCard
                            deparments={data}
                        />
                    }

                </div> {/* Card*/}
            </div>
            
            
        </div>
    )
}
