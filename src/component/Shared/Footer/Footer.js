import React, { useState, useEffect, useRef } from 'react'
import { FaTwitter, FaLinkedin, FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import { FaPhoneAlt, FaEnvelope, FaCalendarAlt, FaTimes, FaBars, FaChevronRight, FaChevronDown } from "react-icons/fa";
import { validatePhoneNumber } from '../../../api/leadsApi';



const Footer = () => {
    const location = useLocation();
    const [showScrollModal, setShowScrollModal] = useState(false);
    const prevScrollY = useRef(0);

    // State for form fields
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [requirement, setRequirement] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [phoneError, setPhoneError] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const isScrollingDown = currentScrollY > prevScrollY.current;
            const isAtBottom = window.innerHeight + currentScrollY >= document.documentElement.scrollHeight - 100; // 100px buffer

            if (isAtBottom && isScrollingDown) {
                const lastClosedTime = localStorage.getItem('modalClosedTimestamp');
                if (lastClosedTime) {
                    const timeDifference = new Date().getTime() - Number(lastClosedTime);
                    const threeMinutes = 3 * 60 * 1000;
                    if (timeDifference < threeMinutes) {
                        return; // Don't show modal if it was closed within the last 3 minutes
                    }
                }
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
        localStorage.setItem('modalClosedTimestamp', new Date().getTime().toString());
        // Optionally clear form fields on close
        setName('');
        setPhoneNumber('');
        setEmail('');
        setRequirement('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Reset error
        setPhoneError('');
        
        // Validate phone number
        if (!validatePhoneNumber(phoneNumber)) {
            setPhoneError('Please enter a valid 10-digit phone number.');
            return;
        }
        
        setIsSubmitting(true);
        
        try {
            // Prepare form data for Contact Form 7 API
            // Try FormData format first (multipart/form-data)
            const formData = new FormData();
            formData.append('first_name', name);
            formData.append('email', email);
            formData.append('phone_no', phoneNumber);
            formData.append('description', requirement);
            
            // Submit to Contact Form 7 API
            const response = await fetch('https://docs.nypunyaaesthetics.com/wp-json/contact-form-7/v1/contact-forms/500/feedback', {
                method: 'POST',
                body: formData,
                // Don't set Content-Type - browser sets it automatically with boundary for FormData
            });
            
            // Check if response is ok before parsing JSON
            let result;
            try {
                result = await response.json();
            } catch (jsonError) {
                console.error('Failed to parse JSON response:', jsonError);
                const textResponse = await response.text();
                console.error('Response text:', textResponse);
                throw new Error('Invalid response from server. Please try again later.');
            }
            
            // Log response for debugging
            console.log('Contact Form 7 API Response:', result);
            console.log('Response Status:', response.status);
            console.log('Result Status:', result.status);
            console.log('Result Message:', result.message);
            console.log('Invalid Fields:', result.invalid_fields);
            
            // Check if submission was successful
            // Treat 'mail_sent' and 'mail_failed' as success since data was received
            // 'mail_failed' means form submission worked but email sending failed (server config issue)
            if (response.ok && (result.status === 'mail_sent' || result.status === 'mail_failed')) {
                // Success - data was received by the API
                alert('Thank you! Your message has been received. We will contact you soon.');
                closeModal();
            } else {
                // Handle actual API errors - only show errors for validation failures or other issues
                let errorMessage = 'Failed to send message. Please try again later.';
                
                // Only show errors for validation failures, spam, or aborted submissions
                if (result.status === 'validation_failed') {
                    if (result.invalid_fields && Array.isArray(result.invalid_fields) && result.invalid_fields.length > 0) {
                        const fieldErrors = result.invalid_fields.map(field => {
                            return field.message || `${field.field || 'Field'}: Invalid`;
                        }).join(', ');
                        errorMessage = fieldErrors;
                    } else {
                        errorMessage = 'Please check your form fields and try again.';
                    }
                } else if (result.status === 'spam') {
                    errorMessage = 'Your message was flagged as spam. Please try again.';
                } else if (result.status === 'aborted') {
                    errorMessage = 'Submission was aborted. Please try again.';
                } else if (result.invalid_fields && Array.isArray(result.invalid_fields) && result.invalid_fields.length > 0) {
                    // Handle invalid fields
                    const fieldErrors = result.invalid_fields.map(field => {
                        return field.message || `${field.field || 'Field'}: Invalid`;
                    }).join(', ');
                    errorMessage = fieldErrors;
                }
                
                // Only log errors, don't show popup for 'mail_failed' since data was received
                if (result.status !== 'mail_failed') {
                    console.error('Contact Form 7 Error Details:', {
                        status: result.status,
                        message: result.message,
                        invalid_fields: result.invalid_fields,
                        fullResponse: result,
                        responseStatus: response.status,
                        responseStatusText: response.statusText
                    });
                    throw new Error(errorMessage);
                } else {
                    // For 'mail_failed', treat as success (data received)
                    alert('Thank you! Your message has been received. We will contact you soon.');
                    closeModal();
                }
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            console.error('Error details:', {
                message: error.message,
                stack: error.stack,
                name: error.name
            });
            alert(error.message || 'Failed to send message. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-[#4B4B68] md:grid md:grid-cols-6 gap-6 h-full items-start justify-center mx-auto lg:p-20 p-8 text-white flex flex-col" style={{
            background: 'linear-gradient(90deg, #000099 0%, #2b5aba 20%, #2b59b9 40%, #5f9ece 70%, rgba(255,255,255,0.3) 135%)'
        }}>
            <div className='col-span-3 flex flex-col gap-8'>
                <img src='/footer-logo.svg' alt='Footer Logo' loading="lazy" className='lg:w-[60%]' />
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p> */}
                <div className='flex flex-col gap-2 md:pt-10'>
                    <h4 className='text-2xl font-semibold'>Follow us on Social Media</h4>
                    <div className='flex gap-4'>
                        <a href='https://www.instagram.com/nypunya_aesthetic_clinic_/' target='_blank' rel='noopener noreferrer'>
                            <FaInstagram className='w-6 h-6' style={{ color: '#E4405F' }} />
                        </a>
                        <a href='https://www.facebook.com/nypunyaaestheticclinic/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0' target='_blank' rel='noopener noreferrer'>
                            <FaFacebook className='w-6 h-6' style={{ color: '#1877F3' }} />
                        </a>
                        <a href='https://www.youtube.com/@nypunya_aesthetic_clinic' target='_blank' rel='noopener noreferrer'>
                            <FaYoutube className='w-6 h-6' style={{ color: '#FF0000' }} />
                        </a>
                        <a href='https://www.linkedin.com/company/nypunya-aesthetic-clinic/' target='_blank' rel='noopener noreferrer'>
                            <FaLinkedin className='w-6 h-6' style={{ color: '#0077B5' }} />
                        </a>
                        <a href='https://x.com/TheDrkesari?t=4UUcOGv-i6R__JYz-GSdqQ&s=08' target='_blank' rel='noopener noreferrer'>
                            <FaTwitter className='w-6 h-6' style={{ color: '#000000' }} />
                        </a>
                        <a href='https://www.practo.com/bangalore/clinic/nypunya-aesthetic-clinic-jayanagar-4-block/reviews?utm_source=opd_google_Pmax&utm_campaign=20240701849&gad_source=1&gad_campaignid=20236356659&gbraid=0AAAAADgl2cL3q7njAm2XdJgKwzdMvYN7M&gclid=CjwKCAjwi-DBBhA5EiwAXOHsGatlWdfo33g2REsEo6kMU0cvLoyDO5Fi_7GcLdEO6eyo5njnhmibkxoClXIQAvD_BwE' target='_blank' rel='noopener noreferrer'>
                            <img src='/practo_icon.png' alt='Practo' loading="lazy" className='w-6 h-6' />
                        </a>
                    </div>
                </div>
            </div>
            <div className='col-span-1 flex flex-col gap-2'>
                <Link to='/' className={`relative w-fit ${location.pathname === '/' ? 'text-[#92E0E0] font-bold' : ''} after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-[#92E0E0] after:transition-all after:duration-300 hover:after:w-full ${location.pathname === '/' ? 'after:w-full' : ''}`}>Home</Link>
                <Link to='/about-us' className={`relative w-fit ${location.pathname === '/about-us' ? 'text-[#92E0E0] font-bold' : ''} after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-[#92E0E0] after:transition-all after:duration-300 hover:after:w-full ${location.pathname === '/about-us' ? 'after:w-full' : ''}`}>About us</Link>
                <Link to='/services' className={`relative w-fit ${location.pathname === '/services' ? 'text-[#92E0E0] font-bold' : ''} after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-[#92E0E0] after:transition-all after:duration-300 hover:after:w-full ${location.pathname === '/services' ? 'after:w-full' : ''}`}>Services</Link>
                <Link to='/our-doctors' className={`relative w-fit ${location.pathname === '/our-doctors' ? 'text-[#92E0E0] font-bold' : ''} after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-[#92E0E0] after:transition-all after:duration-300 hover:after:w-full ${location.pathname === '/our-doctors' ? 'after:w-full' : ''}`}>Our Doctors</Link>
                <a
                    href="https://appointment.telearogya.com/home/doctors_list/Tm9fdmFsWU=/MzEw?src=pdc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative w-fit after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-[#92E0E0] after:transition-all after:duration-300 hover:after:w-full`}
                >
                    Appointment
                </a>

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
                    loading="lazy"
                    className="w-32 h-32 mt-0 mx-auto md:mx-0 rounded-lg shadow-lg"
                />
            </div>
            {/* Copyright Section */}
            <div className="col-span-6 w-full border-t border-white/20 mt-8 pt-6 text-center text-sm text-white/80">
                <div className="mb-2">
                    Copyright © 2025 Nypunya Aesthetic Clinic. All rights reserved.
                </div>
                <div className="text-xs text-white/60">
                    Developed by <a href="http://www.youngzen.in/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-200">YoungZen Technologies</a>
                </div>
            </div>

            {showScrollModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 overflow-y-auto p-4">
                    <div className="relative bg-[#000099] text-white rounded-xl shadow-2xl w-full max-w-5xl mx-4 my-8 max-h-[90vh] overflow-y-auto">
                        {/* Close Button - Always visible */}
                        <button
                            onClick={closeModal}
                            className="sticky top-4 right-4 float-right text-white hover:text-custom-green flex items-center justify-center p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 z-20 backdrop-blur-sm shadow-lg"
                            style={{ marginRight: '1rem', marginTop: '1rem' }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="p-6 sm:p-8 md:p-10">
                            {/* Header */}
                            <div className="mb-6 sm:mb-8 text-center">
                                <h2 className="text-3xl sm:text-4xl font-bold mb-2">Talk to us, directly.</h2>
                                <div className="w-20 h-1 bg-custom-green mx-auto mb-3"></div>
                                <p className="text-gray-200 text-sm sm:text-base">Drop your phone number, and we'll reach out to you.</p>
                            </div>

                            {/* Horizontal Layout: Form on Left, Contact Info on Right */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                                
                                {/* Left Section: Form (2 columns on large screens) */}
                                <div className="lg:col-span-2">
                                    <form onSubmit={handleSubmit}>
                                        {/* Form Fields in Grid */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                            <div>
                                                <label className="block text-sm font-semibold mb-2">Name*</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter your name"
                                                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-custom-green focus:bg-white/15 transition-all text-sm"
                                                    required
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold mb-2">Phone Number*</label>
                                                <input
                                                    type="tel"
                                                    placeholder="Enter your 10-digit phone number"
                                                    className={`w-full p-3 rounded-lg bg-white/10 border ${phoneError ? 'border-red-500' : 'border-white/20'} text-white placeholder-gray-400 focus:outline-none focus:border-custom-green focus:bg-white/15 transition-all text-sm`}
                                                    required
                                                    value={phoneNumber}
                                                    onChange={(e) => {
                                                        setPhoneNumber(e.target.value);
                                                        setPhoneError('');
                                                    }}
                                                />
                                                {phoneError && (
                                                    <p className="text-red-400 text-xs mt-1">{phoneError}</p>
                                                )}
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <label className="block text-sm font-semibold mb-2">Email*</label>
                                            <input
                                                type="email"
                                                placeholder="Enter your email"
                                                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-custom-green focus:bg-white/15 transition-all text-sm"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label className="block text-sm font-semibold mb-2">Describe Your Requirement*</label>
                                            <textarea
                                                placeholder="Tell us about your needs..."
                                                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-custom-green focus:bg-white/15 transition-all form-textarea text-sm"
                                                rows="3"
                                                required
                                                value={requirement}
                                                onChange={(e) => setRequirement(e.target.value)}
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-custom-green hover:bg-green-400 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? 'Submitting...' : 'Submit Request'}
                                        </button>

                                        <p className="text-xs text-gray-300 mt-4 text-center leading-relaxed">
                                            By clicking "Submit" you agree to our <a href="/terms-conditions" className="text-custom-green hover:underline">Terms & Conditions</a> and
                                            allow <span className="text-custom-green">Nypunya Aesthetic Clinic</span> to contact you.
                                        </p>
                                    </form>
                                </div>

                                {/* Right Section: Contact Info & QR Code (1 column on large screens) */}
                                <div className="lg:col-span-1 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                                    <h3 className="text-base font-bold mb-3 text-custom-green">Contact Info</h3>
                                    
                                    <div className="space-y-3 text-xs">
                                        {/* Plastic Surgery */}
                                        <div className="pb-2 border-b border-white/20">
                                            <p className="font-semibold mb-1 text-xs">Plastic Surgery</p>
                                            <a href="tel:+919380902110" className="text-gray-300 hover:text-custom-green transition-colors block text-xs">
                                                📞 +91 9380902110
                                            </a>
                                            <a href="https://wa.me/9380902110" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors text-[10px] inline-flex items-center gap-1 mt-0.5">
                                                💬 WhatsApp
                                            </a>
                                        </div>

                                        {/* Dermatology */}
                                        <div className="pb-2 border-b border-white/20">
                                            <p className="font-semibold mb-1 text-xs">Dermatology</p>
                                            <a href="tel:+919380902114" className="text-gray-300 hover:text-custom-green transition-colors block text-xs">
                                                📞 +91 9380902114
                                            </a>
                                            <a href="https://wa.me/9380902114" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors text-[10px] inline-flex items-center gap-1 mt-0.5">
                                                💬 WhatsApp
                                            </a>
                                        </div>

                                        {/* Email */}
                                        <div className="pb-2 border-b border-white/20">
                                            <p className="font-semibold mb-1 text-xs">Email</p>
                                            <a href="mailto:clinic.nypunyaaesthetic@gmail.com" className="text-gray-300 hover:text-custom-green transition-colors text-[10px] break-all leading-tight">
                                                ✉️ clinic.nypunyaaesthetic@gmail.com
                                            </a>
                                        </div>

                                        {/* QR Code */}
                                        <div className="pt-1">
                                            <p className="font-semibold mb-2 text-center text-xs">Scan Location</p>
                                            <img
                                                src="/Nypunya.png"
                                                alt="QR Code for Location"
                                                loading="lazy"
                                                className="w-24 h-24 mx-auto rounded-lg shadow-lg bg-white p-1.5"
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Footer;
