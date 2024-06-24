import { Link } from "react-router-dom";

export default function Header2() {
    return(
        <>
            <div className="flex justify-evenly items-center py-2 bg-[#430000]">
                <img  className="" src="../../public/logo.png" alt="" />
                <Link to="../">
                    <p className="text-white text-2xl font-normal">Voltar</p>
                </Link>
            </div>
        </>
    )
}