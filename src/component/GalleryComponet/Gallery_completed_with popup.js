import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { galleryImages } from "../../utils/galleryData";
import { FaChevronDown, FaCheck, FaTimes } from "react-icons/fa";

const categories = [
  "Hair Transplant",
  "Body Contouring Abdominal Plasty",
  "Breast Augmentation/Breast Enhancement",
  "Anti Ageing Procedures",
  "Rhinoplasty",
  "Structural Fat Grafting",
  "Gynaecomastia (Male Breast / Moobs)",
  "Acne and acne scars",
  "Fillers and Botox",
  "Laser Hair Removal",
  "Laser tattoo removal",
  "PRP (Platelet Rich Plasma)",
  "Dark Circles and Under Eye Bags",
];

const Gallery = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("Hair Transplant");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const [selectedCase, setSelectedCase] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (location.state?.category && categories.includes(location.state.category)) {
      setSelectedCategory(location.state.category);
    }
  }, [location.state]);

  useEffect(() => {
    setVisibleCount(3);
    setSelectedCase(null);
    setIsModalOpen(false);
  }, [selectedCategory]);

  const filteredImages = galleryImages[selectedCategory] || [];
  const visibleImages = filteredImages.slice(0, visibleCount);

  const handleCaseClick = (caseData) => {
    setSelectedCase(caseData);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-8 font-sans">
      <div className="max-w-7xl mx-auto rounded-3xl shadow-2xl bg-white/90 p-6 md:p-12">
        {/* Category Selection */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-44 my-6 relative">
          <h2 className="text-2xl md:text-3xl font-bold text-custom-blue text-center md:text-left whitespace-nowrap drop-shadow mb-2 md:mb-0">
            Select Gallery to View Results
          </h2>
          <div className="relative w-full md:w-1/3">
            <button
              className={`border-2 rounded-xl px-4 py-2 w-full text-left flex items-center justify-between focus:outline-none shadow transition-all duration-200 ${isDropdownOpen ? 'border-custom-blue bg-blue-50' : 'border-gray-200 bg-white'}`}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="font-semibold text-custom-blue">{selectedCategory}</span>
              <FaChevronDown className={`w-4 h-4 ml-2 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {isDropdownOpen && (
              <ul className="absolute w-full bg-white border-2 border-custom-blue shadow-lg mt-2 rounded-xl z-10 max-h-60 overflow-y-auto animate-fade-in">
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className={`px-4 py-2 cursor-pointer transition-all rounded-lg ${selectedCategory === category ? "bg-custom-blue text-white font-bold" : "hover:bg-blue-100 text-custom-blue"}`}
                    onClick={() => {
                      setSelectedCategory(category);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto py-6">
          {filteredImages.length === 0 ? (
            <p className="col-span-3 text-center text-gray-500">
              No images available
            </p>
          ) : (
            visibleImages.map((caseData, index) => (
              <div
                key={caseData.id || index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                onClick={() => handleCaseClick(caseData)}
              >
                <div className="relative">
                  <img
                    src={caseData.image || caseData}
                    alt={selectedCategory}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-lg font-bold mb-2">{caseData.title || selectedCategory}</h3>
                      <p className="text-sm line-clamp-2">{caseData.description || ""}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredImages.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="px-8 py-3 bg-gradient-to-r from-custom-blue to-blue-400 text-white rounded-full shadow-xl font-bold text-lg hover:scale-105 hover:from-blue-600 hover:to-custom-blue transition-all duration-300"
            >
              Load More
            </button>
          </div>
        )}

        {/* Case Detail Modal */}
        {isModalOpen && selectedCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-2xl font-bold text-custom-blue">{selectedCase.title}</h2>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-500 hover:text-red-500 transition-colors"
                  >
                    <FaTimes className="h-6 w-6" />
                  </button>
                </div>

                {/* Before/After Image */}
                <div className="mb-6">
                  <div className="relative group">
                    <img
                      src={selectedCase.image || selectedCase}
                      alt="Before and After"
                      className="w-full max-h-[500px] object-contain rounded-xl transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-500 to-green-500 text-white px-6 py-3 rounded-full font-bold shadow-lg">
                      Before & After Results
                    </div>
                  </div>
                </div>

                {/* Description and Results */}
                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-custom-blue mb-4">Case Details</h3>
                    <p className="text-gray-700 leading-relaxed">{selectedCase.description}</p>
                  </div>

                  {selectedCase.results && (
                    <div className="bg-green-50 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-custom-blue mb-4">Results Achieved</h3>
                      <ul className="space-y-3">
                        {selectedCase.results.map((result, index) => (
                          <li key={index} className="flex items-start">
                            <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-sm text-gray-500 italic text-center">{selectedCase.disclaimer}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fade-in {
          animation: fade-in 0.7s cubic-bezier(.4,0,.2,1) forwards;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
