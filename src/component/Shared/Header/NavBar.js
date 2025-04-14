import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaCalendarAlt, FaTimes, FaBars, FaChevronRight, FaChevronDown } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
const serviceSubmenu = [
    {
        category: "Plastic Surgery",
        subservices: [
            { name: "Breast Augmentation/Breast Enhancement", path: "/breast-enhancement" },
            { name: "Body Contouring Abdominal Platy", path: "/body-contouring" },
            { name: "Hair Transplant", path: "/hair-transplant" },
            { name: "Anti Ageing", path: "/anti-ageing" },
            { name: "Rhinoplasty", path: "/rhinoplasty" },
            { name: "Structural Fat Grafting", path: "/structural-fat-grafting" },
            { name: "Gynaecomastia (Male Breast / Moobs)", path: "/gynaecomastia-male-breast-moobs" },
        ],
    },
    {
        category: "Dermatology",
        subservices: [
            { name: "Acne and acne scars", path: "/acne-and-scars" },
            { name: "Laser Hair Removal", path: "/laser-hair-removal" },
            { name: "Fillers and Botox", path: "/fillers-and-botox" },
            { name: "Laser Tattoo Removal", path: "/laser-tattoo-removal" },
            { name: "Stretch Marks Treatment", path: "/stretch-marks-treatment" },
            { name: "Laser Skin Toning", path: "/laser-skin-rejuvenation" },
            { name: "Chemical Peels", path: "/laser-skin-rejuvenation" },
            { name: "Laser Scar Revision", path: "/laser-scar-revision" },
            { name: "Hairfall Treatment / PRP", path: "/platelet-rich-plasma-injections" },
            { name: "Other Services", path: "/other-services" },
        ],
    },
];
const submenuItems = ["Information", "Transformation", "FAQs", "Why Us"];
const NavBar = () => {
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

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md top-0 px-6" : "bg-transparent top-2"}`}>
            {/* Top Contact Bar */}
            <div className={`w-[90%] flex justify-between mx-auto ${isScrolled ? "hidden" : "flex"}`}>
                <div className="flex gap-3 text-white">
                    <div className="flex items-center">
                        <FaEnvelope className="mr-2" />
                        <a href="mailto:clinic.nypunyaaesthetic@gmail.com" className="hidden md:inline">
                            clinic.nypunyaaesthetic@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center">
                        <FaPhoneAlt className="mr-2" />
                        <a href="tel:+918136822727" className="hidden md:inline">+91 813 682 2727</a>
                        <a href="tel:+919778412980" className="hidden md:inline">, +91 977 841 2980</a>
                    </div>
                </div>
                <button className="bg-[#92E0E0] text-black px-4 py-2 rounded-xl rounded-bl-none rounded-br-none flex items-center">
                    <FaCalendarAlt className="mr-2 text-black" />
                    Appointments
                </button>
            </div>

            {/* Main Navbar */}
            <div className={`h-1/20 transition-all duration-300 mx-auto flex md:justify-center justify-between ${isScrolled ? "bg-white w-full" : "bg-white w-[90%] rounded-3xl rounded-t-none px-6"}`}>
                <div className="w-full mx-auto flex justify-between items-center p-4 h-full">
                    <div className="text-xl font-bold">
                        <Link to="/" >
                            <img src="/site-logo.svg" alt="Nypunya Logo" className="md:w-[100%]" />
                        </Link>
                    </div>
                    <nav className="hidden md:flex md:items-center">
                        <ul className="flex space-x-6">
                            <li><Link to="/" className={`font-bold ${isActive("/") ? "text-[#92E0E0]" : "text-gray-800"}`}>Home</Link></li>
                            <li><Link to="/about-us" className={`font-bold ${isActive("/about-us") ? "text-[#92E0E0]" : "text-gray-800"}`}>About Us</Link></li>

                            {/* SERVICES MENU */}
                            <li
                                className="relative"
                                onMouseEnter={() => setIsServicesOpen(true)}
                                onMouseLeave={() => {
                                    setIsServicesOpen(false);
                                    setHoveredCategory(null);
                                    setHoveredSubservice(null);
                                }}
                            >
                                <Link to="/services" className="font-bold text-gray-800 flex items-center cursor-pointer gap-1">
                                    Services <FaChevronDown className="text-sm mt-[1px]" />
                                </Link>

                                {isServicesOpen && (
                                    <div className="absolute top-full left-0  bg-white shadow-lg rounded-md py-4 px-4 z-50 w-64">
                                        <ul>
                                            {serviceSubmenu.map((category, idx) => (
                                                <li
                                                    key={idx}
                                                    className="relative"
                                                    onMouseEnter={() => setHoveredCategory(category.category)}
                                                >
                                                    <div
                                                        className={`flex justify-between items-center w-full px-4 py-2 m-1 hover:bg-[#92E0E0] rounded cursor-pointer ${isCategoryActive(category) ? "text-gray-800 bg-[#92E0E0]" : "text-gray-800"
                                                            }`}
                                                    >
                                                        <span className="font-medium">{category.category}</span>
                                                        <FaChevronRight className="text-sm text-gray-500" />
                                                    </div>

                                                    {hoveredCategory === category.category && (
                                                        <div className="absolute top-0 left-full ml-2 bg-white shadow-lg rounded-md p-4 w-72 z-50">
                                                            <ul className="space-y-2">
                                                                {category.subservices.map((service, subIdx) => (
                                                                    <li
                                                                        key={subIdx}
                                                                        className="relative"
                                                                        onMouseEnter={() => setHoveredSubservice(service.name)}
                                                                        onMouseLeave={() => setHoveredSubservice(null)}
                                                                    >
                                                                        <div
                                                                            className={`px-3 py-2 rounded-md font-medium flex justify-between items-center ${isSubserviceActive(service)
                                                                                ? "text-gray-800 bg-[#92E0E0]"
                                                                                : "text-gray-800 hover:bg-[#92E0E0]"
                                                                                }`}
                                                                        >
                                                                            {service.name}
                                                                            <FaChevronRight className="text-xs ml-2" />
                                                                        </div>

                                                                        {hoveredSubservice === service.name && (
                                                                            <ul className="mt-1 bg-gray-50 border border-gray-200 rounded-md p-2 ml-4">
                                                                                {submenuItems.map((item, i) => (
                                                                                    <li key={i}>
                                                                                        <button
                                                                                            onClick={() => {
                                                                                                setSelectedCategory(category.category);
                                                                                                setSelectedSubservice(service.name);
                                                                                                setSelectedSubmenuItem(item);
                                                                                                setIsServicesOpen(false);
                                                                                                setHoveredCategory(null);
                                                                                                setHoveredSubservice(null);

                                                                                                if (item === "Transformation") {
                                                                                                    navigate("/gallery", {
                                                                                                        state: { category: service.name },
                                                                                                    });
                                                                                                } else {
                                                                                                    navigate(service.path, {
                                                                                                        state: {
                                                                                                            scrollTo: item.toLowerCase().replace(/\s+/g, "-"),
                                                                                                        },
                                                                                                    });
                                                                                                }
                                                                                            }}
                                                                                            className={`block px-2 py-1 text-sm w-full text-left ${isSubmenuItemActive(service, item)
                                                                                                ? "text-[#92E0E0] font-semibold"
                                                                                                : "text-gray-700 hover:text-[#92E0E0]"
                                                                                                }`}
                                                                                        >
                                                                                            {item}
                                                                                        </button>
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

                            <li><Link to="/our-doctors" className={`font-bold ${isActive("/our-doctors") ? "text-[#92E0E0]" : "text-gray-800"}`}>Our Doctors</Link></li>
                            <li><Link to="/gallery" className={`font-bold ${isActive("/gallery") ? "text-[#92E0E0]" : "text-gray-800"}`}>Gallery</Link></li>
                            <li><Link to="/contact-us" className={`font-bold ${isActive("/contact-us") ? "text-[#92E0E0]" : "text-gray-800"}`}>Contact Us</Link></li>
                            <li><Link to="/blogs" className={`font-bold ${isActive("/blogs") ? "text-[#92E0E0]" : "text-gray-800"}`}>Blog</Link></li>
                        </ul>
                    </nav>

                    <button
                        className="md:hidden text-gray-800 z-10"
                        onClick={() => setIsMobileMenuOpen(true)} // only opens the menu
                    >
                        <FaBars size={24} />
                    </button>
                </div>
            </div>

            {/* Mobile Full-Screen Menu */}
            <div className="relative md:hidden">
                {/* Hamburger Toggle */}
                {/* <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-2xl text-gray-800 z-50 relative"
            >
                <FaBars />
            </button> */}

                {/* Fullscreen Mobile Menu */}
                <div
                    className={`fixed inset-0 bg-white z-50 px-6 py-6 overflow-y-auto flex flex-col transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}
                >
                    {/* Close Button on Right Top */}
                    <div className="w-full flex justify-end">
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-2xl text-gray-800"
                        >
                            <FaTimes />
                        </button>
                    </div>

                    <ul className="flex flex-col gap-4 w-full mt-4">
                        <li>
                            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-gray-800">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about-us" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-gray-800">
                                About Us
                            </Link>
                        </li>

                        {/* SERVICES DROPDOWN */}
                        <li>
                            <details className="group">
                                <summary className="cursor-pointer font-bold text-gray-800 flex justify-between items-center py-2">
                                    Services
                                    <FaChevronDown className="ml-2" />
                                </summary>

                                <ul className="ml-4 mt-2 flex flex-col gap-2">
                                    {serviceSubmenu.map((category, idx) => {
                                        const isCategoryActive = category.subservices.some((service) =>
                                            submenuItems.some(
                                                (item) =>
                                                    location.pathname === service.path &&
                                                    location.state?.scrollTo === item.toLowerCase().replace(/\s+/g, "-")
                                            )
                                        );

                                        return (
                                            <details key={idx} className="group">
                                                <summary
                                                    className={`cursor-pointer font-semibold flex justify-between items-center py-2 ${isCategoryActive ? 'text-[#92E0E0]' : 'text-gray-700'
                                                        }`}
                                                >
                                                    {category.category}
                                                    <FaChevronDown className="ml-2" />
                                                </summary>

                                                <ul className="ml-4 mt-2 flex flex-col gap-2">
                                                    {category.subservices.map((service, subIdx) => {
                                                        const isSubserviceActive = submenuItems.some(
                                                            (item) =>
                                                                location.pathname === service.path &&
                                                                location.state?.scrollTo === item.toLowerCase().replace(/\s+/g, "-")
                                                        );

                                                        return (
                                                            <details key={subIdx} className="group">
                                                                <summary
                                                                    className={`cursor-pointer flex justify-between items-center py-1 ${isSubserviceActive
                                                                            ? 'text-[#92E0E0]'
                                                                            : 'text-gray-700 hover:text-[#92E0E0]'
                                                                        }`}
                                                                >
                                                                    {service.name}
                                                                    <FaChevronDown className="ml-2 text-xs" />
                                                                </summary>

                                                                <ul className="ml-4 mt-1 flex flex-col gap-1">
                                                                    {submenuItems.map((item, i) => {
                                                                        const isSubmenuItemActive =
                                                                            location.pathname === service.path &&
                                                                            location.state?.scrollTo === item.toLowerCase().replace(/\s+/g, "-");

                                                                        return (
                                                                            <li key={i}>
                                                                                <button
                                                                                    onClick={() => {
                                                                                        setIsMobileMenuOpen(false);
                                                                                        if (item === 'Transformation') {
                                                                                            navigate('/gallery', {
                                                                                                state: { category: service.name },
                                                                                            });
                                                                                        } else {
                                                                                            navigate(service.path, {
                                                                                                state: {
                                                                                                    scrollTo: item.toLowerCase().replace(/\s+/g, "-"),
                                                                                                },
                                                                                            });
                                                                                        }
                                                                                    }}
                                                                                    className={`text-sm text-left w-full py-1 ${isSubmenuItemActive
                                                                                            ? 'text-[#92E0E0] font-semibold'
                                                                                            : 'text-gray-600 hover:text-[#92E0E0]'
                                                                                        }`}
                                                                                >
                                                                                    {item}
                                                                                </button>
                                                                            </li>
                                                                        );
                                                                    })}
                                                                </ul>
                                                            </details>
                                                        );
                                                    })}
                                                </ul>
                                            </details>
                                        );
                                    })}
                                </ul>
                            </details>
                        </li>

                        <li>
                            <Link to="/our-doctors" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-gray-800">
                                Our Doctors
                            </Link>
                        </li>
                        <li>
                            <Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-gray-800">
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact-us" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-gray-800">
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/blogs" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-gray-800">
                                Blog
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

        </header>
    );
};

export default NavBar;
