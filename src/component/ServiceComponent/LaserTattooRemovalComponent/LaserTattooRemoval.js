import React from 'react';
import {
  laserTattooIntro,
  laserTattooPoints,
  laserTattooConclusion,
} from '../../../utils/ServiceDatas/LaserTattooRemovalData/LaserTattoo';

const LaserTattooRemoval = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Text Content */}
        <div className="text-gray-800">
          <h2 className="text-2xl md:text-3xl font-semibold text-custom-blue mb-4">
            Laser Tattoo Removal
          </h2>

          {laserTattooIntro.map((text, index) => (
            <p key={index} className="mb-4">
              {text}
            </p>
          ))}

          <ul className="space-y-4 mt-6 text-sm">
            {laserTattooPoints.map((point, index) => (
              <li key={index} className="flex gap-2 items-start">
                <span className="text-xl leading-none">→</span>
                <p>{point}</p>
              </li>
            ))}
          </ul>

          <p className="mt-6 font-medium">
            {laserTattooConclusion.split('Nypunya').map((part, index, arr) =>
              index === 1 ? (
                <span key={index}>
                  <span className="font-bold text-black">Nypunya</span>{part}
                </span>
              ) : (
                part
              )
            )}
          </p>
        </div>

        {/* Image */}
        <div className='my-auto flex justify-center items-center'>
          <img
            src="/services/laser-tattoor-emoval/laser_tattoo_removal.png"
            alt="Laser Tattoo Removal"
            className="w-full rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default LaserTattooRemoval;
