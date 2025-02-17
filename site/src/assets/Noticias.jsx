import Footer from "../components/Footer"
import data from "../../articles.json"

export default function Noticias() {
    return(
        <>
        <main className="mt-2">
        {
                data.map( (artigo, index) => (
                <div key={index}>
                    <div className="flex justify-center items-center mt-10 mb-10 space-x-6 border-t-4 border-gray-500" >
                        <div className="flex justify-center my-10">
                            <img className="size-8/12" src={artigo.image} alt={artigo.image} />
                        </div>
                        <div className="text-white size-6/12 mt-12 mb-10">
                            <h1 className="text-5xl mb-9 font-bold">{artigo.title}</h1>
                            {artigo.text.map( (paragrafo,index) => (
                            <p className="text-xl" key={index}>{paragrafo}</p>
                            ))}
                        </div>
                    </div>
                </div>
                    
                ))
            }
        </main>
        <Footer />
        </>
    )
}