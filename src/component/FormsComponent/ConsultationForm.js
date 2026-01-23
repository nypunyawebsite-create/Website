import React, { useState } from "react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { submitLead, createLeadFromForm, validatePhoneNumber } from '../../api/leadsApi';
import { LEADS_API_TOKEN } from '../../Config';

const ConsultationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        treatment: '',
        department: '',
        date: '',
        time: '',
        date2: '',
        time2: '',
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
            // Create summary from form data
            const summary = `Consultation Request - Treatment: ${formData.treatment || 'Not specified'}, Department: ${formData.department || 'Not specified'}, Preferred Date: ${formData.date || 'Not specified'}, Preferred Time: ${formData.time || 'Not specified'}`;
            
            // Create lead object from form data
            const leadData = createLeadFromForm(
                { 
                    name: formData.name, 
                    phone: formData.phone, 
                    email: formData.email,
                    summary: summary
                },
                {
                    source: 'Consultation Form',
                    tags: ['website', 'consultation'],
                    dynamicFields: {
                        treatment: formData.treatment,
                        department: formData.department,
                        preferredDate: formData.date,
                        preferredTime: formData.time,
                    }
                }
            );
            
            // Submit lead to API
            const response = await submitLead(leadData, {}, LEADS_API_TOKEN);
            
            // Success
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
                date2: '',
                time2: '',
            });
        } catch (error) {
            console.error('Error submitting form:', error);
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
