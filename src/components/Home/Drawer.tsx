import { useEffect } from "react"
import { AiTwotoneHome as HomeIcon, AiFillCode as SkillsIcon } from "react-icons/ai"
import { BsPersonSquare as AboutIcon } from "react-icons/bs"
import { RiProfileFill as ProfileIcon } from "react-icons/ri"

interface Props {
    open: boolean,
    onClose: () => void,
    sections: string[],
}

const icons: JSX.Element[] = [<HomeIcon />, <SkillsIcon />, <ProfileIcon />, <AboutIcon />]

const Drawer = ({ open, onClose, sections }: Props) => {

    useEffect(() => {
        open ? document.body.style.overflowY = "hidden" : setTimeout(() => document.body.style.overflowY = "auto", 200)
    }, [open])

    function clickSection(section: string): void {
        const element = document.getElementById(section);
        if (element) setTimeout(() => {
            const yOffset = -50;
            const y = element.getBoundingClientRect().top + scrollY + yOffset;
            scrollTo({ top: y, behavior: 'smooth' });
        }, 50);
        onClose()
    }

    return <div className="fixed md:hidden">
        <div className={"fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-70 " + (open ? "" : "hidden")} onClick={onClose} />
        <aside className={"fixed top-0 right-0 z-50 w-64 h-full p-4 overflow-y-auto bg-white transition-all duration-200 ease-in-out flex flex-col pt-12 " +
            (open ? "translate-x-0" : "translate-x-64")}>
            <button className="absolute top-2 right-2 text-lg px-2 text-slate-500 rounded-lg hover:text-black hover:bg-gray-200" onClick={onClose}>X</button>
            {sections.map((section, index) => (
                <button type="button" key={section} onClick={() => clickSection(section)}
                    className="group p-2 pl-5 w-full rounded-lg text-start text-xl my-1 flex items-center hover:bg-gray-200">
                    <span className="mr-3 text-slate-500 group-hover:text-black">{icons[index]}</span>
                    {section}
                </button>
            ))}
            {/* <div id="divide" className="w-full h-[1px] bg-black mt-3" /> */}
        </aside>

    </div>

}

export default Drawer