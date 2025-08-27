import { useEffect } from 'react';
import { Outlet, useLocation } from "react-router-dom";
import { useSeoMetadata } from '../hooks/useSeoMetadata';
import Header from '../component/Shared/Header';
import Footer from '../component/Shared/Footer';
import Breadcrumbs from '../component/Shared/Breadcrumbs';

const MainLayout = () => {
    const location = useLocation();

    // SEO metadata mapping for different routes
    const getSeoIdForRoute = (pathname) => {
        switch (pathname) {
            case '/':
                return '68ae81fd6a479d34977384e1'; // Home page ID
            case '/about-us':
                return '68ae83766a479d349773856d'; // Replace with actual ID
            case '/services':
                return 'your-services-page-seo-id'; // Replace with actual ID
            // Add more routes as needed
            default:
                return null;
        }
    };

    const seoId = getSeoIdForRoute(location.pathname);
    const { seoData, loading } = useSeoMetadata(seoId, 'id');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]); // Triggers scroll to top on route/pathname change

    return (
        <main >
            <Header />
            <Breadcrumbs />
            <Outlet />
            <Footer />
        </main>
    );
};

export default MainLayout;
