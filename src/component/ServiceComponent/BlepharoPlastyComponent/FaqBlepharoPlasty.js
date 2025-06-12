import React, { useState } from "react";

const FaqRhinoplasty = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const videos = [
        {
            id: "video1",
            thumbnail: "https://img.youtube.com/vi/VIDEO_ID_1/maxresdefault.jpg",
            videoId: "VIDEO_ID_1",
            title: "Rhinoplasty Procedure Overview"
        },
        {
            id: "video2",
            thumbnail: "https://img.youtube.com/vi/VIDEO_ID_2/maxresdefault.jpg",
            videoId: "VIDEO_ID_2",
            title: "Before & After Results"
        },
        {
            id: "video3",
            thumbnail: "https://img.youtube.com/vi/VIDEO_ID_3/maxresdefault.jpg",
            videoId: "VIDEO_ID_3",
            title: "Recovery Process"
        },
        {
            id: "video4",
            thumbnail: "https://img.youtube.com/vi/VIDEO_ID_4/maxresdefault.jpg",
            videoId: "VIDEO_ID_4",
            title: "Patient Testimonials"
        },
        {
            id: "video5",
            thumbnail: "https://img.youtube.com/vi/VIDEO_ID_5/maxresdefault.jpg",
            videoId: "VIDEO_ID_5",
            title: "Surgical Techniques"
        },
        {
            id: "video6",
            thumbnail: "https://img.youtube.com/vi/VIDEO_ID_6/maxresdefault.jpg",
            videoId: "VIDEO_ID_6",
            title: "Post-Operative Care"
        },
        {
            id: "video7",
            thumbnail: "https://img.youtube.com/vi/VIDEO_ID_7/maxresdefault.jpg",
            videoId: "VIDEO_ID_7",
            title: "Common Questions"
        },
        {
            id: "video8",
            thumbnail: "https://img.youtube.com/vi/VIDEO_ID_8/maxresdefault.jpg",
            videoId: "VIDEO_ID_8",
            title: "Expert Tips"
        }
    ];

    const handleVideoClick = (videoId) => {
        setSelectedVideo(videoId);
    };

    return (
        <div className="w-full mx-auto pb-10 px-4 relative container">
            <h2 className="text-center text-xl font-medium text-custom-blue py-5">FAQ</h2>

            {/* Video Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
                {videos.map((video) => (
                    <div key={video.id} className="relative group">
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

export default FaqRhinoplasty;
