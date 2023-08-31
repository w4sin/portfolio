import React, { useEffect, useState } from "react";
import { AiOutlineMenu as MenuIcon, AiOutlineSolution as Icon } from "react-icons/ai"
import Drawer from "./Drawer";

interface Props {
    sections: string[];
}

const Navbar: React.FC<Props> = ({ sections }) => {
    const [activeSection, setActiveSection] = useState<string>(sections[0]);
    // const [prevY, setPrevY] = useState<number>(0)
    // const [isNavbar, setIsNavbar] = useState<boolean>(true)
    const [isDrawer, setIsDrawer] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = (): void => {
            // const y: number = scrollY
            // if (y > 200 && prevY < y) setIsNavbar(false)
            // else setIsNavbar(true)
            // setPrevY(y)
            for (const section of sections) {
                const element: HTMLElement | null = document.getElementById(section);
                if (element) {
                    const rect: DOMRect = element.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [sections]);

    return (
        <div className={"fixed top-0 left-0 w-full flex justify-between items-center bg-slate-50 py-5 px-5 md:px-5 lg:px-7 bg-opacity-80 shadow-md shadow-gray-500 z-20"}> 
            {/*  +" transition-all duration-200 "+(isNavbar ? "translate-y-0" : "-translate-y-full")}> */}
            <div className="ml-0 md:ml-2">
                <p className="flex items-center text-3xl md:text-4xl text-black font-bold cursor-pointer"
                    onClick={() => scrollToElement(sections[sections.length - 1])}>
                    <span className="mr-1 md:mr-3 text-4xl md:text-5xl"><Icon /></span>{"Wasin Saetie"}
                </p>
            </div>
            <ul className="hidden space-x-3 md:flex">
                {sections.map((section) => (
                    <li key={section} className={"flex flex-col items-center group"}>
                        <button
                            className={"text-black text-lg transition-transform ease-in-out px-4 py-2 border-b-2 border-transparent " + (activeSection === section ? "text-slate-50 bg-gradient-to-r from-gray-700 to-gray-500 rounded-md font-bold shadow-md shadow-gray-500" : "group-hover:scale-110")}
                            onClick={() => scrollToElement(section)}
                        >
                            {section}
                        </button>
                        <div className={"w-9/12 h-[3px] " + (activeSection === section ? "" : "group-hover:animate-[wiggle_0.2s_ease-in-out] group-hover:bg-gray-500")} />
                    </li>
                ))}
            </ul>
            <button type="button" className="text-3xl mr-2 text-slate-700 hover:scale-110 hover:text-slate-900 flex justify-center items-center md:hidden" onClick={(): void => setIsDrawer(true)} ><MenuIcon /></button>
            <Drawer open={isDrawer} onClose={(): void => setIsDrawer(false)} sections={sections} />
        </div>
    );
};

function scrollToElement(section: string): void {
    const element = document.getElementById(section);
    if (element) setTimeout(() => {
        const yOffset = -50;
        const y = element.getBoundingClientRect().top + scrollY + yOffset;
        scrollTo({ top: y, behavior: 'smooth' });
    }, 50);
}

export default Navbar;