import React, { useState, useEffect } from 'react';

const BlogContent = () => {
    const [selectedCategory, setSelectedCategory] = useState('plastic-surgery');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredBlogs, setFilteredBlogs] = useState([]);

    // Sample blog data - replace with your actual data
    const blogData = {
        'plastic-surgery': [
            {
                id: 1,
                title: 'Understanding Rhinoplasty',
                description: 'A comprehensive guide to nose reshaping surgery, including preparation, procedure details, and recovery expectations.',
                image: '/blogs/botox_injection.png',
                date: '2024-03-15',
                tags: ['rhinoplasty', 'facial surgery', 'recovery']
            },
            {
                id: 2,
                title: 'Breast Augmentation: What to Expect',
                description: 'Everything you need to know about breast augmentation surgery, from consultation to recovery.',
                image: '/images/breast-aug.jpg',
                date: '2024-03-10',
                tags: ['breast augmentation', 'cosmetic surgery', 'recovery']
            },
            {
                id: 3,
                title: 'Breast Augmentation: What to Expect',
                description: 'Everything you need to know about breast augmentation surgery, from consultation to recovery.',
                image: '/images/breast-aug.jpg',
                date: '2024-03-10',
                tags: ['breast augmentation', 'cosmetic surgery', 'recovery']
            },

        ],
        'dermatology': [
            {
                id: 4,
                title: 'Treating Acne Scars',
                description: 'Modern approaches to acne scar treatment and skin rejuvenation techniques.',
                image: '/images/acne-scars.jpg',
                date: '2024-03-12',
                tags: ['acne', 'scar treatment', 'skin care']
            },
            {
                id: 5,
                title: 'Skin Rejuvenation Techniques',
                description: 'Latest advancements in skin rejuvenation and anti-aging treatments.',
                image: '/images/skin-rejuvenation.jpg',
                date: '2024-03-08',
                tags: ['skin rejuvenation', 'anti-aging', 'treatments']
            },
            {
                id: 6,
                title: 'Skin Rejuvenation Techniques',
                description: 'Latest advancements in skin rejuvenation and anti-aging treatments.',
                image: '/images/skin-rejuvenation.jpg',
                date: '2024-03-08',
                tags: ['skin rejuvenation', 'anti-aging', 'treatments']
            }
        ]
    };

    // Filter blogs based on search query
    useEffect(() => {
        const filtered = blogData[selectedCategory].filter(blog =>
            blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            blog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        );
        setFilteredBlogs(filtered);
    }, [searchQuery, selectedCategory]);

    return (
        <div className="bg-[#f6f8f9] min-h-screen py-12">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    {/* <h1 className="text-4xl font-bold mb-4">Our Blog</h1> */}
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
                    <button
                        onClick={() => setSelectedCategory('plastic-surgery')}
                        className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${selectedCategory === 'plastic-surgery'
                            ? 'bg-custom-blue text-white shadow-lg'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        Plastic Surgery
                    </button>
                    <button
                        onClick={() => setSelectedCategory('dermatology')}
                        className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${selectedCategory === 'dermatology'
                            ? 'bg-custom-blue text-white shadow-lg'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        Dermatology
                    </button>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredBlogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            <div className="relative">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute top-4 right-4 bg-custom-blue text-white px-3 py-1 rounded-full text-sm">
                                    {selectedCategory === 'plastic-surgery' ? 'Plastic Surgery' : 'Dermatology'}
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="text-sm text-gray-500 mb-2">
                                    {new Date(blog.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                                <p className="text-gray-600 mb-4 line-clamp-3">{blog.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {blog.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                                <button className="text-custom-blue font-semibold hover:text-blue-700 transition-colors flex items-center group">
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
                {filteredBlogs.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No articles found matching your search.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogContent; 