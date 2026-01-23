import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const OurMedicalExpertDrSubha = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            title: "Only the Best For YOU",
            content: [
                {
                    title: "You are the centre of her clinical practice:",
                    text: "Dr. Subha places YOU at the center of her clinical practice, tailoring treatments to your unique needs and expectations."
                },
                {
                    title: "Personalised Treatment:",
                    text: "She customises each treatment plan to ensure the best possible outcomes for every individual."
                },
                {
                    title: "Informed Decision-Making:",
                    text: "She values well-informed patients, believing that knowledge empowers better healthcare choices."
                },
                {
                    title: "Collaborative Success:",
                    text: "A strong understanding between patient and doctor leads to results both can be proud of."
                }
            ],
            image: "/home/our_doctors/subha/1.PNG"
        },
        {
            id: 2,
            title: "Know your Doctor",
            doctorName: "Dr. Shubha Kesari",
            specialization: "Sr. Dermatologist and Cosmetic Dermatologist",
            experience: "12+ Years Experience",
            qualifications: "M.B.B.S, M.D(MUMBAI) D.M.L.E, D.N.B.",
            procedures: [
                "Fillers and Botox",
                "Acne and Acne Scars",
                "Laser Hair Removal",
                "Laser Tattoo Removal",
                "PRP (Platelet Rich Plasma)",
                "Dark Circles and Under Eye Bags"
            ],
            description: "Expert Dermatologist specializing in aesthetic dermatology, anti aging treatments, and advanced laser procedures.",
            image: "/home/our_doctors/subha/2.PNG"
        },
        {
            id: 3,
            title: "Only the Best For YOU",
            content: [
                {
                    title: "Advanced Training:",
                    text: "Dr. Shubha Kesari has undergone extensive training in cosmetic dermatology procedures, including LASERS, BOTOX, FILLERS, and PEEL, under renowned plastic surgeons and cosmetic dermatologists."
                },
                {
                    title: "Academic Excellence:",
                    text: "She has a distinguished academic background with outstanding achievements."
                },
                {
                    title: "Award Recognition:",
                    text: "She has won multiple awards at state and national conferences."
                },
                {
                    title: "Professional Expertise:",
                    text: "Her expertise and dedication make her a sought-after professional in the field of cosmetic dermatology."
                }
            ],
            bestAttributes: [
                "BEST RECORDS",
                "BEST RESULTS",
                "BEST TRAINING",
                "BEST FACILITY",
                "BEST TEAM",
                "BEST PATIENTS",
                "BEST INTENTIONS"
            ],
            image: "/home/our_doctors/subha/3.PNG"
        },
        {
            id: 4,
            title: "DR. SHUBHA M KESARI",
            qualifications: "DERMATOLOGIST AND COSMETIC DERMATOLOGIST | M.B.B.S, M.D(MUMBAI) D.M.L.E, D.N.B.",
            certificates: [
                "RAJIV GANDHI UNIVERSITY OF HEALTH SCIENCES KARNATAKA - MBBS",
                "National Board of Examinations New Delhi - DNB Dermatology & Venereology"
            ],
            sectionTitle: "Trained in the BEST Places",
            description: "Dr. Shubha M Kesari is a very well qualified and experienced Dermatologist with special interest in Cosmetic Dermatology. She has completed her M.D Dermatology from LTM Medical College, & Hospital Sion Mumbai securing the  Gold Medal  for Maharashtra University of Health Sciences.",
            image: "/home/our_doctors/subha/4.PNG"
        },
        {
            id: 5,
            title: "Dr. Shubha Kesari",
            description: "**Dr. Shubha Kesari** has publications in indexed **national and international journals** and has also co-authored a chapter in a text book. She believes in keeping abreast with the **latest advances** in her field and constantly **updates** herself.",
            image: "/home/our_doctors/subha/5.PNG"
        },
        {
            id: 6,
            title: "Dr. Shubha Kesari",
            content: [
                {
                    title: "Media Recognition:",
                    text: "Dr. Shubha Kesari has participated as a **skincare expert** in various television programs."
                },
                {
                    title: "Academic Leadership:",
                    text: "She has served as a **faculty member** in dermatology conferences."
                },
                {
                    title: "Patient-Centered Care:",
                    text: "She follows a **patient-centric approach**, prioritising **patient care** above all."
                },
                {
                    title: "Proven Results:",
                    text: "Her ability to tailor treatments by balancing **patient needs** and her expertise has earned her appreciation from **thousands of patients**."
                }
            ],
            image: "/home/our_doctors/subha/6.PNG"
        },
        {
            id: 7,
            title: "20 Years of Experience",
            subtitle: "With 20 years of experience, Dr. Shubha brings unparalleled expertise and dedication to patient care.",
            features: [
                {
                    title: "Laser Hair Removal",
                    description: "Drop the Razor-Go for Laser!"
                },
                {
                    title: "Fillers & Botox",
                    description: "Aging is a Fact, Looking your Age is not!"
                },
                {
                    title: "Pigmentation Dark Circle",
                    description: "Heal your Skin, Do not Conceal"
                }
            ]
        },
        {
            id: 8,
            title: "15000+ HAPPY SURGERIES",
            subtitle: "With over 15,000 successful surgeries, Dr. Kesari has transformed countless lives with expertise and care.",
            testimonials: [
                {
                    stars: 5,
                    time: "5 months ago",
                    text: "I'm thrilled to share my life-changing experience with Dr. Prashanth Kesari! After following his work for a while, I hesitated to approach him due to fears about surgery. However, Dr. Kesari exceeded my expectations in every way. His confidence and assurance put me at ease, promising results that align with my desires. The outcome surpassed my dreams! His exceptional skill and expertise are truly remarkable. The staff's professionalism, warmth, and hospitality made my journey seamless. Dr. Kesari's dedication to enhancing one's natural beauty is a gift. I wholeheartedly recommend Dr. Kesari to anyone seeking transformative change.",
                    reviewer: "Anonymous",
                    reviews: "Local Guide"
                },
                {
                    stars: 5,
                    time: "a month ago",
                    text: "I had a fantastic experience here. The staffs are very friendly. Good treatment",
                    reviewer: "Anonymous",
                    reviews: "Local Guide"
                },
                {
                    stars: 5,
                    time: "8 months ago",
                    text: "I'm thrilled with my facelift results from Nypunya Aesthetic Clinic! Dr. Prashanth Kesari and the team exceeded my expectations. Professional, caring, and meticulous. We visited Dr Prashant Kesari for our 4 year old daughter's Hairy Nevus (birth mark) removal. The doctor was kind and patient enough to answer all our queries and concerns with utmost details. This boosted our confidence.",
                    reviewer: "Pradeep B.H",
                    reviews: "6 reviews 3 photos"
                },
                {
                    stars: 5,
                    time: "3 months ago",
                    text: "Had a hereditary knot on my forehead, Dr. Prashanth did an amazing job without any scar.... Really appreciate the care.",
                    reviewer: "Deepak Gowda",
                    reviews: "Local Guide 15 reviews 2 photos"
                },
                {
                    stars: 5,
                    time: "7 months ago",
                    text: "I've had a deviated septum and a crooked nose. Dr. Prashanth Kesari performed an excellent rhinoplasty procedure. The results are amazing and natural-looking.",
                    reviewer: "Rahul R",
                    reviews: "2 reviews"
                },
                {
                    stars: 5,
                    time: "6 months ago",
                    text: "Excellent service and care. Dr. Kesari is very professional and the staff is very supportive throughout the treatment process.",
                    reviewer: "Vasudha Udupa",
                    reviews: "6 reviews 1 photo"
                }
            ]
        },
        {
            id: 9,
            image: "/home/our_doctors/subha/9.PNG"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    // Auto-slider functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // 5 seconds

        return () => clearInterval(interval);
    }, [slides.length]);

    const currentSlideData = slides[currentSlide];

    return (
        <div className="w-full py-16 px-4 md:px-8 lg:px-16 bg-white" style={{ backgroundColor: '#f6f6f6' }}>
            <div className="max-w-7xl mx-auto">
                <div className="relative">
                    {/* Navigation Arrows - Better positioned */}
                    <button
                        onClick={prevSlide}
                        className="absolute -left-16 top-1/2 transform -translate-y-1/2 z-20 bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 p-4 rounded-full shadow-xl border border-gray-200 transition-all duration-300 hover:shadow-2xl"
                    >
                        <FaChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute -right-16 top-1/2 transform -translate-y-1/2 z-20 bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 p-4 rounded-full shadow-xl border border-gray-200 transition-all duration-300 hover:shadow-2xl"
                    >
                        <FaChevronRight className="w-5 h-5" />
                    </button>

                    {/* Fixed height container to prevent shaking */}
                    <div className="rounded-xl overflow-hidden shadow-lg h-[600px] md:h-[700px] lg:h-[800px]" >
                        {currentSlide === 3 ? (
                            // Fourth slide - Image top, Content bottom
                            <div className="flex flex-col h-full">
                                {/* Image Section - Top */}
                                <div className="relative h-[200px] md:h-[250px] lg:h-[300px]">
                                    <img
                                        src={currentSlideData.image}
                                        alt="Dr. Prashantha Kesari Certificates"
                                        loading="lazy"
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Content Section - Bottom */}
                                <div className="p-8 bg-white flex-1 overflow-y-auto">
                                    <div className="space-y-6">
                                        {/* Doctor Name */}
                                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4" style={{ color: '#FF6B35', fontFamily: 'Arial, sans-serif' }}>
                                            {currentSlideData.title}
                                        </h2>

                                        {/* Qualifications */}
                                        <p className="text-lg text-center mb-6" style={{ fontFamily: 'Arial, sans-serif' }}>
                                            {currentSlideData.qualifications}
                                        </p>

                                        {/* Certificates Grid */}
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                            {currentSlideData.certificates.map((certificate, index) => (
                                                <div key={index} className="p-3 bg-gray-50 border border-orange-200 rounded-lg text-center">
                                                    <p className="text-sm text-gray-700" style={{ fontFamily: 'Arial, sans-serif' }}>
                                                        {certificate}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Section Title */}
                                        <h3 className="text-2xl font-bold text-center mb-4" style={{ color: '#FF6B35', fontFamily: 'Arial, sans-serif' }}>
                                            {currentSlideData.sectionTitle}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-lg text-gray-800 leading-relaxed" style={{ fontFamily: 'Arial, sans-serif' }}>
                                            {currentSlideData.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ) : currentSlide === 6 ? (
                            // Seventh slide - No image, centered content with feature cards
                            <div className="flex flex-col justify-center items-center h-full p-8">
                                <div className="text-center space-y-8 max-w-6xl">
                                    {/* Main Title */}
                                    <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#FF6B35', fontFamily: 'Arial, sans-serif' }}>
                                        {currentSlideData.title}
                                    </h2>

                                    {/* Subtitle */}
                                    <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto" style={{ fontFamily: 'Arial, sans-serif' }}>
                                        {currentSlideData.subtitle.split('Dr. Kesari').map((part, index) =>
                                            index === 1 ? (
                                                <span key={index}><strong>Dr. Kesari</strong>{part}</span>
                                            ) : (
                                                <span key={index}>{part}</span>
                                            )
                                        )}
                                    </p>

                                    {/* Feature Cards */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                                        {currentSlideData.features.map((feature, index) => (
                                            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                                <h3 className="text-xl font-bold mb-3 text-gray-800" style={{ fontFamily: 'Arial, sans-serif' }}>
                                                    {feature.title}
                                                </h3>
                                                <p className="text-gray-600" style={{ fontFamily: 'Arial, sans-serif' }}>
                                                    {feature.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : currentSlide === 7 ? (
                            // Eighth slide - Dark blue background with testimonials
                            <div className="h-full p-8" style={{ backgroundColor: '#1e3a8a' }}>
                                <div className="h-full flex flex-col">
                                    {/* Top Section - Title and Subtitle */}
                                    <div className="text-center mb-8">
                                        <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#FF6B35', fontFamily: 'Arial, sans-serif' }}>
                                            {currentSlideData.title}
                                        </h2>
                                        <p className="text-lg md:text-xl text-white max-w-4xl mx-auto" style={{ fontFamily: 'Arial, sans-serif' }}>
                                            {currentSlideData.subtitle.split('Dr. Kesari').map((part, index) =>
                                                index === 1 ? (
                                                    <span key={index}><strong>Dr. Kesari</strong>{part}</span>
                                                ) : (
                                                    <span key={index}>{part}</span>
                                                )
                                            )}
                                        </p>
                                    </div>

                                    {/* Bottom Section - Testimonial Cards */}
                                    <div className="flex-1 relative">
                                        <div className="absolute inset-0 flex flex-wrap justify-center items-center gap-4">
                                            {currentSlideData.testimonials.map((testimonial, index) => (
                                                <div
                                                    key={index}
                                                    className="bg-white rounded-lg p-4 shadow-lg max-w-sm"
                                                    style={{
                                                        transform: `rotate(${(index - 2) * 2}deg) translateY(${Math.sin(index) * 10}px)`,
                                                        zIndex: index + 1
                                                    }}
                                                >
                                                    {/* Stars */}
                                                    <div className="flex mb-2">
                                                        {[...Array(testimonial.stars)].map((_, i) => (
                                                            <span key={i} className="text-yellow-400 text-sm">★</span>
                                                        ))}
                                                    </div>

                                                    {/* Review Text */}
                                                    <p className="text-sm text-gray-800 mb-3 leading-relaxed" style={{ fontFamily: 'Arial, sans-serif' }}>
                                                        {testimonial.text.length > 150 ? testimonial.text.substring(0, 150) + '...' : testimonial.text}
                                                    </p>

                                                    {/* Reviewer Info */}
                                                    <div className="flex items-center justify-between text-xs text-gray-600">
                                                        <span className="font-semibold">{testimonial.reviewer}</span>
                                                        <span>{testimonial.time}</span>
                                                    </div>

                                                    {/* Reviews Count */}
                                                    <div className="text-xs text-gray-500 mt-1">
                                                        {testimonial.reviews}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : currentSlide === 8 ? (
                            // Ninth slide - Image only
                            <div className="h-full flex items-center justify-center">
                                <img
                                    src={currentSlideData.image}
                                    alt="Dr. Prashantha Kesari"
                                    loading="lazy"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        ) : (
                            // Other slides - Side by side layout
                            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 h-full ${currentSlide === 2 || currentSlide === 4 ? 'lg:grid-flow-col-dense' : ''}`}>
                                {/* Image Section - Left for slide 3 and 5, Right for others */}
                                <div className={`relative overflow-hidden h-[600px] md:h-[700px] lg:h-[800px] ${currentSlide === 2 || currentSlide === 4 ? 'lg:order-1' : 'lg:order-2'}`}>
                                    <img
                                        src={currentSlideData.image}
                                        alt={currentSlide === 4 ? "Dr. Prashantha Kesari Awards" : "Medical professionals"}
                                        loading="lazy"
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Content Section - Right for slide 3 and 5, Left for others */}
                                <div className={`p-12 lg:p-16 bg-white flex flex-col justify-center h-full ${currentSlide === 2 || currentSlide === 4 ? 'lg:order-2' : 'lg:order-1'}`}>
                                    <div className="space-y-6">
                                        {currentSlide === 0 || currentSlide === 2 || currentSlide === 5 ? (
                                            // First, third, and sixth slide content (bullet points)
                                            <>
                                                <h2 className="text-3xl md:text-4xl font-bold mb-10 whitespace-nowrap" style={{ color: '#FF6B35', fontFamily: 'Arial, sans-serif' }}>
                                                    {currentSlideData.title}
                                                </h2>

                                                <div className="space-y-6">
                                                    {currentSlideData.content.map((item, index) => (
                                                        <div key={index} className="flex items-start gap-4">
                                                            <div className="w-3 h-3 bg-black rounded-full mt-2 flex-shrink-0"></div>
                                                            <p className="text-lg text-gray-800 leading-relaxed" style={{ fontFamily: 'Arial, sans-serif' }}>
                                                                <strong>{item.title}</strong> {item.text}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>

                                            </>
                                        ) : currentSlide === 4 ? (
                                            // Fifth slide content
                                            <>
                                                <h2 className="text-3xl md:text-4xl font-bold mb-10 whitespace-nowrap" style={{ color: '#FF6B35', fontFamily: 'Arial, sans-serif' }}>
                                                    {currentSlideData.title}
                                                </h2>

                                                {/* Description with bold text */}
                                                <div className="text-lg text-gray-800 leading-relaxed" style={{ fontFamily: 'Arial, sans-serif' }}>
                                                    {currentSlideData.description.split('**').map((part, index) =>
                                                        index % 2 === 1 ? (
                                                            <strong key={index} className="font-bold">{part}</strong>
                                                        ) : (
                                                            <span key={index}>{part}</span>
                                                        )
                                                    )}
                                                </div>
                                            </>
                                        ) : (
                                            // Second slide content
                                            <>
                                                <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#FF6B35', fontFamily: 'Arial, sans-serif' }}>
                                                    {currentSlideData.title}
                                                </h2>

                                                <h3 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#FF6B35', fontFamily: 'Arial, sans-serif' }}>
                                                    {currentSlideData.doctorName}
                                                </h3>

                                                <p className="text-xl text-gray-700 mb-2" style={{ fontFamily: 'Arial, sans-serif' }}>
                                                    {currentSlideData.specialization}
                                                </p>

                                                <p className="text-xl text-gray-700 mb-8" style={{ fontFamily: 'Arial, sans-serif' }}>
                                                    {currentSlideData.experience}
                                                </p>

                                                {/* Procedures Grid */}
                                                <div className="grid grid-cols-2 gap-4 mb-8">
                                                    {currentSlideData.procedures.map((procedure, index) => (
                                                        <button
                                                            key={index}
                                                            className="p-4 bg-gray-50 border border-orange-200 rounded-lg text-gray-700 hover:bg-orange-50 transition-colors duration-200"
                                                            style={{ fontFamily: 'Arial, sans-serif' }}
                                                        >
                                                            {procedure}
                                                        </button>
                                                    ))}
                                                </div>

                                                <p className="text-lg mb-4" style={{ color: '#FF6B35', fontFamily: 'Arial, sans-serif' }}>
                                                    {currentSlideData.qualifications}
                                                </p>

                                                <p className="text-lg" style={{ color: '#FF6B35', fontFamily: 'Arial, sans-serif' }}>
                                                    {currentSlideData.description}
                                                </p>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Slide Indicators */}
                <div className="flex justify-center mt-6 space-x-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-orange-500' : 'bg-gray-300'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurMedicalExpertDrSubha;