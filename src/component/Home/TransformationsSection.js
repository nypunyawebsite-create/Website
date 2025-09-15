import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TransformationsSection = () => {
    const [currentPlasticIndex, setCurrentPlasticIndex] = useState(0);
    const [currentDermatologyIndex, setCurrentDermatologyIndex] = useState(0);

    const plasticSurgeryTransformations = [
        {
            id: 1,
            title: "Rhinoplasty",
            // description: "Natural-looking nose contouring with enhanced facial harmony",
            image: "home/gallery/1.jpeg",

        },
        {
            id: 2,
            title: "Rhinoplasty",
            // description: "Achieve a flatter, more toned abdomen with expert contouring",
            image: "home/gallery/2.jpeg",
        },
        {
            id: 3,
            title: "Facelift",
            // description: "Enhanced confidence with natural-looking breast enhancement",
            image: "home/gallery/3.jpeg",
        },
        {
            id: 4,
            title: "Adminoplasty",
            // description: "Complete body transformation with expert contouring",
            image: "home/gallery/4.jpeg",
        },
        {
            id: 5,
            title: "Adminoplasty",
            // description: "Targeted fat removal for improved body contours",
            image: "home/gallery/5.jpeg",
        },
        {
            id: 6,
            title: "Breast Enhancement",
            // description: "Targeted fat removal for improved body contours",
            image: "home/gallery/6.jpeg",
        },
        {
            id: 7,
            title: "Liposuction",
            // description: "Targeted fat removal for improved body contours",
            image: "home/gallery/7.jpeg",
        },
        {
            id: 8,
            title: "Liposuction",
            // description: "Targeted fat removal for improved body contours",
            image: "home/gallery/8.jpeg",
        },
        {
            id: 9,
            title: "Mastopexy",
            // description: "Targeted fat removal for improved body contours",
            image: "home/gallery/9.jpeg",
        },
        {
            id: 10,
            title: "Blepharoplasty",
            // description: "Targeted fat removal for improved body contours",
            image: "home/gallery/10.jpeg",
        },
        {
            id: 11,
            title: "Hair Transplant",
            // description: "Targeted fat removal for improved body contours",
            image: "home/gallery/11.jpeg",
        },
        {
            id: 12,
            title: "Hair Transplant",
            // description: "Targeted fat removal for improved body contours",
            image: "home/gallery/12.jpeg",
        },
    ];

    const dermatologyTransformations = [
        {
            id: 1,
            title: "Neck Lift",
            image: "home/gallery/dermatology/1.jpeg"
        },
        {
            id: 2,
            title: "PRP",
            image: "home/gallery/dermatology/2.jpeg"
        },
        {
            id: 3,
            title: "Pigmentation",
            image: "home/gallery/dermatology/3.jpeg"
        },
        {
            id: 4,
            title: "Laser Hair Removal",
            image: "home/gallery/dermatology/4.jpeg"
        },
        {
            id: 5,
            title: "Botox",
            image: "home/gallery/dermatology/5.jpeg"
        },
        {
            id: 6,
            title: "Acne Treatment",
            image: "home/gallery/dermatology/1.jpeg"
        },
        {
            id: 7,
            title: "Pigmentation Removal",
            image: "home/gallery/dermatology/2.jpeg"
        },
        {
            id: 8,
            title: "Laser Hair Removal",
            image: "home/gallery/dermatology/3.jpeg"
        }
    ];

    const nextPlasticSlide = () => {
        setCurrentPlasticIndex((prev) => (prev + 1) % plasticSurgeryTransformations.length);
    };

    const prevPlasticSlide = () => {
        setCurrentPlasticIndex((prev) => (prev - 1 + plasticSurgeryTransformations.length) % plasticSurgeryTransformations.length);
    };

    const nextDermatologySlide = () => {
        setCurrentDermatologyIndex((prev) => (prev + 1) % dermatologyTransformations.length);
    };

    const prevDermatologySlide = () => {
        setCurrentDermatologyIndex((prev) => (prev - 1 + dermatologyTransformations.length) % dermatologyTransformations.length);
    };

    // Auto-play functionality
    useEffect(() => {
        const plasticInterval = setInterval(() => {
            setCurrentPlasticIndex((prev) => (prev + 1) % plasticSurgeryTransformations.length);
        }, 4000); // Change every 4 seconds

        const dermatologyInterval = setInterval(() => {
            setCurrentDermatologyIndex((prev) => (prev + 1) % dermatologyTransformations.length);
        }, 5000); // Change every 5 seconds

        return () => {
            clearInterval(plasticInterval);
            clearInterval(dermatologyInterval);
        };
    }, [plasticSurgeryTransformations.length, dermatologyTransformations.length]);

    return (
        <div className="w-full py-16 px-4 md:px-8 lg:px-16 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 title-section">
                        Transformations That Inspire
                    </h2>
                    <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
                        Real results from real patients. See the transformative power of expert cosmetic surgery and aesthetic treatments at Nypunya Aesthetics.
                    </p>
                </div>

                {/* Plastic Surgery Section */}
                <div className="mb-20">
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-8 text-center">Plastic Surgery Services</h3>

                    <div className="relative flex justify-center items-center">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 max-w-6xl px-4">
                            {plasticSurgeryTransformations.map((transformation, index) => {
                                // Calculate position relative to current index
                                const position = (index - currentPlasticIndex + plasticSurgeryTransformations.length) % plasticSurgeryTransformations.length;
                                const isCenter = position === 0;
                                const isLeft = position === plasticSurgeryTransformations.length - 1;
                                const isRight = position === 1;
                                const isVisible = isCenter || isLeft || isRight;

                                if (!isVisible) return null;

                                return (
                                    <div
                                        key={transformation.id}
                                        className={`transition-all duration-700 ease-in-out ${isCenter
                                            ? 'scale-100 opacity-100 z-10 transform translate-x-0 w-full'
                                            : isLeft
                                                ? 'scale-75 opacity-40 blur-[1px] z-0 transform -translate-x-4 sm:-translate-x-8 md:-translate-x-12 lg:-translate-x-16 w-full hidden sm:block'
                                                : isRight
                                                    ? 'scale-75 opacity-40 blur-[1px] z-0 transform translate-x-4 sm:translate-x-8 md:translate-x-12 lg:translate-x-16 w-full hidden sm:block'
                                                    : 'scale-75 opacity-40 blur-[1px] z-0 w-full hidden sm:block'
                                            }`}
                                    >
                                        <div className={`bg-white rounded-lg overflow-hidden group relative transition-all duration-700 ${isCenter
                                            ? 'shadow-2xl ring-4 ring-blue-500 ring-opacity-50 transform scale-105'
                                            : 'opacity-60'
                                            }`}>
                                            <div className="relative">
                                                <img
                                                    src={transformation.image}
                                                    alt={`${transformation.title} transformation`}
                                                    className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-700"
                                                />
                                                {/* Before/After Labels */}
                                                <div className="absolute top-1 sm:top-2 left-1 sm:left-2 bg-red-500 text-white px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs font-bold">
                                                    BEFORE
                                                </div>
                                                <div className="absolute top-1 sm:top-2 right-1 sm:right-2 bg-green-500 text-white px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs font-bold">
                                                    AFTER
                                                </div>
                                            </div>
                                            <div className="p-3 sm:p-4 md:p-6">
                                                <h4 className={`text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2 transition-colors duration-700 ${isCenter ? 'text-blue-600' : 'text-gray-600'
                                                    }`}>{transformation.title}</h4>
                                            </div>

                                            {/* Highlight Effect for Center Card */}
                                            {isCenter && (
                                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg pointer-events-none animate-pulse"></div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Plastic Surgery Navigation */}
                    <div className="flex justify-center items-center mt-6 sm:mt-8 space-x-2 sm:space-x-4">
                        <button
                            onClick={prevPlasticSlide}
                            className="p-2 sm:p-3 rounded-full bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
                        >
                            <FaChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                        <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-700">
                            {currentPlasticIndex + 1} / {plasticSurgeryTransformations.length}
                        </span>
                        <button
                            onClick={nextPlasticSlide}
                            className="p-2 sm:p-3 rounded-full bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
                        >
                            <FaChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                    </div>
                </div>

                {/* Dermatology Section */}
                <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-8 text-center">Dermatology Services</h3>

                    <div className="relative flex justify-center items-center">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 max-w-6xl px-4">
                            {dermatologyTransformations.map((transformation, index) => {
                                // Calculate position relative to current index
                                const position = (index - currentDermatologyIndex + dermatologyTransformations.length) % dermatologyTransformations.length;
                                const isCenter = position === 0;
                                const isLeft = position === dermatologyTransformations.length - 1;
                                const isRight = position === 1;
                                const isVisible = isCenter || isLeft || isRight;

                                if (!isVisible) return null;

                                return (
                                    <div
                                        key={transformation.id}
                                        className={`transition-all duration-700 ease-in-out ${isCenter
                                            ? 'scale-100 opacity-100 z-10 transform translate-x-0 w-full'
                                            : isLeft
                                                ? 'scale-75 opacity-40 blur-[1px] z-0 transform -translate-x-4 sm:-translate-x-8 md:-translate-x-12 lg:-translate-x-16 w-full hidden sm:block'
                                                : isRight
                                                    ? 'scale-75 opacity-40 blur-[1px] z-0 transform translate-x-4 sm:translate-x-8 md:translate-x-12 lg:translate-x-16 w-full hidden sm:block'
                                                    : 'scale-75 opacity-40 blur-[1px] z-0 w-full hidden sm:block'
                                            }`}
                                    >
                                        <div className={`bg-white rounded-lg overflow-hidden group relative transition-all duration-700 ${isCenter
                                            ? 'shadow-2xl ring-4 ring-blue-500 ring-opacity-50 transform scale-105'
                                            : 'opacity-60'
                                            }`}>
                                            <div className="relative">
                                                <img
                                                    src={transformation.image}
                                                    alt={`${transformation.title} transformation`}
                                                    className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-700"
                                                />
                                                {/* Before/After Labels */}
                                                <div className="absolute top-1 sm:top-2 left-1 sm:left-2 bg-red-500 text-white px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs font-bold">
                                                    BEFORE
                                                </div>
                                                <div className="absolute top-1 sm:top-2 right-1 sm:right-2 bg-green-500 text-white px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs font-bold">
                                                    AFTER
                                                </div>
                                            </div>
                                            <div className="p-3 sm:p-4 md:p-6">
                                                <h4 className={`text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2 transition-colors duration-700 ${isCenter ? 'text-blue-600' : 'text-gray-600'
                                                    }`}>{transformation.title}</h4>
                                            </div>

                                            {/* Highlight Effect for Center Card */}
                                            {isCenter && (
                                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg pointer-events-none animate-pulse"></div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Dermatology Navigation */}
                    <div className="flex justify-center items-center mt-6 sm:mt-8 space-x-2 sm:space-x-4">
                        <button
                            onClick={prevDermatologySlide}
                            className="p-2 sm:p-3 rounded-full bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
                        >
                            <FaChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                        <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-700">
                            {currentDermatologyIndex + 1} / {dermatologyTransformations.length}
                        </span>
                        <button
                            onClick={nextDermatologySlide}
                            className="p-2 sm:p-3 rounded-full bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
                        >
                            <FaChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransformationsSection;