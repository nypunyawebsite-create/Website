import React from 'react';

const Banner = () => {
  return (
    <div className="relative w-full h-[600px]">
      {/* Background Image */}
      <img 
        src="/contact-us/contact_us_banner.png" 
        alt="About Us Banner" 
        className="w-full h-full object-cover brightness-75"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-custom-blue/90 to-[#187fb7]/40"></div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-end items-center text-white">
        <h1 className="text-6xl text-white font-bold pb-32">Contact Us</h1>
      </div>
    </div>
  );
};

export default Banner;
