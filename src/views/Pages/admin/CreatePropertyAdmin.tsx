import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { formPropertyType } from "../../../types";
import { useMutation } from "@tanstack/react-query";
import { createPropertyAPI } from "../../../api";
import { toast } from "react-toastify";
import PropertyFormAdmin from "../../../components/admin/PropertyFormAdmin";
import { usePropertyStore } from "../../../stores/store";


export default function CreatePropertyAdmin() {

    const navigate = useNavigate()
    const imageURL = usePropertyStore((state) => state.imageURL )
    const setImageURL = usePropertyStore((state) => state.setImageURL )

    const { handleSubmit , register , formState : { errors }} = useForm({ defaultValues : { 
        name : "",
        description : "",
        price : 0,
        wc : 0,
        parking : 0,
        room : 0,
        image : ""
    }})

    const mutate = useMutation({
        mutationFn : createPropertyAPI ,
        onSuccess  :  ( data ) => { 
            toast.success( data )
            navigate('/admin')
        },
        onError : ( error ) => { 
            toast.error( error.message)
        }
    })

    const formSubmit = async ( formData : formPropertyType) => { 

        const data = {
            ...formData,
            image : imageURL
        }

        mutate.mutate( data  )
            
    }

    setImageURL("") // Reset the image URL after submission

    return (
        <div className="flex-1 container mx-auto">

            <div className="w-full flex justify-end">
                <Link
                    className="bg-gray-500 hover:bg-gray-800 px-8 py-4 my-4 text-white text-xl font-bold"
                    to={'/admin'}
                > Inicio </Link>
            </div>

            {/* Contenedor Para Centrar*/}
            <div className="flex justify-center items-center">

                <section className="w-1/2 border border-gray-300 rounded-xl p-8">
                        
                    <h1 className="text-4xl text-center  font-bold uppercase mb-4 mt-2"> Crear Propiedad </h1>

                    <form onSubmit={ handleSubmit( formSubmit )} >

                        <PropertyFormAdmin

                            register={register}
                            errors={errors}
                        
                        />

                        <input
                            type="submit"
                            value={"Agregar Propiedad"}
                            className="bg-gray-800 hover:bg-gray-950  text-white text-2xl text-center items-center w-full py-2 my-2 rounded-xl"
                        />


                    </form>
                
                </section>
            </div>


        </div>
    )
}
