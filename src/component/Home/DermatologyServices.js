import React from 'react';
import { useNavigate } from 'react-router-dom';
import dermatologyServiceData from '../../utils/dermatology-service-data';

const DermatologyServices = () => {
    const navigate = useNavigate();

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
                    Dermatology Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {dermatologyServiceData.map((service, index) => (
                        <div
                            key={index}
                            className="border border-[#e9f9f9] rounded-lg bg-[#e9f9f9] hover:bg-[#92E0E0] hover:border-[#92E0E0] transition-all duration-300"
                        >
                            <div className="flex flex-col p-4 gap-4">
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-xl font-bold min-h-16">{service.title}</h3>
                                    <p className="text-sm text-gray-700">{service.desc}</p>
                                </div>

                                <div className="relative min-h-[200px] md:min-h-[250px] rounded-md overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{ backgroundImage: `url(${service.bgimage})` }}
                                    ></div>

                                    <div className="absolute inset-0 grid grid-cols-2 gap-2 bg-black bg-opacity-50 text-white">
                                        <div
                                            onClick={() => handleNavigate(service.slug, 'information')}
                                            className="flex flex-col justify-center items-center text-center cursor-pointer group"
                                        >
                                            <h4 className="font-bold text-sm md:text-base underline md:no-underline md:group-hover:underline">Information</h4>
                                        </div>
                                        <div
                                            onClick={() => handleNavigateToGallery(service.title)}
                                            className="flex flex-col justify-center items-center text-center cursor-pointer group"
                                        >
                                            <h4 className="font-bold text-sm md:text-base underline md:no-underline md:group-hover:underline">Transformation</h4>
                                        </div>
                                        <div
                                            onClick={() => handleNavigate(service.slug, 'faqs')}
                                            className="flex flex-col justify-center items-center text-center cursor-pointer group"
                                        >
                                            <h4 className="font-bold text-sm md:text-base underline md:no-underline md:group-hover:underline">FAQs</h4>
                                        </div>
                                        <div
                                            onClick={() => handleNavigate(service.slug, 'whyUs')}
                                            className="flex flex-col justify-center items-center text-center cursor-pointer group"
                                        >
                                            <h4 className="font-bold text-sm md:text-base underline md:no-underline md:group-hover:underline">Why Us</h4>
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

export default DermatologyServices;
