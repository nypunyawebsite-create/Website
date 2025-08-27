import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cosmeticServiceData from '../../utils/cosmetic-service-data';

const CosmeticPlasticServices = () => {
    const navigate = useNavigate();
    const [clickedServices, setClickedServices] = useState(new Set());

    const handleNavigate = (slug, section) => {
        if (section === 'faqs') {
            navigate(`/${slug}#faq-section`);
        } else {
            navigate(`/${slug}`, { state: { scrollTo: section } });
        }
    };

    const handleNavigateToGallery = (category) => {
        navigate(`/gallery`, { state: { category } });
    };

    const handleReadMore = (index) => {
        setClickedServices(prev => {
            const newSet = new Set(prev);
            if (newSet.has(index)) {
                newSet.delete(index);
            } else {
                newSet.add(index);
            }
            return newSet;
        });
    };

    const handleServiceReadMore = (servicePath) => {
        if (servicePath) {
            navigate(`/${servicePath}`);
        }
    };

    return (
        <div className="p-4 md:p-6 flex flex-col justify-center items-center pt-20">
            <div className="w-full max-w-7xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                    Cosmetic Plastic Surgery Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cosmeticServiceData.map((service, index) => (
                        <div
                            key={index}
                            className="border border-[#e9f9f9] rounded-lg bg-[#e9f9f9] hover:bg-[#92E0E0] hover:border-[#92E0E0] transition-all duration-300"
                        >
                            <div className="flex flex-col p-4 gap-4">
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-xl font-bold min-h-16">
                                        {clickedServices.has(index) ? 'Read More' : service.title}
                                    </h3>
                                    <p className="text-sm text-gray-700"> {service.desc} &nbsp;

                                        {/* Read More Button */}
                                        {service.service_path && (
                                            <button
                                                onClick={() => handleServiceReadMore(service.service_path)}
                                                className="mt-2 px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors duration-200 self-start"
                                            >
                                                Read More
                                            </button>
                                        )}
                                    </p>
                                </div>

                                <div className="relative min-h-[200px] md:min-h-[250px] rounded-md overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{ backgroundImage: `url(${service.bgimage})` }}
                                    ></div>

                                    <div className="absolute inset-0 grid grid-cols-2 gap-2 bg-black bg-opacity-50 text-white">
                                        <div
                                            className="flex flex-col justify-center items-center text-center cursor-pointer group"
                                        >
                                            <h4 className="font-bold text-sm md:text-base">Information</h4>
                                            <button
                                                onClick={() => handleNavigate(service.slug, 'information')}
                                                className="mt-2 px-3 py-1 bg-white text-black text-xs rounded hover:bg-gray-200 transition-colors duration-200"
                                            >
                                                Read More
                                            </button>
                                        </div>
                                        <div
                                            className="flex flex-col justify-center items-center text-center cursor-pointer group"
                                        >
                                            <h4 className="font-bold text-sm md:text-base">Transformation</h4>
                                            <button
                                                onClick={() => {
                                                    if (service.title === "Mommy Makeover") {
                                                        handleNavigateToGallery('Body Contouring Abdominoplasty');
                                                    } else {
                                                        handleNavigateToGallery(service.title)
                                                    }
                                                }}
                                                className="mt-2 px-3 py-1 bg-white text-black text-xs rounded hover:bg-gray-200 transition-colors duration-200"
                                            >
                                                Read More
                                            </button>
                                        </div>
                                        <div
                                            className="flex flex-col justify-center items-center text-center cursor-pointer group"
                                        >
                                            <h4 className="font-bold text-sm md:text-base">FAQs</h4>
                                            <button
                                                onClick={() => handleNavigate(service.slug, 'faqs')}
                                                className="mt-2 px-3 py-1 bg-white text-black text-xs rounded hover:bg-gray-200 transition-colors duration-200"
                                            >
                                                Read More
                                            </button>
                                        </div>
                                        <div
                                            className="flex flex-col justify-center items-center text-center cursor-pointer group"
                                        >
                                            <h4 className="font-bold text-sm md:text-base">Why Us</h4>
                                            <button
                                                onClick={() => handleNavigate(service.slug, 'whyUs')}
                                                className="mt-2 px-3 py-1 bg-white text-black text-xs rounded hover:bg-gray-200 transition-colors duration-200"
                                            >
                                                Read More
                                            </button>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CosmeticPlasticServices;
