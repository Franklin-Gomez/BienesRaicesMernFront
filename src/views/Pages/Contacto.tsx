import { useForm } from "react-hook-form"
import Error from "../../components/errors/Error"
import { formContactType } from "../../types"

export default function Contacto() {

    const { register , handleSubmit , watch , formState : { errors } , reset } = useForm({defaultValues : {
        telefono : '',
        nombre : '',
        email : '',
        mensaje : '',
        tipo : '',
        cantidad : '',
        metodo_contacto : '',
        choose_metodo_contacto : ''
    }})


    const choose_metodo_contacto = watch("choose_metodo_contacto")

    const onSubmit = ( formData : formContactType ) => { 

        console.log( formData  )
        reset()
        console.log('mandado')


    }

    return (
        <section className="container mx-auto my-4 ">
            <h1 className="text-3xl text-center my-6"> Contacto </h1>
            <img src="/img/destacada3.jpg" alt="" className="mx-auto w-2/3" />

            <h1 className="text-3xl text-center my-6"> LLena el Formulario de Contacto </h1>

            <form className="w-2/3 mx-auto space-y-6 mb-10" onSubmit={ handleSubmit(onSubmit) }>

                <fieldset className="border border-gray-300 rounded-xl px-10 py-5 relative space-y-3">
                    <legend className="text-lg px-2 text-gray-500">Informacion Personal</legend>
                    
                    <div className="flex flex-col gap-1">
                        <label className="font-bold uppercase text-xl" htmlFor="nombre"> Nombre : </label>
                        <input 
                            type="text" 
                            placeholder="Agrega tu Nombre" 
                            className="px-2 py-4 bg-gray-200 rounded text-xl" 
                            id="nombre" 
                            {...register("nombre" , { required : "Nombre es Obligatorio"} ) }
                        />

                        { errors.nombre && <Error> { errors.nombre?.message } </Error> }
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-bold uppercase text-xl " htmlFor="email"> E-mail : </label>
                        <input 
                            type="email" 
                            placeholder="Agrega tu Email" 
                            className="px-2 py-4 bg-gray-200 rounded text-xl" 
                            id="email" 
                            {...register("email" , { required : "el email es Obligatorio"})}
                        />

                        { errors.email && <Error> { errors.email?.message } </Error> }

                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-bold uppercase text-xl " htmlFor="telefono"> Telefono : </label>
                        <input 
                            type="number" 
                            placeholder="Agrega tu Telefono" 
                            id="telefono" 
                            className="px-2 py-4 bg-gray-200 rounded text-xl appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" 
                            {...register("telefono" , { required : "El telefono es Obligatorio"})}
                        />

                        { errors.telefono && <Error> { errors.telefono?.message } </Error> }
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-bold uppercase text-xl" htmlFor="mensaje"> Mensaje : </label>
                        <textarea 
                            placeholder="Agrega Una Descripcion" 
                            className="px-2 py-4 bg-gray-200 rounded text-xl w-full h-32 resize-none" 
                            id="mensaje" 
                            {...register("mensaje" , { required : "El mensaje es Obligatorio"})}
                        />

                        { errors.mensaje && <Error> { errors.mensaje?.message } </Error> }

                    </div>
                    
                </fieldset>


                <fieldset className="border border-gray-300 rounded-xl px-10 py-5 relative space-y-3">
                    <legend className="text-lg px-2 text-gray-500">Informacion sobre Propiedad</legend>
                    <div className="flex flex-col gap-1">
                        <label className="font-bold uppercase text-xl" htmlFor="tipo"> Vende o Compra : </label>
                        <select 
                            className="px-2 py-4 bg-gray-200 rounded text-xl" 
                            {...register("tipo" , { required : "Elegir el tipo de propiedad es obligtorio"})}
                            defaultValue={''}
                        >
                            <option disabled value={''}> -- Venderor o Comprador -- </option>
                            <option value={'vende'}> Vendedor </option>
                            <option value={'compra'}> Comprador </option>
                        </select>

                        { errors.tipo && <Error> { errors.tipo?.message } </Error> }

                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-bold uppercase text-xl" htmlFor="cantidad"> Cantidad : </label>
                        <input 
                            type="number" 
                            placeholder="Agrega el Monto de propiedad" className="px-2 py-4 bg-gray-200 rounded text-xl" 
                            id="cantidad" 
                            {...register("cantidad" , {required : "El monto es obligatorio"})}
                        />

                        { errors.cantidad && <Error> { errors.cantidad?.message } </Error> }

                    </div>

                </fieldset>

                <fieldset className="border border-gray-300 rounded-xl px-10 py-5 relative space-y-3">
                    <legend className="text-lg px-2 text-gray-500">Contacto</legend>
                    <div className="flex flex-col gap-1">
                        <label className="font-bold uppercase text-xl "> Como Desea ser Contactado : </label>
                        
                        <div className=" flex gap-4 fle">
                            <label className="inline-flex items-center">
                                <input 
                                    type="radio" 
                                    value="email" 
                                    className="form-radio text-blue-600"
                                    {...register("choose_metodo_contacto" , {required : "Debes elegir uno de los dos" })}
                                />
                                <span className="ml-2">Email</span>
                            </label>

                            <label className="inline-flex items-center">
                                <input 
                                    type="radio" 
                                    value="phone" 
                                    className="form-radio text-blue-600"
                                    {...register("choose_metodo_contacto" , {required : "Debes elegir uno de los dos" })}
                                />
                                <span className="ml-2">Número de teléfono</span>
                            </label>

                        </div>

                        { errors.choose_metodo_contacto  && <Error> { errors.choose_metodo_contacto?.message } </Error> }

                    </div>

                    { choose_metodo_contacto == "email" && 
                    
                        <div className="flex flex-col gap-2">
                            <label className="font-bold uppercase text-xl" htmlFor="contacto_email"> E-mail : </label>
                            <input 
                                type="email" 
                                placeholder="Agrega tu Email" 
                                className="px-2 py-4 bg-gray-200 rounded text-xl"
                                {...register("metodo_contacto" , { required : "Es necesario Ingresar tu Email de contacto"})}         
                            />
                            
                        </div>

                    }

                    { choose_metodo_contacto == "phone" &&
                    
                        <div className="flex flex-col gap-2">
                            <label className="font-bold uppercase text-xl" htmlFor="contacto-telefono"> Telefono : </label>
                            <input 
                                type="number" 
                                placeholder="Agrega tu Telefono" 
                                className="px-2 py-4 bg-gray-200 rounded text-xl appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" 
                                {...register("metodo_contacto" , { required : "Es necesario Ingresar tu Telefono de Contacto"})}
                            />
                        </div>

                    }

                </fieldset>

                <input type="submit" value={"Enviar"} className="bg-green-500 text-2xl font-bold px-2 py-4 text-white hover:bg-green-600 w-1/3 ml-10" />

            </form>

        </section>

    )
}
