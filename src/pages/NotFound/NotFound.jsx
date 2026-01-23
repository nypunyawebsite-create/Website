import { Link } from "react-router-dom"
import { useEffect } from "react"
import { Helmet } from "react-helmet-async"

const NotFound = () => {
    useEffect(() => {
        // Set proper 404 status for SEO
        document.title = "404 - Page Not Found | Nypunya Aesthetics"
    }, [])

    return (
        <>
            <Helmet>
                <title>404 - Page Not Found | Nypunya Aesthetics</title>
                <meta name="robots" content="noindex, nofollow" />
                <meta name="prerender-status-code" content="404" />
            </Helmet>
            <div>
                <div className="flex items-center justify-center min-h-screen bg-gray-100">
                    <div className="text-center">
                        <h1 className="text-6xl font-bold text-gray-800">404</h1>
                        <p className="mt-4 text-xl text-gray-600">Oops! The page you're looking for doesn't exist.</p>
                        <p className="mt-2 text-gray-500">The page may have been moved or deleted.</p>
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