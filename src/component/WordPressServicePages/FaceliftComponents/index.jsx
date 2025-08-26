import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import FaceliftWordpress from './FaceliftWordpress'

const index = () => {
    return (
        <>
            <HelmetProvider>
                <FaceliftWordpress />
            </HelmetProvider>
        </>
    )
}

export default index
