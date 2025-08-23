import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaCalendarAlt, FaTimes, FaBars, FaChevronRight, FaChevronDown } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MobileNavBar from "./MobileNavBar";
import { serviceSubmenu, submenuItems } from "../../../utils/navBarData";


const DesktopNavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [hoveredCategory, setHoveredCategory] = useState(null);
    const [hoveredSubservice, setHoveredSubservice] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubservice, setSelectedSubservice] = useState(null);
    const [selectedSubmenuItem, setSelectedSubmenuItem] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 180);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    const isActive = (path) => location.pathname === path;

    const isSubmenuItemActive = (service, item) => {
        if (item === "Transformation") {
            return (
                location.pathname === "/gallery" &&
                location.state?.category === service.name
            );
        } else {
            return (
                location.pathname === service.path &&
                location.state?.scrollTo === item.toLowerCase().replace(/\s+/g, "-")
            );
        }
    };

    const isSubserviceActive = (service) => {
        return submenuItems.some((item) => isSubmenuItemActive(service, item));
    };

    const isCategoryActive = (category) => {
        return category.subservices.some((service) => isSubserviceActive(service));
    };
    const isServicesMenuActive = () => {
        return serviceSubmenu.some((category) =>
            category.subservices.some((service) =>
                submenuItems.some((item) =>
                    item !== "Transformation" && isSubmenuItemActive(service, item)
                )
            )
        );
    };

    // Add delay to hover events
    const handleMouseEnter = (callback) => {
        setTimeout(callback, 100); // 100ms delay
    };

    const handleMouseLeave = (callback) => {
        setTimeout(callback, 100); // 100ms delay
    };

    return (

        <>
            <style>
                {
                    `
                    li.relative.service-custom-cls {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        align-content: center;
                        flex-wrap: wrap;
                    }

                    /* Services menu styles */
                    .services-menu {
                        font-size: 14px;
                    }

                    @media (min-width: 1152px) {
                        .services-menu {
                            font-size: 16px;
                        }
                    }

                    .services-submenu {
                        font-size: 14px;
                    }

                    @media (max-width: 1152px) {
                        .services-submenu {
                            font-size: 12px;
                        }
                             .services-menu {
                            font-size: 12px;
                        }
                    }
                    }
                    `
                }
            </style>


            <header
                className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "shadow-md top-0 px-6" : ""}`}
                style={{
                    background: 'linear-gradient(90deg, #fff 0%, #5f9ece 30%, #2b59b9 60%, #2b5aba 80%, #000099 100%)'
                }}
            >
                {/* Top Contact Bar */}
                <div className={`w-[90%] flex justify-between mx-auto ${isScrolled ? "hidden" : "flex"}`}>
                    <div className="flex gap-3 text-black">
                        <div className="flex items-center">
                            <FaEnvelope className="mr-2" />
                            <a href="mailto:clinic.nypunyaaesthetic@gmail.com" className="hidden md:inline">
                                clinic.nypunyaaesthetic@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center">
                            <FaPhoneAlt className="mr-2" />
                            <a href="tel:+918136822727" className="hidden md:inline"> +91 9380902115 </a> &nbsp;&nbsp;&nbsp;
                            <a href="tel:+919778412980" className="hidden md:inline"> +91 9380902114 </a> &nbsp;&nbsp;&nbsp;
                            <a href="tel:+919778412980" className="hidden md:inline"> +91 9380902110 </a>
                        </div>
                    </div>
                    <button
                        className="bg-[#abe2e5] text-[#000099] mt-1 px-6 py-2 rounded-full shadow-lg font-semibold flex items-center transition-all duration-200 hover:bg-[#92E0E0] hover:scale-105"
                    >
                        <FaCalendarAlt className="mr-2 text-[#000099]" />
                        Appointments
                    </button>
                </div>
                {/* Main Navbar */}
                <div className={`h-1/20 transition-all duration-300 mx-auto flex md:justify-center justify-between w-[90%]`}>
                    <div className="w-[90%] mx-auto flex justify-between items-center md:p-4 p-2 h-full">
                        <div className="text-xl font-bold">
                            <Link to="/" >
                                <img src="/nypunya-logo_new.png" alt="Nypunya Logo" className="xl:w-[100%] md:w-[80%]" style={{ 'width': '337px' }} />
                            </Link>
                        </div>
                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden text-white text-2xl"
                        >
                            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                        <nav className="hidden lg:flex lg:items-center">
                            <ul className="flex space-x-6 text-white">
                                <li><Link to="/" className={`relative text-sm xl:text-white ${isActive("/") ? "text-white font-bold" : "text-white"} after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-[#92E0E0] after:transition-all after:duration-300 hover:after:w-full ${isActive("/") ? "after:w-full" : ""}`}>Home</Link></li>
                                <li><Link to="/about-us" className={`relative text-sm xl:text-white ${isActive("/about-us") ? "text-white font-bold" : "text-white"} after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-[#92E0E0] after:transition-all after:duration-300 hover:after:w-full ${isActive("/about-us") ? "after:w-full" : ""}`}>About Us</Link></li>

                                {/* SERVICES MENU */}
                                <li
                                    className="relative service-custom-cls"
                                    onMouseEnter={() => handleMouseEnter(() => setIsServicesOpen(true))}
                                    onMouseLeave={() => handleMouseLeave(() => {
                                        setIsServicesOpen(false);
                                        setHoveredCategory(null);
                                        setHoveredSubservice(null);
                                    })}
                                >
                                    <Link to="/services" className={`relative text-sm xl:text-white ${isActive("/services") || isServicesMenuActive() ? "text-[#92E0E0] font-bold" : "text-white"} after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-[#92E0E0] after:transition-all after:duration-300 hover:after:w-full ${isActive("/services") || isServicesMenuActive() ? "after:w-full" : ""} flex items-center cursor-pointer gap-1`}>
                                        Services <FaChevronDown className="text-sm mt-[1px]" />
                                    </Link>

                                    {isServicesOpen && (
                                        <div className="absolute top-full left-0 bg-custom-blue shadow-lg rounded-md py-4 px-4 z-50 w-64 services-menu">
                                            <ul>
                                                {serviceSubmenu.map((category, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="relative service-custom-cls"
                                                        onMouseEnter={() => handleMouseEnter(() => setHoveredCategory(category.category))}
                                                    >
                                                        <div
                                                            className={`relative flex justify-between items-center w-full px-4 py-2 m-1 hover:bg-[#92E0E0] rounded cursor-pointer ${isCategoryActive(category) ? "text-white bg-[#92E0E0]" : "text-white"}`}
                                                        >
                                                            <span className="font-medium">{category.category}</span>
                                                            <FaChevronRight className="text-sm text-gray-500" />
                                                        </div>

                                                        {hoveredCategory === category.category && (
                                                            <div className="absolute top-0 left-full ml-2 bg-custom-blue shadow-lg rounded-md p-4 w-72 z-50 services-submenu">
                                                                <ul className="space-y-2">
                                                                    {category.subservices.map((service, subIdx) => (
                                                                        <li
                                                                            key={subIdx}
                                                                            className="relative"
                                                                            onMouseEnter={() => handleMouseEnter(() => setHoveredSubservice(service.name))}
                                                                            onMouseLeave={() => handleMouseLeave(() => setHoveredSubservice(null))}
                                                                        >
                                                                            <div
                                                                                className={`relative px-3 py-2 rounded-md font-medium flex justify-between items-center cursor-pointer ${isSubserviceActive(service)
                                                                                    ? "text-white bg-[#92E0E0]"
                                                                                    : "text-white hover:bg-[#92E0E0]"
                                                                                    }`}
                                                                            >
                                                                                {service.name}
                                                                                <FaChevronRight className="text-xs ml-2" />
                                                                            </div>

                                                                            {hoveredSubservice === service.name && (
                                                                                <ul className="mt-1 bg-gray-50 border border-gray-200 rounded-md p-2 ml-4 transition-all duration-300 ease-in-out transform origin-top-left">
                                                                                    {/* Service Name Header */}
                                                                                    <li className="px-2 py-1 mb-2 border-b border-gray-200">
                                                                                        <Link
                                                                                            to={service.path}
                                                                                            onClick={() => {
                                                                                                setSelectedCategory(category.category);
                                                                                                setSelectedSubservice(service.name);
                                                                                                setIsServicesOpen(false);
                                                                                                setHoveredCategory(null);
                                                                                                setHoveredSubservice(null);
                                                                                            }}
                                                                                            className="text-sm font-semibold text-[#92E0E0] capitalize hover:text-[#040857] transition-colors duration-200 cursor-pointer block"
                                                                                        >
                                                                                            {service.name}
                                                                                        </Link>
                                                                                    </li>

                                                                                    {submenuItems.map((item, i) => (
                                                                                        <li key={i} className="transition-all duration-300 ease-in-out transform hover:translate-x-1">
                                                                                            <Link
                                                                                                to={item === "Transformation" ? "/gallery" : service.path}
                                                                                                onClick={() => {
                                                                                                    setSelectedCategory(category.category);
                                                                                                    setSelectedSubservice(service.name);
                                                                                                    setSelectedSubmenuItem(item);
                                                                                                    setIsServicesOpen(false);
                                                                                                    setHoveredCategory(null);
                                                                                                    setHoveredSubservice(null);
                                                                                                }}
                                                                                                state={
                                                                                                    item === "Transformation"
                                                                                                        ? { category: `${category.category} ${service.name}` }
                                                                                                        : item === "Why Us"
                                                                                                            ? { scrollTo: "whyUs" }
                                                                                                            : { scrollTo: item.toLowerCase().replace(/\s+/g, "-") }
                                                                                                }
                                                                                                className={`block px-2 py-1 text-sm w-full text-left cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-100 rounded-md ${isSubmenuItemActive(service, item)
                                                                                                    ? "text-[#92E0E0] font-semibold bg-gray-100"
                                                                                                    : "text-gray-700 hover:text-[#92E0E0]"
                                                                                                    }`}
                                                                                            >
                                                                                                {item}
                                                                                            </Link>
                                                                                        </li>
                                                                                    ))}
                                                                                </ul>
                                                                            )}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </li>
                                <li><Link to="/our-doctors" className={`relative text-sm xl:text-white ${isActive("/our-doctors") ? "text-[#92E0E0] font-bold" : "text-white"} after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-[#92E0E0] after:transition-all after:duration-300 hover:after:w-full ${isActive("/our-doctors") ? "after:w-full" : ""}`}>Our Doctors</Link></li>
                                <li><Link to="/gallery" className={`relative text-sm xl:text-white ${isActive("/gallery") ? "text-[#92E0E0] font-bold" : "text-white"} after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-[#92E0E0] after:transition-all after:duration-300 hover:after:w-full ${isActive("/gallery") ? "after:w-full" : ""}`}>Gallery</Link></li>
                                <li><Link to="/blogs" className={`relative text-sm xl:text-white ${isActive("/blogs") ? "text-[#92E0E0] font-bold" : "text-white"} after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-[#92E0E0] after:transition-all after:duration-300 hover:after:w-full ${isActive("/blogs") ? "after:w-full" : ""}`}>Blog</Link></li>
                                <li><Link to="/international" className={`relative text-sm xl:text-white ${isActive("/international") ? "text-[#92E0E0] font-bold" : "text-white"} after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-[#92E0E0] after:transition-all after:duration-300 hover:after:w-full ${isActive("/international") ? "after:w-full" : ""}`}>International</Link></li>
                                <li><Link to="/contact-us" className={`relative text-sm xl:text-white ${isActive("/contact-us") ? "text-[#92E0E0] font-bold" : "text-white"} after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-[#92E0E0] after:transition-all after:duration-300 hover:after:w-full ${isActive("/contact-us") ? "after:w-full" : ""}`}>Contact Us</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            {/* Mobile Navigation */}
            <MobileNavBar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
        </>
    );
};

export default DesktopNavBar;
