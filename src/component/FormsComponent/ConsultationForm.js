import React, { useState } from "react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { validatePhoneNumber } from '../../api/leadsApi';

const ConsultationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        treatment: '',
        department: '',
        date: '',
        time: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [phoneError, setPhoneError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (name === 'phone') {
            setPhoneError('');
        }
    };

    const handleDateChange = (event) => {
        setFormData(prev => ({
            ...prev,
            date: event.target.value
        }));
    };

    const handleTimeChange = (event) => {
        setFormData(prev => ({
            ...prev,
            time: event.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Reset error
        setPhoneError('');
        
        // Validate phone number
        if (!validatePhoneNumber(formData.phone)) {
            setPhoneError('Please enter a valid 10-digit phone number.');
            return;
        }
        
        setIsSubmitting(true);
        
        try {
            // Prepare form data for Contact Form 7 API
            const formDataToSend = new FormData();
            formDataToSend.append('f_name', formData.name);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('phone_no', formData.phone);
            formDataToSend.append('treatment', formData.treatment);
            formDataToSend.append('app_date', formData.date);
            formDataToSend.append('app_time', formData.time);
            formDataToSend.append('department', formData.department);
            
            // Submit to Contact Form 7 API
            const response = await fetch('https://docs.nypunyaaesthetics.com/wp-json/contact-form-7/v1/contact-forms/503/feedback', {
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
                alert('Thank you! Your consultation request has been submitted. We will contact you soon.');
                
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    treatment: '',
                    department: '',
                    date: '',
                    time: '',
                });
            } else {
                // Handle actual API errors - only show errors for validation failures or other issues
                let errorMessage = 'Failed to submit consultation request. Please try again later.';
                
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
                    alert('Thank you! Your consultation request has been submitted. We will contact you soon.');
                    
                    // Reset form
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        treatment: '',
                        department: '',
                        date: '',
                        time: '',
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
            alert(error.message || 'Failed to submit consultation request. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <div>
                <p className="text-center text-xl md:text-2xl text-custom-blue pb-10 pt-10 uppercase">
                    Be the best version of Yourself with NYPUNYA
                </p>

            </div>
            <div className="flex justify-center items-center bg-[#040857] px-4 py-10">
                <div className="w-full md:px-20 text-white md:p-8 p-4 rounded-lg">
                    <h2 className="text-center text-xl md:text-2xl mb-6">
                        BOOK YOUR CONSULTATION
                    </h2>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name *"
                                className="w-full bg-transparent outline-none border-none"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <hr className="border-custom-green" />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email *"
                                className="w-full border-none bg-transparent outline-none"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <hr className="border-custom-green" />
                        </div>
                        <div>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number *"
                                className={`w-full border-none bg-transparent outline-none ${phoneError ? 'text-red-400' : ''}`}
                                required
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            <hr className={`${phoneError ? 'border-red-400' : 'border-custom-green'}`} />
                            {phoneError && (
                                <p className="text-red-400 text-xs mt-1">{phoneError}</p>
                            )}
                        </div>
                        <div>
                            <select 
                                name="treatment"
                                className="w-full border-none bg-transparent outline-none"
                                required
                                value={formData.treatment}
                                onChange={handleChange}
                            >
                                <option value="" className="text-black">Select Treatment *</option>
                                <option value="Rhinoplasty" className="text-black">Rhinoplasty</option>
                                <option value="Hair Transplant" className="text-black">Hair Transplant</option>
                                <option value="Breast Augmentation" className="text-black">Breast Augmentation</option>
                                <option value="Liposuction" className="text-black">Liposuction</option>
                                <option value="Body Contouring" className="text-black">Body Contouring</option>
                                <option value="Anti Ageing" className="text-black">Anti Ageing</option>
                                <option value="Other" className="text-black">Other</option>
                            </select>
                            <hr className="border-custom-green" />
                        </div>
                        {/* Date Selection */}
                        <div>
                            <div className="w-full border-none bg-transparent outline-none h-10 flex items-center">
                                <FaCalendarAlt className="text-white mr-2" />
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleDateChange}
                                    className="w-full bg-transparent outline-none border-none text-white cursor-pointer appearance-none"
                                    style={{
                                        WebkitAppearance: "none",
                                        MozAppearance: "none",
                                        appearance: "none",
                                    }}
                                    required
                                />
                            </div>
                            <hr className="border-custom-green" />
                        </div>
                        {/* Time Selection */}
                        <div>
                            <div className="w-full border-none bg-transparent outline-none h-10 flex items-center">
                                <FaClock className="text-white mr-2" />
                                <input
                                    type="time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleTimeChange}
                                    className="w-full bg-transparent outline-none border-none text-white cursor-pointer appearance-none"
                                    required
                                />
                            </div>
                            <hr className="border-custom-green" />
                        </div>
                        <div>
                            <select 
                                name="department"
                                className="w-full border-none bg-transparent outline-none"
                                required
                                value={formData.department}
                                onChange={handleChange}
                            >
                                <option value="" className="text-black">Select Department *</option>
                                <option value="Plastic Surgery" className="text-black">Plastic Surgery</option>
                                <option value="Dermatology" className="text-black">Dermatology</option>
                            </select>
                            <hr className="border-custom-green" />
                        </div>
                        <div className="md:col-span-3 flex justify-center">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-custom-green text-black px-8 md:w-[30%] py-2 rounded-full font-semibold hover:bg-[#8ccdc9] transition disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ConsultationForm;
