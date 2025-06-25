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
                <div className="w-full flex flex-nowrap justify-center gap-2 md:gap-4 items-center px-2 md:px-16 mt-8 md:mt-20 overflow-x-auto whitespace-nowrap" style={{ marginTop: 'calc(2rem + 180px)' }}>
                    <h2 className="text-custom-blue text-lg md:text-2xl lg:text-3xl font-bold drop-shadow-lg">Plastic Surgery</h2>
                    <span className="text-custom-blue text-xl md:text-2xl font-bold">–</span>
                    <h2 className="text-custom-blue text-lg md:text-2xl lg:text-3xl font-bold drop-shadow-lg">Aesthetics</h2>
                    <span className="text-custom-blue text-xl md:text-2xl font-bold">–</span>
                    <h2 className="text-custom-blue text-lg md:text-2xl lg:text-3xl font-bold drop-shadow-lg">Dermatology</h2>
                </div>

                {/* Bottom Content */}
                <div className="w-full flex flex-col items-center pt-16 md:pt-24">
                    <div className="flex flex-col justify-center gap-3 items-center">
                        <div>
                            <p className="text-[#000099] text-3xl md:text-4xl lg:text-5xl xl:text-6xl m-0 text-center drop-shadow-md font-bold">ONLY THE BEST FOR YOU</p>
                        </div>
                        <div className="flex items-center mt-2 justify-center">
                            <FaPlayCircle
                                className="text-[#000099] mr-2 cursor-pointer animate-pulse drop-shadow-md"
                                size={48}
                                onClick={handleExploreClick}
                                style={{ filter: 'drop-shadow(0 0 10px rgba(0, 0, 153, 0.5))' }}
                            />
                            <span className="text-[#000099] text-lg drop-shadow-md">Explore Video</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeVideo;
