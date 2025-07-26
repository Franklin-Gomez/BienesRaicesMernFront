import { z } from "zod";

export const formContactSchema = z.object({
    nombre : z.string(),
    email : z.string(),
    telefono : z.string(),
    mensaje : z.string(),
    tipo : z.string(),
    cantidad : z.string(),
    choose_metodo_contacto : z.string(),
    metodo_contacto : z.string()
})

export const ClientSchema = formContactSchema.extend({
    id : z.string()
})

export const ClientsSchema = z.array(ClientSchema)

export type ClientType = z.infer<typeof ClientSchema>
export type ClientsType = z.infer<typeof ClientsSchema>


export type formContactType = z.infer<typeof formContactSchema>


export const formLoginSchema = z.object({
    email : z.string(),
    password : z.string()
})

export type formLoginType = z.infer<typeof formLoginSchema>


export const formPropertySchema = z.object({
    name : z.string(),
    description : z.string(),
    price : z.number(),
    wc : z.number(),
    parking : z.number(),
    room : z.number(),
    image : z.string()
})

export type formPropertyType = z.infer<typeof formPropertySchema>

export const PropertyApiSchema = formPropertySchema.extend({
    _id : z.string()
})

export type PropertyApiType = z.infer<typeof PropertyApiSchema>

export const PropertiesApiSchema = z.array(
    PropertyApiSchema
)

export type PropertiesApiType = z.infer<typeof PropertiesApiSchema>


