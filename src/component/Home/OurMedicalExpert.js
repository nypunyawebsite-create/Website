import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin, FaTwitter, FaGraduationCap, FaAward, FaUserMd } from 'react-icons/fa';

const OurMedicalExpert = () => {
    const [selectedDoctor, setSelectedDoctor] = useState('prashantha');

    // Doctor information with structured data for SEO
    const doctorsData = {
        prashantha: {
            name: "Dr. Prashantha Kesari N K",
            title: "Senior Consultant Cosmetic Plastic Surgeon",
            qualifications: [
                "M.B.B.S - Bachelor of Medicine and Bachelor of Surgery",
                "M.S - Master of Surgery",
                "D.N.B - Diplomate of National Board",
                "M.R.C.S - Member of Royal College of Surgeons",
                "D.M.L.E - Diploma in Medical Law and Ethics",
                "M.Ch - Master of Chirurgiae in Plastic Surgery"
            ],
            specializations: [
                "Cosmetic Surgery",
                "Liposuction & Mega Liposuction",
                "Body Contouring Procedures",
                "Breast Surgeries",
                "Facial Plastic Surgery",
                "Hair Transplantation",
                "Laser Surgeries",
                "Microvascular Surgery"
            ],
            experience: "9+ Years",
            achievements: [
                "Gold Medalist throughout academic career",
                "Innovated surgical instruments",
                "Published scientific papers",
                "Advanced fellowship in Cosmetic and Laser surgery",
                "Trained at LTM Medical College (Sion Hospital)",
                "Meritorious performance with awards"
            ],
            description: "Dr. Prashantha Kesari has gained quality surgical experience by working with the best-known surgeons for over nine years. He is meritorious throughout and was appreciated at every stage. He has won gold medals and a number of awards.",
            socialMediaLinks: {
                instagram: 'https://www.instagram.com/dr.prashantha_kesari/',
                facebook: 'https://www.facebook.com/nypunyaaestheticclinic/',
                youtube: 'https://www.youtube.com/@nypunya_aesthetic_clinic',
                linkedin: 'https://www.linkedin.com/company/dr-prashantha-kesari/',
                twitter: 'https://x.com/TheDrkesari?t=4UUcOGv-i6R__JYz-GSdqQ&s=08',
                practo: 'https://www.practo.com/bangalore/doctor/dr-prashantha-kesari-cosmetic-plastic-surgeon-1/recommended?utm_source=opd_google_Pmax&utm_medium=&utm_campaign=22055233835&gad_source=1&gad_campaignid=22055283002&gbraid=0AAAAADgl2cJ79yHOmfvqRgjz9gjKz5Vl7&gclid=CjwKCAjw87XBBhBIEiwAxP3_A65daaX7O78jhWq5delKWTzH07mfX_AxZNCbr9ntCFYeOnhdbG3QcBoC2qoQAvD_BwE'
            }
        },
        shubha: {
            name: "Dr. Shubha M Kesari",
            title: "Senior Consultant Dermatologist and Cosmetic Dermatologist",
            qualifications: [
                "M.B.B.S - Bachelor of Medicine and Bachelor of Surgery",
                "M.D - Doctor of Medicine in Dermatology (Mumbai)",
                "D.M.L.E - Diploma in Medical Law and Ethics",
                "D.N.B - Diplomate of National Board"
            ],
            specializations: [
                "Medical Dermatology",
                "Cosmetic Dermatology",
                "LASER Treatments",
                "BOTOX Procedures",
                "FILLER Treatments",
                "Chemical PEELs",
                "Skin Care Treatments"
            ],
            experience: "Experienced Professional",
            achievements: [
                "Gold Medal for Maharashtra University of Health Sciences",
                "Extensive training in Cosmetic dermatology procedures",
                "Publications in indexed national and international journals",
                "Co-authored chapter in textbook",
                "Faculty in Dermatology conferences",
                "Skin care expert in television programmes"
            ],
            description: "Dr. Shubha M Kesari is a very well qualified and experienced Dermatologist with special interest in Cosmetic Dermatology. She has completed her M.D Dermatology from LTM Medical College, & Hospital Sion Mumbai securing the Gold Medal for Maharashtra University of Health Sciences.",
            socialMediaLinks: {
                instagram: 'https://www.instagram.com/dr.shubhakesari/',
                facebook: 'https://www.facebook.com/nypunyaaestheticclinic/',
                youtube: 'https://www.youtube.com/@nypunya_aesthetic_clinic',
                linkedin: 'https://www.linkedin.com/in/shubha-kesari-651787139?trk=people-search-result',
                twitter: 'https://x.com/DrShubhaKesari',
                practo: 'https://www.practo.com/bangalore/doctor/dr-shubha-m-kesari-dermatologist-cosmetologist'
            }
        }
    };

    // Inject custom styles for slick
    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
      .slick-dots {
        padding: 8px;
      }
      .slick-arrow, .slick-prev, .slick-next {
        display: block !important;
        z-index: 10 !important;
        background: #fff !important;
        color: #000099 !important;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        opacity: 1 !important;
      }
      .slick-arrow:before {
        color: #000099 !important;
        font-size: 32px !important;
        opacity: 1 !important;
      }
    `;
        document.head.appendChild(style);
        return () => document.head.removeChild(style);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        customPaging: () => (
            <div style={{
                width: '8px',
                height: '8px',
                margin: '0 4px',
                backgroundColor: '#000099',
                borderRadius: '50%',
                display: 'inline-block'
            }} />
        )
    };

    // Doctor images
    const doctorImages = {
        prashantha: Array.from({ length: 9 }, (_, i) => ({
            id: i + 1,
            image: `/home/slider/dr_prashantha_kesari/${i + 1}.png`
        })),
        shubha: Array.from({ length: 9 }, (_, i) => ({
            id: i + 1,
            image: `/home/slider/dr_shubha_kesari/${i + 1}.png`
        }))
    };

    const slides = doctorImages[selectedDoctor];
    const currentDoctor = doctorsData[selectedDoctor];
    const currentSocialLinks = currentDoctor.socialMediaLinks;

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-[#000099] text-3xl md:text-4xl font-bold text-center mb-12">
                Meet Our Medical Experts
            </h2>

            {/* Toggle Buttons */}
            <div className="flex justify-center mb-8">
                <button
                    className={`px-4 py-3 font-bold transition-all rounded-l-lg border border-custom-green w-60 ${selectedDoctor === 'prashantha'
                        ? 'bg-custom-green text-black'
                        : 'bg-transparent text-[#000099] hover:bg-gray-200'
                        }`}
                    onClick={() => setSelectedDoctor('prashantha')}
                >
                    Dr. Prashantha Kesari N K
                </button>
                <button
                    className={`px-4 py-3 font-bold transition-all rounded-r-lg border-t border-b border-r border-custom-green w-60 ${selectedDoctor === 'shubha'
                        ? 'bg-custom-green text-black'
                        : 'bg-transparent text-[#000099] hover:bg-gray-200'
                        }`}
                    onClick={() => setSelectedDoctor('shubha')}
                >
                    Dr. Shubha M Kesari
                </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-4">
                <Slider {...settings}>
                    {slides.map((slide) => (
                        <div key={slide.id} className="outline-none">
                            <div className="relative aspect-[16/9]">
                                <img
                                    src={slide.image}
                                    alt={`${currentDoctor.name} - ${currentDoctor.title} - Slide ${slide.id}`}
                                    className="w-full h-full object-contain rounded-lg"
                                />
                                {slide.id === 9 && (
                                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 bg-white/80 px-4 py-2 rounded-full">
                                        <a href={currentSocialLinks.instagram} target='_blank' rel='noopener noreferrer'>
                                            <FaInstagram className='text-[#92E0E0] w-6 h-6' />
                                        </a>
                                        <a href={currentSocialLinks.facebook} target='_blank' rel='noopener noreferrer'>
                                            <FaFacebook className='text-[#92E0E0] w-6 h-6' />
                                        </a>
                                        <a href={currentSocialLinks.youtube} target='_blank' rel='noopener noreferrer'>
                                            <FaYoutube className='text-[#92E0E0] w-6 h-6' />
                                        </a>
                                        <a href={currentSocialLinks.linkedin} target='_blank' rel='noopener noreferrer'>
                                            <FaLinkedin className='text-[#92E0E0] w-6 h-6' />
                                        </a>
                                        <a href={currentSocialLinks.twitter} target='_blank' rel='noopener noreferrer'>
                                            <FaTwitter className='text-[#92E0E0] w-6 h-6' />
                                        </a>
                                        <a href={currentSocialLinks.practo} target='_blank' rel='noopener noreferrer'>
                                            <img src='/practo_icon.png' alt='Practo' className='w-6 h-6' />
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* SEO-Friendly Content Section - Hidden from view but readable by Google */}
            <div className="sr-only" aria-hidden="true">
                <h3>{currentDoctor.name}</h3>
                <h4>{currentDoctor.title}</h4>
                <p>{currentDoctor.description}</p>

                <h5>Qualifications</h5>
                <ul>
                    {currentDoctor.qualifications.map((qual, index) => (
                        <li key={index}>{qual}</li>
                    ))}
                </ul>

                <h5>Specializations</h5>
                <ul>
                    {currentDoctor.specializations.map((spec, index) => (
                        <li key={index}>{spec}</li>
                    ))}
                </ul>

                <h5>Experience</h5>
                <p>{currentDoctor.experience} of professional experience</p>

                <h5>Key Achievements</h5>
                <ul>
                    {currentDoctor.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default OurMedicalExpert;
