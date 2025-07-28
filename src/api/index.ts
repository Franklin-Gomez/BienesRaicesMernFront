import { ClientsType, formContactType, formLoginType, formPropertyType, PropertiesApiSchema, PropertyApiSchema } from "../types"
import axios, { isAxiosError } from "axios"

export const loginAPI = async ( user : formLoginType ) => { 

    try {
        
        const url = `${import.meta.env.VITE_API_URL}/api/user/login`
    
        const { data } = await axios.post<string>( url  , user )

        localStorage.setItem('AUTH_TOKEN' , data )
        
    } catch ( error ) {
        
        if( isAxiosError( error) && error.response ) {
            throw new Error(error.response.data.error)
        }

    }
    
}

//----------------------- Property API ------------------------------
export const createPropertyAPI = async ( property :  formPropertyType) => {     

    try {

        const url = `${import.meta.env.VITE_API_URL}/api/property/`

        const { data } = await axios.post<string> ( url , property )

        return data 

    } catch (error) {

        if( isAxiosError( error) && error.response ) {
            throw new Error(error.response.data.error)
        }

    }
}

export const getAllPropertyAPI = async () => { 
    
    try {

        const url = `${import.meta.env.VITE_API_URL}/api/property/`

        const  { data }  = await axios.get( url )


        const response = PropertiesApiSchema.safeParse( data )

        if( response.success) { 
            
            return  response.data

        }
        
    } catch (error) {

        if( isAxiosError( error) && error.response ) {
            throw new Error(error.response.data.error)
        }

    }
}

export const getThreePropertiesAPI = async () => { 

    try {   

        const url = `${import.meta.env.VITE_API_URL}/api/property/three`

        const { data } = await axios.get( url )

       
        const response = PropertiesApiSchema.safeParse( data )

        if( response.success ) { 
            return response.data
        }

    }catch (error) {
        if( isAxiosError( error) && error.response ) { 
            throw new Error(error.response.data.error)
        }
    }

}

export const getProperty = async ( id : string) => { 
    try {
        
        const url = `${import.meta.env.VITE_API_URL}/api/property/${id}`

        const { data } = await axios.get(url)

        const validate = PropertyApiSchema.safeParse(data)

        if( validate.success ) { 
            return validate.data
        }

    } catch (error) {

        if( isAxiosError( error) && error.response ) {
            throw new Error(error.response.data.error)
        }

    }
}






type updatePropertyAPIType = { 
    formData : formPropertyType
    id : string
}

export const updatePropertyAPI = async (  { formData , id    }  : updatePropertyAPIType  ) => { 
   
    try {

        const url = `${import.meta.env.VITE_API_URL}/api/property/${id}`

        const { data } = await axios.put( url , formData )

        return data 
        
    } catch (error) {

        if( isAxiosError( error) && error.response ) {
            throw new Error(error.response.data.error)
        }

    }

}

export const deletePropertyAPI = async ( id : string ) => { 
    try {

        const url = `${import.meta.env.VITE_API_URL}/api/property/${id}`

        const { data } = await axios.delete( url )

        return data 

    } catch (error) {
        
        if( isAxiosError( error) && error.response ) {
            throw new Error(error.response.data.error)
        }

    }
}

//----------------------- Contact API ------------------------------

export const createContactAPI = async ( contact : formContactType ) => { 

    try {

        const url = `${import.meta.env.VITE_API_URL}/api/contact/`

        const { data } = await axios.post<string>( url , contact )

        return data 

    } catch (error) {

        if( isAxiosError( error) && error.response ) {
            throw new Error(error.response.data.error)
        }

    }
}


export const getAllClientsAPI = async () => { 
    
    try {

        const url = `${import.meta.env.VITE_API_URL}/api/contact/`

        const  { data }  = await axios.get<ClientsType>( url )

        return data
        
    } catch (error) {

        if( isAxiosError( error) && error.response ) {
            throw new Error(error.response.data.error)
        }

    }
}

export const deleteClientAPI = async ( id : string ) => { 
    try {

        const url = `${import.meta.env.VITE_API_URL}/api/contact/${id}`

        const { data } = await axios.delete( url )

        return data 

    } catch (error) {
        
        if( isAxiosError( error) && error.response ) {
            throw new Error(error.response.data.error)
        }

    }
}