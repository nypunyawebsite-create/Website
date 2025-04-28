import React, { useEffect } from "react";
import { FaTimes, FaChevronDown, } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { serviceSubmenu, submenuItems } from "../../../utils/navBarData";

const MobileNavBar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

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

    return (
        <div className={`fixed inset-0 bg-white z-50 px-6 py-6 overflow-y-auto flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
            {/* Close Button */}
            <div className="w-full flex justify-end">
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-2xl text-gray-800">
                    <FaTimes />
                </button>
            </div>

            <ul className="flex flex-col gap-4 w-full mt-4">
                <li>
                    <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-gray-800">Home</Link>
                </li>
                <li>
                    <Link to="/about-us" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-gray-800">About Us</Link>
                </li>

                {/* Services Dropdown */}
                <li>
                    <details className="group">
                        <summary className="cursor-pointer font-bold text-gray-800 flex justify-between items-center py-2">
                            Services
                            <FaChevronDown className="ml-2" />
                        </summary>
                        <ul className="ml-4 mt-2 flex flex-col gap-2">
                            {serviceSubmenu.map((category, idx) => {
                                const isCategoryActive = category.subservices.some(service =>
                                    submenuItems.some(item => isSubmenuItemActive(service, item))
                                );

                                return (
                                    <details key={idx} className="group" open={isCategoryActive}>
                                        <summary className={`cursor-pointer font-semibold flex justify-between items-center py-2 ${isCategoryActive ? "text-[#92E0E0]" : "text-gray-700"}`}>
                                            {category.category}
                                            <FaChevronDown className="ml-2" />
                                        </summary>

                                        <ul className="ml-4 mt-2 flex flex-col gap-2">
                                            {category.subservices.map((service, subIdx) => {
                                                const isServiceActive = submenuItems.some(item =>
                                                    isSubmenuItemActive(service, item)
                                                );

                                                return (
                                                    <details key={subIdx} className="group" open={isServiceActive}>
                                                        <summary className={`cursor-pointer flex justify-between items-center py-1 ${isServiceActive ? "text-[#92E0E0]" : "text-gray-700"} hover:text-[#92E0E0]"`}>
                                                            {service.name}
                                                            <FaChevronDown className="ml-2 text-xs" />
                                                        </summary>

                                                        <ul className="ml-4 mt-1 flex flex-col gap-1">
                                                            {submenuItems.map((item, i) => {
                                                                const isActive = isSubmenuItemActive(service, item);
                                                                return (
                                                                    <li key={i}>
                                                                        <button
                                                                            onClick={() => {
                                                                                setIsMobileMenuOpen(false);
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
                                                                            className={`text-sm text-left w-full py-1 ${isActive ? "text-[#92E0E0] font-semibold" : "text-gray-600 hover:text-[#92E0E0]"}`}
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
                    <Link to="/our-doctors" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-gray-800">Our Doctors</Link>
                </li>
                <li>
                    <Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-gray-800">Gallery</Link>
                </li>
                <li>
                    <Link to="/contact-us" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-gray-800">Contact Us</Link>
                </li>
                <li>
                    <Link to="/blogs" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-gray-800">Blog</Link>
                </li>
            </ul>
        </div>
    );
};

export default MobileNavBar; 