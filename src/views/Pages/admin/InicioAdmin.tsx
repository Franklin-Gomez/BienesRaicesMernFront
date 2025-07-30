import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { deletePropertyAPI, getAllPropertyAPI } from "../../../api";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { usePropertyStore } from "../../../stores/store";
import { formatCurrency } from "../../../utils";
export default function InicioAdmin() {

    const { data } = useQuery({
        queryKey: ['Properties'],
        queryFn: () => getAllPropertyAPI(),
    })

    useEffect(() => {
        usePropertyStore.getState().resetImageURL(); // limpiamos valor del state
    })
    
    
    // invalidar queries
    const queryClient = useQueryClient()

    // borrar propiedad
    const mutate = useMutation({
        mutationFn : deletePropertyAPI , 

        onSuccess : ( data ) => { 
            toast.success( data)
            queryClient.invalidateQueries({ queryKey : ['Properties']})
        },
        
        onError : (error) => { 
            toast.error( error.message)
        }
    })
    

    const handleDelete = ( id : string) => { 
        mutate.mutate(id)
    }


    return (
        <div className="flex-1 container mx-auto p-6">
            
            <h1 className="text-center text-3xl font-bold"> Panel de Administracion Propiedades </h1>


            <div className="w-full flex justify-end">
                <Link
                    className="bg-gray-500 hover:bg-gray-800 px-8 py-4 text-white text-xl font-bold"
                    to={'/admin/create_property'}
                > Crear Propiedad </Link>
            </div>

            <div className="flex justify-center items-center my-4 ">

                { data && data?.length > 0 ? 
                    <table className=" w-full ">
                        <thead>
                            <tr className="text-center">
                                <th rowSpan={2} className="border px-2 py-1">Imagen</th>
                                <th rowSpan={2} className="border px-2 py-1">Nombre Propiedad</th>
                                <th rowSpan={2} className="border px-2 py-1">Descripción</th>
                                <th rowSpan={2} className="border px-2 py-1">Precio</th>
                                <th colSpan={3} className="border px-2 py-1">Características</th>
                                <th colSpan={2} rowSpan={2} className="border px-2 py-1">Acciones</th>
                            </tr>
                            <tr className="text-center">
                                <th className="border px-2 py-1">WC</th>
                                <th className="border px-2 py-1">Parking</th>
                                <th className="border px-2 py-1">Room</th>
                            </tr>
                        </thead>

                        <tbody>
                            
                            { data.map( ( property ) => 
                                
                                <tr className="text-center" key={property._id }>
                                    <td className="border px-2 py-1">
                                        <img src={property.image} alt="Imagen Propiedad" className="w-30 h-30 object-cover rounded-lg mx-auto" />
                                    </td>
                                    <td className="border px-2 py-1">{ property.name }</td>
                                    <td className="border px-2 py-1 max-w-[200px] ">{ property.description }</td>
                                    <td className="border px-2 py-1">{ formatCurrency ( property.price ) }</td>
                                    <td className="border px-2 py-1">{ property.wc }</td>
                                    <td className="border px-2 py-1">{ property.parking }</td>
                                    <td className="border px-2 py-1">{ property.room }</td>
                                    <td className="border border-black px-4 py-2 bg-green-500 text-white hover:bg-green-800"> 
                                        
                                        <Link
                                            to={`/admin/edit_property/${property._id}`}
                                        >
                                            Editar
                                        </Link>
                                    </td>
                                    
                                    <td className="border border-black px-4 py-2 bg-red-500 text-white hover:bg-red-800"> 

                                        <button
                                            onClick={() => handleDelete( property._id )}
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            )}
                                    
                        </tbody>

                    </table>

                    :

                    <h1> No hay Registros </h1>

                }



            </div>
        </div>
    )
}
