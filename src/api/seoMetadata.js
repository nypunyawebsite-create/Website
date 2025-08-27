const API_BASE_URL = 'http://localhost:7010/api';

// Get SEO metadata by ID
export const getSeoMetadataById = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/seo-metadata/id/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch SEO metadata');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching SEO metadata:', error);
        return null;
    }
};

// Get SEO metadata by page identifier
export const getSeoMetadataByPage = async (pageIdentifier) => {
    try {
        const response = await fetch(`${API_BASE_URL}/seo-metadata/page/${pageIdentifier}`);
        if (!response.ok) {
            throw new Error('Failed to fetch SEO metadata');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching SEO metadata:', error);
        return null;
    }
};
