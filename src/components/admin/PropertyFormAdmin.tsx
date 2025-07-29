import { FieldErrors, UseFormRegister } from "react-hook-form"
import { formPropertyType } from "../../types"
import Error from "../errors/Error"
import ImageUpload from "./ImagenUpload"

type PropertyFormAdminType = { 
    register :  UseFormRegister<formPropertyType> 
    errors : FieldErrors<formPropertyType>
}


export default function PropertyFormAdmin( { register , errors  } : PropertyFormAdminType) {
    return (
        <>
            <div className=" flex flex-col gap-1 mb-4">
                <label htmlFor="name" className="text-xl text-gray-400"> Nombre </label>
                <input
                    type="text"
                    placeholder="Digita Nombre Propiedad"
                    className="border border-gray-300 p-2 rounded-xl text-xl"
                    id="name"
                    autoComplete="name"
                    {...register("name" , { required : "El Name de de Propiedad es obligatorio" })}
                />

                { errors.name && <Error> { errors.name.message } </Error> }
            </div>

            
            <div className=" flex flex-col gap-1 mb-4">
                <label htmlFor="description" className="text-xl text-gray-400"> Descripcion </label>
                <input
                    type="text"
                    placeholder="Digita Descripcion Propiedad"
                    className="border border-gray-300 p-2 rounded-xl text-xl"
                    id="description"
                    autoComplete="description"
                    {...register("description" , { required : "La Descripcion de la propiedad es obligatorio" })}
                />

                { errors.description && <Error> { errors.description.message } </Error> }
            </div>

            <div className=" flex flex-col gap-1 mb-4">
                <label htmlFor="price" className="text-xl text-gray-400"> Precio  </label>
                <input
                    type="number"
                    placeholder="Digita Precio Propiedad"
                    className="border border-gray-300 p-2 rounded-xl text-xl"
                    id="price"
                    autoComplete="price"
                    {...register("price" , 
                        { required : "El Precio de la propiedad es obligatorio" ,
                        min : { 
                            value : 1 ,
                            message: "El precio debe ser mayor a 0"
                        }  
                    })}
                />

                { errors.price && <Error> { errors.price.message } </Error> }
            </div>

            <div className=" flex flex-col gap-1 mb-4">
                <label htmlFor="wc" className="text-xl text-gray-400"> Baños  </label>
                <input
                    type="number"
                    placeholder="Cantidad de Baños"
                    className="border border-gray-300 p-2 rounded-xl text-xl"
                    id="wc"
                    autoComplete="wc"
                    {...register("wc" , { required : "Cantidad de Baños de la propiedad" ,                                     
                        min : { 
                            value : 1 ,
                            message: "El precio debe ser mayor a 0"
                        }   
                    })}
                />

                { errors.wc && <Error> { errors.wc.message } </Error> }
            </div>

            <div className=" flex flex-col gap-1 mb-4">
                <label htmlFor="wc" className="text-xl text-gray-400"> Parquederos  </label>
                <input
                    type="number"
                    placeholder="Cantidad de Parquederos"
                    className="border border-gray-300 p-2 rounded-xl text-xl"
                    id="parking"
                    autoComplete="parking"
                    {...register("parking" , { required : "Cantidad de Parquederos de la propiedad" ,                                     
                        min : { 
                            value : 1 ,
                            message: "El precio debe ser mayor a 0"
                        }})}
                />

                { errors.parking && <Error> { errors.parking.message } </Error> }
            </div>

            
            <div className=" flex flex-col gap-1 mb-4">
                <label htmlFor="room" className="text-xl text-gray-400"> Cuartos  </label>
                <input
                    type="number"
                    placeholder="Cantidad de Parquederos"
                    className="border border-gray-300 p-2 rounded-xl text-xl"
                    id="room"
                    autoComplete="room"
                    {...register("room" , { required : "Cantidad de Habitaciones  de la propiedad" ,                                     
                        min : { 
                            value : 1 ,
                            message: "El precio debe ser mayor a 0"
                        }   
                    })}
                />

                { errors.room && <Error> { errors.room.message } </Error> }
            </div>

            <ImageUpload
                register={register}
            />

        </>
    )
}
