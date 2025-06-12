import React, { useState } from "react";

const FaqBreast = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const videos = [
        {
            id: "video1",
            thumbnail: "/services/breast_augmentation/faq/1.jpg",
            videoId: "5WiNNDOIRZ4",
            title: "Breast Augmentation Video 1"
        },
        {
            id: "video2",
            thumbnail: "/services/breast_augmentation/faq/1.jpg",
            videoId: "vkayL9BFtkA",
            title: "Breast Augmentation Video 2"
        },
        {
            id: "video3",
            thumbnail: "/services/breast_augmentation/faq/1.jpg",
            videoId: "f8kvYoT6HNc",
            title: "Breast Augmentation Video 3"
        },
        {
            id: "video4",
            thumbnail: "/services/breast_augmentation/faq/1.jpg",
            videoId: "l3aI5Qm-TSA",
            title: "Breast Augmentation Video 4"
        },
        {
            id: "video5",
            thumbnail: "/services/breast_augmentation/faq/1.jpg",
            videoId: "OZIqyo_kXaE",
            title: "Breast Augmentation Video 5"
        },
        {
            id: "video6",
            thumbnail: "/services/breast_augmentation/faq/1.jpg",
            videoId: "njpNQ-NogBQ",
            title: "Breast Augmentation Video 6"
        },
    ];

    const handleVideoClick = (videoId) => {
        setSelectedVideo(videoId);
    };

    return (
        <div className="w-full max-w-7xl mx-auto pb-10 px-4 relative">
            <h2 className="text-center text-xl font-medium text-custom-blue py-5">FAQ</h2>

            {/* Video Grid */}
            <div className="flex flex-wrap justify-center gap-4">
                {videos.map((video) => (
                    <div key={video.id} className="relative group w-full sm:w-1/2 md:w-[calc(25%-12px)]">
                        <div
                            className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg"
                            onClick={() => handleVideoClick(video.videoId)}
                        >
                            {/* Thumbnail */}
                            <img
                                src={video.thumbnail}
                                alt={video.title}
                                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                            />

                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-custom-blue" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Video Title */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                                <h3 className="text-white text-sm font-medium line-clamp-2">{video.title}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Video Modal */}
            {selectedVideo && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
                    <div className="relative w-full max-w-4xl">
                        <button
                            onClick={() => setSelectedVideo(null)}
                            className="absolute -top-10 right-0 text-white hover:text-gray-300"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="relative pb-[56.25%] h-0">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FaqBreast; 