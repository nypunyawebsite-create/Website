import React, { useState } from "react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

const RhinoplastyServices = ({ scrollTo }) => {
    const [activeStep, setActiveStep] = useState(2);
    const [activeFAQ, setActiveFAQ] = useState(1);

    const handleStepClick = (stepNumber) => {
        setActiveStep(stepNumber);
    };

    const handleFAQToggle = (faqNumber) => {
        setActiveFAQ(activeFAQ === faqNumber ? null : faqNumber);
    };

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };
    return (
        <div>
            {/* Main Title Section - Full Screen */}
            <div className="w-full py-10 px-4">
                <div className="container mx-auto">
                    <div className="mb-1">
                        <h1 className="text-4xl font-bold text-black">
                            BEST RHINOPLASTY HOSPITAL IN BANGALORE: EXPERT NOSE JOB & CARE
                        </h1>
                    </div>
                </div>
            </div>

            {/* Main Content Section - Two Columns - Full Screen */}
            <div className="w-full py-2 px-4">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        {/* Left Column - Text Content */}
                        <div className="space-y-6">
                            <div className="prose max-w-none">
                                <p className="text-lg text-black leading-relaxed">
                                    Your nose is the center of your face and plays a crucial role in your overall appearance and confidence.
                                    A well-proportioned nose can enhance facial harmony and boost self-esteem. When considering rhinoplasty,
                                    it's important to choose a clinic that understands both the aesthetic and functional aspects of this procedure.
                                </p>

                                <p className="text-lg text-black leading-relaxed">
                                    Rhinoplasty is more than just beauty – it's about confidence and harmony. At Nypunya Aesthetic Clinic,
                                    we understand that a beautiful, functional nose is the foundation of facial balance and confidence.
                                    Our approach combines artistic vision with medical expertise to deliver results that enhance your natural beauty.
                                </p>

                                <p className="text-lg text-black leading-relaxed">
                                    Nypunya Aesthetic Clinic is recognized as the best Rhinoplasty Hospital in Bangalore, India.
                                    Our expert team combines cutting-edge technology with years of experience to deliver exceptional results
                                    that exceed expectations. We prioritize patient safety, comfort, and satisfaction in every procedure.
                                </p>

                                <p className="text-lg text-black leading-relaxed">
                                    Dr. Prashantha Kesari brings over 20 years of dedication to rhinoplasty and aesthetic medicine.
                                    Having trained with leading institutions worldwide and presented at international conferences,
                                    he has refined his techniques to provide safe, effective, and natural-looking results for every patient.
                                </p>
                                <p className="text-lg text-black leading-relaxed">
                                    Rhinoplasty is more than just beauty – it's about confidence and harmony. At Nypunya Aesthetic Clinic, we understand that a beautiful, functional nose is the foundation of facial balance and confidence. Our approach combines artistic vision with medical expertise to deliver results that enhance your natural beauty.
                                </p>
                            </div>
                        </div>

                        {/* Right Column - Large Image */}
                        <div className="flex items-center justify-center">
                            <div className="relative rounded-2xl overflow-hidden">
                                <img
                                    src="/services/rhinoplasty/rhinoplasty_service_main_page_right_side_banner.png"
                                    alt="Rhinoplasty Treatment"
                                    className="w-full h-[600px] object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section - Additional Content - Full Screen */}
            <div className="w-full py-4 pb-6 px-4">
                <div className="container mx-auto">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-black">
                            WHAT IS RHINOPLASTY? (NOSE RESHAPING SURGERY)
                        </h2>

                        <div className="prose max-w-none">
                            <p className="text-lg text-black leading-relaxed">
                                Rhinoplasty, commonly known as Nose Job or Nose Reshaping Surgery, is an art that aims at making you
                                'Breathe Beautifully'. At Nypunya Aesthetic Clinic, we focus on both aesthetic and functional aspects,
                                ensuring that your new nose not only looks beautiful but also functions optimally.
                            </p>

                            <p className="text-lg text-black leading-relaxed">
                                Nose surgery requires precision and expertise. Our clinic utilizes advanced technology including
                                Ultrasonic Rhinoplasty, Endoscopic Assisted Surgery, and Non-Surgical Treatment options, all tailored
                                to meet your specific needs and goals.
                            </p>

                            <p className="text-lg text-black leading-relaxed">
                                Dr. Prashant Kesari focuses on improving your nose both aesthetically and functionally. Whether you're
                                looking to reshape disproportions, modify specific components, or remove deviations, our goal is to
                                deliver natural-looking results that enhance your confidence and improve your quality of life.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Nypunya Aesthetics Section - Full Screen */}
            <div className="w-full py-10 px-4 bg-[#f3f4f6]">
                <div className="container mx-auto">
                    <div className="p-8 rounded-lg">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8">
                            WHY NYPUNYA AESTHETICS FOR RHINOPLASTY IN BANGALORE IS THE RIGHT CHOICE?
                        </h2>

                        <div className="space-y-6 mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Rhinoplasty is a blend of science and art, and Dr. Prashant Kesari has over 16 years of expertise in this field.
                                His dedication to upgrading knowledge, staying current with technology by visiting global surgeons, and attending
                                conferences has established him as a trusted surgeon in Bangalore.
                            </p>

                            <p className="text-lg text-gray-700 leading-relaxed">
                                His expertise has been recognized globally, and he has presented his work on "Ultrasonic Rhinoplasty" and
                                "Fascioplasty" at various forums, conferences, and workshops.
                            </p>

                            <p className="text-lg text-gray-700 leading-relaxed">
                                Dr. Prashant Kesari's academic and professional achievements include surgical training from Bangalore Medical College,
                                an RGUHS gold medal, a diploma in Medicolegal Law Ethics from NLSIU, Bangalore, and an MBBS from JJM Medical College,
                                emphasizing his "extraordinary" academic career.
                            </p>
                        </div>

                        {/* Highlighted Grey Box */}
                        <div className="bg-gray-100 rounded-lg p-8 mb-8">
                            <div className="space-y-4">
                                <p className="text-lg text-gray-800 leading-relaxed">
                                    If you are in or around Bangalore and are looking for Rhinoplasty, then look no further.
                                </p>
                                <p className="text-lg text-gray-800 leading-relaxed">
                                    Nypunya Aesthetic Clinic, under Dr. Prashant Kesari and his team, focuses on "the four fundamentals:
                                    Experience, Expert, Ethics and Trust or 'EEET'."
                                </p>
                                <p className="text-lg text-gray-800 leading-relaxed">
                                    Crucially, we have been <strong>globally recognised for offering an impressive 97% success rate.</strong>
                                </p>
                            </div>
                        </div>

                        {/* Assurance Section */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">
                                At this clinic, you can rest assured of:
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-lg text-gray-700 leading-relaxed">
                                        Being treated by surgeons of high qualifications and expertise.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-lg text-gray-700 leading-relaxed">
                                        A boutique clinic equipped with advanced and state-of-the-art facilities.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-lg text-gray-700 leading-relaxed">
                                        Personalised consultation and care for better results.
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Final Call to Action */}
                        <div className="text-center">
                            <p className="text-xl text-gray-800 font-semibold">
                                Get all your queries resolved by booking a consultation today with the best rhinoplasty surgeon in Bangalore.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Types of Rhinoplasty Section - Full Screen */}
            <div className="w-full py-10 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-black mb-6">
                            TYPES OF RHINOPLASTY WE OFFER
                        </h2>
                        <p className="text-lg text-black mx-auto">
                            At Nypunya Aesthetic Clinics, patients are offered all kinds of Rhinoplasty. Understanding the technical aspects of different types of Rhinoplasty is important.
                        </p>
                    </div>

                    {/* Rhinoplasty Types Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Card 1: Cosmetic Rhinoplasty */}
                        <div className="bg-[#f8faff] rounded-lg p-6 shadow-sm">
                            <h3 className="text-xl font-bold text-black mb-4">
                                Cosmetic Rhinoplasty
                            </h3>
                            <p className="text-black leading-relaxed mb-4">
                                Cosmetic rhinoplasty is primarily performed to modify the shape of the nose simply for aesthetic purposes. We focus on ensuring natural-looking results that suit your face and personality.
                            </p>
                            <div className="bg-[#e0f2fe] rounded-lg p-4">
                                <p className="text-black">
                                    <span className="font-bold">Who is it for?</span> Purely aesthetic. Perfect for reshaping, refining, or enhancing symmetry.
                                </p>
                            </div>
                        </div>

                        {/* Card 2: Functional Rhinoplasty/Septoplasty */}
                        <div className="bg-[#f8faff] rounded-lg p-6 shadow-sm">
                            <h3 className="text-xl font-bold text-black mb-4">
                                Functional Rhinoplasty/Septoplasty
                            </h3>
                            <p className="text-black leading-relaxed mb-4">
                                Functional rhinoplasty is performed to improve the functionality of the nose and make you "breathe beautifully". The procedure primarily involves removing deviation or disproportion in the septum.
                            </p>
                            <div className="bg-[#e0f2fe] rounded-lg p-4">
                                <p className="text-black">
                                    <span className="font-bold">Who is it for?</span> Done to improve breathing by correcting internal issues like a deviated septum.
                                </p>
                            </div>
                        </div>

                        {/* Card 3: Ultrasonic Rhinoplasty */}
                        <div className="bg-[#f8faff] rounded-lg p-6 shadow-sm">
                            <h3 className="text-xl font-bold text-black mb-4">
                                Ultrasonic Rhinoplasty
                            </h3>
                            <p className="text-black leading-relaxed mb-4">
                                It is a minimally invasive rhinoplasty that reduces chances of bruising or swelling. Nypunya Aesthetics is one of the first clinics in India to offer this type of rhinoplasty.
                            </p>
                            <div className="bg-[#e0f2fe] rounded-lg p-4">
                                <p className="text-black">
                                    <span className="font-bold">Did you know,</span> Nypunya Aesthetic Clinic is among the first in India to offer Ultrasonic Rhinoplasty?
                                </p>
                            </div>
                        </div>

                        {/* Card 4: Augmentation Rhinoplasty */}
                        <div className="bg-[#f8faff] rounded-lg p-6 shadow-sm">
                            <h3 className="text-xl font-bold text-black mb-4">
                                Augmentation Rhinoplasty
                            </h3>
                            <p className="text-black leading-relaxed">
                                It is performed to reshape the nose by adding tissues or implants made from the patient's own body tissue.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hybrid Rhinoplasty Section - Full Screen */}
            <div className="w-full py-10 px-4">
                <div className="container mx-auto">
                    <div className="mx-auto">
                        <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                            <h3 className="text-2xl font-bold text-black mb-4">
                                Hybrid Rhinoplasty
                            </h3>
                            <p className="text-lg text-black leading-relaxed">
                                It is performed both for aesthetic and functional benefits by combining preservation and structural methods.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ideal Candidate Section - Full Screen */}
            <div className="w-full py-10 px-4">
                <div className="container mx-auto">
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-black">
                            WHO IS AN IDEAL CANDIDATE FOR RHINOPLASTY?
                        </h2>

                        <p className="text-lg text-black leading-relaxed">
                            Wondering if you're the right candidate for rhinoplasty? Well, you're on the right track. The first step to a successful nose reshaping surgery in Bangalore is to understand who is an ideal candidate. Without getting into the technicalities, you can know whether or not you are an ideal candidate by using a formula developed by us: The Nose Formula.
                        </p>

                        {/* The Nose Formula Blue Box */}
                        <div className="bg-[#e0f2fe] rounded-lg p-8">
                            <h3 className="text-2xl font-bold text-black mb-4">
                                The nose formula
                            </h3>
                            <p className="text-lg text-black leading-relaxed mb-6">
                                The nose formula is a practical formula that has helped achieve impressive results. Stand in front of the mirror and observe your nose closely.
                            </p>

                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start gap-3">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-lg text-black leading-relaxed">
                                        Do you see something that doesn't sit right with how you feel inside?
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-lg text-black leading-relaxed">
                                        Do you think a small change might make you feel more like yourself?
                                    </span>
                                </li>
                            </ul>

                            <p className="text-lg text-black leading-relaxed">
                                If the answer is yes, and if you are on board with a few changes in your nose then opting for rhinoplasty might be a good decision.
                            </p>
                        </div>

                        <p className="text-lg text-black leading-relaxed">
                            Once you are done with an at-home examination, a consultation with us will help you understand your options, the limitations (yes, we're honest about those too), and the best way forward. This step majorly involves:
                        </p>

                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-lg text-black leading-relaxed">
                                    Evaluation of the nose structure to understand the possibilities of alterations.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-lg text-black leading-relaxed">
                                    Assessment of the nose structure to identify any deviation in the septum.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-lg text-black leading-relaxed">
                                    Creating a customised plan that you and your surgeon feel would deliver the best results.
                                </span>
                            </li>
                        </ul>

                        <p className="text-lg text-black leading-relaxed">
                            To understand whether or not you are an ideal candidate for Rhinoplasty, book your consultation at Nypunya Aesthetic Clinic.
                        </p>
                    </div>
                </div>
            </div>

            {/* International Patients Section - Full Screen */}
            <div className="w-full py-10 px-4 bg-[#f0f8f0]">
                <div className="container mx-auto">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-black">
                            Rhinoplasty in Bangalore: An Excellent Option for International Patients
                        </h2>
                        <h3 className="text-2xl font-bold text-black">
                            Why Are International Patients Choosing Bangalore for Rhinoplasty?
                        </h3>
                        <h4 className="text-xl font-bold text-black">
                            Nypunya Aesthetics Clinic: Serving International Patients
                        </h4>

                        <p className="text-lg text-black leading-relaxed">
                            There's a reason why Bangalore has quietly become a top destination for aesthetic surgery — especially rhinoplasty, among medical tourists. It's not just about the cost (though yes, that's a big plus). There are several reasons why rhinoplasty in Bangalore for international patients is ideal, such as:
                        </p>

                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-lg text-black leading-relaxed">
                                    World-class medical infrastructure
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-lg text-black leading-relaxed">
                                    Surgeons with global exposure
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-lg text-black leading-relaxed">
                                    Transparent pricing (with no surprise add-ons)
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-lg text-black leading-relaxed">
                                    Seamless pre- and post-op planning — including virtual consultations, long-stay options, and full recovery support
                                </span>
                            </li>
                        </ul>

                        <p className="text-lg text-black leading-relaxed">
                            We also offer online consultations to help you plan your rhinoplasty in Bangalore before you even land in India.
                        </p>
                    </div>
                </div>
            </div>

            {/* Rhinoplasty Procedure Section - Full Screen */}
            <div className="w-full py-10 px-4">
                <div className="container mx-auto">
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-black">
                            EXPLAINING THE RHINOPLASTY PROCEDURE
                        </h2>

                        <p className="text-lg text-black leading-relaxed">
                            Here's a walk through the rhinoplasty procedure:
                        </p>

                        {/* Procedure Steps with Timeline */}
                        <div className="relative">
                            <div className="space-y-8">
                                {/* Step 1: Conversation */}
                                <div
                                    className={`relative flex items-start cursor-pointer transition-all duration-300 ${activeStep === 1 ? 'bg-blue-50 p-6 rounded-lg border-l-4 ' : 'hover:bg-gray-50 p-6 rounded-lg border-l-4 border-transparent'
                                        }`}
                                    onClick={() => handleStepClick(1)}
                                >
                                    <div className="flex-1 relative">
                                        {/* Left Vertical Bar - Dynamic Color */}
                                        <div className={`absolute left-0 top-0 bottom-0 w-1 ${activeStep === 1 ? 'bg-blue-600' : 'bg-gray-400'
                                            }`}></div>
                                        <div className="pl-6">
                                            <h3 className={`text-2xl font-bold mb-4 ${activeStep === 1 ? 'text-blue-600' : 'text-black'
                                                }`}>
                                                It Starts With a Conversation
                                            </h3>
                                            <p className="text-lg text-black leading-relaxed">
                                                You'll meet with Dr. Kesari (yes, personally) or any other expert from our team, to discuss your goals. We use digital morphing tools so you can preview possible results, and decide what feels right. Worry not, a tailored plan will be made to suit your needs and get the desired results.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 2: Surgery */}
                                <div
                                    className={`relative flex items-start cursor-pointer transition-all duration-300 ${activeStep === 2 ? 'bg-blue-50 p-6 rounded-lg border-l-4 ' : 'hover:bg-gray-50 p-6 rounded-lg border-l-4 border-transparent'
                                        }`}
                                    onClick={() => handleStepClick(2)}
                                >
                                    <div className="flex-1 relative">
                                        {/* Left Vertical Bar - Dynamic Color */}
                                        <div className={`absolute left-0 top-0 bottom-0 w-1 ${activeStep === 2 ? 'bg-blue-600' : 'bg-gray-400'
                                            }`}></div>
                                        <div className="pl-6">
                                            <h3 className={`text-2xl font-bold mb-4 ${activeStep === 2 ? 'text-blue-600' : 'text-black'
                                                }`}>
                                                Then Comes the Surgery
                                            </h3>
                                            <p className="text-lg text-black leading-relaxed mb-4">
                                                Once everything's aligned, the surgery is carried out by Dr. Prashant Kesari, under modern anaesthesia, in our fully equipped operating theatre. The approach, whether open, closed, or a hybrid, depends on what's best for your specific needs. The surgery can take anywhere between 1 to 6 hours, depending on how complex the case is.
                                            </p>
                                            <p className="text-lg text-black leading-relaxed">
                                                <strong>Remember</strong>, at our boutique clinic, we use state-of-the-art technology to focus on the minute details and deliver impressive results.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 3: Recovery */}
                                <div
                                    className={`relative flex items-start cursor-pointer transition-all duration-300 ${activeStep === 3 ? 'bg-blue-50 p-6 rounded-lg border-l-4 ' : 'hover:bg-gray-50 p-6 rounded-lg border-l-4 border-transparent'
                                        }`}
                                    onClick={() => handleStepClick(3)}
                                >
                                    <div className="flex-1 relative">
                                        {/* Left Vertical Bar - Dynamic Color */}
                                        <div className={`absolute left-0 top-0 bottom-0 w-1 ${activeStep === 3 ? 'bg-blue-600' : 'bg-gray-400'
                                            }`}></div>
                                        <div className="pl-6">
                                            <h3 className={`text-2xl font-bold mb-4 ${activeStep === 3 ? 'text-blue-600' : 'text-black'
                                                }`}>
                                                The Time Taken for Recovery
                                            </h3>
                                            <p className="text-lg text-black leading-relaxed mb-4">
                                                Most of our patients are surprised by how smooth this part is. Post surgery, you will wake up in a private, well-appointed room. For most, it's a day-care procedure. Swelling and congestion typically resolve in 3-4 days. Depending on the situation, you are allowed to go back home either on the same evening or the next morning. If you are an international patient or a patient from outside Bangalore, you can stay at our long-stay facilities.
                                            </p>
                                            <p className="text-lg text-black leading-relaxed">
                                                <strong>Did you know</strong>, post surgery most patients resume work in about 3 weeks?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Benefits of Rhinoplasty Section - Full Screen */}
            <div className="w-full py-10 px-4 bg-[#f3f4f6]">
                <div className="container mx-auto">
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-black">
                            BENEFITS OF RHINOPLASTY AT NYPUNYA AESTHETICS
                        </h2>

                        <p className="text-lg text-black leading-relaxed">
                            If you have decided to go for rhinoplasty, then Nypunya Aesthetics Clinic, Bangalore, is your answer. The team of professionals headed by Dr. Prashant Kesari comes in with their years of expertise and is dedicated to ensuring impressive and natural-looking results. Here's how Rhinoplasty at our clinic benefits:
                        </p>

                        {/* Benefits Grid - 2x2 Layout */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Top-Left Card */}
                            <div className="bg-[#f8faff] rounded-lg p-6 shadow-sm">
                                <h3 className="text-xl font-bold text-black mb-3">
                                    Results that look like you — just more
                                </h3>
                                <p className="text-black leading-relaxed">
                                    balanced
                                </p>
                            </div>

                            {/* Top-Right Card */}
                            <div className="bg-[#f8faff] rounded-lg p-6 shadow-sm">
                                <h3 className="text-xl font-bold text-black mb-3">
                                    A blend of artistry and science:
                                </h3>
                                <p className="text-black leading-relaxed">
                                    It's not just about reshaping the nose; it's about restoring harmony to the face.
                                </p>
                            </div>

                            {/* Bottom-Left Card */}
                            <div className="bg-[#f8faff] rounded-lg p-6 shadow-sm">
                                <h3 className="text-xl font-bold text-black mb-3">
                                    Breathing gets better too:
                                </h3>
                                <p className="text-black leading-relaxed">
                                    If functionality is a concern, we address that too.
                                </p>
                            </div>

                            {/* Bottom-Right Card */}
                            <div className="bg-[#f8faff] rounded-lg p-6 shadow-sm">
                                <h3 className="text-xl font-bold text-black mb-3">
                                    Minimal recovery time:
                                </h3>
                                <p className="text-black leading-relaxed">
                                    You can get back to life faster.
                                </p>
                            </div>
                        </div>

                        <p className="text-lg text-black leading-relaxed">
                            And behind it all, there's Dr. Prashant Kesari, a rhinoplasty specialist with over 16 years of surgical experience. Patients from around the world trust his eye, his skill, and his honest, thoughtful approach.
                        </p>
                    </div>
                </div>
            </div>

            {/* Rhinoplasty Cost Section - Full Screen */}
            <div className="w-full py-10 px-4">
                <div className="container mx-auto">
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-black">
                            HOW MUCH DOES A NOSE JOB COST IN BANGALORE? WHAT TO EXPECT
                        </h2>

                        <p className="text-lg text-black leading-relaxed">
                            Let us break it down simply. The cost of Rhinoplasty in Bangalore is influenced by several factors. To give you an idea of the nose job cost in Bangalore, here are a few important factors.
                        </p>

                        {/* Complexity Section */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-black">
                                Complexity or the Level of Surgery
                            </h3>

                            <p className="text-lg text-black leading-relaxed">
                                Rhinoplasty in Bangalore is performed at different levels depending on the needs of each patient. It usually starts from level one and goes up to level four.
                            </p>

                            {/* Pricing Table */}
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-[#e0f2fe]">
                                            <th className="border border-gray-300 px-6 py-4 text-left font-bold text-black">
                                                Surgery Level
                                            </th>
                                            <th className="border border-gray-300 px-6 py-4 text-left font-bold text-black">
                                                Surgery Cost
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white">
                                            <td className="border border-gray-300 px-6 py-4 text-black">
                                                Level 1
                                            </td>
                                            <td className="border border-gray-300 px-6 py-4 text-black">
                                                ₹75,000 to ₹1.25 Lakhs
                                            </td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="border border-gray-300 px-6 py-4 text-black">
                                                Level 2
                                            </td>
                                            <td className="border border-gray-300 px-6 py-4 text-black">
                                                ₹1.25 Lakhs to ₹1.7 Lakhs
                                            </td>
                                        </tr>
                                        <tr className="bg-white">
                                            <td className="border border-gray-300 px-6 py-4 text-black">
                                                Level 3
                                            </td>
                                            <td className="border border-gray-300 px-6 py-4 text-black">
                                                ₹1.7 Lakhs to ₹2.5 Lakhs
                                            </td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="border border-gray-300 px-6 py-4 text-black">
                                                Level 4
                                            </td>
                                            <td className="border border-gray-300 px-6 py-4 text-black">
                                                ₹2.5 Lakhs and Above
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Additional Factors Section */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Expertise Box */}
                            <div className="bg-[#f0f8f0] rounded-lg p-6 shadow-sm">
                                <h4 className="text-xl font-bold text-black mb-3">
                                    Expertise of the Surgeon
                                </h4>
                                <p className="text-black leading-relaxed">
                                    The expertise of the surgeon performing rhinoplasty also influences the price.
                                </p>
                            </div>

                            {/* Reputation Box */}
                            <div className="bg-[#f0f8f0] rounded-lg p-6 shadow-sm">
                                <h4 className="text-xl font-bold text-black mb-3">
                                    Reputation of the Clinic
                                </h4>
                                <p className="text-black leading-relaxed">
                                    The reputation of the clinic, the facilities and services it offers impact the cost of Rhinoplasty.
                                </p>
                            </div>
                        </div>

                        {/* Call to Action */}
                        <p className="text-lg text-black leading-relaxed">
                            At Nypunya Aesthetic Clinic, you are treated with the finest and expert hands of Dr Prashantha Kesari. For a seamless and natural-looking result, book your consultation today. Click here for a detailed price breakdown for rhinoplasty.
                        </p>
                    </div>
                </div>
            </div>

            {/* Risks and Recovery Section - Full Screen */}
            <div className="w-full py-10 px-4 bg-[#f8faff]">
                <div className="container mx-auto">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-black">
                            RISKS AND RECOVERY - WHAT PATIENTS SHOULD KNOW? OR LET'S TALK SAFETY AND RECOVERY
                        </h2>

                        <p className="text-lg text-black leading-relaxed">
                            While all surgery carries risk, rhinoplasty risks are minimal when done correctly, and it's typically a safe and comfortable experience.
                        </p>

                        <p className="text-lg text-black leading-relaxed">
                            All possible outcomes (swelling, temporary congestion, healing timelines) are discussed transparently, and post-op care is guided every step of the way.
                        </p>

                        <p className="text-lg text-black leading-relaxed">
                            Following prescribed aftercare is crucial to avoid risks and ensure optimal healing and results.
                        </p>
                    </div>
                </div>
            </div>

            {/* Best Rhinoplasty Hospital Recognition Section - Full Screen */}
            <div className="w-full py-10 px-4">
                <div className="container mx-auto">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-black">
                            WHY ARE WE RECOGNISED AS THE BEST RHINOPLASTY HOSPITAL IN BANGALORE?
                        </h2>

                        <p className="text-lg text-black leading-relaxed">
                            The "Best Rhinoplasty Clinic in Bangalore" tag is a patient-given recognition for Nypunya Aesthetic Clinic.
                        </p>

                        <p className="text-lg text-black leading-relaxed">
                            Our patient-centric approach, state-of-the-art technology, cutting-edge knowledge, and a team of professionals under Dr. Prashantha Kesari, transform it into a safe, comfortable, and reliable boutique clinic for both Indian and international patients.
                        </p>

                        <p className="text-lg text-black leading-relaxed">
                            If you're ready to explore rhinoplasty (for function, aesthetics, or both), let's start with a conversation.
                        </p>
                    </div>
                </div>
            </div>

            {/* FAQ Section - Full Screen */}
            <div className="w-full py-10 px-4">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-black mb-8">
                            FAQS
                        </h2>

                        {/* FAQ Accordion */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                            {/* FAQ Item 1 - Expanded by default */}
                            <div className="border-b border-gray-200">
                                <button
                                    className={`w-full px-6 py-4 text-left flex items-center justify-between transition-colors duration-200 ${activeFAQ === 1 ? 'bg-gray-50' : 'hover:bg-gray-50'
                                        }`}
                                    onClick={() => handleFAQToggle(1)}
                                >
                                    <span className="font-bold text-black text-lg">
                                        How much does rhinoplasty cost in Bangalore?
                                    </span>
                                    <span className="text-black text-xl">
                                        {activeFAQ === 1 ? '−' : '+'}
                                    </span>
                                </button>
                                {activeFAQ === 1 && (
                                    <div className="px-6 pb-4">
                                        <p className="text-black leading-relaxed">
                                            The cost of rhinoplasty in Bangalore depends on several factors like the surgeon, facility, the type of rhinoplasty that is needed etc.
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* FAQ Item 2 */}
                            <div className="border-b border-gray-200">
                                <button
                                    className={`w-full px-6 py-4 text-left flex items-center justify-between transition-colors duration-200 ${activeFAQ === 2 ? 'bg-gray-50' : 'hover:bg-gray-50'
                                        }`}
                                    onClick={() => handleFAQToggle(2)}
                                >
                                    <span className="font-bold text-black text-lg">
                                        How long does rhinoplasty last?
                                    </span>
                                    <span className="text-black text-xl">
                                        {activeFAQ === 2 ? '−' : '+'}
                                    </span>
                                </button>
                                {activeFAQ === 2 && (
                                    <div className="px-6 pb-4">
                                        <p className="text-black leading-relaxed">
                                            Rhinoplasty results are permanent. Once the healing is complete, the new shape of your nose will remain stable for life, though natural aging processes may cause subtle changes over time.
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* FAQ Item 3 */}
                            <div className="border-b border-gray-200">
                                <button
                                    className={`w-full px-6 py-4 text-left flex items-center justify-between transition-colors duration-200 ${activeFAQ === 3 ? 'bg-gray-50' : 'hover:bg-gray-50'
                                        }`}
                                    onClick={() => handleFAQToggle(3)}
                                >
                                    <span className="font-bold text-black text-lg">
                                        Is rhinoplasty safe?
                                    </span>
                                    <span className="text-black text-xl">
                                        {activeFAQ === 3 ? '−' : '+'}
                                    </span>
                                </button>
                                {activeFAQ === 3 && (
                                    <div className="px-6 pb-4">
                                        <p className="text-black leading-relaxed">
                                            Yes, rhinoplasty is generally safe when performed by an experienced, board-certified surgeon. At Nypunya Aesthetics, we use advanced techniques and maintain the highest safety standards to minimize risks.
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* FAQ Item 4 */}
                            <div className="border-b border-gray-200">
                                <button
                                    className={`w-full px-6 py-4 text-left flex items-center justify-between transition-colors duration-200 ${activeFAQ === 4 ? 'bg-gray-50' : 'hover:bg-gray-50'
                                        }`}
                                    onClick={() => handleFAQToggle(4)}
                                >
                                    <span className="font-bold text-black text-lg">
                                        What is the recovery time for a nose job?
                                    </span>
                                    <span className="text-black text-xl">
                                        {activeFAQ === 4 ? '−' : '+'}
                                    </span>
                                </button>
                                {activeFAQ === 4 && (
                                    <div className="px-6 pb-4">
                                        <p className="text-black leading-relaxed">
                                            Most patients can return to work within 2-3 weeks. Initial swelling subsides in 1-2 weeks, but final results may take up to a year to fully develop. We provide comprehensive post-operative care to ensure smooth recovery.
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* FAQ Item 5 */}
                            <div className="border-b border-gray-200">
                                <button
                                    className={`w-full px-6 py-4 text-left flex items-center justify-between transition-colors duration-200 ${activeFAQ === 5 ? 'bg-gray-50' : 'hover:bg-gray-50'
                                        }`}
                                    onClick={() => handleFAQToggle(5)}
                                >
                                    <span className="font-bold text-black text-lg">
                                        Can I get nonsurgical rhinoplasty?
                                    </span>
                                    <span className="text-black text-xl">
                                        {activeFAQ === 5 ? '−' : '+'}
                                    </span>
                                </button>
                                {activeFAQ === 5 && (
                                    <div className="px-6 pb-4">
                                        <p className="text-black leading-relaxed">
                                            Yes, we offer non-surgical rhinoplasty options using dermal fillers for minor corrections. However, surgical rhinoplasty provides more dramatic and permanent results for significant changes.
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* FAQ Item 6 */}
                            <div className="border-b border-gray-200">
                                <button
                                    className={`w-full px-6 py-4 text-left flex items-center justify-between transition-colors duration-200 ${activeFAQ === 6 ? 'bg-gray-50' : 'hover:bg-gray-50'
                                        }`}
                                    onClick={() => handleFAQToggle(6)}
                                >
                                    <span className="font-bold text-black text-lg">
                                        Who is the best rhinoplasty doctor in Bangalore?
                                    </span>
                                    <span className="text-black text-xl">
                                        {activeFAQ === 6 ? '−' : '+'}
                                    </span>
                                </button>
                                {activeFAQ === 6 && (
                                    <div className="px-6 pb-4">
                                        <p className="text-black leading-relaxed">
                                            Dr. Prashantha Kesari at Nypunya Aesthetics is recognized as one of the best rhinoplasty surgeons in Bangalore, with over 16 years of experience and a 97% success rate in rhinoplasty procedures.
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* FAQ Item 7 */}
                            <div className="border-b border-gray-200">
                                <button
                                    className={`w-full px-6 py-4 text-left flex items-center justify-between transition-colors duration-200 ${activeFAQ === 7 ? 'bg-gray-50' : 'hover:bg-gray-50'
                                        }`}
                                    onClick={() => handleFAQToggle(7)}
                                >
                                    <span className="font-bold text-black text-lg">
                                        Are the results permanent? How do I reach Nypunya Aesthetics Clinic?
                                    </span>
                                    <span className="text-black text-xl">
                                        {activeFAQ === 7 ? '−' : '+'}
                                    </span>
                                </button>
                                {activeFAQ === 7 && (
                                    <div className="px-6 pb-4">
                                        <p className="text-black leading-relaxed">
                                            Yes, rhinoplasty results are permanent. You can reach Nypunya Aesthetics Clinic through our website, phone, or by visiting our clinic in Bangalore. We also offer online consultations for your convenience.
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* FAQ Item 8 */}
                            <div className="border-b border-gray-200">
                                <button
                                    className={`w-full px-6 py-4 text-left flex items-center justify-between transition-colors duration-200 ${activeFAQ === 8 ? 'bg-gray-50' : 'hover:bg-gray-50'
                                        }`}
                                    onClick={() => handleFAQToggle(8)}
                                >
                                    <span className="font-bold text-black text-lg">
                                        Do you offer online consultations for international patients?
                                    </span>
                                    <span className="text-black text-xl">
                                        {activeFAQ === 8 ? '−' : '+'}
                                    </span>
                                </button>
                                {activeFAQ === 8 && (
                                    <div className="px-6 pb-4">
                                        <p className="text-black leading-relaxed">
                                            Yes, we offer comprehensive online consultations for international patients. This includes virtual assessments, treatment planning, and pre-operative guidance to help you prepare for your rhinoplasty journey in Bangalore.
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* FAQ Item 9 */}
                            <div className="border-b border-gray-200">
                                <button
                                    className={`w-full px-6 py-4 text-left flex items-center justify-between transition-colors duration-200 ${activeFAQ === 9 ? 'bg-gray-50' : 'hover:bg-gray-50'
                                        }`}
                                    onClick={() => handleFAQToggle(9)}
                                >
                                    <span className="font-bold text-black text-lg">
                                        How does Nypunya Aesthetics assist medical tourists?
                                    </span>
                                    <span className="text-black text-xl">
                                        {activeFAQ === 9 ? '−' : '+'}
                                    </span>
                                </button>
                                {activeFAQ === 9 && (
                                    <div className="px-6 pb-4">
                                        <p className="text-black leading-relaxed">
                                            We provide comprehensive support for medical tourists including visa assistance, accommodation arrangements, airport transfers, post-operative care, and long-stay facilities. Our international patient coordinator ensures a seamless experience.
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* FAQ Item 10 */}
                            <div className="border-b border-gray-200">
                                <button
                                    className={`w-full px-6 py-4 text-left flex items-center justify-between transition-colors duration-200 ${activeFAQ === 10 ? 'bg-gray-50' : 'hover:bg-gray-50'
                                        }`}
                                    onClick={() => handleFAQToggle(10)}
                                >
                                    <span className="font-bold text-black text-lg">
                                        Is rhinoplasty in Bangalore more affordable than in other countries?
                                    </span>
                                    <span className="text-black text-xl">
                                        {activeFAQ === 10 ? '−' : '+'}
                                    </span>
                                </button>
                                {activeFAQ === 10 && (
                                    <div className="px-6 pb-4">
                                        <p className="text-black leading-relaxed">
                                            Yes, rhinoplasty in Bangalore is significantly more affordable compared to Western countries while maintaining the same quality standards. You can save 60-80% on costs while receiving world-class care and facilities.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/**** Book your consultation */}
            <div className="flex justify-center items-center bg-[#040857] px-4 py-10">
                <div className="w-full md:px-20 text-white md:p-8 p-4 rounded-lg">
                    <h2 className="text-center text-xl md:text-2xl mb-6">
                        BOOK YOUR CONSULTATION
                    </h2>
                    <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <input
                                type="text"
                                placeholder="Name *"
                                className="w-full bg-transparent outline-none border-none"
                                required
                            />
                            <hr className="border-custom-green" />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Email *"
                                className="w-full border-none bg-transparent outline-none"
                                required
                            />
                            <hr className="border-custom-green" />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Phone Number *"
                                className="w-full border-none bg-transparent outline-none"
                                required
                            />
                            <hr className="border-custom-green" />
                        </div>
                        <div>
                            <select className="w-full border-none bg-transparent outline-none">
                                <option className="text-black">Select Treatment *</option>
                            </select>
                            <hr className="border-custom-green" />
                        </div>
                        {/* Date Selection */}
                        <div>
                            <div className="w-full border-none bg-transparent outline-none h-10 flex items-center">
                                <FaCalendarAlt className="text-white mr-2" />
                                <input
                                    type="date"
                                    value={date}
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
                                    value={time}
                                    onChange={handleTimeChange}
                                    className="w-full bg-transparent outline-none border-none text-white cursor-pointer appearance-none"
                                    required
                                />
                            </div>
                            <hr className="border-custom-green" />
                        </div>
                        <div>
                            <select className="w-full border-none bg-transparent outline-none">
                                <option className="text-black">Select Department *</option>
                            </select>
                            <hr className="border-custom-green" />
                        </div>
                        {/* Date Selection */}
                        <div>
                            <div className="w-full border-none bg-transparent outline-none h-10 flex items-center">
                                <FaCalendarAlt className="text-white mr-2" />
                                <input
                                    type="date"
                                    value={date}
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
                                    value={time}
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
                                className="bg-custom-green text-black px-8 md:w-[30%] py-2 rounded-full font-semibold hover:bg-[#8ccdc9] transition"
                            >
                                SUBMIT
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RhinoplastyServices;
