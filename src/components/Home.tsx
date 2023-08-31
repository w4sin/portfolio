import Welcome from "./Home/Welcome"
import Navbar from "./Home/Navbar";
import Skills from "./Home/Skills";
import Practice from "./Home/Practice";
import About from "./Home/About";

const sections: string[] = ["Home", "Practice", "Skills", "About Me"];

const Home = () => {
    return (
        <main className="max-w-screen overflow-x-hidden">
            <Navbar sections={sections} />
            <Welcome />
            <Practice />
            <Skills />
            <About />
        </main>
    )
}

export default Home