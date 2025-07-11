import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API_URL from '../../Config';
const BlogDetails = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    useEffect(() => {
        setLoading(true);
        fetch(`${API_URL}/api/blogs/${slug}`)
            .then(res => res.json())
            .then(data => {
                setBlog(data.blog || data); // fallback if API returns blog directly
                setError('');
            })
            .catch(() => setError('Failed to fetch blog details'))
            .finally(() => setLoading(false));
    }, [slug]);

    if (loading) return <div className="text-center py-12">Loading blog details...</div>;
    if (error) return <div className="text-center py-12 text-red-500">{error}</div>;
    if (!blog) return <div className="text-center py-12">Blog not found.</div>;

    return (
        <div className="bg-[#f6f8f9] min-h-screen py-0" style={{ paddingTop: '9rem' }}>
            {/* Banner with Blog Title */}
            {/* <div className="w-full bg-gradient-to-r from-custom-blue to-blue-400 py-12 mb-8 flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold text-white drop-shadow-lg">{blog.title}</h1>
            </div> */}
            <div className="container mx-auto px-4 max-w-3xl bg-white rounded-lg shadow-lg p-8">
                <div className="mb-4 flex flex-wrap gap-4 text-sm text-gray-500">
                    <div className="w-full bg-gradient-to-r from-custom-blue to-blue-400 py-12 mb-8 flex flex-col items-center justify-center">
                        <h1 className="text-4xl font-bold text-white drop-shadow-lg">{blog.title}</h1>
                    </div>
                    <span>By <span className="font-semibold">{blog.createdBy?.name}</span></span>
                    <span>Published: {blog.publishedDate ? new Date(blog.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : ''}</span>
                    <span>Status: {blog.status}</span>
                </div>
                {(blog.banner || blog.thumbnail) && (
                    <img src={blog.banner || blog.thumbnail} alt={blog.title} className="w-full h-64 object-cover rounded mb-6" />
                )}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Description</h2>
                    <p className="text-gray-700 whitespace-pre-line">{blog.description}</p>
                </div>
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Meta Information</h2>
                    <div className="text-gray-700"><b>Meta Title:</b> {blog.metaTitle}</div>
                    <div className="text-gray-700"><b>Meta Description:</b> {blog.metaDescription}</div>
                </div>
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Categories</h2>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">{blog.mainCategory?.name}</span>
                        {Array.isArray(blog.subcategories) && blog.subcategories.map((sub, idx) => (
                            <span key={idx} className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">{sub.name}</span>
                        ))}
                    </div>
                </div>
                {Array.isArray(blog.tags) && blog.tags.length > 0 && (
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">Tags</h2>
                        <div className="flex flex-wrap gap-2">
                            {blog.tags.map((tag, idx) => (
                                <span key={idx} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">#{tag}</span>
                            ))}
                        </div>
                    </div>
                )}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Timestamps</h2>
                    <div className="text-gray-700"><b>Created At:</b> {blog.createdAt ? new Date(blog.createdAt).toLocaleString() : ''}</div>
                    <div className="text-gray-700"><b>Updated At:</b> {blog.updatedAt ? new Date(blog.updatedAt).toLocaleString() : ''}</div>
                </div>
                {Array.isArray(blog.updates) && blog.updates.length > 0 && (
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">Change History</h2>
                        <ul className="list-disc pl-5 text-gray-700">
                            {blog.updates.map((update, idx) => (
                                <li key={idx}>
                                    <span className="font-semibold">{update.change}</span> by {update.user} on {update.date ? new Date(update.date).toLocaleString() : ''}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogDetails; 