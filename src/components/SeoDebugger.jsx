import React, { useState, useEffect } from 'react';

const SeoDebugger = ({ seoData, loading, seoId, pathname }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentTitle, setCurrentTitle] = useState('');
    const [metaTags, setMetaTags] = useState([]);

    useEffect(() => {
        setCurrentTitle(document.title);

        // Get all meta tags for debugging
        const allMetaTags = Array.from(document.querySelectorAll('meta')).map(meta => ({
            name: meta.getAttribute('name') || meta.getAttribute('property') || 'unknown',
            content: meta.getAttribute('content'),
            type: meta.getAttribute('name') ? 'name' : meta.getAttribute('property') ? 'property' : 'other'
        }));
        setMetaTags(allMetaTags);
    }, [seoData]);

    // Only show in development
    if (process.env.NODE_ENV === 'production') {
        return null;
    }

    return (
        <div
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                background: '#1f2937',
                color: 'white',
                padding: '15px',
                borderRadius: '8px',
                fontSize: '12px',
                fontFamily: 'monospace',
                zIndex: 9999,
                maxWidth: '400px',
                maxHeight: '80vh',
                overflow: 'auto',
                cursor: 'pointer'
            }}
            onClick={() => setIsVisible(!isVisible)}
        >
            <div style={{ marginBottom: '10px', fontWeight: 'bold' }}>
                🔍 SEO Debugger {isVisible ? '▼' : '▶'}
            </div>

            {isVisible && (
                <div style={{ lineHeight: '1.4' }}>
                    <div><strong>Route:</strong> {pathname}</div>
                    <div><strong>SEO ID:</strong> {seoId || 'None'}</div>
                    <div><strong>Loading:</strong> {loading ? 'Yes' : 'No'}</div>
                    <div><strong>Current Title:</strong> {currentTitle}</div>
                    <div><strong>SEO Data:</strong> {seoData ? 'Loaded' : 'None'}</div>

                    {seoData && (
                        <div style={{ marginTop: '10px', padding: '10px', background: '#374151', borderRadius: '4px' }}>
                            <div><strong>Title:</strong> {seoData.metaTitle}</div>
                            <div><strong>Description:</strong> {seoData.metaDescription?.substring(0, 50)}...</div>
                            <div><strong>OG Title:</strong> {seoData.ogTitle}</div>
                            <div><strong>OG Description:</strong> {seoData.ogDescription}</div>
                            <div><strong>Image:</strong> {seoData.socialMediaImage}</div>
                            <div><strong>Keywords:</strong> {seoData.keywords?.join(', ')}</div>
                            <div><strong>Canonical:</strong> {seoData.canonicalUrl}</div>
                        </div>
                    )}

                    <div style={{ marginTop: '10px' }}>
                        <strong>Meta Tags ({metaTags.length}):</strong>
                        <div style={{ maxHeight: '200px', overflow: 'auto', background: '#374151', padding: '5px', borderRadius: '4px', marginTop: '5px' }}>
                            {metaTags.map((tag, index) => (
                                <div key={index} style={{ fontSize: '10px', marginBottom: '2px' }}>
                                    <span style={{ color: '#60a5fa' }}>{tag.type}:</span> {tag.name} = {tag.content?.substring(0, 30)}...
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SeoDebugger;
