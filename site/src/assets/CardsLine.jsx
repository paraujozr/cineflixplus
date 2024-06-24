import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

function card(titulo) {

    const [filmes, setFilmes] = useState([])

    useEffect( () => {

        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=7c572a9f5b3ba776080330d23bb76e1e`)
        .then(response => response.json())
        .then(response => setFilmes(response.results))
        .catch (error => console.log(error))

    },[])

    return(
        <>
        <h1 className="text-white mt-10 pl-10 text-4xl font-bold">{titulo}</h1>
        <main className="flex justify-evenly">
            <div className="flex flex-row overflow-x-scroll mt-5 mb-10 gap-8 pb-6 pl-10">
            {
                filmes.map(filme => (
                    <Link to={`${filme.id}`} key={filme.id}>
                        <div className="mt-5 ">
                            <div className="transition duration-500 bg-[#430000] flex flex-col rounded-md w-48">
                                <div className="flex justify-center mt-3">
                                    <img className="rounded-lg w-40" src={`https://image.tmdb.org/t/p/w1280/${filme.poster_path}`} alt="" />
                                </div>
                                <div className="flex justify-center mt-4 text-white text-center text-lg font-medium bg-[#7E0000] rounded-md">
                                    <h1 className="text-center size-11/12">{filme.title}</h1>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            }
            </div>
        
        </main>
        </>
    )
    
}

export default function CardsLine() {
    
    const unidade = [
        {
            titulo: "Aventura"
        },
        {
            titulo: "Ganhadores do Oscar"
        },
        {
            titulo: "Comédia"
        },
    ]

    return(
        <>
        <div className="flex flex-col">
            {unidade.map(variacao => 
                card(variacao.titulo)
            )}
        </div>
        </>
    )
}