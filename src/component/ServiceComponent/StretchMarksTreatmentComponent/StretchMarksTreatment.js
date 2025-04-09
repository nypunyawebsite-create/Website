import React from 'react'
import { stretchMarksData } from '../../../utils/ServiceDatas/StretchMarksTreatmentData/StretchMarksTreatment'

const StretchMarksTreatment = () => {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 px-4 py-10 max-w-7xl mx-auto">
            {/* Text Section */}
            <div className="md:w-1/2">
                <h2 className="text-xl md:text-2xl font-semibold text-blue-800 mb-4">
                    {stretchMarksData.title}
                </h2>
                <div className="space-y-4 text-sm md:text-base text-gray-700">
                    {stretchMarksData.content.map((para, index) => (
                        <p key={index}>{para}</p>
                    ))}
                </div>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 my-auto flex justify-center items-center">
                <img
                    src={stretchMarksData.image}
                    alt="Stretch Marks Treatment"
                    className="rounded-lg w-full object-cover"
                />
            </div>
        </div>
    )
}

export default StretchMarksTreatment
