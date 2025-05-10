import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { galleryImages } from "../../utils/galleryData";
import { FaChevronDown } from "react-icons/fa";

const categories = [
  "Hair Transplant",
  "Body Contouring Abdominal Platy",
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
  const [visibleCount, setVisibleCount] = useState(6);
  const [enlargedImage, setEnlargedImage] = useState(null);

  useEffect(() => {
    if (location.state?.category && categories.includes(location.state.category)) {
      setSelectedCategory(location.state.category);
    }
  }, [location.state]);

  useEffect(() => {
    setVisibleCount(6); // Reset on category change
  }, [selectedCategory]);

  const filteredImages = galleryImages[selectedCategory] || [];
  const visibleImages = filteredImages.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-8 font-sans">
      <div className="max-w-6xl mx-auto rounded-3xl shadow-2xl bg-white/90 p-6 md:p-12">
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
            {/* <hr className="w-full border-t border-custom-blue mt-2" /> */}
          </div>
        </div>

        {/* Show visible/total count */}
        <div className="flex justify-center mb-6">
          <span className="inline-block bg-custom-blue text-white text-base font-bold rounded-full px-5 py-2 shadow-lg">
            {visibleImages.length} / {filteredImages.length} photos
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 container mx-auto py-6 md:py-10">
          {filteredImages.length === 0 ? (
            <p className="col-span-1 sm:col-span-2 md:col-span-3 text-center text-gray-500">
              No images available
            </p>
          ) : (
            visibleImages.map((src, index) => (
              <div key={index} className="text-center group transition-all duration-300 relative">
                <img
                  src={src}
                  alt={selectedCategory}
                  className="w-full h-48 md:h-56 object-cover rounded-2xl shadow-lg border-4 border-white group-hover:scale-105 group-hover:shadow-2xl group-hover:border-custom-blue transition-all duration-300 ease-in-out opacity-0 animate-fade-in cursor-zoom-in"
                  style={{ animationDelay: `${index * 60}ms`, animationFillMode: 'forwards' }}
                  onClick={() => setEnlargedImage(src)}
                />
                {/* Overlay Info on hover */}
                <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-2/3 bg-gradient-to-t from-black/80 to-transparent text-white flex flex-col justify-end items-center opacity-0 group-hover:opacity-100 transition-all duration-300 p-4 pointer-events-none group-hover:pointer-events-auto">
                  <div className="w-full text-center text-lg font-semibold mb-2">{selectedCategory}</div>
                  <button
                    className="px-5 py-2 bg-custom-blue rounded-full font-bold text-white shadow hover:bg-blue-700 transition-all mt-2 pointer-events-auto"
                    onClick={e => { e.stopPropagation(); setEnlargedImage(src); }}
                  >
                    View
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {visibleCount < filteredImages.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="px-8 py-3 bg-gradient-to-r from-custom-blue to-blue-400 text-white rounded-full shadow-xl font-bold text-lg hover:scale-105 hover:from-blue-600 hover:to-custom-blue transition-all duration-300 animate-pulse hover:animate-none"
            >
              Load More
            </button>
          </div>
        )}
      </div>
      {/* Fade-in animation keyframes */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fade-in {
          animation: fade-in 0.7s cubic-bezier(.4,0,.2,1) forwards;
        }
      `}</style>
      {/* Lightbox Modal */}
      {enlargedImage && (
        <div
          className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black bg-opacity-80 transition-all"
          onClick={() => setEnlargedImage(null)}
        >
          <div
            className="relative w-full max-w-lg mx-auto bg-white rounded-t-3xl md:rounded-2xl shadow-2xl p-4 md:p-8 animate-slide-up"
            style={{ minHeight: '40vh' }}
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 bg-gray-100 hover:bg-red-500 hover:text-white rounded-full p-2 shadow transition"
              onClick={() => setEnlargedImage(null)}
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={enlargedImage}
              alt="Enlarged"
              className="mx-auto rounded-2xl shadow-lg max-h-[60vh] object-contain"
            />
          </div>
          <style>{`
            @keyframes slide-up {
              from { transform: translateY(100%); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
            .animate-slide-up {
              animation: slide-up 0.4s cubic-bezier(.4,0,.2,1) forwards;
            }
          `}</style>
        </div>
      )}
    </div>
  );
};

export default Gallery;
