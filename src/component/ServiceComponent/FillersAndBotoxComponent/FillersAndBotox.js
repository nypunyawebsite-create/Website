import React from 'react';
import {
  botoxIntro,
  botoxUses,
  facialModulation,
  extraNote,
} from '../../../utils/ServiceDatas/FillersAndBotoxData/FillersAndBotox';

const FillersAndBotox = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold text-blue-800 mb-6">Fillers and Botox</h2>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-4 text-gray-700">
          {botoxIntro.map((paragraph, index) => (
            <p key={index} className="pb-2">
              {paragraph}
            </p>
          ))}

          <div className="p-4">
            <p className="font-medium mb-2 pb-2">Botulinum Toxin injections are used to smoothen:-</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-gray-800">
              {botoxUses.map((item, index) => (
                <p
                  key={index}
                  className="flex items-start gap-2 border-b border-custom-green pb-2"
                >
                  <span className="text-custom-blue text-lg">•</span> {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className='my-auto flex justify-center items-center'>
          <img
            src="/services/fillers-and-botox/fillers_and_botox.png"
            alt="Botox Injection"
            className="rounded-xl shadow-lg w-full"
          />
        </div>
      </div>

      <div className="mt-10 p-4">
        <p className="mb-2 pb-2">
          It is also an extremely useful tool to modulate facial features to achieve a more pleasant countenance. For example
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-gray-800">
          {facialModulation.map((item, index) => (
            <p
              key={index}
              className="flex items-start gap-2 border-b border-custom-green pb-2"
            >
              <span className="text-custom-blue text-lg">•</span> {item}
            </p>
          ))}
        </div>
      </div>

      <p className="mt-6 text-gray-600 pb-2">
        {extraNote}
      </p>
    </div>
  );
};

export default FillersAndBotox;
