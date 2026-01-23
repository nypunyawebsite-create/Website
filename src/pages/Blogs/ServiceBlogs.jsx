import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const WORDPRESS_API_URL = 'https://docs.nypunyaaesthetics.com/wp-json/wp/v2';

const ServiceBlogs = () => {
    const { serviceName } = useParams();
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [wpCategories, setWpCategories] = useState([]);

    // Helper function to get featured image URL from WordPress post
    const getFeaturedImageUrl = (post) => {
        if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]) {
            return post._embedded['wp:featuredmedia'][0].source_url || post._embedded['wp:featuredmedia'][0].media_details?.sizes?.medium?.source_url || null;
        }
        return null;
    };

    // Fetch WordPress categories
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch(`${WORDPRESS_API_URL}/categories?per_page=100`);
                const data = await res.json();
                setWpCategories(data);
            } catch (err) {
                setWpCategories([]);
            }
        };
        fetchCategories();
    }, []);

    useEffect(() => {
        const fetchBlogs = async () => {
            setLoading(true);
            try {
                const res = await fetch(`${WORDPRESS_API_URL}/posts?_embed&per_page=100`);
                const data = await res.json();

                // Map WordPress posts to our blog format
                const mappedBlogs = data.map(post => {
                    const featuredImage = getFeaturedImageUrl(post);
                    const categories = wpCategories.length > 0
                        ? wpCategories.filter(cat =>
                            post.categories && post.categories.includes(cat.id) &&
                            cat.slug !== 'uncategorized' &&
                            cat.name.toLowerCase() !== 'uncategorized'
                        )
                        : [];

                    return {
                        _id: post.id.toString(),
                        title: post.title?.rendered || '',
                        description: post.excerpt?.rendered || post.content?.rendered || '',
                        content: post.content?.rendered || '',
                        slug: post.slug || '',
                        publishedDate: post.date || '',
                        banner: featuredImage,
                        thumbnail: featuredImage,
                        mainCategory: categories[0] ? { name: categories[0].name, _id: categories[0].id.toString() } : null,
                        subcategories: categories.slice(1).map(cat => ({ name: cat.name, _id: cat.id.toString() })),
                        tags: [],
                        createdBy: { name: 'Author' },
                    };
                });

                setBlogs(mappedBlogs);
                setError('');
            } catch (err) {
                setError('Failed to fetch blogs');
                setBlogs([]);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, [wpCategories]);

    // Filter blogs by subcategory name or main category name
    const filteredBlogs = blogs.filter(blog => {
        const matchesSubcategory = Array.isArray(blog.subcategories) && blog.subcategories.some(sub => sub.name === serviceName);
        const matchesMainCategory = blog.mainCategory?.name === serviceName;
        return matchesSubcategory || matchesMainCategory;
    });

    // Get the main category name from the first filtered blog (if any)
    const mainCategoryName = filteredBlogs.length > 0 ? filteredBlogs[0].mainCategory?.name : '';
    return (
        <div className="bg-[#f6f8f9] min-h-screen py-0" style={{ paddingTop: '9rem' }}>

            {/* Banner with Main Category and Service Name */}
            <div className="w-full bg-gradient-to-r from-custom-blue to-blue-400 py-12 mb-8 flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold text-white drop-shadow-lg">{mainCategoryName}</h1>
            </div>
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-2">{serviceName} Blogs</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Explore all articles related to <span className="font-semibold">{serviceName}</span>.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredBlogs.map(blog => (
                        <div
                            key={blog._id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-gray-200"
                        >
                            <div className="relative">
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
                                        year: 'numeric', month: 'long', day: 'numeric'
                                    }) : ''}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                                <div
                                    className="text-gray-600 mb-4 line-clamp-3 prose prose-sm max-w-none"
                                    dangerouslySetInnerHTML={{ __html: blog.description }}
                                ></div>
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
                                <button
                                    className="text-custom-blue font-semibold hover:text-blue-700 transition-colors flex items-center group"
                                    onClick={() => navigate(`/blogs/${blog.slug}`)}
                                >
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
                {!loading && filteredBlogs.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No articles found for this service.</p>
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
        </div>
    );
};

export default ServiceBlogs; 