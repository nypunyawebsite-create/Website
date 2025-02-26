import React from 'react'
import { GoMail, GoDeviceMobile, GoClock, GoLocation } from 'react-icons/go'

const HomeInformation = () => {
    return (
        <div className="bg-[#1B6D9C] flex items-center justify-center py-12">
            <div className="w-[90%]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white text-center">
                    <div className='border border-white rounded-lg p-6 bg-[#3384aa] flex flex-col gap-2'>
                        <h4 className="mb-2 flex items-center text-xl text-bold">
                            <GoMail className="mr-2 text-white" />Contact Us
                        </h4>
                        <p className="flex items-center text-xs">
                            <GoMail className="mr-2 text-white" />
                            <a href="mailto:clinic.nypunyaaesthetic@gmail.com">clinic.nypunyaaesthetic@gmail.com</a>
                        </p>
                        <p className="flex items-center text-xs">
                            <GoDeviceMobile className="mr-2 text-white" />
                            <a href="tel:+919738545945">+91 97385 45945</a>
                        </p>
                    </div>
                    <div className='border border-white rounded-lg p-6 bg-[#3384aa] flex flex-col gap-2'>
                        <h4 className="mb-2 flex items-center text-xl text-bold">
                            <GoClock className="mr-2 text-white" />Open Hours
                        </h4>
                        <p className="flex items-center text-xs gap-2">
                            <span className='bg-[#1B6D9C] px-2 py-1 rounded-sm'>Mon - Fri:</span>  8:00 AM to 5:00 PM
                        </p>
                        <p className="flex items-center text-xs gap-2">
                            <span className='bg-[#1B6D9C] px-2 py-1 rounded-sm'>Sat - Sun: </span> 9:00 AM to 3:30 PM
                        </p>
                    </div>
                    <div className='border border-white rounded-lg p-6 bg-[#3384aa] flex flex-col gap-2'>
                        <h4 className="mb-2 flex items-center text-xl text-bold">
                            <GoLocation className="mr-2 text-white" />Visit Us
                        </h4>
                        <p className="flex items-center text-xs">
                            <a href="https://maps.app.goo.gl/1syipVGCs8CVZCb46" target="_blank" rel="noopener noreferrer">
                                #3,1st Cross Off 24th Main, 2nd Phase, J. P. Nagar, Bengaluru
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeInformation
