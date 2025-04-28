import React, { useState, useRef, useEffect } from 'react';
import { FaPlayCircle } from 'react-icons/fa';

const HomeVideo = () => {
    const [videoStarted, setVideoStarted] = useState(false);
    const [videoSrc, setVideoSrc] = useState('');
    const videoRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setVideoSrc('/home/home_video_mobile.mp4');
            } else {
                setVideoSrc('/home/home_video_desktop.mp4');
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleExploreClick = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
            setVideoStarted(true);
        }
    };

    const handleVideoEnd = () => {
        setVideoStarted(false); // When video ends, show banner again
    };

    return (
        <div className="relative h-screen overflow-hidden">
            {/* Video */}
            <video
                ref={videoRef}
                src={videoSrc}
                muted
                onEnded={handleVideoEnd}
                className={`w-full h-full object-cover transition-opacity duration-500 ${videoStarted ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            />

            {/* Banner Section */}
            <div className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 flex items-center justify-center ${videoStarted ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 bg-gradient-to-b from-blue-900 to-blue-500 h-full w-full items-end justify-center p-5 md:p-20">
                    <div className='w-[90%] flex flex-col justify-center items-center'>
                        <div className="flex flex-col justify-center gap-3 h-full">
                            <div>
                                <p className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl m-0">ONLY BEST</p>
                                <p className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl m-0">FOR YOU</p>
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
                    <div className="flex flex-col space-y-4 justify-center items-center md:flex-row md:space-y-0 md:space-x-1">
                        <div className="w-full md:w-auto md:max-w-[450px] max-w-[300px] mb-10 md:mb-0">
                            <img src="/home/banner-img-1.png" alt="Banner 2" className="w-full h-auto" />
                        </div>
                        <div className="w-full md:w-auto max-w-[450px] hidden md:block">
                            <img src="/home/banner-img-2.png" alt="Banner 3" className="w-full h-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeVideo;
