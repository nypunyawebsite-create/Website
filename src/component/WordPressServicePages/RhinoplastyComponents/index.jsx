import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import RhinoplastyWordpress from './RhinoplastyWordpress'

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
