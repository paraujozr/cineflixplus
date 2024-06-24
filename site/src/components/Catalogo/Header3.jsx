import Buscar from "../../assets/Buscar"
import Navbar from "../Navbar"

export default function Header3() {
    return(
        <>
           <div className="flex justify-evenly items-center py-2 bg-[#430000]">
                    <img  className="" src="../../public/logo.png" alt="" />
                    <Navbar />
            </div>
            <Buscar />
            <div className="flex justify-center mt-10">
                <h1 className="text-white text-7xl font-bold">Filmes</h1>
            </div>
            
        </>
    )
}