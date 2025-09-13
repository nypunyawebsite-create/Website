import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaWhatsapp, FaPhone } from 'react-icons/fa';

const ClinicBanner = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [surgeriesCount, setSurgeriesCount] = useState(0);
    const [transformationsCount, setTransformationsCount] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Animate surgeries count to 15000
                    animateCount(setSurgeriesCount, 15000, 2000);
                    // Animate transformations count to 100000
                    animateCount(setTransformationsCount, 100000, 2500);
                }
            },
            { threshold: 0.3 }
        );

        const element = document.getElementById('stats-overlay');
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    const animateCount = (setCount, target, duration) => {
        let startTime = null;
        const startCount = 0;

        const animate = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(startCount + (target - startCount) * easeOutQuart);

            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    };

    const formatNumber = (num) => {
        if (num >= 1000) {
            return (num / 1000).toFixed(0) + 'K+';
        }
        return num.toLocaleString() + '+';
    };

    return (
        <div className="w-full" style={{ backgroundColor: '#E0F2F7' }}>
            <div className="w-full">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    {/* Left Section - Text and Buttons */}
                    <div className="flex-1 lg:w-2/3 py-16 px-4 md:px-8 lg:px-16">
                        {/* Main Heading */}
                        <h2 className="text-3xl font-bold text-black mb-6 leading-tight">
                            Why is Nypunya Aesthetic Clinic the best Centre for Cosmetic plastic surgery & Dermatology in Bangalore?
                        </h2>

                        {/* Sub-heading */}
                        <p className="text-lg md:text-xl text-blue-800 mb-8 leading-relaxed">
                            Nypunya Aesthetic Clinic is the best clinic for Aesthetic Plastic surgery & Dermatology in Bangalore because of the following reasons
                        </p>



                        {/* Reasons Section */}
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                                <p className="text-lg text-black font-semibold">
                                    <strong>EXPERT</strong> doctors with <strong>EXTENSIVE EXPERIENCE</strong> & <strong>ETHICAL PRACTICE</strong>
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                                <p className="text-lg text-black font-semibold">
                                    The entire spectrum of <strong>WORLD CLASS Aesthetic Medicine Surgery</strong> services under <strong>ONE ROOF!</strong>
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                                <p className="text-lg text-black font-semibold">
                                    <strong>PIONEERS</strong> in advanced Aesthetic Medicine, Cosmetic surgery & Lasers
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                                <p className="text-lg text-black font-semibold">
                                    <strong>TWO DECADES</strong> of dedicated patient <strong>CARE</strong> and <strong>SERVICE</strong>
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                                <p className="text-lg text-black font-semibold">
                                    <strong>TRUSTED</strong> by lakhs of patients & thousands of Doctors referring not only patients, but their near and dear ones for <strong>AESTHETIC TRANSFORMATIONS!</strong>
                                </p>
                            </div>
                        </div>


                        {/* Call-to-Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-8 mt-8">
                            {/* Book Consultation Button */}
                            <button className="flex items-center justify-center gap-3 bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                                <FaCalendarAlt className="text-xl" />
                                Book Consultation
                            </button>

                            {/* WhatsApp Button */}
                            <a
                                href="https://wa.me/+918050111908"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-green-500 border-2 border-white-300 hover:border-green-500 px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                                style={{ borderColor: '#FFF' }}
                            >
                                <FaWhatsapp className="text-xl" />
                                Chat with us
                            </a>

                            {/* Call Now Button */}
                            <a
                                href="tel:+919738545945"
                                className="flex items-center justify-center gap-3 bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                <FaPhone className="text-xl" />
                                Call Now
                            </a>
                        </div>
                    </div>

                    {/* Right Section - Image with Overlay */}
                    <div className="flex-1 lg:w-1/3 relative">
                        {/* Main Image */}
                        <div className="relative">
                            <img
                                src="/home/hero_image.png"
                                alt="Professional cosmetic treatment in progress"
                                className="w-full h-auto object-contain"
                            />

                            {/* Overlay Statistics Box */}
                            <div id="stats-overlay" className="absolute bottom-4 right-4 bg-white rounded-lg p-4 shadow-xl max-w-xs">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-green-500 mb-1 transition-all duration-500 transform hover:scale-105">
                                        {formatNumber(surgeriesCount)}
                                    </div>
                                    <div className="text-xs font-semibold text-black leading-tight mb-2">
                                        Successful Surgeries
                                    </div>
                                    <div className="text-3xl font-bold text-green-500 mb-1 transition-all duration-500 transform hover:scale-105">
                                        {formatNumber(transformationsCount)}
                                    </div>
                                    <div className="text-xs font-semibold text-black leading-tight">
                                        Transformations
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClinicBanner;
