import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = () => {
    const whatsappNumber = '918050111908';
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%2C%20I%20have%20a%20question`;

    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-24 left-6 z-[9998] group"
            aria-label="Chat on WhatsApp"
        >
            {/* WhatsApp Button */}
            <div className="relative">
                {/* Pulse Animation Ring */}
                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
                
                {/* Main Button */}
                <div className="relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center">
                    <FaWhatsapp className="text-3xl" />
                </div>
                
                {/* Tooltip - Now appears on the right side */}
                <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="text-sm font-medium">Chat with us on WhatsApp</span>
                    {/* Arrow pointing left */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full">
                        <div className="border-8 border-transparent border-r-gray-900"></div>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default FloatingWhatsApp;

