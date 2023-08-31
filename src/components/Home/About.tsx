import { FaPhoneSquareAlt as PhoneIcon } from "react-icons/fa"
import { AiFillMail as EmailIcon } from "react-icons/ai"
import Me from "/me.jpg"
import { useRef } from "react";
import { animFromRight, animMyImage, useIsVisible } from "../../useIsVisible";

// const urlImage =
//     "https://scontent.fhdy2-1.fna.fbcdn.net/v/t31.18172-8/11143387_865783916804171_7900855110874713342_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=2c4854&_nc_eui2=AeE5em9EA8CKzEnO2A6O2mRsEvwgCRXWE5oS_CAJFdYTmsyYCui3-Jda62E8ibKAGwr1a9lGE658eZJ8okmErc8b&_nc_ohc=gsBbcwjO_d8AX9_lUip&_nc_ht=scontent.fhdy2-1.fna&oh=00_AfAPmZ7Uvby66JTkBHumchPzALznfUshyLNkHgAZzfGmUQ&oe=64EC5BB0";

const summary = "I'm keen on transitioning to a web developer role.The vast expanse of web development offers not only a larger audience but also presents diverse challenges. " +
    "I'm eager to push my boundaries and harness the potential of web technologies to its fullest."

const detail = [
    {
        title: "Personal Growth",
        description:
            "By taking full responsibility for the project, I will have the chance to challenge myself, improve my skills, and learn new technologies along the way.",
    },
    {
        title: "Responsive Designs",
        description:
            "Emphasizing the importance of responsive web design and how it enhances the user experience across devices.",
    },
    {
        title: "From Mockups to Reality",
        description:
            "Demonstrating the process of turning static designs into dynamic, interactive web applications.",
    },
    {
        title: "Time Management",
        description:
            "This experience will help me hone my time management skills, ensuring that I meet the project deadlines effectively.",
    },
];

const sizeImage = "w-[280px] h-[280px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px]"

const About = () => {
    const refName = useRef<HTMLDivElement | null>(null)
    const nameIsVisible = useIsVisible(refName)

    const refContact = useRef<HTMLDivElement | null>(null)
    const contactIsVisible = useIsVisible(refContact)


    return (
        <div id="About Me" className="flex flex-col justify-center items-center py-16 bg-gradient-to-l from-emerald-100 via-sky-200 to-violet-300">
            <div className="grid grid-cols-12 w-[90vw] bg-white rounded-lg shadow-lg divide-x divide-y">
                <section className="grid col-span-12 xl:col-span-5">
                    <div className="h-full flex flex-col lg:flex-row xl:flex-col items-center justify-center lg:justify-evenly xl:justify-center p-5 overflow-hidden">
                        <MyImage />
                        <div className="flex flex-col">
                            <div className="mt-3 lg:mt-0 xl:mt-5" ref={refName}>
                                <div className={"transition ease-in-out duration-[1500ms] " + animMyImage(nameIsVisible)}>
                                    <h3 className="txt-xl font-bold text-center bg-gradient-to-br from-cyan-500 to-blue-500 bg-clip-text text-transparent">{"Wasin Saetie"}</h3>
                                    <h4 className="txt-l font-bold mt-2 lg:mt-4 text-center bg-gradient-to-br from-cyan-500 to-blue-500 bg-clip-text text-transparent">{"Web Developer"}</h4>
                                </div>
                            </div>
                            <div className="mt-2 md:mt-4 xl:mt-6 mb-2 lg:mb-0" ref={refContact}>
                                <div className={"flex flex-col sm:flex-row items-center transition ease-in-out duration-[1500ms] " + animMyImage(contactIsVisible)}>
                                    <a href="tel:+66869698141"><p className="txt-s mr-0 sm:mr-5 flex items-center text-sky-600"><span className="mr-3"><PhoneIcon /></span>{"08-6969-8141"}</p></a>
                                    <a href="mailto:wasin.saetie@gmail.com"><p className="txt-s flex items-center text-sky-600"><span className="mr-3"><EmailIcon /></span>{"wasin.saetie@gmail.com"}</p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="grid col-span-12 xl:col-span-7">
                    <div className="h-full p-5 sm:p-5 md:p-7 lg:p-10 flex flex-col justify-center">
                        <TextAbout title={"About Me"} desc={summary} underline />
                        {detail.map(({ title, description }) => (
                            <TextAbout key={title} title={title} desc={description} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}

const TextAbout = ({ title, desc, underline }: { title: string, desc: string, underline?: boolean }) => {
    const refView = useRef<HTMLDivElement | null>(null)
    const isVisible = useIsVisible(refView)

    return (<div ref={refView}>
        <div className={"flex flex-col my-2 md:my-3 lg:my-4 transition ease-in-out duration-1000 " + animFromRight(isVisible)}>
            <h3 className={"font-bold text-sky-800 " + (underline ? "underline txt-l" : "txt-m")}>{title}</h3>
            <p className={"txt-s my-2 text-sky-600 text-justify " + (underline ? "indent-10" : "")}>{desc}</p>
        </div>
    </div>)
}

const MyImage = () => {
    const refView = useRef<HTMLDivElement | null>(null)
    const isVisible = useIsVisible(refView)

    return <div ref={refView} className={"transition duration-[1500ms] ease-in-out " + animMyImage(isVisible)}>
        <div className={"relative ml-5 rounded-full bg-gradient-to-t from-gray-900 to-gray-400 " + sizeImage} >
            <img className={"relative -ml-5 rounded-full object-cover " + sizeImage} src={Me} />
        </div>
    </div>
}

export default About