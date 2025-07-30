import { useForm } from "react-hook-form"
import { Link, useNavigate, useParams } from "react-router-dom"
import PropertyFormAdmin from "../../../components/admin/PropertyFormAdmin"
import { useMutation, useQuery } from "@tanstack/react-query"
import { getProperty, updatePropertyAPI } from "../../../api"
import { formPropertyType } from "../../../types"
import { useEffect } from "react"
import { toast } from "react-toastify"
import { usePropertyStore } from "../../../stores/store"

export default function EditProperty() {

    const navigate = useNavigate()
    const param = useParams()
    const id = param.id!
    

    const { data , isLoading , isError } = useQuery({
        queryKey: ['Property'],
        queryFn: () => getProperty( id ),
    })

    if( data) { 
        const setImageURL = usePropertyStore.getState().setImageURL
        setImageURL(data.image) // Set the image URL in the store when data is fetched
    }
    
    const { register , formState : { errors } , handleSubmit , reset } = useForm({ defaultValues : { 
        name : data?.name || "",
        description : data?.description || "",
        price : data?.price || 0,
        wc : data?.wc || 0,
        parking : data?.parking || 0,
        room : data?.room || 0,
        image : data?.image || ""
    }})

    // actualiza los campos con los datos  de actualizar
    useEffect(() => {
        if (data) {
            reset({
                name: data.name,
                description: data.description,
                price: data.price,
                wc: data.wc,
                parking: data.parking,
                room: data.room,
                image: data.image
            });
        }
    }, [data, reset]);

    const mutate = useMutation({ 
        mutationFn : updatePropertyAPI , 

        onSuccess : (data) => { 
            toast.success( data )
            navigate('/admin')
        },

        onError : (error) => { 
            toast.error( error.message )
        }
    })

    if( isError ) return 'Error...'

    if( isLoading )  return "Cargando..."

    console.log(data)

    if( !data ) return "No se encontró la propiedad" 

    const handleSaveForm = ( formData : formPropertyType) => { 

        const imageURL = usePropertyStore.getState().imageURL
        formData.image = imageURL  // agregamos la url de la nueva imagen al formData

        const data2 = { 
            formData , 
            id 
        }
        
        mutate.mutate( data2  )
    }

    if( data ) return (

        <div className="flex-1 container mx-auto p-6">

            <h1 className="text-center text-3xl font-bold"> Editar Propiedad  </h1>


            <div className="w-full flex justify-end">
                <Link
                    className="bg-gray-500 hover:bg-gray-800 px-8 py-4 text-white text-xl font-bold"
                    to={'/admin'}
                > Inicio </Link>
            </div>

            <div className="flex justify-center items-center">

                <div className="w-1/2 border border-gray-300 rounded-xl p-8">

                    <form onSubmit={ handleSubmit( handleSaveForm )}>

                        <PropertyFormAdmin
                            register={register}
                            errors={errors}
                        />

                        <input
                            type="submit"
                            value={"Guardar Cambios"}
                            className="bg-gray-800 hover:bg-gray-950  text-white text-2xl text-center items-center w-full py-2 my-2 rounded-xl"
                        />

                    </form>
                 
                </div>
            </div>
        </div>
    )
}
