import { useEffect } from 'react';
import { Outlet, useLocation } from "react-router-dom";
import Header from '../component/Shared/Header';
import Footer from '../component/Shared/Footer';
import Breadcrumbs from '../component/Shared/Breadcrumbs';
import FloatingWhatsApp from '../component/Shared/FloatingWhatsApp';

const MainLayout = () => {
    const location = useLocation();

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <main>
            <Header />
            <Breadcrumbs />
            <Outlet />
            <Footer />
            <FloatingWhatsApp />
        </main>
    );
};

export default MainLayout;
