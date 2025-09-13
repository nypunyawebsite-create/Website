import React from 'react';
import { FaCheck } from 'react-icons/fa';

const WhyChooseNypunya = () => {
    const features = [
        {
            title: "Experienced Cosmetic & Plastic Surgeons",
            description: "Board-certified surgeons with extensive training and years of specialized experience in aesthetic procedures."
        },
        {
            title: "International Standards & Advanced Technology",
            description: "State-of-the-art facilities equipped with the latest medical technology and adhering to global safety standards."
        },
        {
            title: "15000+ Successful Surgeries & 100000+ Transformations",
            description: "Proven track record with thousands of satisfied patients and successful aesthetic transformations."
        },
        {
            title: "Personalized Care & Privacy",
            description: "Customized treatment plans with complete privacy and confidentiality throughout your aesthetic journey."
        },
        {
            title: "Trusted by Patients Across Bangalore",
            description: "Established reputation as the leading cosmetic clinic with patients traveling from across the city for our expertise."
        },
        {
            title: "One stop solutions for all your aesthetic needs",
            description: "Only the best of the services which are needed for you will be provided ethically with excellent results."
        }
    ];

    return (
        <div className="w-full py-16 px-4 md:px-8 lg:px-16" style={{ backgroundColor: '#E0F2F7' }}>
            <div className="max-w-full mx-auto text-center">
                {/* Header Section */}
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 title-section">
                    Why Choose Nypunya Aesthetics?
                </h2>

                <p className="text-lg text-black mb-12 max-w-4xl mx-auto leading-relaxed">
                    As the <strong>Top Cosmetic Clinic in Bangalore</strong>, we provide <strong>Safe Plastic Surgery</strong> with unmatched expertise and patient care.
                </p>

                {/* Feature Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                        <FaCheck className="text-white text-sm" />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-black mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyChooseNypunya;
