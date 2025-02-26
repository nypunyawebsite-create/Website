import React from 'react'

const OurPatientReview = () => {
    return (
        <>
            <div className="bg-[#e9f9f9] grid grid-cols-1 md:grid-cols-1 h-full items-end justify-center mx-auto lg:p-20 p-8">
                <div className='flex flex-col justify-center items-center'>
                    <div className="grid grid-rows-2 gap-5 md:grid-rows-1 md:grid-cols-3">
                        <div className='col-span-1 flex flex-col gap-4'>
                            <h4 className='text-[#000099] text-3xl'>OUR PATIENT REVIEW</h4>
                            <p>We offer the best of professional services and facilities, so that we can partner with you to get RESULTS, which we both can be proud of.</p>
                            <div className='mt-6'>
                                <a href='/review' className='bg-[#92E0E0] text-black py-3 px-6 rounded-2xl text-center w-fit text-xs'>All Reviews</a>
                            </div>
                        </div>
                        <div className='col-span-2'>
                            add reviews dynamic here
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurPatientReview
