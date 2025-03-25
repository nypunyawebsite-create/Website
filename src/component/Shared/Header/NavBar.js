import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaCalendarAlt, FaTimes, FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const serviceSubmenu = [
    { name: "Body Contouring", path: "/body-contouring" },
    { name: "Hair Transplant", path: "/hair-transplant" },
    { name: "Anti-Ageing", path: "/anti-ageing" },
    { name: "Rhinoplasty", path: "/rhinoplasty" },
    { name: "Structural Fat", path: "/structural-fat" },
];

const submenuItems = ["Information", "Transformation", "FAQs", "Why Us"];

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 180);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (path) => location.pathname === path;
    const isServiceActive = serviceSubmenu.some(service => location.pathname.includes(service.path));

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md top-0 px-6" : "bg-transparent top-2"}`}>
            {/* Top Contact Bar */}
            <div className={`w-[90%] flex flex-row justify-between items-center mx-auto ${isScrolled ? "hidden" : "flex"}`}>
                <div className="flex flex-row gap-3 text-white">
                    <div className="flex items-center">
                        <FaEnvelope className="mr-2" />
                        <a href="mailto:clinic.nypunyaaesthetic@gmail.com" className="hidden md:inline">
                            clinic.nypunyaaesthetic@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center">
                        <FaPhoneAlt className="mr-2" />
                        <a href="tel:+918136822727" className="hidden md:inline">
                            +91 813 682 2727
                        </a>
                        <a href="tel:+919778412980" className="hidden md:inline">
                            , +91 977 841 2980
                        </a>
                    </div>
                </div>
                <div>
                    <button className="bg-[#92E0E0] text-black px-4 py-2 rounded-xl rounded-bl-none rounded-br-none flex items-center">
                        <FaCalendarAlt className="mr-2 text-black" />
                        Appointments
                    </button>
                </div>
            </div>

            {/* Main Navbar */}
            <div className={`h-1/20 transition-all duration-300 mx-auto flex justify-center ${isScrolled ? "bg-white w-full" : "bg-white w-[90%] rounded-3xl rounded-t-none px-6"}`}>
                <div className="w-full mx-auto flex justify-between items-center p-4 h-full">
                    <div className="text-xl font-bold">
                        <img src="/site-logo.svg" alt="Nypunya Logo" className="md:w-[100%]" />
                    </div>
                    <nav className="hidden md:flex md:items-center">
                        <ul className="flex space-x-6">
                            <li>
                                <Link to="/" className={`font-bold ${isActive("/") ? "text-[#92E0E0]" : "text-gray-800"}`}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about-us" className={`font-bold ${isActive("/about-us") ? "text-[#92E0E0]" : "text-gray-800"}`}>
                                    About Us
                                </Link>
                            </li>

                            {/* Services Dropdown */}
                            <li
                                className="relative group"
                                onMouseEnter={() => setIsServicesOpen(true)}
                                onMouseLeave={() => { setIsServicesOpen(false); setActiveSubmenu(null); }}
                            >
                                <button className={`font-bold ${isServiceActive ? "text-[#92E0E0]" : "text-gray-800"}`}>
                                    Services
                                </button>

                                {isServicesOpen && (
                                    <div className="absolute top-6 left-0 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                                        <ul>
                                            {serviceSubmenu.map((service, index) => (
                                                <li key={index} className="relative">
                                                    <Link
                                                        to={service.path}
                                                        className={`block px-4 py-2 ${isActive(service.path) ? "text-[#92E0E0] bg-gray-200" : "text-gray-800 hover:bg-[#92E0E0]"}`}
                                                        onMouseEnter={() => setActiveSubmenu(service.name)}
                                                    >
                                                        {service.name}
                                                    </Link>

                                                    {/* Nested Submenu */}
                                                    {activeSubmenu === service.name && (
                                                        <div
                                                            className="absolute left-full top-0 w-48 bg-white shadow-lg rounded-md py-2"
                                                            onMouseEnter={() => setActiveSubmenu(service.name)}
                                                            onMouseLeave={() => setActiveSubmenu(null)}
                                                        >
                                                            <ul>
                                                                {submenuItems.map((item, i) => (
                                                                    <li key={i}>
                                                                        <Link
                                                                            to={`${service.path}#${item.toLowerCase()}`}
                                                                            className={`block px-4 py-2 ${location.hash === `#${item.toLowerCase()}` ? "" : "text-gray-800 hover:bg-[#92E0E0]"}`}
                                                                        >
                                                                            {item}
                                                                        </Link>
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

                            <li>
                                <Link to="/our-doctors" className={`font-bold ${isActive("/our-doctors") ? "text-[#92E0E0]" : "text-gray-800"}`}>
                                    Our Doctors
                                </Link>
                            </li>
                            <li>
                                <Link to="/gallery" className={`font-bold ${isActive("/gallery") ? "text-[#92E0E0]" : "text-gray-800"}`}>
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact-us" className={`font-bold ${isActive("/contact-us") ? "text-[#92E0E0]" : "text-gray-800"}`}>
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/blogs" className={`font-bold ${isActive("/blogs") ? "text-[#92E0E0]" : "text-gray-800"}`}>
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <button className="md:hidden text-gray-800" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <FaBars size={24} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default NavBar;



