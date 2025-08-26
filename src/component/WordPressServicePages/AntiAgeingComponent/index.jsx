import React from 'react'
import AntiAgeing from './AntiAgeing'
import { HelmetProvider } from 'react-helmet-async'
const index = () => {
    return (
        <div>
            <HelmetProvider>
                <AntiAgeing />
            </HelmetProvider>
        </div>
    )
}

export default index
