import { Link } from "react-router-dom"


const NotFound = () => {
    return (
        <>
            <div>
                <div className="flex items-center justify-center min-h-screen bg-gray-100">
                    <div className="text-center">
                        <h1 className="text-6xl font-bold text-gray-800">404</h1>
                        <p className="mt-4 text-xl text-gray-600">Oops! Page not found.</p>
                        <p className="mt-2 text-gray-500 text-4xl">Under Development</p>
                        <Link to="/" className="mt-6 inline-block px-6 py-3 text-white bg-blue-500 rounded-md shadow-lg hover:bg-blue-600">
                            Go to Home
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotFound