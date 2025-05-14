import { PropsWithChildren } from "react";

export default function Error( { children } : PropsWithChildren ) {
    return (
        <p
            className="w-full py-2 px-4 text-center uppercase bg-red-500 text-white font-bold"
        > 

            { children  }

        </p>
    )
}
