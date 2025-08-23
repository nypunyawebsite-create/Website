import React from 'react';

const GalleryComponent = () => {
    const galleryImages = [
        "/gallery/rhinoplasty/before_after_1.png",
        "/gallery/rhinoplasty/before_after_2.png",
        "/gallery/rhinoplasty/before_after_3.png",
        "/gallery/rhinoplasty/before_after_4.png",
        "/gallery/rhinoplasty/before_after_5.png",
        "/gallery/rhinoplasty/before_after_6.png",
    ];

    return (
        <div className="container mx-auto py-16 px-4">
            {/* Section Title */}
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-custom-blue mb-4">
                    Before & After Results
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Witness the transformative power of our Rhinoplasty procedures through
                    these remarkable before and after results from our satisfied patients.
                </p>
                <div className="w-20 h-1 bg-custom-green mx-auto mt-4"></div>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryImages.map((image, index) => (
                    <div
                        key={index}
                        className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                    >
                        <img
                            src={image}
                            alt={`Rhinoplasty Result ${index + 1}`}
                            className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-lg font-semibold mb-2">Patient {index + 1}</h3>
                                <p className="text-sm text-white/80">
                                    Remarkable improvement in skin texture and tone
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
                <p className="text-lg text-gray-600 mb-6">
                    Ready to experience the transformative power of Rhinoplasty?
                </p>
                <button className="bg-custom-blue hover:bg-custom-blue/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    Book Your Consultation
                </button>
            </div>
        </div>
    );
};

export default GalleryComponent;
