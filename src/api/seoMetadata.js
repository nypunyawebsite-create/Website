import API_URL from '../Config';
const API_BASE_URL = API_URL;

// Get SEO metadata by ID
export const getSeoMetadataById = async (id) => {
    try {
        console.log(`🌐 API: Fetching SEO metadata by ID: ${id}`);
        const response = await fetch(`${API_BASE_URL}/seo-metadata/id/${id}`);
        console.log(`🌐 API: Response status: ${response.status}`);

        if (!response.ok) {
            throw new Error(`Failed to fetch SEO metadata: ${response.status}`);
        }

        const data = await response.json();
        console.log(`🌐 API: Response data:`, data);
        return data;
    } catch (error) {
        console.error('❌ API: Error fetching SEO metadata:', error);
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
