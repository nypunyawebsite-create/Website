import React from 'react';


const Banner = () => {
  return (
    <>
    <div className="relative w-full h-[600px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/about-us/about_us_banner.png" 
          alt="About Us Banner" 
          className="w-full h-full object-cover brightness-75"
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-end items-center text-white">
        <h1 className="text-6xl text-custom-blue font-bold pb-32">About Us</h1>
      </div>
    </div>
 
    </>
  );
};

export default Banner;

