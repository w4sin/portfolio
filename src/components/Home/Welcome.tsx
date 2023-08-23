import { AiOutlineDownload as DownloadIcon } from "react-icons/ai"
import ResumeFile from "../../assets/resume.pdf"

const Welcome = () => {
    return (
        <div id={"Home"} style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url("https://picsum.photos/1920/1080")' }}
            className="h-screen flex flex-col justify-center items-center bg-cover bg-no-repeat bg-center">
            {/* <div className="absolute top-1/2 left-1/2 border border-slate-900 w-9/12 h-4/6 transform -translate-x-1/2 -translate-y-1/2 z-10"></div> */}
            <div className="w-9/12 h-4/6 mt-16 flex flex-col justify-center items-center border border-slate-900">
                <h2 className="text-3xl sm:text-4xl md:text-5xl px-2 text-center font-bold block sm:inline-block">{"Welcome to "}<span className="block sm:inline-block mt-2 sm:mt-0">{"My Portfolio"}</span></h2>
                <p className="m-4 text-center block sm:inline-block">{"Thank you for visiting, "}<span className="block sm:inline-block mt-2 sm:mt-0">{"and I hope you enjoy your stay!"}</span></p>
                <a href={ResumeFile} download><button className="py-4 px-5 btn-primary flex items-center"><span className="mr-2 text-xl"><DownloadIcon /></span>{"Download Resume"}</button></a>
            </div>
        </div>
    )
}

export default Welcome