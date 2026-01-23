import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

const WORDPRESS_API_URL = 'https://docs.nypunyaaesthetics.com/wp-json/wp/v2';

const BlogDetails = () => {
    const { slug } = useParams();
    const location = useLocation();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [wpCategories, setWpCategories] = useState([]);
    const [acfData, setAcfData] = useState(null);

    // Helper function to get featured image URL from WordPress post
    const getFeaturedImageUrl = (post) => {
        if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]) {
            return post._embedded['wp:featuredmedia'][0].source_url || post._embedded['wp:featuredmedia'][0].media_details?.sizes?.full?.source_url || null;
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

    // Fetch single blog post from WordPress API
    useEffect(() => {
        const fetchBlog = async () => {
            setLoading(true);
            try {
                const res = await fetch(`${WORDPRESS_API_URL}/posts?slug=${slug}&_embed&acf=1`);
                const data = await res.json();

                if (data && data.length > 0) {
                    const post = data[0];
                    const featuredImage = getFeaturedImageUrl(post);
                    const categories = wpCategories.length > 0
                        ? wpCategories.filter(cat =>
                            post.categories && post.categories.includes(cat.id) &&
                            cat.slug !== 'uncategorized' &&
                            cat.name.toLowerCase() !== 'uncategorized'
                        )
                        : [];

                    // Store ACF data
                    if (post.acf) {
                        setAcfData(post.acf);
                    }

                    // Map WordPress post to our blog format
                    const mappedBlog = {
                        _id: post.id.toString(),
                        title: post.title?.rendered || '',
                        description: post.excerpt?.rendered || '',
                        content: post.content?.rendered || '',
                        slug: post.slug || '',
                        publishedDate: post.date || '',
                        banner: featuredImage,
                        thumbnail: featuredImage,
                        mainCategory: categories[0] ? { name: categories[0].name, _id: categories[0].id.toString() } : null,
                        subcategories: categories.slice(1).map(cat => ({ name: cat.name, _id: cat.id.toString() })),
                        tags: [],
                        createdBy: {
                            name: post._embedded?.author?.[0]?.name || 'Author'
                        },
                    };

                    setBlog(mappedBlog);
                    setError('');
                } else {
                    setError('Blog not found');
                    setBlog(null);
                }
            } catch (err) {
                setError('Failed to fetch blog details');
                setBlog(null);
            } finally {
                setLoading(false);
            }
        };

        // console.log(blog);
        if (slug) {
            fetchBlog();
        }
    }, [slug, wpCategories]);

    // Update SEO meta tags in document head (following Seo component pattern)
    useEffect(() => {
        if (!blog) return;

        // Extract SEO data from ACF or use fallbacks
        const seoTitle = acfData?.meta_title || blog?.title || 'Blog Post';
        const seoDescription = acfData?.meta_title_description || blog?.description?.replace(/<[^>]*>/g, '').substring(0, 160) || '';
        const seoImage = blog?.banner || blog?.thumbnail || '';
        const domainName = typeof window !== 'undefined' ? window.location.origin : '';
        const seoPath = location.pathname;

        // Update document title
        document.title = seoTitle;

        // Helper function to update or create meta tag
        const setMetaTag = (attr, value, content) => {
            let element = document.querySelector(`meta[${attr}="${value}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attr, value);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        // Helper function to update or create link tag
        const setLinkTag = (rel, href) => {
            let element = document.querySelector(`link[rel="${rel}"]`);
            if (!element) {
                element = document.createElement('link');
                element.setAttribute('rel', rel);
                document.head.appendChild(element);
            }
            element.setAttribute('href', href);
        };

        // Set meta tags
        setMetaTag('name', 'description', seoDescription);
        setLinkTag('canonical', `${domainName}${seoPath}`);
        setMetaTag('property', 'og:locale', 'en_US');
        setMetaTag('property', 'og:type', 'website');
        setMetaTag('property', 'og:title', seoTitle);
        setMetaTag('property', 'og:description', seoDescription);
        setMetaTag('property', 'og:url', `${domainName}${seoPath}`);
        setMetaTag('property', 'og:site_name', 'Nypunya Aesthetics');
        if (seoImage) {
            setMetaTag('property', 'og:image', seoImage);
        }
        setMetaTag('name', 'twitter:card', 'summary_large_image');

        // Set or update JSON-LD schema script
        let schemaScript = document.querySelector('script[data-blog-seo-schema]');
        const schemaData = {
            "@context": "https://schema.org/",
            "@type": "BlogPosting",
            name: "Nypunya Aesthetics",
            url: "https://docs.nypunyaaesthetics.com/",
            potentialAction: {
                "@type": "SearchAction",
                target: `https://docs.nypunyaaesthetics.com${seoPath}`,
                "query-input": "required name=search_term_string",
            },
        };

        if (!schemaScript) {
            schemaScript = document.createElement('script');
            schemaScript.setAttribute('type', 'application/ld+json');
            schemaScript.setAttribute('data-blog-seo-schema', 'true');
            document.head.appendChild(schemaScript);
        }
        schemaScript.textContent = JSON.stringify(schemaData);

        // Cleanup function
        return () => {
            // Optionally clean up on unmount - but we might want to keep some tags
            // For now, we'll leave them as they'll be updated on next page load
        };
    }, [blog, acfData, location.pathname]);

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
                    {/* <span>Status: {blog.status}</span> */}
                </div>
                {(blog.banner || blog.thumbnail) && (
                    <img
                        src={blog.banner || blog.thumbnail}
                        alt={blog.title}
                        className="w-full h-64 object-cover rounded mb-6"
                    />
                )}

                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Content</h2>
                    <div
                        className="text-gray-700 prose prose-blue max-w-none"
                        dangerouslySetInnerHTML={{ __html: blog.content || blog.description }}
                    ></div>
                </div>
                {/* <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Meta Information</h2>
                    <div className="text-gray-700"><b>Meta Title:</b> {blog.metaTitle}</div>
                    <div className="text-gray-700"><b>Meta Description:</b> {blog.metaDescription}</div>
                </div> */}
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
                {/* <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Timestamps</h2>
                    <div className="text-gray-700"><b>Created At:</b> {blog.createdAt ? new Date(blog.createdAt).toLocaleString() : ''}</div>
                    <div className="text-gray-700"><b>Updated At:</b> {blog.updatedAt ? new Date(blog.updatedAt).toLocaleString() : ''}</div>
                </div> */}
                {/* {Array.isArray(blog.updates) && blog.updates.length > 0 && (
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
                )} */}
            </div>
        </div>
    );
};

export default BlogDetails; 