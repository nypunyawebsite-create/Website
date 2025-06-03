import React, { useState } from "react";
import { antiAgeingData, galleryImages, servicesData } from "../../utils/ServiceDatas/AntiAgeingData/antiAgeingData";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

const AntiAgeingProcedures = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">
                        Anti-Ageing Procedures
                    </h1>
                    <div className="max-w-3xl mx-auto">
                        {antiAgeingData.map((text, index) => (
                            <p key={index} className="text-lg text-gray-600 mb-4">
                                {text}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {servicesData.map((service) => (
                        <motion.div
                            key={service.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            whileHover={{ y: -5 }}
                        >
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {service.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Gallery Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={index}
                            className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group"
                            whileHover={{ scale: 1.02 }}
                            onClick={() => handleImageClick(image)}
                        >
                            <img
                                src={image}
                                alt={`Anti-ageing procedure ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Fullscreen Modal */}
            {selectedImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
                    onClick={handleCloseModal}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                        onClick={handleCloseModal}
                    >
                        <IoClose size={32} />
                    </button>
                    <motion.img
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }}
                        src={selectedImage}
                        alt="Fullscreen view"
                        className="max-h-[90vh] max-w-[90vw] object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />
                </motion.div>
            )}
        </div>
    );
};

export default AntiAgeingProcedures; 