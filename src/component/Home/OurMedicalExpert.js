import React from 'react'
import { FaLinkedin, FaTwitter, FaCheck } from 'react-icons/fa'

const OurMedicalExpert = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-1 h-full items-end justify-center mx-auto lg:p-20 p-8">
            <div className='flex flex-col justify-center items-center gap-10'>
                <h4 className='text-[#000099] md:text-3xl text-2xl'>Meet Our Medical Experts</h4>

                {/* DR. PRASHANTHA KESARI N K */}
                <div className="lg:grid gap-10 md:grid-rows-1 md:grid-cols-5 mt-10 lg:w-[90%] flex flex-col">
                    <div className='col-span-2 md:text-start text-center'>
                        <img src='/home/dr-prashantha.png' alt='Dr. Prashantha Kesari N K' className='lg:w-[90%] w-full' />
                    </div>
                    <div className='col-span-3 flex flex-col gap-6 lg:mt-10'>
                        <h4 className='text-3xl text-black capitalize'>DR. PRASHANTHA KESARI N K</h4>
                        <p>Senior Consultant Cosmetic Plastic Surgeon
                            M.B.B.S, M.S, D.N.B, M.R.C.S, D.M.L.E, M.Ch (Plastic Surgery)</p>

                        <p>PATIENT is the centre of Dr.Kesari’s clinical practice and he designs the treatment for individual needs and expectations.</p>
                        <div className='flex gap-4'>
                            <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer' className='font-bold text-[#92E0E0]'>
                                <FaLinkedin className='text-black w-6 h-6' />
                            </a>
                            <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer' className='font-bold text-[#92E0E0]'>
                                <FaTwitter className='text-black w-6 h-6' />
                            </a>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div className='flex items-center gap-2'>
                                <FaCheck className='text-green-500 border rounded-full p-1' size={30} />
                                <p>Award-Winning Board-Certified Plastic Surgeon</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FaCheck className='text-green-500 border rounded-full p-1' size={30} />
                                <p>Expert with over 20+ years experience</p>
                            </div>
                        </div>
                        <div className='mt-6'>
                            <a href='/our-doctors' className='bg-[#92E0E0] text-black py-3 px-6 rounded-2xl text-center w-fit text-xs'>Check Out Doctor</a>
                        </div>
                    </div>
                </div>
                {/* DR. SHUBHA M KESARI */}
                <div className="lg:grid gap-10 md:grid-rows-1 md:grid-cols-5 mt-24 lg:w-[90%] flex flex-col-reverse md:flex-row">
                    <div className='col-span-3 flex flex-col gap-6 lg:mt-10'>
                        <h4 className='text-3xl text-black capitalize'>DR. SHUBHA M KESARI</h4>
                        <p>Senior Consultant - Dermatologist and Cosmetic Dermatologist | M.B.B.S, M.D(Mumbai) D.M.L.E, D.N.B.</p>

                        <p>Her practice is very patient centric and patient care is of paramount importance.</p>
                        <div className='flex gap-4'>
                            <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer' className='font-bold text-[#92E0E0]'>
                                <FaLinkedin className='text-black w-6 h-6' />
                            </a>
                            <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer' className='font-bold text-[#92E0E0]'>
                                <FaTwitter className='text-black w-6 h-6' />
                            </a>
                        </div>
                        <div className='mt-6'>
                            <a href='/our-doctors' className='bg-[#92E0E0] text-black py-3 px-6 rounded-2xl text-center w-fit text-xs'>Check Out Doctor</a>
                        </div>
                    </div>
                    <div className='col-span-2'>
                        <img src='/home/dr-shubha.png' alt='Dr. Prashantha Kesari N K' className='lg:w-[90%]' />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default OurMedicalExpert

