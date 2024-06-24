import Buscar from "../../assets/Buscar";
import Navbar from "../Navbar";

 export default function Banner() {
    return(
        <>
        <main>
            <div className="flex justify-evenly items-center py-2 bg-[#430000]">
                    <img  className="" src="../../public/logo.png" alt="" />
                    <Navbar />
            </div>
            <Buscar />
            <div className="flex-col mt-10">
                <div className="flex justify-center">
                    <img className="size-10/12" src="../../public/banner1.png" alt="" />
                </div>
            </div>
        </main>
        </>
    )
}