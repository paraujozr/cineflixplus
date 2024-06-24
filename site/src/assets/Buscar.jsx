import {BiSearchAlt2} from "react-icons/bi"

export default function Buscar() {
    return(
        <>
        <form className="flex">
            <input className="text-black placeholder:text-black block bg-white w-full py-2 pl-4 pr-3 focus:outline-none" type="search" placeholder="Pesquisar"/>
            <button className="text-white bg-gray-800 w-10 pl-3" type="submit">
                <BiSearchAlt2 />
            </button>
        </form>
            </>
    )
}