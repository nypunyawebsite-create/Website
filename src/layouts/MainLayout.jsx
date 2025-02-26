import { useEffect } from 'react';
import { Outlet } from "react-router-dom";
import Header from '../component/Shared/Header';
import Footer from '../component/Shared/Footer';

const MainLayout = () => {
    useEffect(() => {
        const handleLinkClick = (event) => {
            const target = event.target.closest('a');
            if (target && target.href) {
                setTimeout(() => {
                    window.scrollTo(0, 0);
                }, 0);
            }
        };

        document.addEventListener('click', handleLinkClick);
        return () => document.removeEventListener('click', handleLinkClick);
    }, []);

    return (
        <main>
            <Header />
            <Outlet />
            <Footer />
        </main>
    );
};

export default MainLayout;