import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa';

const OurMedicalExpert = () => {
    const [selectedDoctor, setSelectedDoctor] = useState('prashantha');

    // Social media configurations for each doctor
    const socialMediaLinks = {
        prashantha: {
            instagram: 'https://www.instagram.com/dr.prashantha_kesari/',
            facebook: 'https://www.facebook.com/nypunyaaestheticclinic/',
            youtube: 'https://www.youtube.com/@nypunya_aesthetic_clinic',
            linkedin: 'https://www.linkedin.com/company/dr-prashantha-kesari/',
            twitter: 'https://x.com/TheDrkesari?t=4UUcOGv-i6R__JYz-GSdqQ&s=08',
            practo: 'https://www.practo.com/bangalore/doctor/dr-prashantha-kesari-cosmetic-plastic-surgeon-1/recommended?utm_source=opd_google_Pmax&utm_medium=&utm_campaign=22055233835&gad_source=1&gad_campaignid=22055283002&gbraid=0AAAAADgl2cJ79yHOmfvqRgjz9gjKz5Vl7&gclid=CjwKCAjw87XBBhBIEiwAxP3_A65daaX7O78jhWq5delKWTzH07mfX_AxZNCbr9ntCFYeOnhdbG3QcBoC2qoQAvD_BwE'
        },
        shubha: {
            instagram: 'https://www.instagram.com/dr.shubhakesari/',
            facebook: 'https://www.facebook.com/nypunyaaestheticclinic/',
            youtube: 'https://www.youtube.com/@nypunya_aesthetic_clinic',
            linkedin: 'https://www.linkedin.com/in/shubha-kesari-651787139?trk=people-search-result',
            twitter: 'https://x.com/DrShubhaKesari',
            practo: 'https://www.practo.com/bangalore/doctor/dr-shubha-m-kesari-dermatologist-cosmetologist'
        }
    };

    // Add custom styles for slick-dots and slick-arrows
    React.useEffect(() => {
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
        return () => {
            document.head.removeChild(style);
        };
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
        customPaging: function () {
            return (
                <div style={{
                    width: '8px',
                    height: '8px',
                    margin: '0 4px',
                    backgroundColor: '#000099',
                    borderRadius: '50%',
                    display: 'inline-block'
                }} />
            );
        }
    };

    // Define image arrays for each doctor
    const doctorImages = {
        prashantha: [
            { id: 1, image: '/home/slider/dr_prashantha_kesari/1.png' },
            { id: 2, image: '/home/slider/dr_prashantha_kesari/2.png' },
            { id: 3, image: '/home/slider/dr_prashantha_kesari/3.png' },
            { id: 4, image: '/home/slider/dr_prashantha_kesari/4.png' },
            { id: 5, image: '/home/slider/dr_prashantha_kesari/5.png' },
            { id: 6, image: '/home/slider/dr_prashantha_kesari/6.png' },
            { id: 7, image: '/home/slider/dr_prashantha_kesari/7.png' },
            { id: 8, image: '/home/slider/dr_prashantha_kesari/8.png' },
            { id: 9, image: '/home/slider/dr_prashantha_kesari/9.png' }
        ],
        shubha: [
            { id: 1, image: '/home/slider/dr_shubha_kesari/1.png' },
            { id: 2, image: '/home/slider/dr_shubha_kesari/2.png' },
            { id: 3, image: '/home/slider/dr_shubha_kesari/3.png' },
            { id: 4, image: '/home/slider/dr_shubha_kesari/4.png' },
            { id: 5, image: '/home/slider/dr_shubha_kesari/5.png' },
            { id: 6, image: '/home/slider/dr_shubha_kesari/6.png' },
            { id: 7, image: '/home/slider/dr_shubha_kesari/7.png' },
            { id: 8, image: '/home/slider/dr_shubha_kesari/8.png' },
            { id: 9, image: '/home/slider/dr_shubha_kesari/9.png' }
        ]
    };

    const slides = doctorImages[selectedDoctor];
    const currentSocialLinks = socialMediaLinks[selectedDoctor];

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
                                    alt={slide.title}
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
        </div>
    );
};

export default OurMedicalExpert;

