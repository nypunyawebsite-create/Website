import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TransformationsSection = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const transformations = [
        {
            id: 1,
            title: "Rhinoplasty",
            description: "Natural-looking nose contouring with enhanced facial harmony",
            beforeImage: "/gallery/rhinoplasty/Rhinoplasty-Deviation-Correction-Before-After-India-Result 1.png",
            afterImage: "/gallery/rhinoplasty/Rhinoplasty-Deviation-Correction-Before-After-India-Result 2.png"
        },
        {
            id: 2,
            title: "Abdominoplasty",
            description: "Achieve a flatter, more toned abdomen with expert contouring",
            beforeImage: "/gallery/body/Abdominoplasty_Before_After_India_01.png",
            afterImage: "/gallery/body/Abdominoplasty_Before_After_India_02.png"
        },
        {
            id: 3,
            title: "Hair Transplant",
            description: "Restore confidence with natural-looking hair restoration",
            beforeImage: "/gallery/hair/Hair_Transplant_Before_After_India_01.png",
            afterImage: "/gallery/hair/Hair_Transplant_Balding_Area_Coverage_India_30.png"
        },
        {
            id: 4,
            title: "Liposuction",
            description: "Targeted fat removal for improved body contours",
            beforeImage: "/gallery/body/Abdominoplasty_Belly_Transformation_India_14.png",
            afterImage: "/gallery/body/Abdominoplasty_Belly_Transformation_India_15.png"
        },
        {
            id: 5,
            title: "Breast Surgery",
            description: "Enhanced confidence with natural-looking breast enhancement",
            beforeImage: "/gallery/body/Abdominoplasty_After_Belly_Tightening_India_13.png.png",
            afterImage: "/gallery/body/Abdominoplasty_After_Belly_Tightening_India_14.png"
        },
        {
            id: 6,
            title: "Body Contouring",
            description: "Complete body transformation with expert contouring",
            beforeImage: "/gallery/body/Abdominoplasty_Beautiful_Belly_India_08.png",
            afterImage: "/gallery/body/Abdominoplasty_Beautiful_Belly_India_09.png"
        },
        {
            id: 7,
            title: "Facial Surgery",
            description: "Youthful rejuvenation with natural-looking results",
            beforeImage: "/gallery/rhinoplasty/Rhinoplasty-Deviation-Correction-Excellent-Result-India 1.png",
            afterImage: "/gallery/rhinoplasty/Rhinoplasty-Deviation-Correction-Excellent-Result-India 2.png"
        },
        {
            id: 8,
            title: "Complete Makeover",
            description: "Comprehensive transformation with multiple procedures",
            beforeImage: "/gallery/rhinoplasty/Rhinoplasty-Excellent-Result-Deviated-Nose-India 1.png",
            afterImage: "/gallery/rhinoplasty/Rhinoplasty-Excellent-Result-Deviated-Nose-India 2.png"
        },
        {
            id: 9,
            title: "Structural Fat Grafting",
            description: "Natural volume enhancement using your own fat",
            beforeImage: "/gallery/structural/Facial_Fat_Grafting_After_Procedure_India_19.png",
            afterImage: "/gallery/structural/Fat_Grafting_Aesthetic_Results_India_16.png"
        },
        {
            id: 10,
            title: "Anti-Aging Treatment",
            description: "Comprehensive facial rejuvenation and anti-aging solutions",
            beforeImage: "/gallery/anti_aging/Neck_Lift_Facelift_Contoured_Facial_Lines_India_26.png",
            afterImage: "/gallery/anti_aging/Neck_Lift_Facial_Rejuvenation_India_09.png"
        },
        {
            id: 11,
            title: "Liposuction Body Sculpting",
            description: "Precise body contouring with advanced liposuction techniques",
            beforeImage: "/gallery/liposuction/1 (45).png",
            afterImage: "/gallery/liposuction/1 (46).png"
        },
        {
            id: 12,
            title: "Hair Restoration",
            description: "Advanced hair transplant with natural-looking results",
            beforeImage: "/gallery/hair/Hair_Transplant_Balding_Reversal_India_49.png",
            afterImage: "/gallery/hair/Hair_Transplant_Baldness_Correction_India_06.png"
        },
        {
            id: 13,
            title: "Nose Reshaping",
            description: "Expert rhinoplasty for improved facial proportions",
            beforeImage: "/gallery/rhinoplasty/4/Broad_Nose_Surgery_Indian_Nose_Refinement_10.png",
            afterImage: "/gallery/rhinoplasty/4/Broad_Nose_Surgery_Indian_Nose_Refinement_11.png"
        },
        {
            id: 14,
            title: "Body Transformation",
            description: "Complete body makeover with multiple procedures",
            beforeImage: "/gallery/body/Abdominoplasty_Abdominal_Contours_India_22.png",
            afterImage: "/gallery/body/Abdominoplasty_Abdominal_Contours_India_23.png"
        },
        {
            id: 15,
            title: "Facial Contouring",
            description: "Enhanced facial features with expert surgical techniques",
            beforeImage: "/gallery/structural/Fat_Grafting_Beautiful_Body_Contouring_India_23.png",
            afterImage: "/gallery/structural/Fat_Grafting_Beautiful_Body_Contouring_India_24.png"
        },
        {
            id: 16,
            title: "Hairline Restoration",
            description: "Natural hairline reconstruction with FUE technique",
            beforeImage: "/gallery/hair/Hair_Transplant_Beautiful_Hairline_India_09.png",
            afterImage: "/gallery/hair/Hair_Transplant_Enhanced_Hairline_India_42.png"
        },
        {
            id: 17,
            title: "Liposuction Midsection",
            description: "Targeted midsection contouring for a slimmer waist",
            beforeImage: "/gallery/liposuction/1 (48).png",
            afterImage: "/gallery/liposuction/1 (49).png"
        },
        {
            id: 18,
            title: "Nose Narrowing",
            description: "Refined nose shape with advanced surgical techniques",
            beforeImage: "/gallery/rhinoplasty/4/Nose_Narrowing_Surgery_Broad_Nose_India_07.png",
            afterImage: "/gallery/rhinoplasty/4/Nose_Narrowing_Surgery_Broad_Nose_India_08.png"
        },
        {
            id: 19,
            title: "Hair Density Enhancement",
            description: "Increased hair density with natural-looking results",
            beforeImage: "/gallery/hair/Hair_Transplant_Dense_Hair_Growth_India_26.png",
            afterImage: "/gallery/hair/Hair_Transplant_Fast_Hair_Growth_India_41.png"
        },
        {
            id: 20,
            title: "Body Sculpting",
            description: "Comprehensive body contouring for ideal proportions",
            beforeImage: "/gallery/liposuction/1 (52).png",
            afterImage: "/gallery/liposuction/1 (53).png"
        },
        {
            id: 21,
            title: "Facial Rejuvenation",
            description: "Complete facial transformation with natural results",
            beforeImage: "/gallery/anti_aging/Neck_Lift_Facial_Rejuvenation_India_10.png.png",
            afterImage: "/gallery/anti_aging/Neck_Lift_Facial_Rejuvenation_India_09.png"
        },
        {
            id: 22,
            title: "Hair Transplant Success",
            description: "Successful hair restoration with permanent results",
            beforeImage: "/gallery/hair/Hair_Transplant_Success_Results_India_07.png",
            afterImage: "/gallery/hair/Hair_Transplant_Successful_Hair_Growth_India_38.png"
        },
        {
            id: 23,
            title: "Nose Refinement",
            description: "Delicate nose reshaping for enhanced facial harmony",
            beforeImage: "/gallery/rhinoplasty/4/Refined_Nose_Broad_Nose_Correction_India_24.png",
            afterImage: "/gallery/rhinoplasty/4/Refined_Nose_Broad_Nose_Correction_India_25.png"
        },
        {
            id: 24,
            title: "Complete Body Makeover",
            description: "Transformative body contouring with multiple procedures",
            beforeImage: "/gallery/others/1 (12).png",
            afterImage: "/gallery/others/1 (13).png"
        }
    ];

    const itemsPerPage = 4;
    const totalPages = Math.ceil(transformations.length / itemsPerPage);
    const currentTransformations = transformations.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    const nextPage = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const prevPage = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    return (
        <div className="w-full py-16 px-4 md:px-8 lg:px-16 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 title-section">
                        Transformations That Inspire
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Real results from real patients. See the transformative power of expert cosmetic surgery and aesthetic treatments at Nypunya Aesthetics.
                    </p>
                </div>

                {/* Transformations Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {currentTransformations.map((transformation) => (
                        <div key={transformation.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            {/* Before/After Images */}
                            <div className="grid grid-cols-2">
                                <div className="relative">
                                    <img
                                        src={transformation.beforeImage}
                                        alt={`${transformation.title} transformation`}
                                        className="w-full h-64 object-cover"
                                    />
                                </div>
                                <div className="relative">
                                    <img
                                        src={transformation.afterImage}
                                        alt={`${transformation.title} transformation`}
                                        className="w-full h-64 object-cover"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-black mb-2">
                                    {transformation.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {transformation.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center gap-4">
                    <button
                        onClick={prevPage}
                        className="flex items-center justify-center w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors duration-200"
                        disabled={currentPage === 0}
                    >
                        <FaChevronLeft className="text-gray-600" />
                    </button>

                    <span className="text-lg font-semibold text-gray-700">
                        {currentPage + 1} / {totalPages}
                    </span>

                    <button
                        onClick={nextPage}
                        className="flex items-center justify-center w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors duration-200"
                        disabled={currentPage === totalPages - 1}
                    >
                        <FaChevronRight className="text-gray-600" />
                    </button>
                </div>

                {/* Watermark */}
                {/* <div className="text-center mt-8">
                    <p className="text-sm text-gray-400 font-semibold tracking-wider">
                        NYPUNYA AESTHETIC CLINIC
                    </p>
                </div> */}
            </div>
        </div>
    );
};

export default TransformationsSection;
