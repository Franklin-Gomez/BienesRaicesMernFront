import { Link } from "react-router-dom"
import { useQuery , useQueryClient , useMutation} from "@tanstack/react-query"
import { getAllClientsAPI , deleteClientAPI } from "../../../api"
import { toast } from "react-toastify"

export default function Clientes() {

    // obtener todos los clientes
    const { data }  = useQuery({
        queryKey: ['Clientes'],
        queryFn: () => getAllClientsAPI()
    })

    // borrar cliente
    const queryClient = useQueryClient()
    const mutate = useMutation({
        mutationFn : deleteClientAPI , 

        onSuccess : () => { 
            toast.success("Cliente Eliminado Satisfactoriamente")
            queryClient.invalidateQueries({ queryKey : ['Clientes'] })
        },
        
        onError : (error) => { 
            toast.error( error.message)
        }
    })
    

    const handleDelete = ( _id : string) => { 
        mutate.mutate(_id)
    }



    return (
        <div className="container mx-auto p-4 flex-1">
            <h1 className="text-center text-3xl font-bold"> Panel de Clientes </h1>

            <div className="flex justify-center items-center my-4 ">

                { data && data?.length > 0 ? 
                    <table className=" w-full ">
                        <thead>
                            <tr className="text-center">
                                <th className="border px-2 py-1">Nombre</th>
                                <th className="border px-2 py-1">Correo</th>
                                <th className="border px-2 py-1">Phone</th>
                                <th className="border px-2 py-1">mensaje</th>
                                <th className="border px-2 py-1">Tipo Contacto</th>
                                <th className="border px-2 py-1">Cantidad $$ </th>
                                <th className="border px-2 py-1">Metodo Contacto</th>
                                <th colSpan={2} rowSpan={2} className="border px-2 py-1">Acciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            
                            { data.map( ( cliente ) => 
                                
                                <tr className="text-center" key={cliente._id }>
                                    <td className="border px-2 py-1">{ cliente.nombre }</td>
                                    <td className="border px-2 py-1">{ cliente.email }</td>
                                    <td className="border px-2 py-1">{ cliente.telefono }</td>
                                    <td className="border px-2 py-1">{ cliente.mensaje }</td>
                                    <td className="border px-2 py-1">{ cliente.tipo }</td>
                                    <td className="border px-2 py-1">{ cliente.cantidad }</td>
                                    <td className="border px-2 py-1">{ cliente.choose_metodo_contacto }</td>

                                    {/* <td className="border border-black px-4 py-2 bg-green-500 text-white hover:bg-green-800"> 
                                        
                                        <Link
                                            to={`/admin/edit_property/${cliente.id}`}
                                        >
                                            Editar
                                        </Link>
                                    </td> */}
                                    
                                    <td className="border border-black px-4 py-2 bg-red-500 text-white hover:bg-red-800"> 

                                        <button
                                            onClick={() => handleDelete( cliente._id )}
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
