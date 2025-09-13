import React from 'react';
import { FaShieldAlt, FaBriefcaseMedical, FaHeart } from 'react-icons/fa';

const AboutNypunyaSection = () => {
    return (
        <div className="w-full py-16 px-4 md:px-8 lg:px-16 bg-white">
            <div className="max-w-6xl mx-auto text-center">
                {/* Section Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 title-section">
                    About Nypunya Aesthetics
                </h2>

                {/* Introductory Paragraphs */}
                <div className="max-w-6xl mx-auto mb-12">
                    <h3 className="text-2xl font-bold text-black mb-8">Nypunya means "Expertise"</h3>

                    {/* Bullet Points Section */}
                    <div className="bg-blue-50 rounded-lg p-6 mb-8 border border-blue-100">
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                                <p className="text-lg text-black leading-relaxed">
                                    Best of the dermatology and cosmetic plastic surgery services are available.
                                </p>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                                <p className="text-lg text-black leading-relaxed">
                                    You are the center of all our efforts here, we customize the services to give only the best for you.
                                </p>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                                <p className="text-lg text-black leading-relaxed">
                                    Doctors, who have earned a reputation by ethical & excellent medical practice over a decade.
                                </p>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                                <p className="text-lg text-black leading-relaxed">
                                    Staff at Nypunya are handpicked because of their ability to empathize and are being groomed in soft skills.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <p className="text-lg text-black mb-6 leading-relaxed">
                        At Nypunya Aesthetics, we are the <strong>Best Cosmetic Clinic in Bangalore</strong>, dedicated to providing <strong>Advanced Plastic Surgery and Safe & Trusted Aesthetic Treatments</strong>. Our clinic combines years of expertise with cutting-edge technology to deliver transformative results that enhance your natural beauty and boost your confidence.
                    </p>
                    <p className="text-lg text-black leading-relaxed">
                        We believe in a holistic approach to aesthetic medicine, where every patient receives personalized attention and care tailored to their unique needs and goals. Our commitment to excellence and patient safety has made us a trusted name in cosmetic and plastic surgery across Bangalore.
                    </p>
                </div>

                {/* Three Feature Blocks */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {/* Advanced Technology */}
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#B2EBF2' }}>
                            <FaShieldAlt className="text-3xl text-blue-800" />
                        </div>
                        <h3 className="text-xl font-bold text-black mb-3">Advanced Technology</h3>
                        <p className="text-black text-center leading-relaxed">
                            State-of-the-art equipment and cutting-edge techniques for optimal results
                        </p>
                    </div>

                    {/* Safety First */}
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#B2EBF2' }}>
                            <FaBriefcaseMedical className="text-3xl text-blue-800" />
                        </div>
                        <h3 className="text-xl font-bold text-black mb-3">Safety First</h3>
                        <p className="text-black text-center leading-relaxed">
                            International safety standards with comprehensive pre and post-operative care
                        </p>
                    </div>

                    {/* Personalized Care */}
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#B2EBF2' }}>
                            <FaHeart className="text-3xl text-blue-800" />
                        </div>
                        <h3 className="text-xl font-bold text-black mb-3">Personalized Care</h3>
                        <p className="text-black text-center leading-relaxed">
                            Customized treatment plans designed specifically for your unique needs
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutNypunyaSection;
