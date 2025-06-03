import React, { useState } from 'react';
import {
  botoxIntro,
  botoxUses,
  facialModulation,
  extraNote,
} from '../../../utils/ServiceDatas/FillersAndBotoxData/FillersAndBotox';

const FillersAndBotox = () => {
  const [selectedImage, setSelectedImage] = useState("/services/fillers-and-botox/fillers_and_botox.png");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-10 bg-white">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-custom-blue">Fillers and Botox</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section - Details */}
        <div className="lg:w-1/2">
          <div className="space-y-6">
            {/* Botox Intro */}
            {botoxIntro.map((detail, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-custom-blue text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-700">{detail}</p>
              </div>
            ))}

            {/* Botox Uses */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-custom-blue mb-4">Botulinum Toxin injections are used to smoothen:</h3>
              <div className="grid grid-cols-1 gap-4">
                {botoxUses.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-custom-blue text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Facial Modulation */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-custom-blue mb-4">Facial Modulation Examples:</h3>
              <div className="grid grid-cols-1 gap-4">
                {facialModulation.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-custom-blue text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Extra Note */}
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700 italic">{extraNote}</p>
            </div>
          </div>
        </div>

        {/* Right Section - Images */}
        <div className="lg:w-1/2">
          <div className="space-y-4">
            {/* Main Image */}
            <div
              className="relative cursor-pointer rounded-lg overflow-hidden"
              onClick={() => handleImageClick(selectedImage)}
            >
              <img
                src={selectedImage}
                alt="Botox Injection"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300"></div>
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-4 gap-2">
              <div
                className={`cursor-pointer rounded-lg overflow-hidden ${selectedImage === "/services/fillers-and-botox/fillers_and_botox.png" ? 'ring-2 ring-custom-blue' : ''
                  }`}
                onClick={() => setSelectedImage("/services/fillers-and-botox/fillers_and_botox.png")}
              >
                <img
                  src="/services/fillers-and-botox/fillers_and_botox.png"
                  alt="Botox Injection"
                  className="w-full h-24 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-7xl max-h-[90vh] p-4">
            <img
              src={selectedImage}
              alt="Botox Injection Fullscreen"
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FillersAndBotox;
