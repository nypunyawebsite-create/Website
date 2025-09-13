import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQsSection = () => {
    const [openFAQ, setOpenFAQ] = useState(null);

    const faqs = [
        {
            question: "Is cosmetic surgery safe?",
            answer: "Yes, cosmetic surgery is safe when performed by qualified, board-certified plastic surgeons in accredited facilities. At Nypunya Aesthetics, we follow international safety standards, use advanced technology, and provide comprehensive pre and post-operative care to ensure optimal safety and results."
        },
        {
            question: "How long is recovery after plastic surgery?",
            answer: "Recovery time varies depending on the procedure. Minor procedures like Botox require no downtime, while surgical procedures like tummy tuck or breast augmentation may require 2-6 weeks for full recovery. We provide detailed recovery guidelines and support throughout your healing journey."
        },
        {
            question: "Do non-surgical treatments like Botox and Fillers last long?",
            answer: "Botox typically lasts 3-6 months, while dermal fillers can last 6-18 months depending on the type and area treated. Results vary based on individual factors like metabolism, lifestyle, and treatment area. We provide personalized treatment plans to maintain optimal results."
        },
        {
            question: "How much does cosmetic surgery cost in Bangalore?",
            answer: "Cosmetic surgery costs vary based on the procedure, complexity, and individual needs. We offer competitive pricing with transparent cost breakdowns. During your consultation, we provide detailed estimates including surgery, anesthesia, facility, and aftercare costs. Financing options are available."
        },
        {
            question: "What makes Nypunya Aesthetics different from other clinics?",
            answer: "Our combination of board-certified surgeons, international safety standards, advanced technology, personalized care, and proven track record of 15000+ successful procedures sets us apart. We focus on natural-looking results and comprehensive patient care from consultation to recovery."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <div className="w-full py-16 px-4 md:px-8 lg:px-16 bg-white">
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 title-section">
                        FAQs - Quick Answers for Patients
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Get answers to the most common questions about <strong>Cosmetic Surgery Cost in Bangalore</strong>, recovery times, and what to expect from your treatment journey.
                    </p>
                </div>

                {/* FAQs List */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
                            >
                                <h3 className="text-lg md:text-xl font-bold text-black pr-4">
                                    {faq.question}
                                </h3>
                                <div className="flex-shrink-0">
                                    {openFAQ === index ? (
                                        <FaMinus className="text-blue-600 text-xl" />
                                    ) : (
                                        <FaPlus className="text-blue-600 text-xl" />
                                    )}
                                </div>
                            </button>

                            {openFAQ === index && (
                                <div className="px-6 pb-4 bg-gray-50">
                                    <p className="text-lg text-gray-700 leading-relaxed pt-2">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12">
                    <p className="text-lg text-gray-700 mb-6">
                        Have more questions? <a href="/contact-us" className="text-blue-600 hover:text-blue-800 font-semibold underline">Contact us</a> for a personalized consultation.
                    </p>

                    {/* Additional CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact-us"
                            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300"
                        >
                            Schedule Consultation
                        </a>
                        <a
                            href="tel:+919738545945"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 hover:border-blue-700 font-semibold rounded-lg transition-colors duration-300"
                        >
                            Call Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQsSection;
