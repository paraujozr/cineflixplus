import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

export default function Cards() {
    const [filmes, setFilmes] = useState([])

    useEffect( () => {

        fetch('https://api.themoviedb.org/3/discover/movie?api_key=7c572a9f5b3ba776080330d23bb76e1e')
        .then(response => response.json())
        .then(response => setFilmes(response.results))
        .catch (error => console.log(error))

    },[])

    return(
        <>
        <main className="flex justify-evenly">
            <div className="grid grid-cols-5 mt-10 mb-10 gap-16">
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