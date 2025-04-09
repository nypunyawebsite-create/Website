import React from 'react';
import { laserSkinToningData } from '../../../utils/ServiceDatas/ChemicalPeelsData/ChemicalPeels';

const ChemicalPeels = () => {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 px-4 py-10 max-w-7xl mx-auto">
            {/* Text Section */}
            <div className="md:w-1/2">
                <h2 className="text-xl md:text-2xl font-semibold text-blue-800 mb-4">
                    {laserSkinToningData.title}
                </h2>
                <div className="space-y-4 text-sm md:text-base text-gray-700">
                    {laserSkinToningData.content.map((para, index) => (
                        <p key={index}>
                            {para.includes("Nypunya") || para.includes("FDA") ? (
                                <span dangerouslySetInnerHTML={{ __html: para.replace("Nypunya", "<strong>Nypunya</strong>").replace("US FDA approved Q switched Nd YAG laser system. (Pastelle, Wontech, South Korea)", "<strong>US FDA approved Q switched Nd YAG laser system. (Pastelle, Wontech, South Korea)</strong>") }} />
                            ) : (
                                para
                            )}
                        </p>
                    ))}
                </div>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 my-auto flex justify-center items-center">
                <img
                    src={laserSkinToningData.image}
                    alt="Laser Skin Toning"
                    className="rounded-lg w-full object-cover"
                />
            </div>
        </div>
    );
};

export default ChemicalPeels;
