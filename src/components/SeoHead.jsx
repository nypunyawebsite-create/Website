import React from 'react';
import { useSeoMetadata } from '../hooks/useSeoMetadata';

const SeoHead = ({ seoId, type = 'id' }) => {
    const { seoData, loading } = useSeoMetadata(seoId, type);

    if (loading) {
        return (
            <div style={{ display: 'none' }}>
                Loading SEO metadata...
            </div>
        );
    }

    if (!seoData) {
        return null;
    }

    return (
        <div style={{ display: 'none' }}>
            {/* This div is hidden but ensures the hook runs */}
            <meta name="seo-loaded" content="true" />
            <meta name="page-identifier" content={seoData.pageIdentifier} />
            <meta name="page-name" content={seoData.pageName} />
        </div>
    );
};

export default SeoHead;
