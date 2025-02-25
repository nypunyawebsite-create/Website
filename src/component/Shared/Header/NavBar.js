import React, { useState, useEffect } from 'react';
import { FaPhoneAlt, FaEnvelope, FaCalendarAlt, FaTimes, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 180) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const renderMenuLinks = () => (
        <>
            <li><Link to="/home" className="text-gray-800">Home</Link></li>
            <li><Link to="/about" className="text-gray-800">About Us</Link></li>
            <li><Link to="/services" className="text-gray-800">Services</Link></li>
            <li><Link to="/doctors" className="text-gray-800">Our Doctors</Link></li>
            <li><Link to="/gallery" className="text-gray-800">Gallery</Link></li>
            <li><Link to="/contact" className="text-gray-800">Contact Us</Link></li>
            <li><Link to="/blog" className="text-gray-800">Blog</Link></li>
        </>
    );

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md top-0' : 'bg-transparent top-2'}`}>
            {/* Nav 1 */}
            <div className={`w-[90%] flex flex-row justify-between items-center mx-auto ${isScrolled ? 'hidden' : 'flex'}`}>
                <div className="flex flex-row gap-3 text-white">
                    <div className="flex items-center">
                        <FaEnvelope className="mr-2" />
                        <a href="mailto:clinic.nypunyaaesthetic@gmail.com" className="hidden md:inline">clinic.nypunyaaesthetic@gmail.com</a>
                    </div>
                    <div className="flex items-center">
                        <FaPhoneAlt className="mr-2" />
                        <a href="tel:+918136822727" className="hidden md:inline">+91 813 682 2727</a> <a href="tel:+919778412980" className="hidden md:inline">, +91 977 841 2980</a>
                    </div>
                </div>
                <div>
                    <button className="bg-[#92E0E0] text-black px-4 py-2 rounded-xl rounded-bl-none rounded-br-none flex items-center">
                        <FaCalendarAlt className="mr-2 text-black" />
                        Appointments
                    </button>
                </div>
            </div>

            {/* Nav 2 - Centered Navbar */}
            <div className={`h-1/20 transition-all duration-300 mx-auto flex justify-center ${isScrolled ? 'bg-white shadow-md w-full' : 'bg-white w-[90%] rounded-3xl rounded-tl-none rounded-tr-none'}`}>
                <div className={`w-full mx-auto flex justify-between items-center p-4 h-full ${isScrolled ? 'w-full' : 'w-full'}`}>
                    <div className="text-xl font-bold"><img src="/nypunya-logo.png" alt="Nypunya Logo" /></div>
                    <nav className={`hidden md:flex md:flex-row md:items-center`}>
                        <ul className="flex flex-col md:flex-row md:space-x-4">
                            {renderMenuLinks()}
                        </ul>
                    </nav>
                    <button className="md:hidden text-gray-800" onClick={toggleMobileMenu}>
                        <FaBars size={24} />
                    </button>
                </div>
            </div>

            {/* Mobile Side Nav */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-50 flex">
                    <div className="w-1/5 h-full bg-black bg-opacity-50" onClick={closeMobileMenu}></div>
                    <div className="w-4/5 bg-white h-full shadow-lg p-4">
                        <button className="text-gray-800 mb-4" onClick={closeMobileMenu}>
                            <FaTimes size={24} />
                        </button>
                        <ul className="flex flex-col space-y-4">
                            {renderMenuLinks()}
                        </ul>
                    </div>
                </div>
            )}

            {/* Floating Appointment Button on Left Side */}
            {isScrolled && (
                <div className="fixed left-4 top-[50%] transform -translate-y-1/2 -rotate-90 origin-left z-50">
                    <button className="bg-[#92E0E0] text-black px-4 py-2 rounded-xl rounded-tl-none flex items-center">
                        <FaCalendarAlt className="mr-2 text-black" />
                        Appointments
                    </button>
                </div>
            )}

        </header>
    );
}

export default NavBar;