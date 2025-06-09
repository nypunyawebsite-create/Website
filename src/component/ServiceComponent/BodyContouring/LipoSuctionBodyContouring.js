import React, { useState, useEffect } from "react";
import { lipoSuctionDetails, galleryImages, informationImages } from "../../../utils/ServiceDatas/BodyContouringData/bodyContouring";

const LipoSuctionBodyContouring = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Ensure informationImages is an array and has at least one image
        if (Array.isArray(informationImages) && informationImages.length > 0) {
            setImages(informationImages);
        } else {
            // Fallback to gallery images if informationImages is empty
            setImages(galleryImages);
        }
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isModalOpen) return;

            switch (e.key) {
                case 'ArrowLeft':
                    handlePrevious(e);
                    break;
                case 'ArrowRight':
                    handleNext(e);
                    break;
                case 'Escape':
                    closeModal();
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isModalOpen, images.length]);

    const openModal = (index) => {
        if (images.length === 0) return;
        setSelectedImage(index);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'unset';
    };

    const handlePrevious = (e) => {
        e?.stopPropagation();
        if (images.length <= 1) return;
        setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = (e) => {
        e?.stopPropagation();
        if (images.length <= 1) return;
        setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="container mx-auto py-10 px-4">
            {/* Title Section */}
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-custom-blue">Body Contouring Abdominal Platy</h2>
                <div className="w-20 h-1 bg-custom-green mx-auto mt-4"></div>
            </div>

            <div className="max-w-[100%] mx-auto">
                {/* Main Section - Images */}
                <div className="space-y-8">
                    {/* Main Image */}
                    {images.length > 0 && (
                        <div
                            className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                            onClick={() => openModal(selectedImage)}
                        >
                            <img
                                src={images[selectedImage]}
                                alt="Featured Body Contouring"
                                className="w-full h-[600px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="text-2xl font-bold mb-2">Body Contouring</h3>
                                    <p className="text-white/80">Step {selectedImage + 1}</p>
                                </div>
                            </div>
                            {/* Navigation Arrows */}
                            {images.length > 1 && (
                                <>
                                    <button
                                        onClick={handlePrevious}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-custom-blue/80 hover:bg-custom-blue text-white p-2 rounded-full transition-all duration-300"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-custom-blue/80 hover:bg-custom-blue text-white p-2 rounded-full transition-all duration-300"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </>
                            )}
                        </div>
                    )}

                    {/* Image Grid */}
                    {images.length > 0 && (
                        <div className="flex justify-center gap-4 overflow-x-auto pb-4">
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    className={`relative flex-shrink-0 w-48 rounded-xl overflow-hidden shadow-md group cursor-pointer transition-all duration-300 ${selectedImage === index ? 'ring-2 ring-custom-green' : ''}`}
                                    onClick={() => openModal(index)}
                                >
                                    <img
                                        src={image}
                                        alt={`Body Contouring ${index + 1}`}
                                        className="w-full h-32 object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <div className="absolute bottom-3 left-3 text-white">
                                            <p className="text-sm font-medium">Step {index + 1}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Fullscreen Modal */}
            {isModalOpen && images.length > 0 && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 transition-opacity duration-300"
                    onClick={closeModal}
                >
                    <div className="relative w-full h-full flex items-center justify-center p-4">
                        <img
                            src={images[selectedImage]}
                            alt={`Body Contouring ${selectedImage + 1}`}
                            className="max-w-full max-h-full object-contain"
                        />
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-white hover:text-custom-green transition-colors duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        {/* Modal Navigation Arrows */}
                        {images.length > 1 && (
                            <>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handlePrevious(e);
                                    }}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-custom-blue/80 hover:bg-custom-blue text-white p-3 rounded-full transition-all duration-300"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleNext(e);
                                    }}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-custom-blue/80 hover:bg-custom-blue text-white p-3 rounded-full transition-all duration-300"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </>
                        )}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg">
                            View {selectedImage + 1} of {images.length}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LipoSuctionBodyContouring;
