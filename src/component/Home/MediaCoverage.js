import React from 'react';

const MediaCoverage = () => {
    const mediaOutlets = [
        {
            name: "Times of India",
            link: "https://www.google.com/amp/s/www.outlookindia.com/amp/story/healthcare-spotlight/outlook-best-doctors-south-2025",
            description: "Featured in leading healthcare publications"
        },
        {
            name: "Deccan Herald",
            link: "https://youtu.be/NbQFGZyUytg?si=cIsypIy-cvapW4aE",
            description: "Healthcare innovation spotlight"
        },
        {
            name: "Healthcare Today",
            link: "https://youtu.be/NLV9o-hk9p8?si=puSpkRUVHzxeFZxu",
            description: "Medical excellence recognition"
        },
        {
            name: "Beauty & Wellness",
            link: "https://youtu.be/0FqBsNAvUN4?si=Zk4UaNM_IOXMwiog",
            description: "Aesthetic medicine coverage"
        }
    ];

    return (
        <div className="w-full py-16 px-4 md:px-8 lg:px-16" style={{ backgroundColor: '#E0F2F7' }}>
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 title-section text-center">
                        Media Coverage
                    </h2>
                    <p className="text-lg text-black leading-relaxed max-w-7xl text-center">
                        Featured in leading healthcare publications and media outlets for innovative treatments and exceptional patient outcomes.
                    </p>
                </div>

                {/* Media Outlets Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {mediaOutlets.map((outlet, index) => (
                        <a
                            key={index}
                            href={outlet.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center group"
                        >
                            <div className="mb-4">
                                <h3 className="text-xl font-bold text-black mb-2 group-hover:text-blue-600 transition-colors">
                                    {outlet.name}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {outlet.description}
                                </p>
                            </div>

                            {/* External Link Icon */}
                            <div className="flex justify-center">
                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                                    <svg
                                        className="w-4 h-4 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Additional Recognition */}
                <div className="mt-12 text-center">
                    <p className="text-lg text-black font-semibold mb-4">
                        Recognized for Excellence in Aesthetic Medicine
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-md">
                            Best Cosmetic Clinic Bangalore
                        </span>
                        <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-md">
                            Top Plastic Surgeon
                        </span>
                        <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-md">
                            Patient Choice Award
                        </span>
                        <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-md">
                            Medical Excellence
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MediaCoverage;
