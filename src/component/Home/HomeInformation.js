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
                        <p className="flex flex-col items-start text-xs">
                            <p className='flex text-xs'>
                                <p>
                                    <GoDeviceMobile className="mr-2 text-white" />
                                </p>
                                <p className='flex flex-row flex-wrap items-center gap-2'>
                                    <a href="tel:+9380902115">+91 9380902115 (Plastic Surgery),</a>
                                    <a href="tel:+9380902114">+91 9380902114 (Dermatology),</a>
                                    <a href="tel:+9380902110">+91 9380902110</a>
                                </p>
                            </p>
                        </p>
                    </div>
                    <div className='border border-white rounded-lg p-6 bg-[#3384aa] flex flex-col gap-2'>
                        <h4 className="mb-2 flex items-center text-xl text-bold">
                            <GoClock className="mr-2 text-white" />Open Hours
                        </h4>
                        <p className="flex items-center text-xs gap-2">
                            <span className='bg-[#1B6D9C] px-2 py-1 rounded-sm'>Mon - Sat:</span>  9:30 AM to 7:00 PM
                        </p>
                        {/* <p className="flex items-center text-xs gap-2">
                            <span className='bg-[#1B6D9C] px-2 py-1 rounded-sm'>Sat - Sun: </span> 9:00 AM to 3:30 PM
                        </p> */}
                    </div>

                    <div className='border border-white rounded-lg p-6 bg-[#3384aa] flex flex-col gap-2'>
                        <h4 className="mb-2 flex items-center text-xl text-bold">
                            <GoLocation className="mr-2 text-white" />Location
                        </h4>
                        <p className="flex items-center text-xs">
                            <a href="https://maps.app.goo.gl/1syipVGCs8CVZCb46" target="_blank" rel="noopener noreferrer">
                                #3,1st Cross Off 24th Main, 2nd Phase, J. P. Nagar, Bengaluru
                            </a>
                        </p>
                        <div className='mt-4 flex items-start'>
                            <a href='https://maps.app.goo.gl/1syipVGCs8CVZCb46' className='bg-[#92E0E0] text-black py-2 px-6 rounded-2xl text-start w-fit text-sm'>Visit Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeInformation
