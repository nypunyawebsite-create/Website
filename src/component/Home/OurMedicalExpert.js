import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurMedicalExpert = () => {
    // Add custom styles for slick-dots
    React.useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
            .slick-dots {
                padding: 8px;
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

    // Array of PowerPoint slides (you'll need to convert your PowerPoint to images)
    const slides = [
        {
            id: 1,
            image: '/home/slider_1.png',
            title: 'Only the Best For YOU',
            description: 'You are the centre of his clinical practice: Dr. Kesari places YOU at the center of his clinical practice, tailoring treatments to your unique needs and expectations. Personalised Treatment: She customises each treatment plan to ensure the best possible outcomes for every individual. Informed Decision-Making: She values well-informed patients, believing that knowledge empowers better healthcare choices. Collaborative Success: A strong understanding between patient and doctor leads to results both can be proud of. '
        },
        {
            id: 2,
            image: '/home/dr-prashantha_home.png',
            title: 'Dr. Prashantha Kesari',
            description: 'Senior Consultant Cosmetic Plastic Surgeon'
        },
        {
            id: 3,
            image: '/home/slider_3.png',
            title: 'Only the Best For YOU',
            description: 'Plastic Surgery as Art: Plastic surgery is a blend of art and science, requiring creativity, precision, and vision. Exceptional Skills & Training: Dr. Prashantha Kesari possesses a unique combination of imagination, skill, and systematic analysis. xtensive Expertise: He has undergone rigorous and comprehensive training in Plastic Surgery. Elite Experience: He is among the select few trained in the country\'s top and busiest hospitals, gaining invaluable experience.'
        },
        {
            id: 4,
            image: '/home/slider_4.png',
            title: 'Trained in the BEST Places',
            description: 'Dr. Prashantha Kesari completed an Advanced Fellowship in Cosmetic and Laser Surgery at a top cosmetic surgery center. He received comprehensive Plastic Surgery training at LTM Medical College (Sion Hospital), renowned as the best center for Plastic Surgery training in the country. Sion Hospital has a legacy of producing many distinguished experts in the field.'
        }
        // Add more slides as needed
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-[#000099] text-3xl md:text-4xl font-bold text-center mb-12">
                Meet Our Medical Experts
            </h2>

            <div className="bg-white rounded-lg shadow-lg p-4">
                <Slider {...settings}>
                    {slides.map((slide, idx) => (
                        idx === 1 ? (
                            <div key={slide.id} className="outline-none">
                                <div className="flex flex-col md:flex-row bg-[#f8f8f8] rounded-lg overflow-hidden relative aspect-[16/9]">
                                    <div className="flex-1 flex flex-col justify-center p-4 md:p-8">
                                        <h4 className="text-orange-600 text-lg md:text-2xl font-semibold mb-2 md:mb-4">Know your Doctor</h4>
                                        <h3 className="text-3xl md:text-7xl font-extrabold text-orange-600 mb-2 md:mb-4 leading-tight">Dr. Prashantha<br />Kesari</h3>
                                        <div className="text-orange-500 text-base md:text-xl mb-4 md:mb-8">Sr. Cosmetic Plastic Surgeon</div>
                                    </div>
                                    <div className="flex-1 flex items-center justify-center p-4 md:p-8 relative">
                                        <img
                                            src={slide.image}
                                            alt={slide.title}
                                            className="w-full max-w-xs h-auto rounded-3xl object-cover shadow-lg"
                                            style={{ marginTop: '24px' }}
                                        />
                                    </div>
                                    <div className="absolute left-0 right-0 bottom-0 bg-[#030303] text-orange-400 px-4 md:px-8 py-4 md:py-6 rounded-b-lg text-sm md:text-lg font-medium" style={{ borderBottomLeftRadius: '2rem', borderBottomRightRadius: '2rem' }}>
                                        Advanced Fellowship in Cosmetic Surgery,<br />
                                        M.Ch - Plastic Surgery, DNB, MRCS, DMLE, MBBS
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div key={slide.id} className="outline-none">
                                <div className="relative aspect-[16/9]">
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="w-full h-full object-contain rounded-lg"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-6 rounded-b-lg">
                                        <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
                                        <p className="text-lg">{slide.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default OurMedicalExpert;

