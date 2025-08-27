import { useEffect, useState } from 'react';
import { getSeoMetadataById, getSeoMetadataByPage } from '../api/seoMetadata';

export const useSeoMetadata = (identifier, type = 'id') => {
    const [seoData, setSeoData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSeoData = async () => {
            try {
                setLoading(true);
                console.log(`🔄 SEO Hook: Fetching ${type}: ${identifier}`);

                let response;

                if (type === 'id') {
                    response = await getSeoMetadataById(identifier);
                } else {
                    response = await getSeoMetadataByPage(identifier);
                }

                console.log(`📡 SEO Hook: Response:`, response);

                if (response && response.success && response.data) {
                    setSeoData(response.data);
                    updateDocumentHead(response.data);
                    console.log(`✅ SEO Hook: Metadata updated for ${type}: ${identifier}`);
                } else {
                    console.log(`❌ SEO Hook: No data or failed response for ${type}: ${identifier}`, response);
                    setSeoData(null);

                    // Log detailed error information
                    if (response) {
                        console.error('❌ SEO Hook: Response details:', {
                            success: response.success,
                            message: response.message,
                            data: response.data,
                            status: response.status
                        });
                    }
                }
            } catch (error) {
                console.error('❌ SEO Hook: Error fetching SEO metadata:', error);
                console.error('❌ SEO Hook: Error details:', {
                    message: error.message,
                    stack: error.stack,
                    type: error.constructor.name
                });
                setSeoData(null);
            } finally {
                setLoading(false);
            }
        };

        if (identifier) {
            // Add a small delay to ensure route is fully established
            const timer = setTimeout(() => {
                fetchSeoData();
            }, 50);

            return () => clearTimeout(timer);
        } else {
            console.log(`⚠️ SEO Hook: No identifier provided`);
            setLoading(false);
            setSeoData(null);
        }
    }, [identifier, type]);

    const updateDocumentHead = (data) => {
        if (!data) return;

        console.log('🔧 Updating document head with SEO data:', data);

        // Validate SEO data
        const validatedData = validateSeoData(data);
        if (!validatedData) {
            console.error('❌ SEO data validation failed');
            return;
        }

        // Convert relative image URLs to absolute URLs
        let socialMediaImage = validatedData.socialMediaImage;
        if (socialMediaImage && socialMediaImage.startsWith('/')) {
            // Convert relative path to absolute URL
            socialMediaImage = `${window.location.origin}${socialMediaImage}`;
            console.log(`🖼️ Converted relative image path to absolute: ${socialMediaImage}`);
        }

        // Validate image URL
        if (socialMediaImage) {
            // Test if image exists
            const img = new Image();
            img.onerror = () => {
                console.warn(`⚠️ Image not found: ${socialMediaImage}`);
                // Remove the image meta tags if image doesn't exist
                removeMetaTag('og:image', 'property');
                removeMetaTag('twitter:image', 'name');
            };
            img.onload = () => {
                console.log(`✅ Image loaded successfully: ${socialMediaImage}`);
            };
            img.src = socialMediaImage;
        }

        // Update or create meta tags
        updateMetaTag('title', validatedData.metaTitle);
        updateMetaTag('description', validatedData.metaDescription, 'name');
        updateMetaTag('keywords', validatedData.keywords?.join(', '), 'name');

        if (validatedData.canonicalUrl) {
            updateMetaTag('canonical', validatedData.canonicalUrl, 'rel');
        }

        // Open Graph tags
        updateMetaTag('og:title', validatedData.ogTitle || validatedData.metaTitle, 'property');
        updateMetaTag('og:description', validatedData.ogDescription || validatedData.metaDescription, 'property');
        if (socialMediaImage) {
            updateMetaTag('og:image', socialMediaImage, 'property');
        }
        updateMetaTag('og:type', 'website', 'property');
        updateMetaTag('og:url', validatedData.canonicalUrl || window.location.href, 'property');
        updateMetaTag('og:site_name', 'Nypunya Aesthetics', 'property');

        // Twitter Card tags
        updateMetaTag('twitter:card', 'summary_large_image', 'name');
        updateMetaTag('twitter:title', validatedData.ogTitle || validatedData.metaTitle, 'name');
        updateMetaTag('twitter:description', validatedData.ogDescription || validatedData.metaDescription, 'name');
        if (socialMediaImage) {
            updateMetaTag('twitter:image', socialMediaImage, 'name');
        }
        updateMetaTag('twitter:site', '@nypunya', 'name');

        // Additional meta tags for better SEO
        updateMetaTag('robots', 'index, follow', 'name');
        updateMetaTag('author', 'Nypunya Aesthetics', 'name');
        updateMetaTag('viewport', 'width=device-width, initial-scale=1.0', 'name');

        // Language and charset
        updateMetaTag('language', 'en', 'name');
        updateMetaTag('charset', 'UTF-8', 'http-equiv');
    };

    const validateSeoData = (data) => {
        if (!data) return null;

        const required = ['metaTitle', 'metaDescription'];
        const missing = required.filter(field => !data[field]);

        if (missing.length > 0) {
            console.error(`❌ SEO validation failed: Missing required fields: ${missing.join(', ')}`);
            return null;
        }

        // Ensure strings are properly trimmed
        const validated = { ...data };
        validated.metaTitle = validated.metaTitle?.trim();
        validated.metaDescription = validated.metaDescription?.trim();
        validated.ogTitle = validated.ogTitle?.trim();
        validated.ogDescription = validated.ogDescription?.trim();

        console.log('✅ SEO data validation passed');
        return validated;
    };

    const updateMetaTag = (key, value, attribute = 'name') => {
        if (!value) {
            console.log(`⚠️ Skipping empty value for ${key}`);
            return;
        }

        console.log(`🔧 Updating meta tag: ${key} = ${value} (${attribute})`);

        let selector;
        if (key === 'title') {
            // Handle title tag
            document.title = value;
            console.log(`✅ Updated document title: ${value}`);
            return;
        } else if (key === 'canonical') {
            // Handle canonical link
            selector = `link[rel="canonical"]`;
        } else {
            // Handle meta tags
            selector = `meta[${attribute}="${key}"]`;
        }

        let element = document.querySelector(selector);

        if (!element) {
            if (key === 'canonical') {
                element = document.createElement('link');
                element.rel = 'canonical';
                document.head.appendChild(element);
                console.log(`✅ Created canonical link`);
            } else {
                element = document.createElement('meta');
                element.setAttribute(attribute, key);
                document.head.appendChild(element);
                console.log(`✅ Created meta tag: ${key}`);
            }
        }

        if (key === 'canonical') {
            element.href = value;
        } else {
            element.content = value;
        }

        console.log(`✅ Updated ${key}: ${value}`);
    };

    const removeMetaTag = (key, attribute) => {
        console.log(`🔧 Removing meta tag: ${key} (${attribute})`);
        const selector = `meta[${attribute}="${key}"]`;
        const element = document.querySelector(selector);
        if (element) {
            element.remove();
            console.log(`✅ Removed meta tag: ${key}`);
        } else {
            console.log(`⚠️ Meta tag not found for removal: ${key}`);
        }
    };

    return { seoData, loading };
};
