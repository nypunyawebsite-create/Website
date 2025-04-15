import React from "react";

const Banner = ({ selectedDoctor, setSelectedDoctor }) => {
  return (
    <div className="relative w-full h-[600px] bg-gradient-to-b from-custom-blue to-[#187fb7] text-white flex items-end">
      {/* Wrapper for text and buttons */}
      <div className="p-6 sm:p-10 w-full sm:w-auto sm:absolute sm:bottom-20 sm:left-10">
        <h2 className="text-3xl sm:text-6xl font-bold mb-6 sm:mb-10">Our Doctors</h2>
        <div className="flex flex-col sm:flex-row rounded-lg shadow-lg border border-custom-green overflow-hidden bg-transparent text-white w-full sm:w-auto">
          <button
            className={`px-4 py-3 sm:py-2 transition-all w-full sm:w-60 ${
              selectedDoctor === "prashantha"
                ? "bg-custom-green text-black"
                : "bg-transparent text-white hover:bg-gray-200 hover:text-black"
            }`}
            onClick={() => setSelectedDoctor("prashantha")}
          >
            Dr. Prashantha Kesari N K
          </button>
          <button
            className={`px-4 py-3 sm:py-2 transition-all w-full sm:w-60 ${
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
