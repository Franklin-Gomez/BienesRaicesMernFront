import { create } from "zustand"

export type propertyState = {
    imageURL : string
    setImageURL : ( url : string ) => void
    resetImageURL : () => void
}

export const usePropertyStore = create<propertyState>()((set) => ({ 

    imageURL : "",

    setImageURL : ( url ) => set({
        imageURL : url 
    }),

    resetImageURL : () => set({
        imageURL : ""
    })
     
}))