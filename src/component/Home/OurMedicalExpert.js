import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurMedicalExpert = () => {
    const [selectedDoctor, setSelectedDoctor] = useState('prashantha');

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
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

        </div>
    );
};

export default OurMedicalExpert;

