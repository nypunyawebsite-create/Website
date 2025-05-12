import React, { useState } from "react";

const Banner = ({ selectedDoctor, setSelectedDoctor }) => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  return (
    <div className="relative w-full h-[600px] bg-gradient-to-b from-custom-blue to-[#187fb7] text-white flex items-end">
      {/* Wrapper for text and buttons */}
      <div className="p-6 sm:p-10   absolute bottom-32 left-1/2 transform -translate-x-1/2  font-bold">
        <h2 className="text-3xl  sm:text-6xl font-bold mb-6 sm:mb-10">Our Doctors</h2>
        <div className="flex flex-col sm:flex-row rounded-lg shadow-lg border border-custom-green overflow-hidden bg-transparent text-white w-full sm:w-auto">
          <button
            className={`px-4 py-3 sm:py-2 transition-all w-full sm:w-60 ${selectedDoctor === "prashantha"
              ? "bg-custom-green text-black"
              : "bg-transparent text-white hover:bg-gray-200 hover:text-black"
              }`}
            onClick={() => setSelectedDoctor("prashantha")}
          >
            Dr. Prashantha Kesari N K
          </button>
          <button
            className={`px-4 py-3 sm:py-2 transition-all w-full sm:w-60 ${selectedDoctor === "shubha"
              ? "bg-custom-green text-black"
              : "bg-transparent text-white hover:bg-gray-200 hover:text-black"
              }`}
            onClick={() => setSelectedDoctor("shubha")}
          >
            Dr. Shubha M Kesari
          </button>
        </div>
      </div>
      {enlargedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={() => setEnlargedImage(null)}
        >
          <div className="relative max-w-3xl w-full flex justify-center">
            <img
              src={enlargedImage}
              alt="Enlarged"
              className="rounded-2xl shadow-2xl max-h-[80vh] object-contain"
              onClick={e => e.stopPropagation()}
            />
            <button
              className="absolute top-2 right-2 bg-white bg-opacity-80 rounded-full p-2 text-black hover:bg-red-500 hover:text-white transition"
              onClick={() => setEnlargedImage(null)}
              aria-label="Close"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
