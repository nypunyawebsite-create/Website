import React from "react";

const Banner = ({ selectedDoctor, setSelectedDoctor }) => {
  return (
    <div className="relative w-full h-[600px] bg-gradient-to-b from-custom-blue to-[#187fb7] text-white">
      {/* Title & Tab Buttons - Positioned at Bottom Left */}
      <div className="absolute bottom-20 left-10">
        <h2 className="text-6xl font-bold mb-10">Our Doctors</h2>
        <div className="flex rounded-lg shadow-lg border border-custom-green overflow-hidden bg-transparent text-white">
          <button
            className={`px-4 py-2 transition-all w-60 ${
              selectedDoctor === "prashantha"
                ? "bg-custom-green text-black"
                : "bg-transparent text-white hover:bg-gray-200 hover:text-black"
            }`}
            onClick={() => setSelectedDoctor("prashantha")}
          >
            Dr. Prashantha Kesari N K
          </button>
          <button
            className={`px-4 py-2 transition-all w-60 ${
              selectedDoctor === "shubha"
                ? "bg-custom-green text-black"
                : "bg-transparent text-white hover:bg-gray-200 hover:text-black"
            }`}
            onClick={() => setSelectedDoctor("shubha")}
          >
            Dr. Shubha M Kesari
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
