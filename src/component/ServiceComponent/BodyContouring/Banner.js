import React from 'react';


const Banner = () => {
    return (
        <>
            <div className="relative w-full md:h-[600px] h-[450px]">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="/services/body_contouring/body_contouring_banner.png"
                        alt="About Us Banner"
                        className="w-full h-full object-cover brightness-75"
                    />
                </div>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-custom-blue/50 to-[#187fb7]/0"></div>

                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-end items-center text-white">
                    <h1 className="md:text-6xl text-3xl font-bold pb-32 text-center">Body Contouring Abdominal Platy</h1>
                </div>
            </div>

        </>
    );
};

export default Banner;

