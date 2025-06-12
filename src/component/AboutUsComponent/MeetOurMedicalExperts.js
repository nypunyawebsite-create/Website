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
        <div className="w-full bg-blue-900 text-white py-10 px-4 relative">

            <h2 className="text-center text-2xl font-bold mb-6">MEET OUR MEDICAL EXPERTS</h2>

            {/* This part will render the doctor data */}
            <div className="flex flex-col md:flex-row items-center justify-center md:px-10">

                <div className="md:w-1/2 p-6">
                    <h1 className="text-3xl font-bold mt-2">{doctor.name}</h1>
                    <p className="text-sm text-gray-200 mt-2">{doctor.qualifications}</p>
                    <p className="text-md text-gray-300 mt-4">{doctor.description}</p>
                    <ul className="mt-4">
                        {doctor.achievements.map((award, i) => (
                            <li key={i} className="flex items-center gap-2">✅ {award}</li>
                        ))}
                    </ul>
                    <button
                        className="mt-4 bg-green-400 text-black px-4 py-2 rounded-lg"
                        onClick={() => navigate('/our-doctors')}
                    >
                        Check Out Doctor
                    </button>
                </div>

                <div className="md:w-1/2 flex justify-center">
                    <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="max-w-xs md:max-w-md transition-all duration-500 ease-in-out"
                    />
                </div>
            </div>

            {/* Navigation buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
            >
                <FiArrowLeftCircle />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
            >
                <FiArrowRightCircle />
            </button>



        </div>
    );
};

export default MeetOurMedicalExperts;
