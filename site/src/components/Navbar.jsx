import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <>
        <div>
            <ul className="flex justify-end flex-row text-white text-2xl font-normal p-6 space-x-16">
                <li className="hover:font-semibold">
                    <Link to ="/">Início</Link>
                </li>
                <li className="hover:font-semibold">
                    <Link to ="/blog">Notícias</Link>
                </li>
                <li className="hover:font-semibold">
                    <Link to ="/catalogo">Filmes</Link>
                </li>
            </ul>
        </div>
        </>
    )
}