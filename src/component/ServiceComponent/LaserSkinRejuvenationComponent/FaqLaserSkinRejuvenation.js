import React, { useState } from 'react';

const FaqLaserSkinRejuvenation = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What is Rhinoplasty?",
            answer: "Rhinoplasty is a surgical procedure that reshapes the nose to improve its appearance and function. It can address nasal shape, size, breathing issues, and facial proportion. The procedure can be performed for cosmetic reasons, medical reasons, or both."
        },
        {
            question: "How long does the surgery take?",
            answer: "A typical rhinoplasty procedure takes approximately 2-4 hours, depending on the complexity of the case and the specific techniques used. The surgery is performed under general anesthesia for your comfort and safety."
        },
        {
            question: "Is Rhinoplasty painful?",
            answer: "Most patients experience minimal pain after rhinoplasty due to modern surgical techniques and pain management. We provide appropriate pain medication and care instructions to ensure your comfort during recovery."
        },
        {
            question: "How long is the recovery period?",
            answer: "Initial recovery takes about 1-2 weeks, with most patients returning to work within 10-14 days. Full healing and final results can take 6-12 months as swelling gradually subsides and tissues settle."
        },
        {
            question: "When will I see results?",
            answer: "Initial results are visible once the splint is removed (about 1 week), but the final shape continues to refine over several months. Most patients see significant improvement within 3-6 months."
        },
        {
            question: "What is the downtime?",
            answer: "There is moderate downtime with rhinoplasty. You'll need to avoid strenuous activities for 2-3 weeks and protect your nose from injury. Most patients can resume normal activities within 2-4 weeks."
        },
        {
            question: "Who is a good candidate for rhinoplasty?",
            answer: "Ideal candidates are those with nasal concerns affecting appearance or breathing, who are in good health and have realistic expectations. A consultation with Dr. Kesari will determine if this procedure is right for you."
        },
        {
            question: "Are there any risks or complications?",
            answer: "As with any surgery, there are potential risks including bleeding, infection, and anesthesia complications. However, serious complications are rare when performed by experienced professionals like Dr. Kesari."
        },
        {
            question: "How long do results last?",
            answer: "Rhinoplasty results are permanent. The new nasal shape will last a lifetime, though natural aging may cause subtle changes over time. Proper care and avoiding trauma helps maintain results."
        },
        {
            question: "Can rhinoplasty improve breathing?",
            answer: "Yes, rhinoplasty can significantly improve breathing by correcting structural issues like deviated septum, enlarged turbinates, or nasal valve collapse. Many patients experience both aesthetic and functional improvements."
        }
    ];

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="container mx-auto py-16 px-4">
            {/* Section Title */}
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-custom-blue mb-4">
                    Frequently Asked Questions
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Get answers to common questions about Rhinoplasty procedures
                    and what you can expect from your experience at Nypunya Aesthetic Clinic.
                </p>
                <div className="w-20 h-1 bg-custom-green mx-auto mt-4"></div>
            </div>

            {/* FAQ Accordion */}
            <div className="max-w-4xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                        <button
                            className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
                            onClick={() => toggleFaq(index)}
                        >
                            <span className="text-lg font-semibold text-gray-800 pr-4">
                                {faq.question}
                            </span>
                            <svg
                                className={`w-6 h-6 text-custom-blue transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''
                                    }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                        >
                            <div className="px-6 pb-4 bg-gray-50">
                                <p className="text-gray-700 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Additional Information */}
            <div className="text-center mt-12">
                <p className="text-lg text-gray-600 mb-6">
                    Still have questions? Our team is here to help!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-custom-blue hover:bg-custom-blue/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                        Schedule Consultation
                    </button>
                    <button className="border-2 border-custom-blue text-custom-blue hover:bg-custom-blue hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FaqLaserSkinRejuvenation;
