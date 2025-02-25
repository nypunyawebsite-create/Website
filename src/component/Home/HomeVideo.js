import React, { useState, useRef } from 'react';
import { FaPlayCircle } from 'react-icons/fa';

const HomeVideo = () => {
    const [videoEnded, setVideoEnded] = useState(false);
    const videoRef = useRef(null);

    const handleVideoEnd = () => {
        setVideoEnded(true);
    };

    const handleExploreClick = () => {
        if (videoRef.current) {
            videoRef.current.play();
            videoRef.current.onended = () => {
                setVideoEnded(true);
            };
        }
    };

    return (
        <div className="h-screen overflow-hidden">
            {!videoEnded ? (
                <video
                    ref={videoRef}
                    src="/home/home-video.mp4"
                    autoPlay
                    muted
                    onEnded={handleVideoEnd}
                    className="w-full h-full object-cover"
                />
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 bg-gradient-to-b from-blue-900 to-blue-500 h-full items-end justify-center mx-auto p-20">
                    <div className='w-[90%] flex flex-col justify-center items-center'>
                        <div className="flex flex-col justify-center gap-3 h-full" >
                            <div>
                                <p className="text-white text-3xl md:text-5xl m-0">ONLY BEST</p>
                                <p className="text-white text-3xl md:text-5xl m-0">FOR YOU</p>
                            </div>
                            <div className="flex items-center mt-2">
                                <FaPlayCircle
                                    className="text-white mr-2 cursor-pointer animate-pulse"
                                    size={48}
                                    onClick={handleExploreClick}
                                    style={{ filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))' }}
                                />
                                <span className="text-white text-lg">Explore Video</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4 justify-center md:flex-row md:space-y-0 md:space-x-4">
                        <img src="/home/banner-img-1.png" alt="Banner 2" />
                        <img src="/home/banner-img-2.png" alt="Banner 3" className="hidden md:block" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default HomeVideo;
