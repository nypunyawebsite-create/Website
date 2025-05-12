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
            <div className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 flex items-end justify-center ${videoStarted ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} style={{ backgroundImage: "url('/home/welcome_to_nypunya.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="w-full flex flex-col items-center justify-end pb-8 md:pb-12">
                    <div className="flex flex-col justify-center gap-3 items-center">
                        <div>
                            <p className="text-[#000099] text-3xl md:text-4xl lg:text-5xl xl:text-6xl m-0 text-center drop-shadow-md font-bold">ONLY BEST FOR YOU</p>
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
