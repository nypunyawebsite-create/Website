import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { galleryImages } from "../../utils/galleryData";
import { FaChevronDown, FaCheck, FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const categories = [
  "Rhinoplasty",
  "Anti Ageing Procedures",
  "Body Contouring Abdominoplasty",
  "Breast Augmentation/Breast Enhancement",
  "Hair Transplant",
  "Liposuction",
  "Acne and acne scars",
  "Fillers and Botox",
  "Laser Hair Removal",
  "Laser tattoo removal",
  "PRP (Platelet Rich Plasma)",
  "Dark Circles and Under Eye Bags",
  "Blepharoplasty",
  "Structural Fat Grafting",
  "Gynaecomastia (Male Breast / Moobs)",
  "Others"
];

const Gallery = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Hair Transplant");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCase, setSelectedCase] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleThumbnails, setVisibleThumbnails] = useState(10);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showSensitiveContentWarning, setShowSensitiveContentWarning] = useState(false);

  // Calculate total images across all categories
  const totalImages = Object.values(galleryImages).reduce(
    (total, images) => total + images.length,
    0
  );

  useEffect(() => {
    setCurrentIndex(0);
    setVisibleThumbnails(10);
  }, [selectedCategory]);

  const filteredImages = galleryImages[selectedCategory] || [];
  const visibleImages = filteredImages.slice(0, visibleThumbnails);

  useEffect(() => {
    if (location.state?.category && categories.includes(location.state.category)) {
      setSelectedCategory(location.state.category);
    }
  }, [location.state, selectedCategory]);

  useEffect(() => {
    const hasAccepted = localStorage.getItem('sensitiveContentAccepted');
    if (!hasAccepted) {
      setShowSensitiveContentWarning(true);
    }

    const handleKeyDown = (e) => {
      if (!isPopupOpen && !showSensitiveContentWarning) return; // Only prevent default if any popup is open

      switch (e.key) {
        case 'ArrowLeft':
          if (isPopupOpen) {
            e.preventDefault();
            prevSlide();
          }
          break;
        case 'ArrowRight':
          if (isPopupOpen) {
            e.preventDefault();
            nextSlide();
          }
          break;
        case 'Escape':
          if (isPopupOpen) {
            e.preventDefault();
            closePopup();
          } else if (showSensitiveContentWarning) {
            // Optionally prevent escape for sensitive content, or close it if allowed
            e.preventDefault(); // Prevent default browser behavior
            // For sensitive content, we'll only allow closing via the button
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPopupOpen, currentIndex, filteredImages.length, showSensitiveContentWarning]);

  const handleCaseClick = (caseData) => {
    setSelectedCase(caseData);
    setIsModalOpen(true);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === filteredImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? filteredImages.length - 1 : prevIndex - 1
    );
  };

  const loadMoreThumbnails = () => {
    setVisibleThumbnails(prev => prev + 10);
  };

  const openPopup = () => {
    setIsPopupOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    document.body.style.overflow = 'unset';
  };

  const handleAcceptSensitiveContent = () => {
    localStorage.setItem('sensitiveContentAccepted', 'true');
    setShowSensitiveContentWarning(false);
    document.body.style.overflow = 'unset'; // Re-enable scrolling
  };

  const handleDeclineSensitiveContent = () => {
    navigate('/'); // Redirect to home page
    document.body.style.overflow = 'unset'; // Re-enable scrolling
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-8 font-sans">
      <div className="max-w-7xl mx-auto rounded-3xl shadow-2xl bg-white/90 p-6 md:p-12">

        {/* Category Selection */}
        <div className="flex flex-col md:flex-row items-center justify-end gap-6 my-6 relative">
          <div className="text-lg font-semibold text-custom-blue">
            Showing image {currentIndex + 1} / {totalImages}
          </div>
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

        {/* Treatment Details Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-custom-blue mb-1">Treatment Details</h3>
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="prose max-w-none">
              {(() => {
                const desc = filteredImages[currentIndex]?.description || "No description available";
                // Split at first period followed by space or at first line break
                const match = desc.match(/^(.*?)([\.!?]\s|\n|$)([\s\S]*)/);
                if (match) {
                  const title = filteredImages[currentIndex]?.title || "No title available";
                  const rest = desc.replace(title, '').trim();
                  return (
                    <>
                      <h4 className="text-lg font-semibold text-custom-blue mb-2">{title}</h4>
                      {rest && <p className="text-gray-700 leading-relaxed">{rest}</p>}
                    </>
                  );
                } else {
                  return <p className="text-gray-700 leading-relaxed">{desc}</p>;
                }
              })()}
            </div>
          </div>
        </div>

        {/* Before & After Image Section */}
        <div className="relative">
          <h3 className="text-2xl font-bold text-custom-blue mb-6">Before & After Results</h3>
          <div className="relative bg-[#ffeeef] rounded-2xl shadow-lg overflow-hidden">
            {filteredImages.length > 0 ? (
              <>
                <img
                  src={filteredImages[currentIndex]?.image || filteredImages[currentIndex]}
                  alt={`${selectedCategory} - Case ${currentIndex + 1}`}
                  className="w-full h-[500px] object-contain cursor-pointer"
                  onClick={openPopup}
                />
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <button
                    onClick={prevSlide}
                    className="bg-black/30 hover:bg-black/50 text-white p-3 rounded-r-lg transition-all duration-300"
                  >
                    <FaArrowLeft className="w-6 h-6" />
                  </button>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <button
                    onClick={nextSlide}
                    className="bg-black/30 hover:bg-black/50 text-white p-3 rounded-l-lg transition-all duration-300"
                  >
                    <FaArrowRight className="w-6 h-6" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
                  {currentIndex + 1} / {totalImages}
                </div>
              </>
            ) : (
              <div className="h-[500px] flex items-center justify-center text-gray-500">
                No images available
              </div>
            )}
          </div>
        </div>

        {/* Thumbnail Grid */}
        {filteredImages.length > 0 && (
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-custom-blue mb-6">All Cases</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {visibleImages.map((image, index) => (
                <div
                  key={index}
                  className={`relative rounded-xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 ${currentIndex === index ? 'ring-4 ring-custom-blue' : 'hover:shadow-lg'
                    }`}
                  onClick={() => setCurrentIndex(index)}
                >
                  <img
                    src={image?.image || image}
                    alt={`${selectedCategory} - Case ${index + 1}`}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold">View Case {index + 1}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {visibleThumbnails < filteredImages.length && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={loadMoreThumbnails}
                  className="px-8 py-3 bg-gradient-to-r from-custom-blue to-blue-400 text-white rounded-full shadow-xl font-bold text-lg hover:scale-105 hover:from-blue-600 hover:to-custom-blue transition-all duration-300"
                >
                  Load More Cases
                </button>

              </div>

            )}
            <p className="flex justify-center mt-8">* Disclaimer:  Individual results may vary</p>
          </div>
        )}

        {/* Fullscreen Popup */}
        {isPopupOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            onClick={closePopup}
          >
            <div className="relative w-full h-full flex items-center justify-center p-4">
              <img
                src={filteredImages[currentIndex]?.image || filteredImages[currentIndex]}
                alt={`${selectedCategory} - Case ${currentIndex + 1}`}
                className="max-w-full max-h-full object-contain"
              />
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 text-white hover:text-gray-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute inset-y-0 left-0 flex items-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevSlide();
                  }}
                  className="bg-black/30 hover:bg-black/50 text-white p-3 rounded-r-lg transition-all duration-300"
                >
                  <FaArrowLeft className="w-6 h-6" />
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextSlide();
                  }}
                  className="bg-black/30 hover:bg-black/50 text-white p-3 rounded-l-lg transition-all duration-300"
                >
                  <FaArrowRight className="w-6 h-6" />
                </button>
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
                {currentIndex + 1} / {totalImages}
              </div>
            </div>
          </div>
        )}

        {showSensitiveContentWarning && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl mx-4 text-center transform transition-all scale-100 opacity-100 duration-300">
              <h3 className="text-2xl font-bold text-red-600 mb-4">Sensitive Content Warning</h3>
              <p className="text-gray-700 mb-6 px-6">The gallery contains images of medical procedures that some individuals may find sensitive. Viewer discretion is advised.</p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={handleAcceptSensitiveContent}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-300"
                >
                  I Understand and Agree
                </button>
                <button
                  onClick={handleDeclineSensitiveContent}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 rounded-full transition-all duration-300"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        )}

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
    </div>
  );
};

export default Gallery;
