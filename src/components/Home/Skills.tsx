import {
    SiHtml5, SiCss3, SiJavascript, SiTypescript,
    SiReact, SiMui, SiTailwindcss, SiNodedotjs, SiExpress,
    SiMongodb, SiGit, SiGithub,
} from "react-icons/si"

interface MySkills {
    icon: JSX.Element;
    name: string;
    color: string;
}

const title: string = "Technology Skills"

const mySkills: MySkills[] = [
    { icon: <SiHtml5 />, name: "Html", color: "hover:text-orange-600" }, { icon: <SiCss3 />, name: "CSS", color: "hover:text-sky-500" },
    { icon: <SiJavascript />, name: "Javascript", color: "hover:text-yellow-500" }, { icon: <SiTypescript />, name: "Typescript", color: "hover:text-sky-500" },
    { icon: <SiReact />, name: "React", color: "hover:text-sky-400" }, { icon: <SiMui />, name: "Material UI", color: "hover:text-sky-500" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "hover:text-emerald-500" }, { icon: <SiNodedotjs />, name: "Node", color: "hover:text-lime-400" },
    { icon: <SiExpress />, name: "Express", color: "hover:text-black" }, { icon: <SiMongodb />, name: "MongoDB", color: "hover:text-green-600" },
    { icon: <SiGit />, name: "Git", color: "hover:text-red-500" }, { icon: <SiGithub />, name: "GitHub", color: "hover:text-zinc-800" },

]


const Skills = () => {
    return (
        <div id="Skills" className="flex flex-col overflow-hidden justify-center items-center p-2 sm:p-5 bg-gradient-to-l from-emerald-100 via-sky-200 to-violet-300">
            <h2 className="text-3xl sm:text-4xl smd:text-5xl text-center font-bold text-slate-800 px-3 my-10">{title}</h2>
            <div className="grid gap-2 gap-y-16 sm:gap-16 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-[90vw] h-full my-5 md:my-16 ml-4 sm:ml-10">
                {mySkills.map(({ icon, name, color }) => (
                    <h3 key={name} className={"flex items-center text-xl md:text-2xl cursor-default hover:scale-110 " + (color)}><span className="text-3xl sm:text-4xl md:text-5xl mr-3 sm:mr-5">{icon}</span>{name}</h3>
                ))}
            </div>
        </div>
    )
}

export default Skills