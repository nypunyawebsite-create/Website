import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

const ConsultationForm = () => {
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);

    return (
        <div className="flex justify-center items-center bg-[#040857] px-4 py-10">
            <div className="w-full px-20 text-white p-8 rounded-lg">
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
                    <div>
                        <div className="w-full border-none bg-transparent outline-none h-10 flex items-center">
                            <FaCalendarAlt className="text-white mr-2" />
                            <DatePicker
                                selected={date}
                                onChange={(date) => setDate(date)}
                                className="w-full bg-transparent outline-none border-none"
                                dateFormat="yyyy-MM-dd"
                                placeholderText="Date"
                                popperPlacement="bottom"
                            />
                        </div>
                        <hr className="border-custom-green" />
                    </div>
                    <div>
                        <div className="w-full border-none bg-transparent outline-none h-10 flex items-center">
                            <FaClock className="text-white mr-2" />
                            <DatePicker
                                selected={time}
                                onChange={(time) => setTime(time)}
                                className="w-full bg-transparent outline-none border-none"
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={15}
                                timeCaption="Time"
                                dateFormat="h:mm aa"
                                placeholderText="Time"
                                popperPlacement="bottom"
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
                    <div>
                        <div className="w-full border-none bg-transparent outline-none h-10 flex items-center">
                            <FaCalendarAlt className="text-white mr-2" />
                            <DatePicker
                                selected={date}
                                onChange={(date) => setDate(date)}
                                className="w-full bg-transparent outline-none border-none"
                                dateFormat="yyyy-MM-dd"
                                placeholderText="Date"
                                popperPlacement="bottom"
                            />
                        </div>
                        <hr className="border-custom-green" />
                    </div>
                    <div>
                        <div className="w-full border-none bg-transparent outline-none h-10 flex items-center">
                            <FaClock className="text-white mr-2" />
                            <DatePicker
                                selected={time}
                                onChange={(time) => setTime(time)}
                                className="w-full bg-transparent outline-none border-none"
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={15}
                                timeCaption="Time"
                                dateFormat="h:mm aa"
                                placeholderText="Time"
                                popperPlacement="bottom"
                            />
                        </div>
                        <hr className="border-custom-green" />
                    </div>
                    <div className="md:col-span-3 flex justify-center">
                        <button
                            type="submit"
                            className="bg-custom-green text-black px-8 w-[30%] py-2 rounded-full font-semibold hover:bg-[#8ccdc9] transition"
                        >
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ConsultationForm;