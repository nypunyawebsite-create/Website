import React from 'react';
import { Link } from 'react-router-dom';

/**
 * ServiceKeywordLinks Component
 * Adds keyword-rich internal links to help service pages rank for their specific keywords
 * This fixes the issue where keywords are directing to homepage instead of service pages
 */
const ServiceKeywordLinks = () => {
    const serviceLinks = [
        // Plastic Surgery Services
        {
            url: '/rhinoplasty',
            keyword: 'Rhinoplasty in Bangalore',
            description: 'Expert nose reshaping surgery'
        },
        {
            url: '/breast-enhancement',
            keyword: 'Breast Augmentation in Bangalore',
            description: 'Natural breast enhancement procedures'
        },
        {
            url: '/hair-transplant',
            keyword: 'Hair Transplant in Bangalore',
            description: 'Permanent hair restoration'
        },
        {
            url: '/body-contouring',
            keyword: 'Body Contouring in Bangalore',
            description: 'Tummy tuck and body sculpting'
        },
        {
            url: '/liposuction',
            keyword: 'Liposuction in Bangalore',
            description: 'Fat removal and body sculpting'
        },
        {
            url: '/anti-ageing',
            keyword: 'Anti-Ageing Treatments in Bangalore',
            description: 'Facelift and skin rejuvenation'
        },
        {
            url: '/abdominal-contouring',
            keyword: 'Abdominal Contouring in Bangalore',
            description: 'Tummy tuck procedures'
        },
        {
            url: '/gynaecomastia-male-breast-moobs',
            keyword: 'Gynaecomastia Treatment in Bangalore',
            description: 'Male breast reduction'
        },
        {
            url: '/blepharo-plasty',
            keyword: 'Blepharoplasty in Bangalore',
            description: 'Eyelid surgery'
        },
        {
            url: '/structural-fat-grafting',
            keyword: 'Fat Grafting in Bangalore',
            description: 'Natural volume enhancement'
        },
        {
            url: '/nose-jobs',
            keyword: 'Nose Jobs in Bangalore',
            description: 'Cosmetic nose surgery'
        },

        // Dermatology Services
        {
            url: '/laser-hair-removal',
            keyword: 'Laser Hair Removal in Bangalore',
            description: 'Permanent hair reduction'
        },
        {
            url: '/acne-and-scars',
            keyword: 'Acne Treatment in Bangalore',
            description: 'Clear skin solutions'
        },
        {
            url: '/fillers-and-botox',
            keyword: 'Botox and Fillers in Bangalore',
            description: 'Anti-aging injectables'
        },
        {
            url: '/laser-skin-rejuvenation',
            keyword: 'Laser Skin Rejuvenation in Bangalore',
            description: 'Glowing skin treatments'
        },
        {
            url: '/laser-tattoo-removal',
            keyword: 'Tattoo Removal in Bangalore',
            description: 'Safe tattoo removal'
        },
        {
            url: '/stretch-marks-treatment',
            keyword: 'Stretch Marks Treatment in Bangalore',
            description: 'Reduce stretch marks'
        },
        {
            url: '/laser-scar-revision',
            keyword: 'Scar Revision in Bangalore',
            description: 'Improve scar appearance'
        },
        {
            url: '/platelet-rich-plasma-injections',
            keyword: 'PRP Treatment in Bangalore',
            description: 'Natural healing therapy'
        },
    ];

    return (
        <section className="bg-gray-50 py-12 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
                    Our Specialized Treatments in Bangalore
                </h2>
                <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
                    Explore our comprehensive range of plastic surgery and dermatology services.
                    Each treatment is performed by expert doctors using advanced techniques for natural, lasting results.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {serviceLinks.map((service, index) => (
                        <Link
                            key={index}
                            to={service.url}
                            className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:bg-blue-50 border border-gray-200 hover:border-blue-300"
                        >
                            <h3 className="text-lg font-semibold text-blue-800 mb-2 hover:text-blue-900">
                                {service.keyword}
                            </h3>
                            <p className="text-sm text-gray-600">
                                {service.description}
                            </p>
                            <span className="text-blue-600 text-sm font-medium mt-2 inline-block">
                                Learn More →
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceKeywordLinks;
