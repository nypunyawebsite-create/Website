import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    // Don't show breadcrumbs on the home page
    if (pathnames.length === 0) {
        return null;
    }

    const formatBreadcrumb = (str) => {
        return str
            .replace(/-/g, ' ')
            .replace(/oe/g, 'ö')
            .replace(/ae/g, 'ä')
            .replace(/ue/g, 'ü')
            .replace(/\b\w/g, (char) => char.toUpperCase());
    };

    let breadcrumbPath = '';

    return (
        <div className="absolute z-10 pt-28 md:pt-36 lg:pt-40 w-full mt-7 md:mt-0">
            <nav aria-label="breadcrumb" className="container mx-auto pr-4 pl-0 sm:px-1 lg:px-1 mt-2">
                <ol className="flex flex-wrap items-center bg-black/20 backdrop-blur-sm rounded-full px-3 py-2 w-fit text-xs sm:text-sm">
                    <li>
                        <Link to="/" className="text-white hover:text-gray-200 transition-colors whitespace-nowrap">
                            Home
                        </Link>
                    </li>
                    {pathnames.map((name, index) => {
                        breadcrumbPath += `/${name}`;
                        const isLast = index === pathnames.length - 1;

                        return (
                            <li key={breadcrumbPath} className="flex items-center">
                                <span className="mx-2 text-gray-400">/</span>
                                {isLast ? (
                                    <span className="text-gray-300 whitespace-nowrap" aria-current="page">
                                        {formatBreadcrumb(name)}
                                    </span>
                                ) : (
                                    <Link to={breadcrumbPath} className="text-white hover:text-gray-200 transition-colors whitespace-nowrap">
                                        {formatBreadcrumb(name)}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </div>
    );
};

export default Breadcrumbs; 