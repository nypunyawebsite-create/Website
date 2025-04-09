import React, { useState } from "react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

const ConsultationForm = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };

    return (
        <>
            <div>
                <p className="text-center text-xl md:text-2xl mb-6 text-custom-blue pb-10 uppercase">
                    Be the best version of Yourself with NYPUNYA
                </p>

            </div>
            <div className="flex justify-center items-center bg-[#040857] px-4 py-10">
                <div className="w-full md:px-20 text-white md:p-8 p-4 rounded-lg">
                    <h2 className="text-center text-xl md:text-2xl mb-6">
                        BOOK YOUR FREE CONSULTATION
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
        </>
    );
};

export default ConsultationForm;
