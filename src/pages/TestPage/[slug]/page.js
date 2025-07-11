import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API_URL from '../../../Config';
const TestLandingPage = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await fetch(`${API_URL}api/blogs`);
                if (!response.ok) throw new Error("Failed to fetch blogs");

                const blogs = await response.json();
                const foundBlog = blogs.find(blog => blog.slug === slug);

                if (!foundBlog) {
                    throw new Error("Blog not found");
                }

                setBlog(foundBlog);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [slug]);

    if (loading) return <div className="text-center text-lg font-semibold mt-10">Loading...</div>;
    if (error) return <div className="text-center text-red-500 mt-10">{error}</div>;

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">{blog.title}</h1>
            <div
                className="text-gray-600"
                dangerouslySetInnerHTML={{ __html: blog.description }}
            ></div>
        </div>
    );
};

export default TestLandingPage;
