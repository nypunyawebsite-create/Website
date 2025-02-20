import React from 'react';
import { useRoutes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import AboutUs from '../pages/AboutUs/page';
import Services from '../pages/Servicess/page';

import TestPage from '../pages/TestPage/page';
import TestLandingpage from '../pages/TestPage/[slug]/page';

// import OurDoctors from '../pages/OurTeam/OurTeam';
import OurDoctors from '../pages/OurDoctors/page';
import ContactUs from '../pages/ContactUs/ContactUs'; // Import the Contact Us page
import NotFound from '../pages/NotFound/NotFound';
// import PlasticSurgery from '../pages/PlasricSurgery/PlasticSurgery';
// import Dermatology from '../pages/Dermetology/Dermetology';
// import BreastEnhancement from '../pages/BreastEnhancement/BreastEnhancement'; // Import Breast Enhancement
// import BodyContouringPage from '../pages/BodyContouring/BodyContouring';
// import HairTransplant from '../pages/HairTransplant/HairTransplant';
// import AntiAging from '../pages/AntiAging/AntiAging';
// import Rhinoplasty from '../pages/Rhinoplasty/Rhinoplasty';
// import StructuralFatGrafting from '../pages/StructuralFatGrafting/StructuralFatGrafting';
// import Gynaecomastia from '../pages/Gynaecomastia/Gynaecomastia';
// import AcneAndScars from '../pages/AcneAndScars/AcneAndScars';
// import LaserHairRemoval from '../pages/LaserHairRemoval/LaserHairRemoval';
// import FillersBotox from '../pages/FillersBotox/FillersBotox';
// import LaserTattooRemoval from '../pages/LaserTattooRemoval/LaserTattooRemoval';
// import StretchMarksTreatment from '../pages/StretchMarksTreatment/StretchMarksTreatment';
// import LaserSkinToning from '../pages/LaserSkinToning/LaserSkinToning';
// import LaserScarRevision from '../pages/LaserScarRevision';
// import PRPInjections from '../pages/PRPInjections/PRPInjections';
// import BlogPosts from '../pages/BlogPosts/BlogPosts';
// import SinglePost from '../pages/SinglePost/SinglePost';

function AppRoutes() {
    let routes = useRoutes([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                { path: "/", element: <Home /> },
                { path: "about-us", element: <AboutUs /> },
                { path: "services", element: <Services /> },
                { path: "test-page", element: <TestPage /> },
                { path: "test-page/:slug", element: <TestLandingpage /> },

                { path: "our-doctors", element: <OurDoctors /> },
                { path: "contact-us", element: <ContactUs /> }, // Add the route for Contact Us page

                // { path: "contact-us", element: <ContactUs /> },
                // { path: "blog", element: <BlogPosts /> },
                // { path: "blog/:id", element: <SinglePost /> }, // Route for single post
                // // Plastic Surgery service category
                // { path: "plastic-surgery", element: <PlasticSurgery /> },
                // // Separate route for breast enhancement
                // { path: "plastic-surgery/breast-enhancement", element: <BreastEnhancement /> },
                // { path: "plastic-surgery/body-contouring", element: <BodyContouringPage /> },
                // { path: "plastic-surgery/hair-transplant", element: <HairTransplant /> },
                // { path: "plastic-surgery/anti-ageing", element: <AntiAging /> },
                // { path: "plastic-surgery/rhinoplasty", element: <Rhinoplasty /> },
                // { path: "plastic-surgery/structural-fat-grafting", element: <StructuralFatGrafting /> },
                // { path: "plastic-surgery/gynaecomastia-male-breast-moobs", element: <Gynaecomastia /> },
                // { path: "dermatology/acne-and-scars", element: <AcneAndScars /> },
                // { path: "dermatology/laser-hair-removal", element: <LaserHairRemoval /> },
                // { path: "dermatology/fillers-and-botox", element: <FillersBotox /> },
                // { path: "dermatology/laser-tattoo-removal", element: <LaserTattooRemoval /> },
                // { path: "dermatology/stretch-marks-treatment", element: <StretchMarksTreatment /> },
                // { path: "dermatology/laser-skin-rejuvenation", element: <LaserSkinToning /> },
                // { path: "dermatology/laser-scar-revision", element: <LaserScarRevision /> },
                // { path: "dermatology/platelet-rich-plasma-injections", element: <PRPInjections /> },
                // // Dermatology service category
                // { path: "dermatology", element: <Dermatology /> },
                // // Catch-all route for non-existing paths
                { path: "*", element: <NotFound /> }
            ]
        }
    ]);

    return routes;
}

export default AppRoutes;