import React from "react";
import { Link } from "react-router-dom";
import { services } from "../../../utils/ServiceDatas/ServiceData/serviceData";

const ServiceContent = () => {
    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-6 md:px-12">
                <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-10">
                    What we do
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition transform hover:scale-105"
                        >
                            <img src={service.image} alt={service.title} className="w-full h-56 object-cover" />
                            <div className="p-5">
                                <h3 className="text-xl font-semibold text-gray-800 h-14" >{service.title}</h3>
                                <Link to={`${service.slug}`}>
                                    <button className="mt-4 py-2 px-4 rounded-md text-black bg-[#92E0E0] hover:text-white hover:bg-[#000099] transition">
                                        Know More
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceContent;
