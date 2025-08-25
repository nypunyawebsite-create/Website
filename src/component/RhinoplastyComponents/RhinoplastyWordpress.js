import React, { useState, useEffect } from 'react'

const RhinoplastyWordpress = () => {
    const [pageData, setPageData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchPage = async () => {
            try {
                setLoading(true)
                // Fetch the entire page content from WordPress
                const response = await fetch('https://docs.nypunyaaesthetics.com/wp-json/wp/v2/pages/10')

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }

                const pageData = await response.json()
                setPageData(pageData)
            } catch (err) {
                setError(err.message)
                console.error('Error fetching page:', err)
            } finally {
                setLoading(false)
            }
        }

        fetchPage()
    }, [])

    if (loading) return <div className="flex justify-center items-center min-h-screen">Loading...</div>
    if (error) return <div className="text-red-500 text-center p-4">Error: {error}</div>
    if (!pageData) return <div className="text-center p-4">No page content found</div>

    return (
        <div className=" w-ful p-6">
            {/* Page Title */}
            <h1 className="text-4xl font-bold mb-6 text-center"
                dangerouslySetInnerHTML={{ __html: pageData.title.rendered }} />

            {/* Page Content */}
            <div className="prose prose-lg max-w-none mx-auto"
                dangerouslySetInnerHTML={{ __html: pageData.content.rendered }} />

            {/* Page Metadata */}
            <div className="mt-8 pt-6 border-t border-gray-200 text-sm text-gray-600 text-center">
                <p>Published: {new Date(pageData.date).toLocaleDateString()}</p>
                {pageData.modified !== pageData.date && (
                    <p>Last updated: {new Date(pageData.modified).toLocaleDateString()}</p>
                )}
                {pageData.author && (
                    <p>Author: {pageData.author}</p>
                )}
            </div>
        </div>
    )
}

export default RhinoplastyWordpress