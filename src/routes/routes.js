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
import ContactUs from '../pages/ContactUs/page'; // Import the Contact Us page
import NotFound from '../pages/NotFound/NotFound';
import Blogs from '../pages/Blogs/page';
import Gallery from '../pages/Gallery/page';
// import PlasticSurgery from '../pages/PlasricSurgery/PlasticSurgery';
// import Dermatology from '../pages/Dermetology/Dermetology';
import BreastEnhancement from '../pages/BreastAugmentation/page'; // Import Breast Enhancement
import BodyContouringPage from '../pages/BodyContouringAbdominalPlaty/page';
import AbdominalContouring from '../pages/AbdominalContouring/page';
import HairTransplant from '../pages/HairTransplant/page';
import AntiAging from '../pages/AntiAgeingProcedures/page';
import Rhinoplasty from '../pages/Rhinoplasty/page';
import StructuralFatGrafting from '../pages/StructuralFatGrafting/page';
import Gynaecomastia from '../pages/Gynaecomastia/page';
import AcneAndScars from '../pages/AcneScars/page';
import LaserHairRemoval from '../pages/LaserHairRemoval/page';
import FillersBotox from '../pages/FillersandBotox/page';
import LaserTattooRemoval from '../pages/LaserTattooRemoval/page';
import StretchMarksTreatment from '../pages/StretchMarksTreatment/page';
import LaserSkinToning from '../pages/ChemicalPeels/page';
import LaserScarRevision from '../pages/LaserScarRevision/page';
import PRPInjections from '../pages/PlateletRichPlasmaInjections/page';
import BlepharoPlasty from '../pages/BlepharoPlasty/page'
import Liposuction from '../pages/Liposuction/page'
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
                { path: "blogs", element: <Blogs /> },
                { path: "gallery", element: <Gallery /> },

                // { path: "contact-us", element: <ContactUs /> },
                // { path: "blog", element: <BlogPosts /> },
                // { path: "blog/:id", element: <SinglePost /> }, // Route for single post
                // // Plastic Surgery service category
                // { path: "plastic-surgery", element: <PlasticSurgery /> },
                // // Separate route for breast enhancement
                { path: "/breast-enhancement", element: <BreastEnhancement /> },
                { path: "/body-contouring", element: <BodyContouringPage /> },
                { path: "/abdominal-contouring", element: <AbdominalContouring /> },
                { path: "/hair-transplant", element: <HairTransplant /> },
                { path: "/anti-ageing", element: <AntiAging /> },
                { path: "/rhinoplasty", element: <Rhinoplasty /> },
                { path: "/structural-fat-grafting", element: <StructuralFatGrafting /> },
                { path: "/gynaecomastia-male-breast-moobs", element: <Gynaecomastia /> },
                { path: "/blepharo-plasty", element: <BlepharoPlasty /> },
                { path: "/liposuction", element: <Liposuction /> },
                { path: "/acne-and-scars", element: <AcneAndScars /> },
                { path: "/laser-hair-removal", element: <LaserHairRemoval /> },
                { path: "/fillers-and-botox", element: <FillersBotox /> },
                { path: "/laser-tattoo-removal", element: <LaserTattooRemoval /> },
                { path: "/stretch-marks-treatment", element: <StretchMarksTreatment /> },
                { path: "/laser-skin-rejuvenation", element: <LaserSkinToning /> },
                { path: "/laser-scar-revision", element: <LaserScarRevision /> },
                { path: "/platelet-rich-plasma-injections", element: <PRPInjections /> },
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