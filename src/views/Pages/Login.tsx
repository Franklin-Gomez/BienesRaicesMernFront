import { useForm } from "react-hook-form"
import { Link, redirect, useNavigate } from "react-router-dom"
import { loginAPI } from "../../api"
import { formLoginType } from "../../types"
import Error from "../../components/errors/Error"
import { useMutation } from "@tanstack/react-query"
import { toast } from "react-toastify"

export default function Login() {

    const { register , handleSubmit , formState : { errors } } = useForm<formLoginType>({ defaultValues : { 
        email : '',
        password : ''
    }}) 

    const navigate = useNavigate()

    const mutation = useMutation({
        mutationFn : loginAPI , 

        onSuccess : () => { 
            navigate('/admin')
        } , 

        onError : (error) => { 
            toast.error( error.message)
        }
    })

    const formSubmit = ( formData : formLoginType ) => { 
        mutation.mutate( formData )
    }

    return (

        <div className="flex-1 flex items-center justify-center">
            <section className="w-1/3 border border-gray-300 rounded-xl p-8">
                    
                <h1 className="text-4xl text-center  font-bold uppercase mb-4 mt-2"> Iniciar Sesion </h1>
                <form onSubmit={ handleSubmit( formSubmit )} >

                    <div className=" flex flex-col gap-1 mb-4">
                        <label htmlFor="email" className="text-xl text-gray-400"> Correo Electronico  </label>
                        <input
                            type="email"
                            placeholder="Digita tu Email"
                            className="border border-gray-300 p-2 rounded-xl text-xl"
                            id="email"
                            autoComplete="email"
                            {...register("email" , { required : "El email es obligatorio" })}
                        />

                        { errors.email && <Error> { errors.email.message } </Error> }
                    </div>

                    
                    <div className="flex flex-col gap-1 mb-4">
                        <label htmlFor="password" className="text-xl text-gray-400"> Contraseña  </label>
                        <input
                            type="password"
                            placeholder="Digita tu Contraseña"
                            className=" border border-gray-300 p-2 rounded-xl text-xl"
                            id="password"
                            autoComplete="current-password"
                            {...register("password" , { required : "La Contraseña es obligatorio" })}
                        />

                        { errors.password && <Error> { errors.password.message } </Error> }
                    </div>

                    <input
                        type="submit"
                        value={"Iniciar Sesion"}
                        className="bg-gray-800 hover:bg-gray-950  text-white text-2xl text-center items-center w-full py-2 my-2 rounded-xl"
                    />


                </form>

                <Link 
                    to={'/register'}
                    className="text-sm hover:text-gray-400 "
                > No tienes Cuenta?, <span className="text-cyan-500 hover:text-gray-400"> Registrate </span> </Link>
            
            </section>

        </div>

        
       
                    
    )
}
