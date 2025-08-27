import { useEffect } from 'react';
import { Outlet, useLocation } from "react-router-dom";
import { useSeoMetadata } from '../hooks/useSeoMetadata';
import Header from '../component/Shared/Header';
import Footer from '../component/Shared/Footer';
import Breadcrumbs from '../component/Shared/Breadcrumbs';
import SeoDebugger from '../components/SeoDebugger';

const MainLayout = () => {
    const location = useLocation();

    // SEO metadata mapping for different routes
    const getSeoIdForRoute = (pathname) => {
        // Normalize pathname by removing trailing slash and handling multiple formats
        const normalizedPath = pathname.replace(/\/+$/, ''); // Remove trailing slashes
        console.log(`🔍 Route mapping check: ${pathname} (normalized: ${normalizedPath})`);

        // Handle both with and without trailing slash
        if (normalizedPath === '/' || normalizedPath === '') {
            console.log(`✅ Route mapped to Home ID: 68ae81fd6a479d34977384e1`);
            return '68ae81fd6a479d34977384e1'; // Home page ID
        }

        if (normalizedPath === '/about-us' || normalizedPath === 'about-us') {
            console.log(`✅ Route mapped to About Us ID: 68ae83766a479d349773856d`);
            return '68ae83766a479d349773856d'; // About Us page ID
        }

        if (normalizedPath === '/services' || normalizedPath === 'services') {
            console.log(`✅ Route mapped to Services ID: 68aea59c0c337b7d940f1318`);
            return '68aea59c0c337b7d940f1318'; // Services page ID
        }

        // Add more route mappings as needed
        // You can add more routes here with their corresponding SEO IDs
        // Example:
        // if (normalizedPath === '/contact' || normalizedPath === 'contact') {
        //     return 'YOUR_CONTACT_PAGE_SEO_ID';
        // }

        console.log(`❌ No route mapping found for: ${normalizedPath}`);
        return null;
    };

    // Alternative route matching for edge cases
    const getSeoIdForRouteAlternative = (pathname) => {
        // Handle various pathname formats
        const pathVariations = [
            pathname,
            pathname.replace(/\/+$/, ''), // Remove trailing slashes
            pathname.replace(/^\/+/, ''), // Remove leading slashes
            pathname.replace(/\/+$/, '').replace(/^\/+/, '') // Remove both
        ];

        console.log(`🔄 Alternative route matching for: ${pathname}`);
        console.log(`🔄 Path variations:`, pathVariations);

        for (const path of pathVariations) {
            if (path === '' || path === '/') {
                return '68ae81fd6a479d34977384e1'; // Home
            }
            if (path === 'about-us' || path === '/about-us') {
                return '68ae83766a479d349773856d'; // About Us
            }
        }

        return null;
    };

    const seoId = getSeoIdForRoute(location.pathname) || getSeoIdForRouteAlternative(location.pathname);
    const { seoData, loading } = useSeoMetadata(seoId, 'id');

    // Debug logging
    useEffect(() => {
        console.log(`📍 Route changed to: ${location.pathname}`);
        console.log(`📍 Route length: ${location.pathname.length}`);
        console.log(`📍 Route includes trailing slash: ${location.pathname.endsWith('/')}`);
        console.log(`🔍 SEO: Route: ${location.pathname}, SEO ID: ${seoId}`);

        if (seoId) {
            console.log(`🔍 SEO: Loading metadata for route: ${location.pathname} with ID: ${seoId}`);
        } else {
            console.log(`⚠️ SEO: No SEO ID found for route: ${location.pathname}`);
        }
    }, [location.pathname, seoId]);

    useEffect(() => {
        if (seoData) {
            console.log(`✅ SEO: Metadata loaded for ${location.pathname}:`, seoData.metaTitle);
            console.log(`📊 SEO Data:`, {
                title: seoData.metaTitle,
                description: seoData.metaDescription,
                id: seoData._id
            });
        } else if (!loading && seoId) {
            console.log(`⚠️ SEO: No metadata found for ${location.pathname} with ID: ${seoId}`);
            // Set default title if no SEO data found
            const defaultTitle = `Nypunya - ${location.pathname === '/' ? 'Home' : location.pathname.replace('/', '').replace('-', ' ')}`;
            document.title = defaultTitle;
            console.log(`🔄 SEO: Set default title: ${defaultTitle}`);
        }
    }, [seoData, loading, seoId, location.pathname]);

    // Reset title when route changes (fallback)
    useEffect(() => {
        if (!seoId || (!loading && !seoData)) {
            const defaultTitle = location.pathname === '/' ? 'Nypunya - Home' : `Nypunya - ${location.pathname.replace('/', '').replace('-', ' ')}`;
            document.title = defaultTitle;
        }
    }, [location.pathname, seoId, loading, seoData]);

    // Force SEO reload on route change with delay
    useEffect(() => {
        const timer = setTimeout(() => {
            if (seoId && !seoData && !loading) {
                console.log(`🔄 SEO: Force reloading SEO for ${location.pathname} with ID: ${seoId}`);
                // This will trigger the useSeoMetadata hook to reload
            }
        }, 100); // Small delay to ensure route is established

        return () => clearTimeout(timer);
    }, [location.pathname, seoId, seoData, loading]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]); // Triggers scroll to top on route/pathname change

    return (
        <main >
            <Header />
            <Breadcrumbs />
            <Outlet />
            <Footer />
            <SeoDebugger
                seoData={seoData}
                loading={loading}
                seoId={seoId}
                pathname={location.pathname}
            />
        </main>
    );
};

export default MainLayout;
