import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import BreastAugmentation from './BreastAugmentation'

const index = () => {
    return (
        <>
            <HelmetProvider>
                <BreastAugmentation />
            </HelmetProvider>
        </>
    )
}

export default index
