import React from 'react';
import { plateletRichPlasmaData } from '../../../utils/ServiceDatas/PlateletRichPlasmaInjectionsData/PlateletRichPlasmaInjections';

const PlateletRichPlasmaInjections = () => {
  const { title, intro, bulletPoints, description, image } = plateletRichPlasmaData;

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Top Section: Text + Image */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Text Section */}
        <div className="text-gray-800">
          <h2 className="text-2xl md:text-3xl font-semibold text-custom-blue mb-4">
            {title}
          </h2>

          {intro.map((para, idx) => (
            <p key={idx} className="mb-4">{para}</p>
          ))}

          {/* Bullet Points */}
          <div className="my-6">
            <p className="mb-3 text-gray-700 font-medium">
              This is a convenient office procedure used in the management of
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {bulletPoints.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 border-b border-blue-300 pb-1"
                >
                  <span className="text-custom-blue text-lg leading-none mt-[2px]">•</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img
            src={image}
            alt="Platelet Rich Plasma Result"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
      </div>

      {/* Full Width Description Below Image */}
      <div className="space-y-4 md:text-base text-gray-700 mt-10">
        {description.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </div>
    </div>
  );
};

export default PlateletRichPlasmaInjections;
