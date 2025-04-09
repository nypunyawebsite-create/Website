import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cosmeticServiceData from '../../utils/cosmetic-service-data';

const CosmeticPlasticServices = () => {
    const [expandedService, setExpandedService] = useState(0);
    const navigate = useNavigate();

    const handleExpandClick = (index) => {
        setExpandedService(index === expandedService ? null : index);
    };

    const handleNavigate = (slug, section) => {
        navigate(`/${slug}`, { state: { scrollTo: section } });
    };

    const handleNavigateToGallery = (category) => {
        navigate(`/gallery`, { state: { category } });
    };

    return (
        <div className="p-4 md:p-6 flex flex-col justify-center items-center pt-20">
            <div className="w-full max-w-7xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                    Cosmetic Plastic Surgery Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cosmeticServiceData.map((service, index) => {
                        const isExpanded = expandedService === index;

                        return (
                            <div
                                key={index}
                                className={`border rounded-lg transition-all duration-300 overflow-hidden 
                                    ${isExpanded ? 'bg-[#92E0E0] col-span-1 md:col-span-2 lg:col-span-2' : 'bg-[#e9f9f9] hover:bg-[#92E0E0] group'}
                                `}
                            >
                                <div className={`flex flex-col ${isExpanded ? 'md:flex-row' : ''}`}>
                                    <div className={`w-full p-4 flex flex-col justify-between ${isExpanded ? 'md:w-1/2' : ''}`}>
                                        <div className="flex flex-col gap-2">
                                            <h3 className="text-xl font-bold">{service.title}</h3>
                                            <div
                                                className="text-sm text-gray-700"
                                                style={{
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 4,
                                                    WebkitBoxOrient: 'vertical',
                                                    height: '80px',
                                                    overflow: 'hidden',
                                                }}
                                            >
                                                {service.desc}
                                            </div>
                                        </div>
                                        <div>
                                            <button
                                                className={`mt-4 py-2 px-4 rounded text-black 
                                                    ${isExpanded ? 'bg-[#000099] text-white' : 'bg-[#92E0E0] group-hover:bg-[#000099] group-hover:text-white'}
                                                `}
                                                onClick={() => handleExpandClick(index)}
                                            >
                                                {isExpanded ? 'Read Less' : 'Read More'}
                                            </button>
                                        </div>
                                    </div>

                                    {isExpanded && (
                                        <div
                                            className="w-full md:w-1/2 min-h-[200px] md:min-h-[300px] bg-cover bg-center"
                                            style={{
                                                backgroundImage: `url(${service.bgimage})`,
                                            }}
                                        >
                                            <div className="grid grid-cols-2 gap-2 bg-black bg-opacity-50 text-white h-full">
                                                <div className="hover:bg-white/50 hover:text-black flex flex-col justify-center items-center text-center">
                                                    <button onClick={() => handleNavigate(service.slug, 'information')}>
                                                        <h4 className="font-bold text-sm md:text-base">Information</h4>
                                                    </button>
                                                </div>
                                                <div className="hover:bg-white/50 hover:text-black flex flex-col justify-center items-center text-center">
                                                    <button onClick={() => handleNavigateToGallery(service.title)}>
                                                        <h4 className="font-bold text-sm md:text-base">Transformation</h4>
                                                    </button>
                                                </div>
                                                <div className="hover:bg-white/50 hover:text-black flex flex-col justify-center items-center text-center">
                                                    <button onClick={() => handleNavigate(service.slug, 'faqs')}>
                                                        <h4 className="font-bold text-sm md:text-base">FAQs</h4>
                                                    </button>
                                                </div>
                                                <div className="hover:bg-white/50 hover:text-black flex flex-col justify-center items-center text-center">
                                                    <button onClick={() => handleNavigate(service.slug, 'whyUs')}>
                                                        <h4 className="font-bold text-sm md:text-base">Why Us</h4>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default CosmeticPlasticServices;
