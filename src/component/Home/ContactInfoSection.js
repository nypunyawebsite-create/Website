import React from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { GoMail, GoDeviceMobile, GoClock, GoLocation } from 'react-icons/go'
import { IoTimeOutline } from "react-icons/io5";

const ContactInfoSection = () => {
    return (
        <div className="bg-[#000099] text-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                
                {/* Main Grid: 2 columns on desktop, stacked on mobile */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                    
                    {/* Left Section: GET IN TOUCH - Takes 8 columns on desktop */}
                    <div className="lg:col-span-8 space-y-6 flex flex-col">
                        
                        {/* Section Header */}
                        <div className="space-y-3">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                                GET IN TOUCH
                            </h2>
                            <div className="w-20 h-1 bg-custom-green"></div>
                            <p className="text-gray-200 text-base sm:text-lg leading-relaxed mt-4">
                                Ready to start your aesthetic journey? Contact us today for a personalized consultation.
                            </p>
                        </div>
                        
                        {/* Contact Cards Grid */}
                        <div className="grid gap-6 md:grid-cols-2 pt-4 flex-grow">
                            
                            {/* Contact Us Card */}
                            <div className="bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 p-6 rounded-xl shadow-lg border border-white/10">
                                <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-3 mb-4 text-white">
                                    <MdEmail className="text-custom-green text-3xl" /> 
                                    Contact Us
                                </h3>
                                
                                {/* Email */}
                                <div className="flex items-start gap-3 mb-4 pb-4 border-b border-white/20">
                                    <GoMail className="text-custom-green text-xl mt-1 flex-shrink-0" />
                                    <a 
                                        href="mailto:clinic.nypunyaaesthetic@gmail.com" 
                                        className="text-gray-200 hover:text-custom-green transition-colors text-sm sm:text-base break-all"
                                    >
                                        clinic.nypunyaaesthetic@gmail.com
                                    </a>
                                </div>
                                
                                {/* Phone Numbers */}
                                <div className="flex items-start gap-3">
                                    <GoDeviceMobile className="text-custom-green text-xl mt-1 flex-shrink-0" />
                                    <div className="space-y-2 text-sm sm:text-base">
                                        <div>
                                            <a 
                                                href="tel:+919380902115" 
                                                className="text-gray-200 hover:text-custom-green transition-colors"
                                            >
                                                +91 9380902115
                                            </a>
                                            <span className="text-gray-400 text-xs ml-2">(Plastic Surgery)</span>
                                        </div>
                                        <div>
                                            <a 
                                                href="tel:+919380902114" 
                                                className="text-gray-200 hover:text-custom-green transition-colors"
                                            >
                                                +91 9380902114
                                            </a>
                                            <span className="text-gray-400 text-xs ml-2">(Dermatology)</span>
                                        </div>
                                        <div>
                                            <a 
                                                href="tel:+919380902110" 
                                                className="text-gray-200 hover:text-custom-green transition-colors"
                                            >
                                                +91 9380902110
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Visit Us Card */}
                            <div className="bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 p-6 rounded-xl shadow-lg border border-white/10">
                                <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-3 mb-4 text-white">
                                    <MdLocationOn className="text-custom-green text-3xl" /> 
                                    Visit Us
                                </h3>
                                <div className="flex items-start gap-3">
                                    <GoLocation className="text-custom-green text-xl mt-1 flex-shrink-0" />
                                    <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                                        #3, 1st Cross Off 24th Main, 2nd Phase, J. P. Nagar, Bengaluru
                                    </p>
                                </div>
                                
                                {/* Google Maps Link */}
                                <a 
                                    href="https://maps.google.com/?q=Nypunya+Aesthetic+Clinic+JP+Nagar" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-flex items-center gap-2 text-custom-green hover:text-green-300 transition-colors text-sm font-semibold"
                                >
                                    <span>Get Directions</span>
                                    <span>→</span>
                                </a>
                            </div>
                            
                        </div>
                    </div>

                    {/* Right Section: OPENING HOURS - Takes 4 columns on desktop */}
                    <div className="lg:col-span-4">
                        <div className="bg-custom-green text-black p-8 rounded-2xl shadow-2xl h-full">
                            
                            {/* Opening Hours Header */}
                            <div className="mb-6">
                                <h3 className="text-2xl sm:text-3xl font-bold flex items-center gap-3 mb-2">
                                    <IoTimeOutline className="text-3xl sm:text-4xl" /> 
                                    OPENING HOURS
                                </h3>
                                <div className="w-16 h-1 bg-black/30"></div>
                            </div>
                            
                            {/* Hours List */}
                            <div className="space-y-0">
                                {[
                                    { day: "Week Days", time: "9:00 AM - 8:00 PM" },
                                    { day: "Saturday", time: "9:00 AM - 8:00 PM" },
                                    { day: "Sunday", time: "Holiday" },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="py-5 border-b border-black/20 last:border-b-0 flex justify-between items-center"
                                    >
                                        <p className="font-semibold text-base sm:text-lg">{item.day}</p>
                                        <p className="text-gray-800 font-medium text-sm sm:text-base">{item.time}</p>
                                    </div>
                                ))}
                            </div>
                            
                            {/* Emergency Note */}
                            <div className="mt-6 pt-6 border-t border-black/20">
                                <p className="text-sm text-gray-800 text-center italic">
                                    Emergency cases are handled 24/7
                                </p>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ContactInfoSection;
