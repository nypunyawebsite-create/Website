import React, { useState, useEffect } from 'react';

const SeoDebugger = ({ seoData, loading, seoId, pathname }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentTitle, setCurrentTitle] = useState('');

    useEffect(() => {
        setCurrentTitle(document.title);
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
                maxWidth: '300px',
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
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default SeoDebugger;
