import { useEffect, useState } from 'react';
import { getSeoMetadataById, getSeoMetadataByPage } from '../api/seoMetadata';

export const useSeoMetadata = (identifier, type = 'id') => {
    const [seoData, setSeoData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSeoData = async () => {
            try {
                setLoading(true);
                let response;
                
                if (type === 'id') {
                    response = await getSeoMetadataById(identifier);
                } else {
                    response = await getSeoMetadataByPage(identifier);
                }

                if (response && response.success) {
                    setSeoData(response.data);
                    updateDocumentHead(response.data);
                }
            } catch (error) {
                console.error('Error fetching SEO metadata:', error);
            } finally {
                setLoading(false);
            }
        };

        if (identifier) {
            fetchSeoData();
        }
    }, [identifier, type]);

    const updateDocumentHead = (data) => {
        if (!data) return;

        // Update or create meta tags
        updateMetaTag('title', data.metaTitle);
        updateMetaTag('description', data.metaDescription, 'name');
        updateMetaTag('keywords', data.keywords?.join(', '), 'name');
        updateMetaTag('canonical', data.canonicalUrl, 'rel');
        
        // Open Graph tags
        updateMetaTag('og:title', data.ogTitle || data.metaTitle, 'property');
        updateMetaTag('og:description', data.ogDescription || data.metaDescription, 'property');
        updateMetaTag('og:image', data.socialMediaImage, 'property');
        updateMetaTag('og:type', 'website', 'property');
        updateMetaTag('og:url', data.canonicalUrl || window.location.href, 'property');
        
        // Twitter Card tags
        updateMetaTag('twitter:card', 'summary_large_image', 'name');
        updateMetaTag('twitter:title', data.ogTitle || data.metaTitle, 'name');
        updateMetaTag('twitter:description', data.ogDescription || data.metaDescription, 'name');
        updateMetaTag('twitter:image', data.socialMediaImage, 'name');
    };

    const updateMetaTag = (key, value, attribute = 'name') => {
        if (!value) return;

        let selector;
        if (key === 'title') {
            // Handle title tag
            document.title = value;
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
            } else {
                element = document.createElement('meta');
                element.setAttribute(attribute, key);
                document.head.appendChild(element);
            }
        }

        if (key === 'canonical') {
            element.href = value;
        } else {
            element.content = value;
        }
    };

    return { seoData, loading };
};
