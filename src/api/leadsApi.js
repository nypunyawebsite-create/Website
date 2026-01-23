import API_URL from '../Config';

/**
 * Validates and formats phone number to match API requirement: 91 + 10 digits
 * @param {string} phone - Phone number input (can be 10 digits, or already include country code)
 * @returns {string|null} - Formatted phone number (91XXXXXXXXXX) or null if invalid
 */
export const formatPhoneNumber = (phone) => {
    if (!phone) return null;
    
    // Remove all non-digit characters
    const digitsOnly = phone.replace(/\D/g, '');
    
    // If it starts with 91 and has 12 digits total, return as is
    if (digitsOnly.startsWith('91') && digitsOnly.length === 12) {
        return digitsOnly;
    }
    
    // If it's 10 digits, add 91 prefix
    if (digitsOnly.length === 10) {
        return `91${digitsOnly}`;
    }
    
    // If it's 11 digits and starts with 0, remove 0 and add 91
    if (digitsOnly.length === 11 && digitsOnly.startsWith('0')) {
        return `91${digitsOnly.substring(1)}`;
    }
    
    return null;
};

/**
 * Validates phone number format
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - True if valid (matches pattern ^91\d{10}$)
 */
export const validatePhoneNumber = (phone) => {
    const formatted = formatPhoneNumber(phone);
    if (!formatted) return false;
    
    // API requirement: ^91\d{10}$
    const phoneRegex = /^91\d{10}$/;
    return phoneRegex.test(formatted);
};

/**
 * Submits lead(s) to the API
 * @param {Object|Array} leadData - Single lead object or array of lead objects
 * @param {Object} config - Optional config for WhatsApp messages and tasks
 * @param {string} apiToken - Bearer token for authorization
 * @returns {Promise<Object>} - API response
 */
export const submitLead = async (leadData, config = {}, apiToken = null) => {
    // Ensure leads is an array
    const leads = Array.isArray(leadData) ? leadData : [leadData];
    
    // Format and validate phone numbers
    const formattedLeads = leads.map(lead => {
        const formattedPhone = formatPhoneNumber(lead.phone);
        
        if (!formattedPhone) {
            throw new Error(`Invalid phone number: ${lead.phone}. Phone must be 10 digits or include country code 91.`);
        }
        
        return {
            name: lead.name || '',
            phone: formattedPhone,
            email: lead.email || '',
            tags: lead.tags || [],
            source: lead.source || 'Website Form',
            status: lead.status || 'new',
            summary: lead.summary || lead.requirement || '',
            priority: lead.priority || 'medium',
            sentiment: lead.sentiment || 'neutral',
            dynamicFields: lead.dynamicFields || {},
            whatsappMessageParams: lead.whatsappMessageParams || {},
        };
    });
    
    // Prepare request body
    const requestBody = {
        leads: formattedLeads,
        ...(Object.keys(config).length > 0 && { config }),
    };
    
    // Prepare headers
    const headers = {
        'Content-Type': 'application/json',
    };
    
    // Add authorization header if token is provided
    if (apiToken) {
        headers['Authorization'] = `Bearer ${apiToken}`;
    }
    
    try {
        const response = await fetch(`${API_URL}api/leads`, {
            method: 'POST',
            headers,
            body: JSON.stringify(requestBody),
        });
        
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(
                errorData.message || `API request failed with status ${response.status}`
            );
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error submitting lead:', error);
        throw error;
    }
};

/**
 * Helper function to create a lead object from form data
 * @param {Object} formData - Form data object
 * @param {Object} options - Additional options (tags, source, etc.)
 * @returns {Object} - Formatted lead object
 */
export const createLeadFromForm = (formData, options = {}) => {
    return {
        name: formData.name || formData.userName || '',
        phone: formData.phone || formData.phoneNumber || '',
        email: formData.email || '',
        tags: options.tags || [],
        source: options.source || 'Website Form',
        summary: formData.requirement || formData.message || formData.summary || '',
        priority: options.priority || 'medium',
        sentiment: options.sentiment || 'neutral',
        dynamicFields: {
            ...(formData.dynamicFields || {}),
            ...(options.dynamicFields || {}),
        },
        whatsappMessageParams: {
            name: formData.name || formData.userName || '',
            ...(options.whatsappMessageParams || {}),
        },
    };
};

