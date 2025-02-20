import React from "react";

const BreastAugmentationComponent = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center py-10 px-4 bg-white">
      <div className="flex flex-col lg:flex-row lg:gap-8 gap-5 w-full">
        {/* First Column (Title + Grid) */}
        <div className="lg:w-1/2 w-full">
          {/* Title */}
          <p className="text-custom-blue text-2xl mb-4 text-center lg:text-left">
            Breast Augmentation / Breast Enhancement
          </p>

          {/* Grid Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-custom-green p-4 rounded-xl shadow-sm text-center">
              Proportionately fuller breasts are essential
            </div>
            <div className="border border-custom-green p-4 rounded-xl shadow-sm text-center">
              Confidence and body image get a boost with breast enhancement
            </div>
            <div className="border border-custom-green p-4 rounded-xl shadow-sm text-center">
              Safe, scientific approach gives the best outcome
            </div>
            <div className="border border-custom-green p-4 rounded-xl shadow-sm text-center">
              Planned to individual and precisely executed
            </div>
            <div className="border border-custom-green p-4 rounded-xl shadow-sm text-center">
              High quality silicone gel implants are only used
            </div>
            <div className="border border-custom-green p-4 rounded-xl shadow-sm text-center">
              Structural fat grafting combined with advanced tissue engineering solutions offer the new age breast enhancement.
            </div>
          </div>
        </div>

        {/* Second Column - Centered Image with Overlay Text */}
        <div className="lg:w-1/2 w-full flex items-center justify-center pt-0 lg:pt-10">
          <div className="relative w-full max-w-md lg:max-w-full">
            <img
              src="/services/breast_augmentation.png"
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

export default BreastAugmentationComponent;
