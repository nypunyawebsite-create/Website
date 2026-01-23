import React, { useState } from 'react';
import OurMedicalExpertDrKesari from './OurMedicalExpertDrKesari';
import OurMedicalExpertDrSubha from './OurMedicalExpertDrSubha';

const OurMedicalExpert = () => {
    const [selectedDoctor, setSelectedDoctor] = useState('prashantha');

    return (
        <div className="w-full" style={{ backgroundColor: '#f6f6f6' }}>
            <div className="max-w-7xl mx-auto px-4 pt-12 pb-0">
                <h2 className="text-[#000099] text-3xl md:text-4xl font-bold text-center mb-12">
                    Meet Our Medical Experts
                </h2>

                {/* Toggle Buttons */}
                <div className="flex justify-center mb-8">
                    <button
                        className={`px-4 py-3 font-bold transition-all rounded-l-lg border border-custom-green w-60 ${selectedDoctor === 'prashantha'
                            ? 'bg-custom-green text-black'
                            : 'bg-transparent text-[#000099] hover:bg-gray-200'
                            }`}
                        onClick={() => setSelectedDoctor('prashantha')}
                    >
                        Dr. Prashantha Kesari N K
                    </button>
                    <button
                        className={`px-4 py-3 font-bold transition-all rounded-r-lg border-t border-b border-r border-custom-green w-60 ${selectedDoctor === 'shubha'
                            ? 'bg-custom-green text-black'
                            : 'bg-transparent text-[#000099] hover:bg-gray-200'
                            }`}
                        onClick={() => setSelectedDoctor('shubha')}
                    >
                        Dr. Shubha M Kesari
                    </button>
                </div>

                {/* Render the appropriate doctor component */}
                <div className="min-h-[600px] md:min-h-[700px] lg:min-h-[800px]">
                    {selectedDoctor === 'prashantha' ? (
                        <OurMedicalExpertDrKesari />
                    ) : (
                        <OurMedicalExpertDrSubha />
                    )}
                </div>
            </div>
        </div>
    );
};

export default OurMedicalExpert;
