import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TestContent = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch("https://blog-dashboard-backend.vercel.app/api/blogs");
                if (!response.ok) throw new Error("Failed to fetch blogs");
                const data = await response.json();
                setBlogs(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (loading) return <div className="text-center text-lg font-semibold mt-10">Loading...</div>;
    if (error) return <div className="text-center text-red-500 mt-10">{error}</div>;

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6 text-center">Blog Posts</h1>
            <div className="grid gap-6">
                {blogs.map((blog) => (
                    <div key={blog._id} className="border p-4 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold"
                            dangerouslySetInnerHTML={{ __html: blog.title }}
                        ></h2>
                        <Link to={`/test-page/${blog.slug}`}>
                            <div
                                className="text-gray-600 mt-2 cursor-pointer"
                                dangerouslySetInnerHTML={{ __html: blog.description }}
                            ></div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestContent;
