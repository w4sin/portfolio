import { Link } from "react-router-dom"

const NoPage = () => {
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center p-10">
            <h2 className="txt-xl font-bold">404 Page Not Found.</h2>
            <p className="txt-s text-gray-500 mt-5 text-center">{"The request URL was not found, or the page may have been removed on this site. "}
                <Link to="/" className="txt-s text-blue-500 hover:underline mt-5">Go back to Portfolio</Link>
            </p>

        </div>
    )
}

export default NoPage