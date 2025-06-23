import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const bannerImages = [
    '/services/rhinoplasty/rhinoplasty-banner-2.png',
    '/services/anti_ageing/anti_ageing_banner.png',
    '/services/body_contouring/body_contouring_mainbanner.png',
    '/services/abdominal/body_contouring_mainbanner.png',
    '/services/acne/acne_banner.jpeg',
    '/services/hair_transplant/hair-transplant-banner-img.png',
];

const galleryImages = [
    "/gallery/hair/Hair_Transplant_Balding_Reversal_India_49.png",
    "/gallery/body/Abdominoplasty_Abdominal_Contours_India_24.png",
    "/gallery/anti_aging/Before_After_Facelift_Neck_Lift_India_09.png",
    "/gallery/structural/Facial_Fat_Grafting_After_Procedure_India_19.png",
    "/gallery/liposuction/1 (81).png",
    "/gallery/rhinoplasty/Before-After-Deviated-Nose-Correction-Rhinoplasty-India 1.png",
    "/gallery/blepharoplasty/1 (1).png",
    "/gallery/others/1 (16).png",
];

const BannerSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: false,
        fade: true,
    };
    return (
        <div className="relative w-full md:h-[600px] h-[450px] overflow-hidden">
            <Slider {...settings} className="w-full h-full">
                {bannerImages.map((img, idx) => (
                    <div key={idx} className="w-full h-full">
                        <img
                            src={img}
                            alt={`Banner ${idx + 1}`}
                            className="w-full h-full object-cover brightness-75"
                        />
                    </div>
                ))}
            </Slider>
            {/* Overlay Content (like Home) */}
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-between pointer-events-none">
                {/* <div className="w-full flex flex-wrap justify-center gap-2 md:gap-4 items-center px-2 md:px-16 mt-8 md:mt-20" style={{ marginTop: 'calc(2rem + 180px)' }}>
                    <h2 className="text-white text-lg md:text-2xl lg:text-3xl font-bold drop-shadow-lg">International Patients</h2>
                    <span className="text-white text-xl md:text-2xl font-bold">–</span>
                    <h2 className="text-white text-lg md:text-2xl lg:text-3xl font-bold drop-shadow-lg">Cosmetic Surgery</h2>
                    <span className="text-white text-xl md:text-2xl font-bold">–</span>
                    <h2 className="text-white text-lg md:text-2xl lg:text-3xl font-bold drop-shadow-lg">Dermatology</h2>
                </div> */}
                {/* <div className="w-full flex flex-col items-center pt-16 md:pt-24 pb-24">
                    <div className="flex flex-col justify-center gap-3 items-center">
                        <div>
                            <p className="text-[#000099] text-3xl md:text-4xl lg:text-5xl xl:text-6xl m-0 text-center drop-shadow-md font-bold">WELCOME INTERNATIONAL PATIENTS</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};


const International = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        requirement: '',
        terms: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted!');
    };

    // Responsive styles
    const mainLayoutStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 48,
        maxWidth: 1400,
        margin: '0 auto',
        padding: '48px 16px',
        flexWrap: 'wrap',
    };
    const leftColStyle = {
        flex: 2,
        background: '#fff',
        borderRadius: 16,
        boxShadow: '0 2px 16px #0001',
        padding: 32,
        color: '#222',
        minWidth: 320,
        width: '100%',
        maxWidth: 800,
        boxSizing: 'border-box',
    };
    const rightColStyle = {
        flex: 1,
        background: '#fff',
        padding: '40px 32px',
        borderRadius: 16,
        boxShadow: '0 2px 16px #0001',
        minWidth: 280,
        maxWidth: 420,
        width: '100%',
        boxSizing: 'border-box',
        marginTop: 32,
    };
    // Media query for stacking on mobile
    const mediaQuery = `
        @media (max-width: 900px) {
            .intl-main-layout { flex-direction: column !important; gap: 0 !important; padding: 24px 4vw !important; }
            .intl-left-col, .intl-right-col { max-width: 100% !important; min-width: 0 !important; width: 100% !important; margin-top: 0 !important; }
            .intl-right-col { margin-top: 32px !important; }
            .intl-left-col, .intl-right-col, .intl-info-card { padding: 16px !important; }
            .intl-info-card { font-size: 0.98rem !important; }
            .intl-info-card h1, .intl-info-card h2, .intl-info-card h3, .intl-info-card h4, .intl-info-card h5 { font-size: 1.1rem !important; }
            .intl-info-card img { height: 60px !important; }
        }
        @media (max-width: 600px) {
            .intl-main-layout { padding: 12px 2vw !important; }
            .intl-info-card { padding: 10px !important; font-size: 0.93rem !important; }
            .intl-info-card img { height: 40px !important; }
            .intl-right-col { padding: 20px 8px !important; }
            .intl-left-col { padding: 12px !important; }
        }
    `;

    return (
        <div className="w-full min-h-screen" style={{ background: '#f8f9fa' }}>
            <style>{mediaQuery}</style>
            <BannerSlider />
            <div className="intl-main-layout" style={mainLayoutStyle}>
                {/* Main Content */}
                <div className="intl-left-col" style={leftColStyle}>
                    {/* Heading and Details */}
                    <div>
                        <h1 style={{ fontSize: '2.1rem', color: '#000099', marginBottom: 12, fontWeight: 'bold', letterSpacing: '1px' }}>
                            GUIDING OUR INTERNATIONAL CLIENTS ON HOW TO TAKE THE DISCUSSION FURTHER TO PROCEED THE COSMETIC SURGERY
                        </h1>
                        <div style={{ fontSize: '1.1rem', marginBottom: 18, color: '#222' }}>
                            During enquiry the following personal details are collected from the client
                        </div>
                        <ul style={{ marginLeft: 18, marginBottom: 18, color: '#222', listStyle: 'circle' }}>
                            <li>Name</li>
                            <li>Age and gender</li>
                            <li>Height and weight</li>
                            <li>Email address</li>
                            <li>Contact numbers with WhatsApp access</li>
                        </ul>
                        <div style={{ color: '#444', fontSize: '1rem' }}>
                            After receiving your details our team will call you to guide you on the treatment enquired for.<br />
                            You may be asked to send pictures of the areas of concern after masking your identity. This phase is to guide you, explain the possible treatment plan and the approximate charges for completing the procedure. The pictures shared are confidential.<br />
                            We prefer certain angles for taking the pictures to be sent and those instructions will be sent to you through an email.
                        </div>
                    </div>

                    {/* Info Cards Column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, marginTop: 40 }}>
                        {/* Location from the airport */}
                        <div className="intl-info-card" style={{ background: '#f8f9fa', borderRadius: 16, padding: 28, maxWidth: 700, boxShadow: '0 2px 12px #0001', width: '100%', boxSizing: 'border-box' }}>
                            <div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: 10, color: '#000099' }}>Location from the airport</div>
                            <div style={{ color: '#222', fontSize: '1.05rem', marginBottom: 6 }}>
                                Kempegowda International Airport to Nypunya Aesthetic Clinic: <b>41 kms</b>
                            </div>
                            <div style={{ color: '#222', fontSize: '1.05rem' }}>
                                Travelling time: <b>1:30 hrs</b>
                            </div>
                        </div>

                        {/* Our Locations */}
                        <div
                            className="intl-info-card"
                            style={{
                                background: '#f8f9fa',
                                borderRadius: 16,
                                padding: 28,
                                maxWidth: 700,
                                boxShadow: '0 2px 12px #0001',
                                width: '100%',
                                boxSizing: 'border-box',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 24,
                                flexWrap: 'wrap',
                            }}
                        >
                            <iframe
                                className="intl-map-iframe"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.6193083791723!2d77.5865634974667!3d12.916153829207719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae159f89eb734f%3A0xc159ff3d3c8abec4!2sNypunya%20Aesthetic%20Clinic%20%7C%20Dermatology%20and%20Cosmetic%20Plastic%20Surgeon%20in%20Bengaluru!5e1!3m2!1sen!2sin!4v1745859791796!5m2!1sen!2sin"
                                width="100%"
                                height="220"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                style={{ borderRadius: 12, border: 0, width: '100%', minWidth: 200, maxWidth: 700 }}
                            ></iframe>
                            <div>
                                <div
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: '1.2rem',
                                        marginBottom: 10,
                                        color: '#000099',
                                    }}
                                >
                                    OUR LOCATIONS
                                </div>
                                <div
                                    style={{
                                        color: '#000099',
                                        fontWeight: 'bold',
                                        marginBottom: 4,
                                        fontSize: '1.05rem',
                                    }}
                                >
                                    #3, 1st Cross Off 24th Main, 2nd Phase, J. P. Nagar, Bengaluru
                                </div>
                            </div>
                        </div>

                        {/* Medical Visa and Travel Info */}
                        <div className="intl-info-card" style={{ background: '#f8f9fa', borderRadius: 16, padding: 28, maxWidth: 700, boxShadow: '0 2px 12px #0001', width: '100%', boxSizing: 'border-box' }}>
                            <div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: 10, color: '#000099' }}>Medical Visa:</div>
                            <div style={{ color: '#222', fontSize: '1.05rem', marginBottom: 12 }}>
                                To get medical treatments in India, you will need an <b>M­-Visa (Medical Visa)</b> or an <b>eTourist Visa (eTV)</b>. It is legally not permissible to undergo medical procedures with a normal/traditional Tourist visa.
                            </div>
                            <div style={{ fontWeight: 'bold', color: '#000099', marginBottom: 8 }}>STEPS TO GET YOUR ETOURIST VISA (ETV)</div>
                            <div style={{ color: '#222', fontSize: '1.05rem', marginBottom: 8 }}><b>Step 1</b><br />Keep the following documents ready:</div>
                            <ul style={{ color: '#222', marginLeft: 18, marginBottom: 10, listStyle: 'circle' }}>
                                <li>Applicant's recent colour photo (2 inch * 2 inch) size but less than 1MB.</li>
                                <li>Copy a passport page personal particular.</li>
                                <li>Copy of particular treatment letter from Nypunya Aesthetic Clinic</li>
                            </ul>
                            <div style={{ color: '#222', fontSize: '1.05rem', marginBottom: 8 }}><b>Step 2</b><br />Visit <a href="https://indianvisaonline.gov.in/evisa/Registration" target="_blank" rel="noopener noreferrer" style={{ color: '#000099', textDecoration: 'underline' }}>https://indianvisaonline.gov.in/evisa/Registration</a></div>
                            <div style={{ color: '#222', fontSize: '1.05rem', marginBottom: 8 }}><b>Step 3</b><br />Click on <b>e-VISA Application</b> Tab from the Menu</div>
                            <div style={{ color: '#222', fontSize: '1.05rem', marginBottom: 8 }}><b>Step 4</b><br />Select <b>eMedical VISA &gt;&gt; Short Term Medical Treatment of Self</b> Option</div>
                            <div style={{ color: '#222', fontSize: '1.05rem', marginBottom: 8 }}><b>Step 5</b><br />It will ask for the below documents. Upload them and complete the process.</div>
                            <div style={{ fontWeight: 'bold', color: '#000099', margin: '18px 0 8px 0' }}>Transport and food apps:</div>
                            <div style={{ color: '#222', fontSize: '1.05rem' }}>
                                There are many travel agencies and taxi service apps like <b>OLA</b>, <b>UBER</b> and <b>Rapido</b>. <br />
                                Food delivering service apps like <b>UBEREATS</b>, <b>SWIGGY</b> and <b>Zomato</b> which will be helpful for you to make the stay comfortable in India.
                            </div>
                        </div>

                        {/* Five star hotels near Nypunya Aesthetic Clinic */}
                        <div className="intl-info-card" style={{ background: '#f8f9fa', borderRadius: 16, padding: 28, maxWidth: 700, boxShadow: '0 2px 12px #0001', width: '100%', boxSizing: 'border-box' }}>
                            <div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: 10, color: '#000099' }}>Five star hotels near Nypunya Aesthetic Clinic</div>
                            <ol style={{ color: '#222', marginLeft: 18, marginBottom: 10, fontSize: '1.05rem', paddingLeft: 18 }}>
                                <li><b>La Marvella - Bangalore</b><br />Address: 1, South End Circle, La Marvella, 14th Cross Rd, next to Infosys Science Foundation, 2nd Block, Jayanagar, Bengaluru, Karnataka 560011 • 080 4333 5333.</li>
                                <li><b>Vivanta Bengaluru, Residency Road</b><br />Address: 66, Residency Rd, Srinivas Nagar, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025 • 080666 04545</li>
                                <li><b>Le Foliage By TGI</b><br />Address: 51, 46th Cross Rd, 8th Block, CR Layout, 1st Phase, J. P. Nagar, Bengaluru, Karnataka 560082 • 080 6199 3399</li>
                                <li><b>FOUNTAIN TREE By TGI</b><br />Address: Sri Krishna Arcade, 9th Cross Rd, Sarakki Industrial Layout, 3rd Phase, J. P. Nagar, Bengaluru, Karnataka 560078 • 080 6188 5555</li>
                                <li><b>Hotel Greenpark Bengaluru</b><br />Address: No 75 & 172, Bannerghatta Rd, Dollar Layout, BTM 2nd Stage, J. P. Nagar, Bengaluru, Karnataka 560076 • 080665 15151</li>
                                <li><b>SFO Hotel and Suites</b><br />Address: 24, Marenahalli Rd, TMC Layout, 5th Block, Jayanagar, Bengaluru, Karnataka 560041 • 080 4297 7777</li>
                                <li><b>Hotel Pai Comforts, JP Nagar</b><br />Address: Metro Pillar No 66, 1319, Marenahalli Rd, near Sapphire honda showroom, Marenahalli, 2nd Phase, J. P. Nagar, Bengaluru, Karnataka 560078 • 097409 89348</li>
                                <li><b>Hotel Paramos Inn</b><br />Address: 1353, Marenahalli Rd, Jayanagara 9th Block, Jayanagar, Bengaluru, Karnataka 560069 • 080 4166 0005.</li>
                                <li><b>AURICK HOTEL</b><br />Address: 598, 15th Cross, 35th Main Rd, JP Nagar 6th Phase, J. P. Nagar, Bengaluru, Karnataka 560078 • 063638 81374</li>
                                <li><b>Olive JP Nagar – by Embassy Group</b><br />Address: 11, Ring Road, 15th Cross Rd, near Delmia Circle, KAS Officers HBCS layout, 7th Phase, J. P. Nagar, Bengaluru, Karnataka 560078 • 088676 25161</li>
                            </ol>
                        </div>

                        {/* Payment Modes */}
                        <div className="intl-info-card" style={{ background: '#f8f9fa', borderRadius: 16, padding: 28, maxWidth: 700, boxShadow: '0 2px 12px #0001', width: '100%', boxSizing: 'border-box' }}>
                            <div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: 10, color: '#000099' }}>Payment Modes</div>
                            <ul style={{ color: '#222', marginLeft: 18, marginBottom: 10, fontSize: '1.05rem', listStyle: 'circle' }}>
                                <li>Cash</li>
                                <li>Credit card</li>
                                <li>Debit card</li>
                                <li>Bank transfer (Bank transfer can be made to the below accounts via NEFT / RTGS / IMPS)</li>
                            </ul>
                            <div style={{ color: '#222', fontSize: '1.05rem', marginTop: 8 }}><b>Bank details</b><br />Account number<br />Branch</div>
                        </div>

                        {/* Tourism */}
                        <div className="intl-info-card" style={{ background: '#f8f9fa', borderRadius: 16, padding: 28, maxWidth: 700, boxShadow: '0 2px 12px #0001', width: '100%', boxSizing: 'border-box' }}>
                            <div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: 10, color: '#000099' }}>Tourism</div>
                            <ol style={{ color: '#222', marginLeft: 18, marginBottom: 10, fontSize: '1.05rem', paddingLeft: 18 }}>
                                <li><b>Lalbagh Botanical Garden</b><br />Highlights: Glass House, rare plants, serene walking paths.<br />Ideal for: Nature lovers, photography, peaceful start.</li>
                                <li><b>Bull Temple (Dodda Basavana Gudi)</b><br />Highlights: Giant Nandi statue, traditional architecture.<br />Ideal for: Spiritual vibe, quick visit.</li>
                                <li><b>Tipu Sultan's Summer Palace</b><br />Highlights: Indo-Islamic architecture, rich history.<br />Ideal for: History buffs, quick cultural exploration.</li>
                                <li><b>Bangalore Palace</b><br />Highlights: Tudor-style palace, lavish interiors, photo-worthy.<br />Ideal for: Architecture and luxury lovers.</li>
                                <li><b>Cubbon Park</b><br />Highlights: Lush greenery, relaxing walks, State Central Library nearby.<br />Ideal for: Quick break, coffee/snack time.</li>
                                <li><b>Vidhana Soudha</b><br />Highlights: Iconic government building, great for photos.<br />Ideal for: Quick pitstop and photoshoot.</li>
                                <li><b>ISKCON Temple</b><br />Highlights: Spiritual ambiance, beautiful surroundings, prasadam.<br />Ideal for: Peaceful evening moment.</li>
                                <li><b>UB City Mall / MG Road / Brigade Road</b><br />Highlights: Shopping, cafes, street vibe.<br />Ideal for: Evening chill, shopping, and dinner.</li>
                                <li><b>Skyye Lounge or Toit</b><br />Highlights: Rooftop dinner, great views of Bangalore.<br />Ideal for: Romantic/special dinner.</li>
                                <li><b>Mysore</b><br />Mysore, known as the Cultural Capital of Karnataka, is a city steeped in royal heritage, majestic architecture, and vibrant traditions. Famous for the magnificent Mysore Palace, Dasara festival, and fragrant sandalwood, it blends history with charm. Whether it's strolling through the lush Brindavan Gardens, shopping for rich silk sarees, or exploring the Chamundi Hills, Mysore offers a perfect mix of culture, serenity, and timeless elegance.</li>
                                <li><b>Belur</b><br />Nestled in the Hassan district of Karnataka, Belur is a serene town famed for its breathtaking Chennakesava Temple, a masterpiece of Hoysala architecture built in the 12th century. The intricate carvings, detailed sculptures, and beautifully polished stonework make it a must-visit for history buffs, art lovers, and spiritual seekers. Surrounded by lush greenery and river views, Belur offers a peaceful escape and a glimpse into the grandeur of South India's ancient dynasties.</li>
                                <li><b>Coorg</b><br />Coorg (Kodagu), often called the "Scotland of India," is a picturesque hill station located in Karnataka. Known for its lush green coffee plantations, misty hills, cascading waterfalls, and rich wildlife, Coorg offers a peaceful retreat into nature. With charming towns like Madikeri and scenic spots like Abbey Falls, Raja's Seat, and Dubare Elephant Camp, it's perfect for trekking, coffee tours, and cultural experiences with the Kodava community.</li>
                            </ol>
                        </div>
                    </div>
                </div>
                {/* Right: Contact Form */}
                <form
                    onSubmit={handleSubmit}
                    className="intl-right-col"
                    style={rightColStyle}
                >
                    <div style={{ fontSize: '1.5rem', color: '#000099', fontWeight: 'bold', marginBottom: 8, letterSpacing: '1px' }}>CONTACT US</div>
                    <div>
                        <label style={{ color: '#222', fontWeight: 500 }}>Full Name</label>
                        <input name="name" value={form.name} onChange={handleChange} required style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #bbb', marginTop: 4, background: '#fff', color: '#222' }} />
                    </div>
                    <div>
                        <label style={{ color: '#222', fontWeight: 500 }}>Email id:</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} required style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #bbb', marginTop: 4, background: '#fff', color: '#222' }} />
                    </div>
                    <div>
                        <label style={{ color: '#222', fontWeight: 500 }}>Phone :</label>
                        <input name="phone" value={form.phone} onChange={handleChange} style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #bbb', marginTop: 4, background: '#fff', color: '#222' }} />
                    </div>
                    <div>
                        <label style={{ color: '#222', fontWeight: 500 }}>Requirement :</label>
                        <textarea name="requirement" value={form.requirement} onChange={handleChange} rows={4} style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #bbb', marginTop: 4, background: '#fff', color: '#222' }} />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.98rem', color: '#222' }}>
                        <input type="checkbox" name="terms" checked={form.terms} onChange={handleChange} required style={{ marginRight: 8 }} />
                        <span>I agree to the <a href="#" style={{ color: '#000099', textDecoration: 'underline' }}>Terms of Use</a></span>
                    </div>
                    <button type="submit" style={{ width: '100%', background: '#000099', color: '#fff', padding: 14, border: 'none', borderRadius: 8, fontWeight: 'bold', fontSize: '1.15rem', cursor: 'pointer', marginTop: 8 }}>Send</button>

                    {/* Gallery Slider */}
                    <div style={{ marginTop: 32 }}>
                        <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#000099', marginBottom: 12, textAlign: 'center' }}>Gallery</div>
                        <Slider
                            dots={true}
                            infinite={true}
                            speed={500}
                            slidesToShow={1}
                            slidesToScroll={1}
                            arrows={true}
                            autoplay={true}
                            autoplaySpeed={3000}
                        >
                            {galleryImages.map((img, idx) => (
                                <div key={idx}>
                                    <img
                                        src={img}
                                        alt={`Gallery ${idx + 1}`}
                                        style={{ width: '100%', borderRadius: 8, maxHeight: 220, objectFit: 'cover' }}
                                    />
                                </div>
                            ))}
                        </Slider>
                        <button type="submit" style={{ width: '100%', background: '#000099', color: '#fff', padding: 14, border: 'none', borderRadius: 8, fontWeight: 'bold', fontSize: '1.15rem', cursor: 'pointer', marginTop: 8 }}
                            onClick={() => window.location.href = '/gallery'}
                        >
                            View Gallery
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default International;
