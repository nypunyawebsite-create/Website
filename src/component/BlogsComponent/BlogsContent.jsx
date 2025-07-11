import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API_URL from '../../Config';

// Add shake animation CSS
const shakeStyle = `
@keyframes shake {
  0% { transform: translateX(0); }
  20% { transform: translateX(-8px); }
  40% { transform: translateX(8px); }
  60% { transform: translateX(-6px); }
  80% { transform: translateX(6px); }
  100% { transform: translateX(0); }
}
.animate-shake {
  animation: shake 0.4s cubic-bezier(.36,.07,.19,.97) both;
}
`;

const BlogContent = () => {
    const navigate = useNavigate();
    const [mainCategories, setMainCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [blogs, setBlogs] = useState([]);
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [selectedService, setSelectedService] = useState(null);
    const [shake, setShake] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [subcategories, setSubcategories] = useState([]);

    // Fetch main categories from API
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch(`${API_URL}api/categories/main`);
                const data = await res.json();
                setMainCategories(data);
                if (data.length > 0 && !selectedCategory) {
                    setSelectedCategory(data[0]);
                }
            } catch (err) {
                setMainCategories([]);
            }
        };
        fetchCategories();
    }, []);

    // Fetch blogs from API
    useEffect(() => {
        const fetchBlogs = async () => {
            setLoading(true);
            try {
                const res = await fetch(`${API_URL}api/blogs`);
                const data = await res.json();
                setBlogs(data.blogs || []);
                setError('');
            } catch (err) {
                setError('Failed to fetch blogs');
                setBlogs([]);
            } finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    // Fetch subcategories when selectedCategory changes
    useEffect(() => {
        if (selectedCategory && selectedCategory._id) {
            fetch(`${API_URL}api/categories/subcategories/${selectedCategory._id}`)
                .then(res => res.json())
                .then(data => setSubcategories(data))
                .catch(() => setSubcategories([]));
        } else {
            setSubcategories([]);
        }
    }, [selectedCategory]);

    // Filter blogs based on search query, selectedCategory, and selectedService
    useEffect(() => {
        let filtered = blogs.filter(blog => {
            // Category filter (mainCategory.name)
            if (selectedCategory && blog.mainCategory?.name !== selectedCategory.name) return false;
            // Service filter (subcategories or mainCategory)
            if (selectedService) {
                const inMain = blog.mainCategory?.name === selectedService;
                const inSub = Array.isArray(blog.subcategories) && blog.subcategories.some(sub => sub.name === selectedService);
                if (!(inMain || inSub)) return false;
            }
            // Search filter
            const q = searchQuery.toLowerCase();
            const matches =
                blog.title.toLowerCase().includes(q) ||
                blog.description.toLowerCase().includes(q) ||
                (Array.isArray(blog.tags) && blog.tags.some(tag => tag.toLowerCase().includes(q)));
            return matches;
        });
        setFilteredBlogs(filtered);
    }, [blogs, searchQuery, selectedCategory, selectedService]);

    useEffect(() => {
        if (selectedService) {
            setShake(true);
            const timeout = setTimeout(() => setShake(false), 400);
            return () => clearTimeout(timeout);
        }
    }, [selectedService]);

    return (
        <div className="bg-[#f6f8f9] min-h-screen py-12">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Stay updated with the latest insights, treatments, and advancements in plastic surgery and dermatology.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="max-w-xl mx-auto mb-8">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-custom-blue focus:border-transparent"
                        />
                        <svg
                            className="absolute right-3 top-3.5 h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>

                {/* Category Selection */}
                <div className="flex justify-center space-x-4 mb-12">
                    {mainCategories.map((cat) => (
                        <button
                            key={cat._id}
                            onClick={() => { setSelectedCategory(cat); setSelectedService(null); }}
                            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${selectedCategory && selectedCategory._id === cat._id
                                ? 'bg-custom-blue text-white shadow-lg'
                                : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Service Folders Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
                    {subcategories.map((service, idx) => (
                        <button
                            key={service._id}
                            onClick={() => navigate(`/blogs/service/${encodeURIComponent(service.name)}`)}
                            className={`flex flex-col items-center p-4 rounded-lg border-2 transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none ${selectedService === service.name ? 'border-custom-blue bg-blue-50' : 'border-gray-200 bg-white'}`}
                            style={{ minWidth: 100, minHeight: 100 }}
                        >
                            <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`mb-2 ${selectedService === service.name ? 'text-custom-blue' : 'text-gray-400'}`}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7V6a2 2 0 012-2h3.172a2 2 0 011.414.586l1.828 1.828A2 2 0 0013.828 7H19a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" /></svg>
                            <span className="text-center font-medium text-gray-700 text-xs">{service.name}</span>
                        </button>
                    ))}
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredBlogs.map(blog => (
                        <div
                            key={blog._id}
                            className={`bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl
                                ${(shake && (blog.mainCategory?.name === selectedService || (Array.isArray(blog.subcategories) && blog.subcategories.some(sub => sub.name === selectedService)))) ? 'animate-shake' : ''}
                                ${(selectedService && (blog.mainCategory?.name === selectedService || (Array.isArray(blog.subcategories) && blog.subcategories.some(sub => sub.name === selectedService)))) ? 'border-2 border-custom-blue bg-blue-50' : 'border-2 border-gray-200'}
                            `}
                        >
                            <div className="relative">
                                {/* If you have a blog image, use it; else fallback */}
                                <img
                                    src={blog.banner || blog.thumbnail || '/blogs/botox_injection.png'}
                                    alt={blog.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute top-4 right-4 bg-custom-blue text-white px-3 py-1 rounded-full text-sm">
                                    {blog.mainCategory?.name || 'Blog'}
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="text-sm text-gray-500 mb-2">
                                    {blog.publishedDate ? new Date(blog.publishedDate).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    }) : ''}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                                <p className="text-gray-600 mb-4 line-clamp-3">{blog.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {Array.isArray(blog.tags) && blog.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                                <button className="text-custom-blue font-semibold hover:text-blue-700 transition-colors flex items-center group"
                                    onClick={() => navigate(`/blogs/${blog.slug}`)}>
                                    Read More
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 ml-1 transform transition-transform group-hover:translate-x-1"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* No Results Message */}
                {!loading && filteredBlogs.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No articles found matching your search.</p>
                    </div>
                )}
                {error && (
                    <div className="text-center py-12">
                        <p className="text-red-500 text-lg">{error}</p>
                    </div>
                )}
                {loading && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">Loading blogs...</p>
                    </div>
                )}
            </div>
            <style>{shakeStyle}</style>
        </div>
    );
};

export default BlogContent; 