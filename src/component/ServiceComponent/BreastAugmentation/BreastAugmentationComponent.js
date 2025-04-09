// src/component/ServiceComponent/BreastAugmentation/BreastAugmentationComponent.jsx
import React from "react";

const BreastAugmentationComponent = ({ selectedService }) => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center py-10 px-4 bg-white">
      <div className="flex flex-col lg:flex-row lg:gap-8 gap-5 w-full">
        <div className="lg:w-1/2 w-full">
          <p className="text-custom-blue text-2xl mb-4 text-center lg:text-left">
            {selectedService?.title}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {selectedService?.content?.map((item, index) => (
              <div key={index} className="border border-custom-green p-4 rounded-xl shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 w-full flex items-center justify-center pt-0 lg:pt-10">
          <div className="relative w-full max-w-md lg:max-w-full">
            <img
              src={selectedService?.image}
              alt={selectedService?.title}
              className="rounded-lg w-full object-cover"
            />
            <span className="absolute bottom-4 right-6 text-6xl md:text-8xl font-bold text-[#9492c4] opacity-60 z-10">
              {selectedService?.id}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreastAugmentationComponent;
