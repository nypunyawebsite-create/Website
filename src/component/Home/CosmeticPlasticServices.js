import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cosmeticServiceData from '../../utils/cosmetic-service-data';

const CosmeticPlasticServices = () => {
    const [expandedService, setExpandedService] = useState(null);

    const handleExpandClick = (index) => {
        setExpandedService(index === expandedService ? null : index);
    };

    return (
        <div className="p-6 flex flex-col justify-center items-center">
            <div className="md:container flex flex-col justify-center items-center">
                <h2 className="text-3xl font-bold mb-8">Cosmetic Plastic Surgery Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cosmeticServiceData.map((service, index) => (
                        <div
                            key={index}
                            className={`border rounded-lg ${expandedService === index ? 'lg:col-span-2 flex flex-col lg:flex-row bg-[#92E0E0]' : 'bg-[#e9f9f9] hover:bg-[#92E0E0] group'}`}
                        >
                            <div className={`w-full p-4 h-full flex flex-col gap-6 justify-between ${expandedService === index ? 'lg:w-1/2' : ''}`}>
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
                                    <div className="grid grid-cols-2 md:grid-cols-2 lg:gap-4 bg-opacity-50 bg-black text-white lg:h-full h-48">
                                        <div className="hover:bg-[#000099] hover:bg-opacity-50 p-2 flex flex-col justify-center items-center">
                                            <Link to="#">
                                                <h4 className="font-bold">Information</h4>
                                                {/* <p>{service.information}</p> */}
                                            </Link>
                                        </div>
                                        <div className="hover:bg-[#000099] hover:bg-opacity-50 p-2 flex flex-col justify-center items-center">
                                            <Link to="#">
                                                <h4 className="font-bold">Transformation</h4>
                                                {/* <p>{service.transformation}</p> */}
                                            </Link>
                                        </div>
                                        <div className="hover:bg-[#000099] hover:bg-opacity-50 p-2 flex flex-col justify-center items-center">
                                            <Link to="#">
                                                <h4 className="font-bold">FAQs</h4>
                                                {/* <p>{service.faqs}</p> */}
                                            </Link>
                                        </div>
                                        <div className="hover:bg-[#000099] hover:bg-opacity-50 p-2 flex flex-col justify-center items-center">
                                            <Link to="#">
                                                <h4 className="font-bold">Why Us</h4>
                                                {/* <p>{service.whyUs}</p> */}
                                            </Link>
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

export default CosmeticPlasticServices;
