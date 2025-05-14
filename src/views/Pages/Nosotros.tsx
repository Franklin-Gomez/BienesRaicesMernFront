import Aboutus from "../../components/Aboutus";

export default function Nosotros() {

    return (
        <>

            <section className=" container mx-auto my-10">

                <h1 className="text-center text-4xl"> Conoce Sobre Nosotros </h1>
            
                <div className="my-4 grid grid-cols-2 gap-4" >
                    
                    <img src="/img/blog3.jpg" className="rounded"/>
                    

                    <p className=" text-2xl">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet dicta fugit, deleniti dignissimos consequatur quas quos, veniam incidunt repellat impedit eum temporibus vitae numquam laudantium magni recusandae delectus nihil reprehenderit.
                        <br></br>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, aspernatur! Distinctio, porro quam magnam fuga cum vitae minus nostrum aut animi eos mollitia, commodi vero! Numquam adipisci laborum labore assumenda!
                        <br></br>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis deserunt iusto laudantium cum beatae expedita quae dolorum nesciunt! Soluta molestias temporibus iusto accusantium, doloribus nobis hic! Praesentium, similique. Iste, ducimus.
                    </p>

                </div>

                <Aboutus/>



            </section>

        </>
    )
}
