import React, { useState, useEffect } from "react";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi"; // Importing icons
import { doctors } from "../../utils/aboutUsDatas"; // Importing data
import { useNavigate } from 'react-router-dom'; // Add this import

const MeetOurMedicalExperts = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate(); // Add this hook

    // Log doctors data to ensure it's being imported correctly
    console.log(doctors);

    // Auto-slide functionality (this is now called unconditionally)
    useEffect(() => {
        // Only start the interval if the doctors data is available
        if (Array.isArray(doctors) && doctors.length > 0) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex === doctors.length - 1 ? 0 : prevIndex + 1));
            }, 5000); // Change slide every 5 seconds

            // Clean up the interval when the component is unmounted or the slide changes
            return () => clearInterval(interval);
        }
    }, []); // Empty dependency array means it runs only once after the first render

    // Ensure doctors data is available and is an array
    if (!Array.isArray(doctors) || doctors.length === 0) {
        return <p>Loading doctors...</p>; // Return a loading message if doctors data is unavailable
    }

    // Function to go to the previous doctor
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? doctors.length - 1 : prevIndex - 1));
    };

    // Function to go to the next doctor
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === doctors.length - 1 ? 0 : prevIndex + 1));
    };

    // Get current doctor
    const doctor = doctors[currentIndex];

    return (
        <div className="w-full relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #000099 0%, #0d1b5e 100%)' }}>
            <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16">

                {/* Section Title */}
                <div className="text-center mb-10 md:mb-14">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Meet Our Medical Experts</h2>
                    <div className="w-24 h-1 bg-custom-green mx-auto"></div>
                </div>

                {/* Slider Content */}
                <div className="relative max-w-6xl mx-auto">
                    
                    {/* Navigation Arrows - Improved Design */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-12 z-20 bg-white hover:bg-custom-green text-custom-blue rounded-full p-3 md:p-4 shadow-xl transition-all duration-300 hover:scale-110 group"
                        aria-label="Previous doctor"
                    >
                        <FiArrowLeftCircle size={28} className="group-hover:scale-110 transition-transform" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-12 z-20 bg-white hover:bg-custom-green text-custom-blue rounded-full p-3 md:p-4 shadow-xl transition-all duration-300 hover:scale-110 group"
                        aria-label="Next doctor"
                    >
                        <FiArrowRightCircle size={28} className="group-hover:scale-110 transition-transform" />
                    </button>

                    {/* Doctor Slide */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 lg:p-12 shadow-2xl">

                        {/* Left: Text Content */}
                        <div className="text-white order-2 lg:order-1 space-y-6">
                            <div>
                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-white">
                                    {doctor.name}
                                </h3>
                                <p className="text-base md:text-lg text-custom-green font-semibold">
                                    {doctor.qualifications}
                                </p>
                            </div>

                            <p className="text-base md:text-lg leading-relaxed text-gray-100">
                                {doctor.description}
                            </p>

                            {/* Achievements with enhanced styling */}
                            <div className="space-y-3">
                                {doctor.achievements.map((achievement, idx) => (
                                    <div key={idx} className="flex items-start gap-3 bg-white/10 rounded-lg p-3 hover:bg-white/20 transition-colors duration-300">
                                        <span className="text-custom-green text-xl flex-shrink-0 mt-0.5">✓</span>
                                        <span className="text-base md:text-lg">{achievement}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Enhanced Button */}
                            <button
                                className="mt-6 bg-custom-green hover:bg-green-400 text-custom-blue font-bold px-8 py-3 md:px-10 md:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-base md:text-lg"
                                onClick={() => navigate('/our-doctors')}
                            >
                                View Full Profile →
                            </button>

                            {/* Slide Indicators */}
                            <div className="flex gap-2 mt-6">
                                {doctors.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentIndex(idx)}
                                        className={`h-2 rounded-full transition-all duration-300 ${
                                            idx === currentIndex ? 'w-8 bg-custom-green' : 'w-2 bg-gray-400'
                                        }`}
                                        aria-label={`Go to doctor ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Right: Image with enhanced styling */}
                        <div className="order-1 lg:order-2 flex justify-center">
                            <div className="relative group">
                                {/* Background accent */}
                                <div className="absolute -inset-4 bg-custom-green opacity-20 rounded-3xl blur-xl group-hover:opacity-30 transition-opacity duration-300"></div>
                                
                                {/* Doctor Image */}
                                <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
                                    <img
                                        src={doctor.image}
                                        alt={doctor.name}
                                        className="relative w-full max-w-sm h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default MeetOurMedicalExperts;
