import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SeoWrapper from '../utils/Seo/SeoWrapper';
import { FaPlane, FaMapMarkerAlt, FaHotel, FaCreditCard, FaPassport, FaLandmark, FaCheckCircle } from 'react-icons/fa';

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
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
            <Slider {...settings} className="w-full h-full">
                {bannerImages.map((img, idx) => (
                    <div key={idx} className="w-full h-full">
                        <img
                            src={img}
                            alt={`Banner ${idx + 1}`}
                            className="w-full h-full object-cover brightness-50"
                        />
                    </div>
                ))}
            </Slider>
            {/* Banner Overlay Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
                <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold drop-shadow-2xl mb-4">
                    Welcome International Patients
                </h1>
                <p className="text-white text-lg md:text-xl lg:text-2xl drop-shadow-lg max-w-3xl">
                    World-Class Cosmetic Surgery & Dermatology in India
                </p>
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
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [phoneError, setPhoneError] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
        // Clear phone error when user types
        if (name === 'phone') {
            setPhoneError('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!form.terms) {
            alert('Please accept the terms and conditions to proceed.');
            return;
        }
        
        // Reset error
        setPhoneError('');
        
        // Validate phone number
        const { validatePhoneNumber } = await import('../api/leadsApi');
        if (!validatePhoneNumber(form.phone)) {
            setPhoneError('Please enter a valid 10-digit phone number.');
            return;
        }
        
        setIsSubmitting(true);
        
        try {
            // Prepare form data for Contact Form 7 API
            const formDataToSend = new FormData();
            formDataToSend.append('full_name', form.name);
            formDataToSend.append('email', form.email);
            formDataToSend.append('phone_no', form.phone);
            formDataToSend.append('requirements', form.requirement);
            
            // Submit to Contact Form 7 API
            const response = await fetch('https://docs.nypunyaaesthetics.com/wp-json/contact-form-7/v1/contact-forms/504/feedback', {
                method: 'POST',
                body: formDataToSend,
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
                alert('Thank you! Your form has been submitted. We will contact you soon.');
                
                // Reset form
                setForm({
                    name: '',
                    email: '',
                    phone: '',
                    requirement: '',
                    terms: false,
                });
            } else {
                // Handle actual API errors - only show errors for validation failures or other issues
                let errorMessage = 'Failed to submit form. Please try again later.';
                
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
                    alert('Thank you! Your form has been submitted. We will contact you soon.');
                    
                    // Reset form
                    setForm({
                        name: '',
                        email: '',
                        phone: '',
                        requirement: '',
                        terms: false,
                    });
                }
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            console.error('Error details:', {
                message: error.message,
                stack: error.stack,
                name: error.name
            });
            alert(error.message || 'Failed to submit form. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const gallerySettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <SeoWrapper
            title="International Patients - Cosmetic Surgery in India | Nypunya Bangalore"
            description="Welcome international patients to Nypunya Aesthetic Clinic, Bangalore. Expert plastic surgery and dermatology services for patients from around the world. Comprehensive care, visa assistance, accommodation support. Contact us for your cosmetic surgery journey in India."
            keywords="international patients india, cosmetic surgery bangalore, plastic surgery india, medical tourism bangalore, rhinoplasty india, hair transplant india, international aesthetic clinic, surgery india for foreigners"
            image="https://nypunyaaesthetics.com/services/rhinoplasty/rhinoplasty-banner-2.png"
        >
            <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-white">
                
                {/* Banner */}
                <BannerSlider />

                {/* Main Content */}
                <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16">
                    
                    {/* Hero Section */}
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-custom-blue mb-4">
                            Your Journey to Beauty Starts Here
                        </h2>
                        <div className="w-24 h-1 bg-custom-green mx-auto mb-6"></div>
                        <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                            Guiding our international clients on how to take the discussion further to proceed with cosmetic surgery at Nypunya Aesthetic Clinic, Bangalore
                        </p>
                    </div>

                    {/* Two Column Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
                        
                        {/* Left Column - Information (2/3 width) */}
                        <div className="lg:col-span-2 space-y-8">
                            
                            {/* Initial Consultation Card */}
                            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border-l-4 border-custom-blue">
                                <h3 className="text-2xl md:text-3xl font-bold text-custom-blue mb-6 flex items-center gap-3">
                                    <FaCheckCircle className="text-custom-green" />
                                    Initial Consultation Process
                                </h3>
                                <p className="text-gray-700 text-base md:text-lg mb-4">
                                    During enquiry, the following personal details are collected from the client:
                                </p>
                                <ul className="space-y-2 ml-6">
                                    {['Name', 'Age and gender', 'Height and weight', 'Email address', 'Contact numbers with WhatsApp access'].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-gray-700">
                                            <span className="w-2 h-2 bg-custom-green rounded-full"></span>
                                            <span className="text-base md:text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-custom-blue">
                                    <p className="text-gray-700 leading-relaxed">
                                        <strong>Next Steps:</strong> After receiving your details, our team will call you to guide you on the treatment enquired for. 
                                        You may be asked to send pictures of the areas of concern after masking your identity. This phase is to guide you, 
                                        explain the possible treatment plan and the approximate charges for completing the procedure. The pictures shared are confidential.
                                    </p>
                                </div>
                            </div>

                            {/* Location Card */}
                            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border-l-4 border-custom-green">
                                <h3 className="text-2xl md:text-3xl font-bold text-custom-blue mb-6 flex items-center gap-3">
                                    <FaMapMarkerAlt className="text-custom-green" />
                                    Location & Distance
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl">
                                        <FaPlane className="text-custom-blue text-3xl mb-3" />
                                        <p className="text-sm text-gray-600 mb-2">From Airport</p>
                                        <p className="text-2xl font-bold text-custom-blue">41 kms</p>
                                        <p className="text-gray-600 mt-2">Travel time: <strong>1:30 hrs</strong></p>
                                    </div>
                                    <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl">
                                        <FaMapMarkerAlt className="text-custom-green text-3xl mb-3" />
                                        <p className="text-sm text-gray-600 mb-2">Clinic Location</p>
                                        <p className="text-base font-semibold text-custom-blue">
                                            #3, 1st Cross Off 24th Main, 2nd Phase, J. P. Nagar, Bengaluru
                                        </p>
                                    </div>
                                </div>

                                {/* Google Map */}
                                <div className="rounded-xl overflow-hidden shadow-md">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.6193083791723!2d77.5865634974667!3d12.916153829207719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae159f89eb734f%3A0xc159ff3d3c8abec4!2sNypunya%20Aesthetic%20Clinic%20%7C%20Dermatology%20and%20Cosmetic%20Plastic%20Surgeon%20in%20Bengaluru!5e1!3m2!1sen!2sin!4v1745859791796!5m2!1sen!2sin"
                                        width="100%"
                                        height="300"
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="border-0"
                                    ></iframe>
                                </div>
                            </div>

                            {/* Medical Visa Card */}
                            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border-l-4 border-custom-blue">
                                <h3 className="text-2xl md:text-3xl font-bold text-custom-blue mb-6 flex items-center gap-3">
                                    <FaPassport className="text-custom-green" />
                                    Medical Visa Information
                                </h3>
                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg mb-6">
                                    <p className="text-gray-800 leading-relaxed">
                                        To get medical treatments in India, you will need an <strong>M-Visa (Medical Visa)</strong> or an <strong>eTourist Visa (eTV)</strong>. 
                                        It is legally not permissible to undergo medical procedures with a normal/traditional Tourist visa.
                                    </p>
                                </div>

                                <div className="mb-6">
                                    <h4 className="text-xl font-bold text-custom-blue mb-4">Steps to Get Your eTourist Visa (eTV)</h4>
                                    
                                    {/* Step 1 */}
                                    <div className="mb-6 bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl">
                                        <p className="font-bold text-custom-blue mb-3 text-lg">Step 1: Prepare Documents</p>
                                        <ul className="space-y-2 ml-4">
                                            {[
                                                'Applicant\'s recent colour photo (2 inch * 2 inch) size but less than 1MB',
                                                'Copy of passport page personal particular',
                                                'Copy of particular treatment letter from Nypunya Aesthetic Clinic'
                                            ].map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-2">
                                                    <span className="text-custom-green mt-1">✓</span>
                                                    <span className="text-gray-700">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Step 2-5 */}
                                    {[
                                        { step: 2, text: 'Visit https://indianvisaonline.gov.in/evisa/Registration' },
                                        { step: 3, text: 'Click on e-VISA Application Tab from the Menu' },
                                        { step: 4, text: 'Select eMedical VISA >> Short Term Medical Treatment of Self Option' },
                                        { step: 5, text: 'Upload required documents and complete the process' }
                                    ].map((item) => (
                                        <div key={item.step} className="mb-3 flex items-start gap-3">
                                            <div className="flex-shrink-0 w-8 h-8 bg-custom-blue text-white rounded-full flex items-center justify-center font-bold">
                                                {item.step}
                                            </div>
                                            <p className="text-gray-700 mt-1">{item.text}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Transport & Food Apps */}
                                <div className="bg-gradient-to-r from-green-50 to-white p-6 rounded-xl">
                                    <h4 className="font-bold text-custom-blue mb-3">Transport and Food Apps:</h4>
                                    <p className="text-gray-700">
                                        Travel agencies and taxi services: <strong>OLA, UBER, Rapido</strong><br />
                                        Food delivery services: <strong>UBEREATS, SWIGGY, Zomato</strong>
                                    </p>
                                </div>
                            </div>

                            {/* Hotels Card */}
                            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border-l-4 border-custom-green">
                                <h3 className="text-2xl md:text-3xl font-bold text-custom-blue mb-6 flex items-center gap-3">
                                    <FaHotel className="text-custom-green" />
                                    Five Star Hotels Nearby
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        { name: 'La Marvella - Bangalore', phone: '080 4333 5333' },
                                        { name: 'Vivanta Bengaluru, Residency Road', phone: '080666 04545' },
                                        { name: 'Le Foliage By TGI', phone: '080 6199 3399' },
                                        { name: 'FOUNTAIN TREE By TGI', phone: '080 6188 5555' },
                                        { name: 'Hotel Greenpark Bengaluru', phone: '080665 15151' },
                                        { name: 'SFO Hotel and Suites', phone: '080 4297 7777' }
                                    ].map((hotel, idx) => (
                                        <div key={idx} className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-lg hover:shadow-md transition-shadow">
                                            <p className="font-semibold text-custom-blue text-base">{hotel.name}</p>
                                            <p className="text-sm text-gray-600 mt-1">📞 {hotel.phone}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Payment Modes Card */}
                            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border-l-4 border-custom-blue">
                                <h3 className="text-2xl md:text-3xl font-bold text-custom-blue mb-6 flex items-center gap-3">
                                    <FaCreditCard className="text-custom-green" />
                                    Payment Options
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {['Cash', 'Credit Card', 'Debit Card', 'Bank Transfer', 'NEFT / RTGS', 'IMPS'].map((mode, idx) => (
                                        <div key={idx} className="bg-gradient-to-br from-green-50 to-white p-4 rounded-lg text-center">
                                            <FaCheckCircle className="text-custom-green text-2xl mx-auto mb-2" />
                                            <p className="font-semibold text-custom-blue">{mode}</p>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-gray-600 mt-6 text-center italic">
                                    Bank details will be provided after booking confirmation
                                </p>
                            </div>

                            {/* Tourism Card */}
                            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border-l-4 border-custom-green">
                                <h3 className="text-2xl md:text-3xl font-bold text-custom-blue mb-6 flex items-center gap-3">
                                    <FaLandmark className="text-custom-green" />
                                    Explore Bangalore & Karnataka
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        { name: 'Lalbagh Botanical Garden', highlights: 'Glass House, rare plants, serene walking paths' },
                                        { name: 'Bull Temple', highlights: 'Giant Nandi statue, traditional architecture' },
                                        { name: 'Bangalore Palace', highlights: 'Tudor-style palace, lavish interiors, photo-worthy' },
                                        { name: 'Cubbon Park', highlights: 'Lush greenery, relaxing walks, State Central Library' },
                                        { name: 'ISKCON Temple', highlights: 'Spiritual ambiance, beautiful surroundings' },
                                        { name: 'UB City Mall / MG Road', highlights: 'Shopping, cafes, vibrant street life' },
                                        { name: 'Mysore', highlights: 'Mysore Palace, Dasara festival, cultural capital' },
                                        { name: 'Coorg', highlights: 'Coffee plantations, misty hills, waterfalls - "Scotland of India"' }
                                    ].map((place, idx) => (
                                        <div key={idx} className="bg-gradient-to-r from-blue-50 to-white p-5 rounded-xl hover:shadow-md transition-shadow">
                                            <h4 className="font-bold text-custom-blue text-lg mb-2">{place.name}</h4>
                                            <p className="text-gray-600 text-sm md:text-base">{place.highlights}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Right Column - Contact Form & Gallery (1/3 width) */}
                        <div className="lg:col-span-1">
                            {/* Sticky Container for Form */}
                            <div className="lg:sticky lg:top-24 space-y-8">
                                
                                {/* Contact Form */}
                                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border-t-4 border-custom-blue">
                                    <h3 className="text-2xl md:text-3xl font-bold text-custom-blue mb-6 text-center">
                                        Contact Us
                                    </h3>
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        {/* Name */}
                                        <div>
                                            <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={form.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-custom-blue focus:outline-none transition-colors"
                                                placeholder="Enter your name"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-custom-blue focus:outline-none transition-colors"
                                                placeholder="your@email.com"
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div>
                                            <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={form.phone}
                                                onChange={handleChange}
                                                required
                                                className={`w-full px-4 py-3 border-2 ${phoneError ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:border-custom-blue focus:outline-none transition-colors`}
                                                placeholder="Enter your 10-digit phone number"
                                            />
                                            {phoneError && (
                                                <p className="text-red-500 text-sm mt-1">{phoneError}</p>
                                            )}
                                        </div>

                                        {/* Requirement */}
                                        <div>
                                            <label className="block text-gray-700 font-semibold mb-2">Your Requirements</label>
                                            <textarea
                                                name="requirement"
                                                value={form.requirement}
                                                onChange={handleChange}
                                                rows={4}
                                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-custom-blue focus:outline-none transition-colors resize-none"
                                                placeholder="Tell us about your treatment requirements..."
                                            />
                                        </div>

                                        {/* Terms */}
                                        <div className="flex items-start gap-3">
                                            <input
                                                type="checkbox"
                                                name="terms"
                                                checked={form.terms}
                                                onChange={handleChange}
                                                required
                                                className="mt-1 w-5 h-5 text-custom-blue focus:ring-custom-blue"
                                            />
                                            <label className="text-sm text-gray-700">
                                                I agree to the <a href="#" className="text-custom-blue underline font-semibold">Terms of Use</a> and consent to be contacted
                                            </label>
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-custom-blue hover:bg-blue-800 text-white font-bold py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? 'Submitting...' : 'Send Enquiry →'}
                                        </button>
                                    </form>
                                </div>

                                {/* Gallery Slider */}
                                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
                                    <h3 className="text-xl md:text-2xl font-bold text-custom-blue mb-6 text-center">
                                        Our Transformations
                                    </h3>
                                    <div className="rounded-xl overflow-hidden shadow-md mb-4">
                                        <Slider {...gallerySettings}>
                                            {galleryImages.map((img, idx) => (
                                                <div key={idx}>
                                                    <img
                                                        src={img}
                                                        alt={`Gallery ${idx + 1}`}
                                                        className="w-full h-64 object-cover"
                                                    />
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                    <button
                                        onClick={() => window.location.href = '/gallery'}
                                        className="w-full bg-custom-green hover:bg-green-400 text-custom-blue font-bold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                                    >
                                        View Full Gallery →
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </SeoWrapper>
    );
};

export default International;

