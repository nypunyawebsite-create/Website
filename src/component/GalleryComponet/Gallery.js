import { useState } from "react";
import { galleryImages } from "../../utils/galleryData"; // Adjust the import path as needed
import { FaChevronDown } from "react-icons/fa"; // Import the down arrow icon

const categories = ["Hair Transplant", "Skin Treatment", "Dental Surgery"]; // Add more categories as needed

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]); // Default selection
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to get images based on the selected category
  const filteredImages = galleryImages[selectedCategory] || [];
  
  return (
    <div className="p-4 md:p-8">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-44 my-6 relative">
        <h2 className="text-xl md:text-2xl text-center md:text-left whitespace-nowrap">
          Select Gallery to View Results
        </h2>
        <div className="relative w-full md:w-72">
          <button
            className="border rounded px-4 py-2 w-full text-left flex items-center justify-between focus:outline-none"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {selectedCategory}
            <FaChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
          </button>
          {isDropdownOpen && (
            <ul className="absolute w-full bg-white border shadow-md mt-1 rounded-md z-10">
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
        {filteredImages.length > 0 ? (
          filteredImages.map((src, index) => (
            <div key={index} className="text-center">
              <img src={src} alt={selectedCategory} className="w-full h-48 md:h-56 object-cover rounded-md shadow" />
            </div>
          ))
        ) : (
          <p className="col-span-1 sm:col-span-2 md:col-span-3 text-center text-gray-500">No images available</p>
        )}
      </div> 
    </div>
  );
};

export default Gallery;