import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

/**
 * SEO Wrapper Component
 * Add this to all pages to ensure proper SEO meta tags, canonical URLs, and structured data
 * 
 * @param {string} title - Page title
 * @param {string} description - Meta description
 * @param {string} keywords - Meta keywords
 * @param {string} image - OG image URL
 * @param {string} type - OG type (website/article)
 * @param {boolean} isServicePage - If true, adds MedicalProcedure schema
 * @param {string} serviceName - Name of the medical service/procedure
 * @param {string} procedureType - Type of procedure (e.g., "CosmeticProcedure", "TherapeuticProcedure")
 * @param {Array} faqItems - Array of FAQ items for FAQPage schema [{question: string, answer: string}]
 * @param {children} children - Page content
 */
const SeoWrapper = ({
    title,
    description,
    keywords,
    image = "https://nypunyaaesthetics.com/home/homepagebanner.png",
    type = "website",
    isServicePage = false,
    serviceName = null,
    procedureType = "CosmeticProcedure",
    faqItems = [],
    children
}) => {
    const location = useLocation();
    // Strip query parameters from canonical URL to prevent duplicate content issues
    // Only use pathname, not search params (query string)
    const cleanPath = location.pathname.endsWith('/') && location.pathname !== '/' 
        ? location.pathname.slice(0, -1) 
        : location.pathname;
    const currentUrl = `https://nypunyaaesthetics.com${cleanPath}`;
    
    // Default values
    const siteTitle = "Nypunya Aesthetic Clinic - Best Plastic Surgery & Dermatology in Bangalore";
    const defaultDescription = "Nypunya Aesthetic Clinic offers the best plastic surgery, cosmetic surgery, and dermatology services in Bangalore. Expert doctors, advanced treatments, and excellent results.";
    const defaultKeywords = "plastic surgery bangalore, cosmetic surgery, dermatology, aesthetic clinic, best plastic surgeon";
    
    const finalTitle = title ? `${title} | Nypunya Aesthetics` : siteTitle;
    const finalDescription = description || defaultDescription;
    const finalKeywords = keywords || defaultKeywords;

    return (
        <>
            <Helmet>
                {/* Basic Meta Tags */}
                <title>{finalTitle}</title>
                <meta name="description" content={finalDescription} />
                <meta name="keywords" content={finalKeywords} />
                
                {/* Canonical URL - IMPORTANT for duplicate content */}
                <link rel="canonical" href={currentUrl} />
                
                {/* Open Graph / Facebook */}
                <meta property="og:type" content={type} />
                <meta property="og:url" content={currentUrl} />
                <meta property="og:title" content={finalTitle} />
                <meta property="og:description" content={finalDescription} />
                <meta property="og:image" content={image} />
                <meta property="og:site_name" content="Nypunya Aesthetic Clinic" />
                <meta property="og:locale" content="en_US" />
                
                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content={currentUrl} />
                <meta name="twitter:title" content={finalTitle} />
                <meta name="twitter:description" content={finalDescription} />
                <meta name="twitter:image" content={image} />
                
                {/* Additional SEO */}
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <meta name="googlebot" content="index, follow" />
                
                {/* Schema.org markup for Google */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            // MedicalBusiness schema (always included)
                            {
                                "@type": "MedicalBusiness",
                                "name": "Nypunya Aesthetic Clinic",
                                "image": image,
                                "url": "https://nypunyaaesthetics.com",
                                "telephone": "+91-XXXXXXXXXX",
                                "priceRange": "₹₹₹",
                                "address": {
                                    "@type": "PostalAddress",
                                    "streetAddress": "Your Address",
                                    "addressLocality": "Bangalore",
                                    "addressRegion": "KA",
                                    "postalCode": "560XXX",
                                    "addressCountry": "IN"
                                },
                                "geo": {
                                    "@type": "GeoCoordinates",
                                    "latitude": "12.XXXX",
                                    "longitude": "77.XXXX"
                                },
                                "sameAs": [
                                    "https://www.facebook.com/nypunyaaesthetics",
                                    "https://www.instagram.com/nypunyaaesthetics"
                                ]
                            },
                            // MedicalProcedure schema for service pages
                            ...(isServicePage && serviceName ? [{
                                "@type": procedureType,
                                "name": serviceName,
                                "description": finalDescription,
                                "image": image,
                                "url": currentUrl,
                                "provider": {
                                    "@type": "MedicalBusiness",
                                    "name": "Nypunya Aesthetic Clinic",
                                    "address": {
                                        "@type": "PostalAddress",
                                        "addressLocality": "Bangalore",
                                        "addressRegion": "KA",
                                        "addressCountry": "IN"
                                    }
                                },
                                "medicalSpecialty": {
                                    "@type": "MedicalSpecialty",
                                    "name": title.includes("Dermatology") || title.includes("Laser") || title.includes("Acne") || title.includes("Skin") 
                                        ? "Dermatology" 
                                        : "Plastic Surgery"
                                },
                                "areaServed": {
                                    "@type": "City",
                                    "name": "Bangalore"
                                }
                            }] : []),
                            // FAQPage schema if FAQ items provided
                            ...(faqItems && faqItems.length > 0 ? [{
                                "@type": "FAQPage",
                                "mainEntity": faqItems.map(faq => ({
                                    "@type": "Question",
                                    "name": faq.question,
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": faq.answer
                                    }
                                }))
                            }] : [])
                        ]
                    })}
                </script>
            </Helmet>
            {children}
        </>
    );
};

export default SeoWrapper;

