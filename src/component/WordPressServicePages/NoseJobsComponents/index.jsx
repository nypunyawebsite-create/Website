import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import NoseJobsWordpress from './NoseJobsWordpress'

const index = () => {
    return (
        <>
            <HelmetProvider>
                <NoseJobsWordpress />
            </HelmetProvider>
        </>
    )
}

export default index
