import { ChangeEvent } from "react"
import { formPropertyType } from "../../types"
import { UseFormRegister } from "react-hook-form"
import axios from "axios"
import { usePropertyStore } from "../../stores/store"

type ImageUploadPropsype = { 
    register : UseFormRegister<formPropertyType> 
}

export default function ImageUpload( { register } : ImageUploadPropsype ) {

    const setImageURL = usePropertyStore((state) => state.setImageURL)


    const handleUploadImage = async  (e : ChangeEvent<HTMLInputElement> ) => { 
        const data = new FormData()
        
        const image = e.target.files?.[0]!
        const preset = "correo"

        data.append('file', image )
        data.append('upload_preset', preset)

        try {
            
            const res = await axios.post( 'https://api.cloudinary.com/v1_1/dxim8oxpo/image/upload', data  );

            const file =  await res.data

            setImageURL( file.secure_url )

        } catch (error) {
            console.log('Error Uploading Image :' , error)

        }
    }


    return (

        <>
            <div className="space-y-2">

                <label className="text-xl text-gray-400"> Imagen Producto </label>

                <div 
                    className="cursor-pointer hover:opacity-70 transition border-neutral-300 gap-4 text-neutral-600 bg-slate-100"
                >

                    <input
                        type="file"
                        className=" w-full text-center"
                        {...register("image", 
                            { 
                                required: "Imagen requerida",
                                onChange : (e) => handleUploadImage(e),
                            }
                        )}
                    />

                </div>
                

            </div>
        
        </>
    )

}