import React, { useState, useEffect, useRef } from 'react'
import { FaTwitter, FaLinkedin, FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'




const Footer = () => {
    const location = useLocation();
    const [showScrollModal, setShowScrollModal] = useState(false);
    const prevScrollY = useRef(0);

    // State for form fields
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [requirement, setRequirement] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const isScrollingDown = currentScrollY > prevScrollY.current;
            const isAtBottom = window.innerHeight + currentScrollY >= document.documentElement.scrollHeight - 100; // 100px buffer

            if (isAtBottom && isScrollingDown) {
                setShowScrollModal(true);
            }
            prevScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const closeModal = () => {
        setShowScrollModal(false);
        // Optionally clear form fields on close
        setName('');
        setPhoneNumber('');
        setEmail('');
        setRequirement('');
    };

    const handleSubmit = async (e) => { // Made async for potential API call
        e.preventDefault();

        const formData = {
            name,
            phoneNumber,
            email,
            requirement,
        };

        console.log('Form Data to be sent:', formData);

        // --- IMPORTANT: This is where you would send data to your backend API ---
        // Example using fetch:
        /*
        try {
            const response = await fetch('/api/send-email', { // Replace with your actual backend endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Thank you! Your message has been sent.');
                closeModal();
            } else {
                alert('Failed to send message. Please try again later.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred. Please try again later.');
        }
        */

        // --- For now, simulating success and clearing form ---
        alert('Thank you! Your message has been sent.');
        closeModal();
    };

    return (
        <div className="bg-[#4B4B68] md:grid md:grid-cols-6 gap-6 h-full items-start justify-center mx-auto lg:p-20 p-8 text-white flex flex-col" style={{
            background: 'linear-gradient(90deg, #000099 0%, #2b5aba 20%, #2b59b9 40%, #5f9ece 70%, rgba(255,255,255,0.3) 135%)'
        }}>
            <div className='col-span-3 flex flex-col gap-8'>
                <img src='/footer-logo.svg' alt='Footer Logo' className='lg:w-[60%]' />
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p> */}
                <div className='flex flex-col gap-2 md:pt-10'>
                    <h4 className='text-2xl font-semibold'>Follow us on Social Media</h4>
                    <div className='flex gap-4'>
                        <a href='https://www.instagram.com/nypunya_aesthetic_clinic_/' target='_blank' rel='noopener noreferrer'>
                            <FaInstagram className='text-[#92E0E0] w-6 h-6' />
                        </a>
                        <a href='https://www.facebook.com/nypunyaaestheticclinic/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0' target='_blank' rel='noopener noreferrer'>
                            <FaFacebook className='text-[#92E0E0] w-6 h-6' />
                        </a>
                        <a href='https://www.youtube.com/@nypunya_aesthetic_clinic' target='_blank' rel='noopener noreferrer'>
                            <FaYoutube className='text-[#92E0E0] w-6 h-6' />
                        </a>
                        <a href='https://www.linkedin.com/company/dr-prashantha-kesari/' target='_blank' rel='noopener noreferrer'>
                            <FaLinkedin className='text-[#92E0E0] w-6 h-6' />
                        </a>
                        <a href='https://x.com/TheDrkesari?t=4UUcOGv-i6R__JYz-GSdqQ&s=08' target='_blank' rel='noopener noreferrer'>
                            <FaTwitter className='text-[#92E0E0] w-6 h-6' />
                        </a>
                        <a href='https://www.practo.com/bangalore/clinic/nypunya-aesthetic-clinic-jayanagar-4-block/reviews?utm_source=opd_google_Pmax&utm_campaign=20240701849&gad_source=1&gad_campaignid=20236356659&gbraid=0AAAAADgl2cL3q7njAm2XdJgKwzdMvYN7M&gclid=CjwKCAjwi-DBBhA5EiwAXOHsGatlWdfo33g2REsEo6kMU0cvLoyDO5Fi_7GcLdEO6eyo5njnhmibkxoClXIQAvD_BwE' target='_blank' rel='noopener noreferrer'>
                            <img src='/practo_icon.png' alt='Practo' className='w-6 h-6' />
                        </a>
                    </div>
                </div>
            </div>
            <div className='col-span-1 flex flex-col gap-2'>
                <Link to='/' className={`relative w-fit ${location.pathname === '/' ? 'text-[#92E0E0] font-bold' : ''} after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-[#92E0E0] after:transition-all after:duration-300 hover:after:w-full ${location.pathname === '/' ? 'after:w-full' : ''}`}>Home</Link>
                <Link to='/about-us' className={`relative w-fit ${location.pathname === '/about-us' ? 'text-[#92E0E0] font-bold' : ''} after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-[#92E0E0] after:transition-all after:duration-300 hover:after:w-full ${location.pathname === '/about-us' ? 'after:w-full' : ''}`}>About us</Link>
                <Link to='/services' className={`relative w-fit ${location.pathname === '/services' ? 'text-[#92E0E0] font-bold' : ''} after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-[#92E0E0] after:transition-all after:duration-300 hover:after:w-full ${location.pathname === '/services' ? 'after:w-full' : ''}`}>Services</Link>
                <Link to='/our-doctors' className={`relative w-fit ${location.pathname === '/our-doctors' ? 'text-[#92E0E0] font-bold' : ''} after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-[#92E0E0] after:transition-all after:duration-300 hover:after:w-full ${location.pathname === '/our-doctors' ? 'after:w-full' : ''}`}>Our Doctors</Link>
                <Link to='/appointment' className={`relative w-fit ${location.pathname === '/appointment' ? 'text-[#92E0E0] font-bold' : ''} after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-[#92E0E0] after:transition-all after:duration-300 hover:after:w-full ${location.pathname === '/appointment' ? 'after:w-full' : ''}`}>Appointment</Link>
                <Link to='/blogs' className={`relative w-fit ${location.pathname === '/blogs' ? 'text-[#92E0E0] font-bold' : ''} after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-[#92E0E0] after:transition-all after:duration-300 hover:after:w-full ${location.pathname === '/blogs' ? 'after:w-full' : ''}`}>Blogs</Link>
                <Link to='/patient-stories' className={`relative w-fit ${location.pathname === '/patient-stories' ? 'text-[#92E0E0] font-bold' : ''} after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-[#92E0E0] after:transition-all after:duration-300 hover:after:w-full ${location.pathname === '/patient-stories' ? 'after:w-full' : ''}`}>Patient Stories</Link>
                <Link to='/gallery' className={`relative w-fit ${location.pathname === '/gallery' ? 'text-[#92E0E0] font-bold' : ''} after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-[#92E0E0] after:transition-all after:duration-300 hover:after:w-full ${location.pathname === '/gallery' ? 'after:w-full' : ''}`}>Gallery</Link>
                <Link to='/contact-us' className={`relative w-fit ${location.pathname === '/contact-us' ? 'text-[#92E0E0] font-bold' : ''} after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-[#92E0E0] after:transition-all after:duration-300 hover:after:w-full ${location.pathname === '/contact-us' ? 'after:w-full' : ''}`}>Contact us</Link>
                <Link to='/privacy-policy' className={`relative w-fit ${location.pathname === '/privacy-policy' ? 'text-[#92E0E0] font-bold' : ''} after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-[#92E0E0] after:transition-all after:duration-300 hover:after:w-full ${location.pathname === '/privacy-policy' ? 'after:w-full' : ''}`}>Privacy Policy</Link>
            </div>
            <div className='col-span-2 flex flex-col gap-2'>
                <a href='https://maps.app.goo.gl/1syipVGCs8CVZCb46' target='_blank' rel='noopener noreferrer' className="relative w-fit after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-[#92E0E0] after:transition-all after:duration-300 hover:after:w-full">#3,1st Cross Off 24th Main, 2nd Phase, J. P. Nagar, Bengaluru</a>
                <a href='tel:+919738545945' className="relative w-fit after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-[#92E0E0] after:transition-all after:duration-300 hover:after:w-full">+91 97385 45945</a>
                <a href='mailto:clinic.nypunyaaesthetic@gmail.com' className="relative w-fit after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-[#92E0E0] after:transition-all after:duration-300 hover:after:w-full">clinic.nypunyaaesthetic@gmail.com</a>
                {/* QR Code for Location */}
                <p className="text-sm text-white/80 mt-2 text-center md:text-left font-bold">Scan for Location</p>
                <img
                    src="/Nypunya.png" // Replace with the actual path to your QR code image
                    alt="QR Code for Nypunya Aesthetic Clinic Location"
                    className="w-32 h-32 mt-0 mx-auto md:mx-0 rounded-lg shadow-lg"
                />
            </div>
            {/* Copyright Section */}
            <div className="col-span-6 w-full border-t border-white/20 mt-8 pt-6 text-center text-sm text-white/80">
                Copyright © 2025 Nypunya Aesthetic Clinic. All rights reserved.
            </div>

            {showScrollModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                    <div className="relative bg-gray-900 text-white p-8 rounded-lg shadow-lg w-full max-w-md mx-4">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white flex items-center space-x-2 p-2 rounded-full"
                        >
                            <span className="text-sm font-semibold"></span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <h2 className="text-3xl font-bold mb-4">Talk to us, directly.</h2>
                        <p className="text-gray-400 mb-6">Drop your phone number, and we'll reach out to you.</p>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    placeholder="Name*"
                                    className="w-full p-3 rounded-md bg-white border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:border-blue-500"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="mb-6">
                                <input
                                    type="tel"
                                    placeholder="Phone number*"
                                    className="w-full p-3 rounded-md bg-white border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:border-blue-500"
                                    required
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                            </div>
                            <div className="mb-6">
                                <input
                                    type="email"
                                    placeholder="Email*"
                                    className="w-full p-3 rounded-md bg-white border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:border-blue-500"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-6">
                                <textarea
                                    placeholder="Describe your requirement*"
                                    className="w-full p-3 rounded-md bg-white border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:border-blue-500 form-textarea"
                                    rows="4"
                                    required
                                    value={requirement}
                                    onChange={(e) => setRequirement(e.target.value)}
                                ></textarea>
                            </div>
                            {/* Contact Information */}
                            <div className="mb-6 p-4 bg-gray-800 rounded-md text-sm leading-relaxed">
                                <p className="font-bold text-white mb-2">Contact Us:</p>
                                <p className="text-gray-300"><strong>Plastic Surgery:</strong>
                                    <a href="tel:+919380902110" className="text-blue-400 hover:underline ml-1">+91 9380902110</a>
                                    <a href="https://wa.me/9380902110" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline ml-2">(WhatsApp)</a>
                                </p>
                                <p className="text-gray-300 mt-1"><strong>Dermatology:</strong>
                                    <a href="tel:+919380902115" className="text-blue-400 hover:underline ml-1">+91 9380902115</a>
                                    <a href="https://wa.me/9380902115" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline ml-2">(WhatsApp)</a>
                                </p>
                                <p className="text-gray-300 mt-1"><strong>Email:</strong>
                                    <a href="mailto:clinic.nypunyaaesthetic@gmail.com" className="text-blue-400 hover:underline ml-1">clinic.nypunyaaesthetic@gmail.com</a>
                                </p>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded-md transition-colors"
                            >
                                Submit
                            </button>

                            <p className="text-xs text-gray-500 mt-4 text-center">
                                By clicking on "Submit" you are agreeing to our <a href="/terms-conditions" className="text-blue-400 hover:underline">Terms & Conditions</a> and
                                are allowing us <span className="text-blue-400 hover:underline" >Nypunya Aesthetic Clinic</span> and our service partners to get in touch with you.
                            </p>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Footer;
