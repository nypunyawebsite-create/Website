import React from 'react'

const WelcomeNypunya = () => {
    return (
        <div className="bg-[#78CFFF] grid grid-cols-1 md:grid-cols-1 h-full items-end justify-center mx-auto lg:p-20 p-8">
            <div className='flex flex-col justify-center items-center'>
                <div className="grid grid-rows-2 gap-5 md:grid-rows-1 md:grid-cols-2">
                    <div className='col-span-1 flex flex-col gap-4'>
                        <h4 className='text-[#000099] text-3xl'>Welcome To Nypunya</h4>
                        <p>We offer the best of professional services and facilities, so that we can partner with you to get RESULTS, which we both can be proud of.</p>
                    </div>
                    <div className='col-span-1'>
                        <video controls className="w-full">
                            <source src="/home/home-video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WelcomeNypunya
