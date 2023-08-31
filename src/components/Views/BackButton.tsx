import { useNavigate } from "react-router-dom"
import { IoArrowBackOutline } from "react-icons/io5"

interface Props {
    color?: string;
}

interface VariantType {
    [key: string]: string;
}

const colorVariants: VariantType = {
    slate: "border-slate-500 text-slate-700 from-slate-700 via-slate-800 to-slate-500",
    blue: "border-blue-500 text-blue-700 from-blue-700 via-blue-800 to-blue-500",
}

const BackButton = ({ color }: Props) => {
    const navigate = useNavigate()
    return (
        <button
            onClick={() => navigate(-1)}
            className={`absolute top-5 left-5 p-1 md:pr-5 md:pl-3 md:py-3 flex border hover:border-white hover:text-white rounded-lg hover:bg-gradient-to-r ${colorVariants[color ? color : "slate"]}`}>
            <span className="md:mr-1 text-2xl"><IoArrowBackOutline /></span> <span className="hidden md:flex">Back</span>
        </button>
    )
}

export default BackButton