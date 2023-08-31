import _ from "lodash"
import { useRef } from "react"
import { Link } from "react-router-dom"
import { animFromLeft, animFromRight, useIsVisible } from "../../useIsVisible"

const items: PropItem[] = [
    { title: "Custom Math", pathImage: "bg-[url(/math_bg.jpg)] bg-bottom", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { title: "Fetch Data", pathImage: "bg-[url(/fetch_bg.jpg)] bg-center", desc: "Lacinia at quis risus sed vulputate odio. Congue eu consequat ac felis. Nunc congue nisi vitae suscipit tellus mauris a diam maecenas. Fusce ut placerat orci nulla.", half: true },
    { title: "Backend", pathImage: "bg-[url(/backend.jpg)] bg-center", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", half: true },
]

const Practice = () => {

    return (
        <div
            // style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url("https://picsum.photos/1920/1080")' }} 
            id="Practice" className="flex flex-wrap justify-around pt-10 bg-gradient-to-l from-emerald-100 via-sky-200 to-violet-300">
            {items.map(({ title, desc, half, pathImage }, index) => (
                <ParcticeView key={title} title={title} pathImage={pathImage} half={half} desc={desc} anim={(index % 2 == 0) ? animFromLeft : animFromRight} />
            ))}
        </div>
    )
}

const ParcticeView = ({ title, desc, half, pathImage, anim }: PropItem): JSX.Element => {
    const refView = useRef<HTMLDivElement | null>(null)
    const isVisible = useIsVisible(refView)
    const width: string = half ? "lg:w-[45vw] " : "lg:w-[95vw] "

    return (<div ref={refView} className={"w-full h-[50vh] lg:h-[60vh] my-3 " + width}>
        <div className={"group relative w-full h-full flex justify-center items-center shadow-lg transition duration-1000 ease-in-out " +
            // (isVisible ? "translate-x-0 opacity-100" : (half ? "translate-x-[200%] duration-0 opacity-0" : "-translate-x-full duration-0 opacity-0"))
            (anim && anim(isVisible))
        }>
            <div className={"w-full h-full absolute opacity-40 duration-[1000ms] nohover:opacity-90 group-hover:opacity-90 transition-opacity bg-cover z-1 " + pathImage} />
            <div className="overflow-hidden relative h-full w-full nohover:before:hidden nohover:after:hidden before:z-10 after:z-10 before:border-slate-700 after:border-slate-700 before:absolute before:bottom-0 before:right-0 before:h-7 before:w-7 before:border-b-4 before:border-r-4 before:transition-all before:duration-200 before:ease-in-out after:absolute after:top-0 after:left-0 after:h-7 after:w-7 after:border-t-4 after:border-l-4 after:transition-all after:duration-200 after:ease-in-out group-hover:before:h-[calc(55%)] group-hover:before:w-[calc(55%)] group-hover:after:h-[calc(55%)] group-hover:after:w-[calc(55%)]">
                <div className="relative flex flex-col justify-center items-center h-full w-full nohover:before:hidden nohover:after:hidden before:z-10 after:z-10 before:border-slate-700 after:border-slate-700 before:absolute before:bottom-0 before:left-0 before:h-7 before:w-7 before:border-b-4 before:border-l-4 before:transition-all before:duration-200 before:ease-in-out after:absolute after:top-0 after:right-0 after:h-7 after:w-7 after:border-t-4 after:border-r-4 after:transition-all after:duration-200 after:ease-in-out group-hover:before:h-[calc(55%)] group-hover:before:w-[calc(55%)] group-hover:after:h-[calc(55%)] group-hover:after:w-[calc(55%)]">
                    {/* {children} */}
                    <h2 className={"txt-xl font-bold bg-gradient-to-br from-blue-700 to-cyan-500 bg-clip-text text-transparent"}>{title}</h2>
                    <p className="txt-s py-5 text-neutral-100 text-center px-5">{desc}</p>
                    {title &&
                        <Link to={_.replace(_.lowerCase(title), " ", "_")} className="z-[11] py-2">
                            <button type="button" className="txt-m rounded-lg text-emerald-500 hover:text-emerald-300 underline">{"Let's go!"}</button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    </div>)
}

interface PropItem {
    title?: string;
    desc?: string;
    pathImage?: string;
    half?: boolean;
    anim?: (isVisible: boolean) => string;
}

export default Practice