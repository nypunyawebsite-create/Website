import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { galleryImages } from "../../utils/galleryData";
import { FaChevronDown } from "react-icons/fa";

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
  const [visibleCount, setVisibleCount] = useState(6);

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
    <div className="p-4 md:p-8">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-44 my-6 relative">
        <h2 className="text-xl md:text-2xl text-center md:text-left whitespace-nowrap">
          Select Gallery to View Results
        </h2>
        <div className="relative w-full md:w-1/3">
          <button
            className="border rounded px-4 py-2 w-full text-left flex items-center justify-between focus:outline-none"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {selectedCategory}
            <FaChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
          </button>
          {isDropdownOpen && (
            <ul className="absolute w-full bg-white border shadow-md mt-1 rounded-md z-10 max-h-60 overflow-y-auto">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
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
          <hr className="w-full border-t border-custom-green" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 container mx-auto py-6 md:py-10">
        {filteredImages.length === 0 ? (
          <p className="col-span-1 sm:col-span-2 md:col-span-3 text-center text-gray-500">
            No images available
          </p>
        ) : (
          visibleImages.map((src, index) => (
            <div key={index} className="text-center">
              <img
                src={src}
                alt={selectedCategory}
                className="w-full h-48 md:h-56 object-cover rounded-md shadow"
              />
            </div>
          ))
        )}
      </div>

      {visibleCount < filteredImages.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="px-6 py-2 bg-custom-green text-white rounded shadow hover:scale-105 transition-transform duration-300 animate-pulse hover:animate-none"
          >
            Load More
          </button>
        </div>
      )}

    </div>
  );
};

export default Gallery;
