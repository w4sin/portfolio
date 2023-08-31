import {
    SiHtml5, SiCss3, SiJavascript, SiTypescript,
    SiReact, SiMui, SiTailwindcss, SiNodedotjs, SiExpress,
    SiMongodb, SiGit, SiGithub,
} from "react-icons/si"
import { useRef } from "react"
import { animFromBot, useIsVisible } from "../../useIsVisible";

interface MySkills {
    icon: JSX.Element;
    name: string;
    color: string;
}

const title: string = "Technology Skills"

const mySkills: MySkills[] = [
    { icon: <SiHtml5 />, name: "Html", color: "hover:text-orange-600 nohover:text-orange-600" }, { icon: <SiCss3 />, name: "CSS", color: "hover:text-sky-500 nohover:text-sky-500" },
    { icon: <SiJavascript />, name: "Javascript", color: "hover:text-yellow-500 nohover:text-yellow-500" }, { icon: <SiTypescript />, name: "Typescript", color: "hover:text-sky-500 nohover:text-sky-500" },
    { icon: <SiReact />, name: "React", color: "hover:text-sky-400 nohover:text-sky-400" }, { icon: <SiNodedotjs />, name: "Node", color: "hover:text-lime-400 nohover:text-lime-400" },
    { icon: <SiExpress />, name: "Express", color: "hover:text-black nohover:text-black" }, { icon: <SiMongodb />, name: "MongoDB", color: "hover:text-green-600 nohover:text-green-600" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "hover:text-sky-500 nohover:text-sky-500" }, { icon: <SiMui />, name: "Material UI", color: "hover:text-sky-500 nohover:text-sky-500" },
    { icon: <SiGit />, name: "Git", color: "hover:text-red-500 nohover:text-red-500" }, { icon: <SiGithub />, name: "GitHub", color: "hover:text-zinc-800 nohover:text-zinc-800" },
]


const Skills = () => {

    return (
        <div id="Skills" className="flex flex-col overflow-hidden justify-center items-center p-2 sm:p-5 bg-gradient-to-l from-emerald-100 via-sky-200 to-violet-300">
            <h2 className="text-3xl sm:text-4xl smd:text-5xl text-center font-bold text-slate-800 px-3 mt-16">{title}</h2>
            <div className={"grid gap-2 gap-y-16 sm:gap-16 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-[90vw] h-full my-10 md:my-16 ml-4 sm:ml-10"}>
                {mySkills.map(({ icon, name, color }) => (
                    <IconSkill key={name} icon={icon} name={name} color={color} />
                ))}
            </div>
        </div>
    )
}

const IconSkill = ({ icon, name, color }: MySkills) => {
    const refView = useRef<HTMLDivElement | null>(null)
    const isVisible = useIsVisible(refView)
    return <div ref={refView} className={"transition ease-in-out duration-[1200ms] "+ animFromBot(isVisible)}>
        <h3 key={name} className={"flex items-center text-xl md:text-2xl cursor-default hover:scale-110 " + (color)}><span className="text-3xl sm:text-4xl md:text-5xl mr-3 sm:mr-5">{icon}</span>{name}</h3>
    </div>
}

export default Skills