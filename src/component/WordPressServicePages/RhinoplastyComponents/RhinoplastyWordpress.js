"use client"
import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet-async"
import { FaCalendarAlt, FaClock } from "react-icons/fa";

const RhinoplastyWordpress = () => {
    const [pageData, setPageData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)




    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };

    // Domain configuration
    const DOMAIN = "https://docs.nypunyaaesthetics.com"
    const API_BASE = `${DOMAIN}/wp-json/wp/v2`
    const MEDIA_BASE = `${DOMAIN}/wp-content/uploads`

    useEffect(() => {
        const fetchPage = async () => {
            try {
                setLoading(true)
                const response = await fetch(`${API_BASE}/pages/10?_embed&acf=1`)

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }

                const data = await response.json()
                setPageData(data)
                console.log("Page Data:", data)
                console.log("ACF Fields:", data.acf)

                // Log when component is ready with meta tags
                console.log("Component ready with meta tags")
            } catch (err) {
                setError(err.message)
                console.error("Error fetching page:", err)
            } finally {
                setLoading(false)
            }
        }

        fetchPage()
    }, [])

    if (loading)
        return (
            <div className="flex justify-center items-center min-h-screen">
                Loading...
            </div>
        )
    if (error)
        return <div className="text-red-500 text-center p-4">Error: {error}</div>
    if (!pageData) return <div className="text-center p-4">No page content found</div>

    // Extract SEO data from ACF or fallback
    const seoTitle = pageData.acf?.meta_title || pageData.title.rendered
    const seoDescription =
        pageData.acf?.meta_description ||
        pageData.excerpt?.rendered.replace(/<[^>]*>/g, "") ||
        ""

    // Get featured image from backend ACF fields, with fallback to default
    const seoImage = pageData.acf?.featured_image ||
        pageData.acf?.social_media?.url ||
        pageData.acf?.social_media_image ||
        pageData.acf?.og_image ||
        `${MEDIA_BASE}/2025/08/JP.png`

    // Ensure image URL is absolute
    const getAbsoluteImageUrl = (imageUrl) => {
        if (!imageUrl) return seoImage
        if (imageUrl.startsWith('http')) return imageUrl
        if (imageUrl.startsWith('/')) return `${DOMAIN}${imageUrl}`
        return `${MEDIA_BASE}/${imageUrl}`
    }

    const finalSeoImage = getAbsoluteImageUrl(seoImage)

    const seoKeywords = pageData.acf?.key_words || ""
    const seoCanonical = pageData.acf?.canonical?.startsWith("http")
        ? pageData.acf.canonical
        : `https://${pageData.acf?.canonical || pageData.link}`
    const seoSchema = pageData.acf?.schema || "MedicalProcedure"

    // Generate keywords
    const generateKeywords = () => {
        const baseKeywords = [
            "rhinoplasty",
            "nose job",
            "nose surgery",
            "plastic surgery",
            "cosmetic surgery",
            "Bangalore",
            "India",
            "Dr. Prashantha Kesari",
            "Nypunya Aesthetic Clinic",
            "nose reshaping",
            "septoplasty",
            "functional rhinoplasty",
            "cosmetic rhinoplasty",
        ]

        if (seoKeywords) {
            return seoKeywords
        }

        const contentText =
            pageData.title.rendered +
            " " +
            pageData.content.rendered.replace(/<[^>]*>/g, "")
        const contentKeywords = contentText
            .toLowerCase()
            .split(/\s+/)
            .filter((word) => word.length > 4)
            .filter(
                (word) =>
                    ![
                        "the",
                        "and",
                        "with",
                        "from",
                        "they",
                        "will",
                        "your",
                        "more",
                        "very",
                        "when",
                        "there",
                        "only",
                        "about",
                        "many",
                        "then",
                        "these",
                        "would",
                        "into",
                        "could",
                        "time",
                        "than",
                        "first",
                        "after",
                        "have",
                    ].includes(word)
            )
            .slice(0, 10)

        return [...baseKeywords, ...contentKeywords].join(", ")
    }

    // Schema generator
    const generateSchema = () => {
        const baseSchema = {
            "@context": "https://schema.org",
            name: seoTitle,
            description: seoDescription,
            url: pageData.link,
            image: finalSeoImage,
            datePublished: pageData.date,
            dateModified: pageData.modified,
            author: {
                "@type": "Organization",
                name: "Nypunya Aesthetics",
            },
        }

        // Get schema type from backend, default to "MedicalProcedure"
        const schemaType = seoSchema?.toLowerCase() || "medicalprocedure"

        switch (schemaType) {
            case "blogs":
            case "blog":
                return {
                    ...baseSchema,
                    "@type": "BlogPosting",
                    blogPost: {
                        "@type": "Blog",
                        name: "Nypunya Aesthetics Blog",
                    },
                    publisher: {
                        "@type": "Organization",
                        name: "Nypunya Aesthetics",
                        url: DOMAIN,
                    },
                    mainEntityOfPage: {
                        "@type": "WebPage",
                        "@id": pageData.link
                    }
                }
            case "medicalprocedure":
            case "medical":
                return {
                    ...baseSchema,
                    "@type": "MedicalProcedure",
                    provider: {
                        "@type": "MedicalOrganization",
                        name: "Nypunya Aesthetic Clinic",
                        url: DOMAIN,
                        address: {
                            "@type": "PostalAddress",
                            addressLocality: "Bangalore",
                            addressCountry: "IN",
                        },
                    },
                    performer: {
                        "@type": "Physician",
                        name: "Dr. Prashantha Kesari",
                        medicalSpecialty: "Plastic Surgery",
                        affiliation: {
                            "@type": "MedicalOrganization",
                            name: "Nypunya Aesthetic Clinic",
                        },
                    },
                    procedureType: "Rhinoplasty",
                    bodyLocation: "Nose",
                    preparation: "Consultation required",
                    followup: "Follow-up appointments scheduled",
                    howPerformed: "Surgical procedure performed under anesthesia",
                    potentialComplications: "Standard surgical risks apply",
                    recoveryTime: "2-4 weeks for initial recovery",
                }
            case "organization":
            case "hospital":
                return {
                    ...baseSchema,
                    "@type": "MedicalOrganization",
                    name: "Nypunya Aesthetic Clinic",
                    url: DOMAIN,
                    description: seoDescription,
                    address: {
                        "@type": "PostalAddress",
                        addressLocality: "Bangalore",
                        addressCountry: "IN",
                    },
                    medicalSpecialty: ["Plastic Surgery", "Dermatology", "Cosmetic Surgery"],
                    hasOfferCatalog: {
                        "@type": "OfferCatalog",
                        name: "Medical Services"
                    }
                }
            case "webpage":
            case "page":
                return {
                    ...baseSchema,
                    "@type": "WebPage",
                    mainEntity: {
                        "@type": "Article",
                        name: seoTitle,
                        description: seoDescription,
                        author: {
                            "@type": "Organization",
                            name: "Nypunya Aesthetics"
                        }
                    }
                }
            default:
                // Fallback to MedicalProcedure for unknown schema types
                return {
                    ...baseSchema,
                    "@type": "MedicalProcedure",
                    provider: {
                        "@type": "MedicalOrganization",
                        name: "Nypunya Aesthetic Clinic",
                        url: DOMAIN,
                    },
                    procedureType: "Medical Service",
                }
        }
    }

    return (
        <>

            {/* SEO Meta Tags with react-helmet */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
                <meta name="keywords" content={generateKeywords()} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/images/favicon-150x150.png" />

                {/* Canonical */}
                <link rel="canonical" href={seoCanonical} />

                {/* Open Graph */}
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={seoTitle} />
                <meta property="og:description" content={seoDescription} />
                <meta property="og:url" content={seoCanonical} />
                <meta property="og:site_name" content="Nypunya Aesthetics" />
                <meta property="og:image" content={finalSeoImage} />
                <meta property="og:image:width" content={pageData.acf?.social_media?.width || "1200"} />
                <meta property="og:image:height" content={pageData.acf?.social_media?.height || "630"} />
                <meta property="og:image:alt" content={pageData.acf?.social_media?.alt || seoTitle} />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={seoTitle} />
                <meta name="twitter:description" content={seoDescription} />
                <meta name="twitter:image" content={finalSeoImage} />
                <meta name="twitter:image:alt" content={seoTitle} />

                {/* Extra */}
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Nypunya Aesthetics" />
                <meta name="language" content="English" />
                <meta name="revisit-after" content="7 days" />

                {/* Schema */}
                <script type="application/ld+json">
                    {JSON.stringify(generateSchema())}
                </script>
            </Helmet>

            {/* Main Content */}
            <div className="w-full">
                {/* Featured Image */}
                <div className="w-full mb-8">
                    <img
                        src={finalSeoImage}
                        alt="Rhinoplasty Services"
                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                    />
                    {/* banner image */}
                </div>

                {/* Page Title */}
                <h1
                    className="text-4xl font-bold mb-6 text-center"
                    dangerouslySetInnerHTML={{ __html: pageData.title.rendered }}
                />

                {/* Page Content */}
                <div
                    className="prose prose-lg max-w-none mx-auto"
                    dangerouslySetInnerHTML={{ __html: pageData.content.rendered }}
                />
                <div className="flex justify-center items-center bg-[#040857] px-4 py-10">
                    <div className="w-full md:px-20 text-white md:p-8 p-4 rounded-lg">
                        <h2 className="text-center text-xl md:text-2xl mb-6">
                            BOOK YOUR CONSULTATION
                        </h2>
                        <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Name *"
                                    className="w-full bg-transparent outline-none border-none"
                                    required
                                />
                                <hr className="border-custom-green" />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email *"
                                    className="w-full border-none bg-transparent outline-none"
                                    required
                                />
                                <hr className="border-custom-green" />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Phone Number *"
                                    className="w-full border-none bg-transparent outline-none"
                                    required
                                />
                                <hr className="border-custom-green" />
                            </div>
                            <div>
                                <select className="w-full border-none bg-transparent outline-none">
                                    <option className="text-black">Select Treatment *</option>
                                </select>
                                <hr className="border-custom-green" />
                            </div>
                            {/* Date Selection */}
                            <div>
                                <div className="w-full border-none bg-transparent outline-none h-10 flex items-center">
                                    <FaCalendarAlt className="text-white mr-2" />
                                    <input
                                        type="date"
                                        value={date}
                                        onChange={handleDateChange}
                                        className="w-full bg-transparent outline-none border-none text-white cursor-pointer appearance-none"
                                        style={{
                                            WebkitAppearance: "none",
                                            MozAppearance: "none",
                                            appearance: "none",
                                        }}
                                        required
                                    />
                                </div>
                                <hr className="border-custom-green" />
                            </div>
                            {/* Time Selection */}
                            <div>
                                <div className="w-full border-none bg-transparent outline-none h-10 flex items-center">
                                    <FaClock className="text-white mr-2" />
                                    <input
                                        type="time"
                                        value={time}
                                        onChange={handleTimeChange}
                                        className="w-full bg-transparent outline-none border-none text-white cursor-pointer appearance-none"
                                        required
                                    />
                                </div>
                                <hr className="border-custom-green" />
                            </div>
                            <div>
                                <select className="w-full border-none bg-transparent outline-none">
                                    <option className="text-black">Select Department *</option>
                                </select>
                                <hr className="border-custom-green" />
                            </div>
                            {/* Date Selection */}
                            <div>
                                <div className="w-full border-none bg-transparent outline-none h-10 flex items-center">
                                    <FaCalendarAlt className="text-white mr-2" />
                                    <input
                                        type="date"
                                        value={date}
                                        onChange={handleDateChange}
                                        className="w-full bg-transparent outline-none border-none text-white cursor-pointer appearance-none"
                                        style={{
                                            WebkitAppearance: "none",
                                            MozAppearance: "none",
                                            appearance: "none",
                                        }}
                                        required
                                    />
                                </div>
                                <hr className="border-custom-green" />
                            </div>
                            {/* Time Selection */}
                            <div>
                                <div className="w-full border-none bg-transparent outline-none h-10 flex items-center">
                                    <FaClock className="text-white mr-2" />
                                    <input
                                        type="time"
                                        value={time}
                                        onChange={handleTimeChange}
                                        className="w-full bg-transparent outline-none border-none text-white cursor-pointer appearance-none"
                                        required
                                    />
                                </div>
                                <hr className="border-custom-green" />
                            </div>
                            <div className="md:col-span-3 flex justify-center">
                                <button
                                    type="submit"
                                    className="bg-custom-green text-black px-8 md:w-[30%] py-2 rounded-full font-semibold hover:bg-[#8ccdc9] transition"
                                >
                                    SUBMIT
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* ACF Fields Debug */}
                {/* {pageData.acf && (
                    <div className="mt-8 p-6 bg-green-50 rounded-lg">
                        <h3 className="text-xl font-semibold mb-4">ACF Custom Fields:</h3>
                        <div className="space-y-2 text-sm">
                            <p>
                                <strong>Meta Title:</strong>{" "}
                                {pageData.acf.meta_title || "Not set"}
                            </p>
                            <p>
                                <strong>Meta Description:</strong>{" "}
                                {pageData.acf.meta_description || "Not set"}
                            </p>
                            <p>
                                <strong>Keywords:</strong>{" "}
                                {pageData.acf.key_words || "Not set"}
                            </p>
                            <p>
                                <strong>Canonical:</strong>{" "}
                                {pageData.acf.canonical || "Not set"}
                            </p>
                            <p>
                                <strong>Schema:</strong> {pageData.acf.schema || "Not set"}
                            </p>
                            <p>
                                <strong>Schema Type Used:</strong> {seoSchema?.toLowerCase() || "medicalprocedure (default)"}
                            </p>
                            <p>
                                <strong>Generated Schema:</strong> {generateSchema()["@type"]}
                            </p>
                            <p>
                                <strong>Featured Image:</strong>{" "}
                                {pageData.acf.featured_image || "Not set"}
                            </p>
                            <p>
                                <strong>Social Media Image:</strong>{" "}
                                {pageData.acf?.social_media?.url || pageData.acf?.social_media_image || "Not set"}
                            </p>
                            <p>
                                <strong>Social Media Image Details:</strong>{" "}
                                {pageData.acf?.social_media ? (
                                    <span>
                                        {pageData.acf.social_media.filename} ({pageData.acf.social_media.width}x{pageData.acf.social_media.height})
                                    </span>
                                ) : "Not set"}
                            </p>
                            <p>
                                <strong>OG Image:</strong>{" "}
                                {pageData.acf.og_image || "Not set"}
                            </p>
                            <p>
                                <strong>Final Image URL:</strong>{" "}
                                {finalSeoImage}
                            </p>
                        </div>
                    </div>
                )} */}
            </div>
        </>
    )
}

export default RhinoplastyWordpress