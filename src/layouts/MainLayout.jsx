// import { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
// import Header from '../components/Header/NavBar';
// import Footer from '../components/Footer/Footer';
// import ScrollToTop from '../utils/ScrollToTop';

const MainLayout = () => {
    // const [scrollIndicator, setScrollIndicator] = useState(0);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    //         const scrollTop = document.documentElement.scrollTop;
    //         const scrollPercentage = (scrollTop / scrollHeight) * 100;
    //         setScrollIndicator(Math.round(scrollPercentage));  // Rounds the percentage
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    return (
        <main>
            {/* <Header /> */}
            {/* Floating Scroll Indicator */}

            {/* <ScrollToTop />
            {scrollIndicator > 1 && (  // Show only after 1% scroll
                <div
                    className="fixed z-50 right-4 bottom-4 flex items-center justify-center w-14 h-14 text-white text-sm font-bold rounded-full shadow-md shadow-[#FFDF00]"
                    style={{
                        background: `conic-gradient(#14202E ${scrollIndicator}%, #e5e7eb ${scrollIndicator}%)`, // Scroll progress effect
                        position: 'fixed',
                        right: '20px',
                        bottom: '140px',
                    }}
                >

                    <div className='bg-white text-black flex items-center justify-center rounded-full h-10 w-10 '>
                        {scrollIndicator}%
                    </div>
                </div>
            )} */}

            <Outlet />
            {/* <Footer /> */}
        </main>
    );
};

export default MainLayout;