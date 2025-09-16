import React, { useState, useRef, useEffect } from 'react';
import { FaPlayCircle } from 'react-icons/fa';

const HomeVideo = () => {
    const [videoStarted, setVideoStarted] = useState(false);
    const [videoSrc, setVideoSrc] = useState('');
    const videoRef = useRef(null);
    const resizeTimeoutRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            // Clear any existing timeout
            if (resizeTimeoutRef.current) {
                clearTimeout(resizeTimeoutRef.current);
            }

            // Set a new timeout
            resizeTimeoutRef.current = setTimeout(() => {
                if (window.innerWidth < 768) {
                    setVideoSrc('/home/home_video_mobile_new.mp4');
                } else {
                    setVideoSrc('/home/banner_video.mp4');
                }
            }, 100); // 100ms debounce
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (resizeTimeoutRef.current) {
                clearTimeout(resizeTimeoutRef.current);
            }
        };
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
        <div className="relative h-screen w-full overflow-hidden">
            {/* Video */}
            <video
                ref={videoRef}
                src={videoSrc}
                muted
                onEnded={handleVideoEnd}
                className={`w-full h-full object-cover transition-opacity duration-500 ${videoStarted ? 'opacity-100 z-50' : 'opacity-0 pointer-events-none'}`}
                style={{ position: videoStarted ? 'fixed' : 'relative', top: 0, left: 0 }}
            />

            {/* Close Button */}
            {videoStarted && (
                <button
                    onClick={() => {
                        if (videoRef.current) videoRef.current.pause();
                        setVideoStarted(false);
                    }}
                    className="fixed top-4 right-4 z-[100] w-10 h-10 flex items-center justify-center bg-white bg-opacity-80 rounded-full shadow-lg text-2xl font-bold text-[#000099] hover:bg-[#000099] hover:text-white hover:bg-opacity-100 transition-all duration-200 border border-[#000099]"
                    aria-label="Close Video"
                >
                    ×
                </button>
            )}

            {/* Banner Section */}
            <div
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 flex flex-col items-center justify-between ${videoStarted ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                style={{
                    backgroundImage: "url('/home/homepagebanner.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: videoStarted ? 0 : 1
                }}
            >
                {/* Top Headings - Responsive */}
                <div className="w-full flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 items-center px-4 md:px-16 mt-8 md:mt-12 lg:mt-16 xl:mt-20" style={{ marginTop: 'calc(2rem + 140px)' }}>
                    <h2 className="text-custom-blue text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold drop-shadow-lg">Plastic Surgery</h2>
                    <span className="text-custom-blue text-base sm:text-lg md:text-xl lg:text-2xl font-bold">–</span>
                    <h2 className="text-custom-blue text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold drop-shadow-lg">Aesthetics</h2>
                    <span className="text-custom-blue text-base sm:text-lg md:text-xl lg:text-2xl font-bold">–</span>
                    <h2 className="text-custom-blue text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold drop-shadow-lg">Dermatology</h2>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 w-full flex flex-col items-center justify-center pb-1 md:pb-2 lg:pb-3 xl:pb-4">
                    <div className="flex flex-col justify-center gap-4 lg:gap-6 items-center max-w-5xl mx-auto px-4">
                        <div className="w-full">
                            <p className="text-[#000099] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl m-0 text-center drop-shadow-md font-bold leading-tight break-words">ONLY THE BEST FOR YOU</p>
                        </div>
                        <div className="flex items-center mt-1 lg:mt-1 justify-center">
                            <FaPlayCircle
                                className="text-[#000099] mr-3 lg:mr-4 cursor-pointer animate-pulse drop-shadow-md"
                                size={40}
                                onClick={handleExploreClick}
                                style={{ filter: 'drop-shadow(0 0 10px rgba(0, 0, 153, 0.5))' }}
                            />
                            <span className="text-[#000099] text-base sm:text-lg md:text-xl lg:text-xl drop-shadow-md">Explore Video</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeVideo;
