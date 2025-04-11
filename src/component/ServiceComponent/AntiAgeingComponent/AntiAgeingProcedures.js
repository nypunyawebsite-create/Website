import React from "react";
import { antiAgeingData } from "../../../utils/ServiceDatas/AntiAgeingData/antiAgeingData";

const AntiAgeingProcedures = () => {
    return (
        <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center py-10 px-4 bg-white">
            <div className="flex flex-col lg:flex-row lg:gap-8 gap-5 w-full">
                {/* First Column (Title + Grid) */}
                <div className="lg:w-1/2 w-full">
                    {/* Title */}
                    <p className="text-custom-blue text-2xl mb-4 text-center lg:text-left">
                        Anti Ageing Procedures (Face Lift Macs / Thread Lift)
                    </p>

                    {/* Grid Items */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {antiAgeingData.map((detail, index) => (
                            <div key={index} className="border border-custom-green p-4 rounded-xl shadow-sm">
                                {detail}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Second Column - Centered Image with Overlay Text */}
                <div className="lg:w-1/2 w-full flex items-center justify-center pt-0 lg:pt-10">
                    <div className="relative w-full max-w-md lg:max-w-full">
                        <img
                            src="/services/anti_ageing/lery05.png"
                            alt="Breast Enhancement"
                            className="rounded-lg w-full object-cover"
                        />
                        <span className="absolute bottom-4 right-6 text-6xl md:text-8xl font-bold text-[#9492c4] opacity-60 z-10">
                            01
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AntiAgeingProcedures;
