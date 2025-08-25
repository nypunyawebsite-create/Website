import React from 'react'
import RhinoplastyWordpress from './RhinoplastyWordpress'
import { HelmetProvider } from 'react-helmet-async'

const index = () => {
    return (
        <>
            <HelmetProvider>
                <RhinoplastyWordpress />
            </HelmetProvider>
        </>
    )
}

export default index
