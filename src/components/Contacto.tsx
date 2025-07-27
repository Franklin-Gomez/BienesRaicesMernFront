

export default function Contacto() {
    return (
        <section className="bg-[url('/img/encuentra.jpg')] bg-center my-8">
            <div className="container mx-auto flex flex-col items-center justify-center gap-8 py-40 text-white">
                <h2 className="text-4xl">Encuentra la casa de tus sueños</h2>
                <p className="text-2xl">Llena el formulario de contacto y un asesor se pondrá en contacto contigo a la brevedad</p>
                <a href="/contacto" className="uppercase text-white text-center text-xl font-bold w-1/4 bg-orange-400 py-4 rounded hover:bg-orange-500">Contactános</a>
            </div>
        </section>
    )
}
