import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dermatologyServiceData from '../../utils/dermatology-service-data';

const DermatologyServices = () => {
    const [expandedService, setExpandedService] = useState(null);
    const navigate = useNavigate();

    const handleExpandClick = (index) => {
        setExpandedService(index === expandedService ? null : index);
    };

    const handleNavigate = (slug, section) => {
        navigate(`/${slug}`, { state: { scrollTo: section } });
    };

    return (
        <div className="p-6 flex flex-col justify-center items-center">
            <div className="md:container flex flex-col justify-center items-center">
                <h2 className="text-3xl font-bold mb-8">Dermatology Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {dermatologyServiceData.map((service, index) => (
                        <div
                            key={index}
                            className={`border rounded-lg ${expandedService === index ? 'lg:col-span-2 flex flex-col lg:flex-row bg-[#92E0E0]' : 'bg-[#e9f9f9] hover:bg-[#92E0E0] group'}`}
                        >
                            <div className={`w-full p-4 h-full flex flex-col justify-between gap-6 ${expandedService === index ? 'lg:w-1/2' : ''}`}>
                                <div>
                                    <h3 className={`text-xl font-bold ${expandedService === index ? 'text-black' : ''}`}>{service.title}</h3>
                                    <p className={`${expandedService === index ? 'text-black' : ''}`}>{service.desc}</p>
                                </div>
                                <div>
                                    <button
                                        className={`mt-4 py-2 px-4 rounded ${expandedService === index ? 'bg-white text-black' : 'bg-[#92E0E0] text-black group-hover:bg-[#000099] group-hover:text-white'}`}
                                        onClick={() => handleExpandClick(index)}
                                    >
                                        {expandedService === index ? 'Read Less' : 'Read More'}
                                    </button>
                                </div>
                            </div>
                            {expandedService === index && (
                                <div className='w-full lg:w-1/2 lg:h-80 mt-4 lg:mt-0' style={{ backgroundImage: `url(${service.bgimage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                    <div className="grid grid-cols-2 md:grid-cols-2 bg-opacity-50 bg-black text-white lg:h-full h-48">
                                    <div className="hover:bg-white hover:text-black hover:bg-opacity-50 p-2 flex flex-col justify-center items-center">
                                            <button onClick={() => handleNavigate(service.slug, 'information')}>
                                                <h4 className="font-bold">Information</h4>
                                            </button>
                                        </div>
                                        <div className="hover:bg-white hover:text-black hover:bg-opacity-50 p-2 flex flex-col justify-center items-center">
                                            <button onClick={() => handleNavigate(service.slug, 'transformation')}>
                                                <h4 className="font-bold">Transformation</h4>
                                            </button>
                                        </div>
                                        <div className="hover:bg-white hover:text-black hover:bg-opacity-50 p-2 flex flex-col justify-center items-center">
                                            <button onClick={() => handleNavigate(service.slug, 'faqs')}>
                                                <h4 className="font-bold">FAQs</h4>
                                            </button>
                                        </div>
                                        <div className="hover:bg-white hover:text-black hover:bg-opacity-50 p-2 flex flex-col justify-center items-center">
                                            <button onClick={() => handleNavigate(service.slug, 'whyUs')}>
                                                <h4 className="font-bold">Why Us</h4>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default DermatologyServices;