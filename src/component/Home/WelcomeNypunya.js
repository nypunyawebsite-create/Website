import React from 'react'

const WelcomeNypunya = () => {
    return (
        <div className="bg-[#78CFFF] grid grid-cols-1 md:grid-cols-1 h-full items-end justify-center mx-auto lg:p-20 p-8">
            <div className='flex flex-col justify-center items-center'>
                <div className="grid grid-rows-2 gap-5 md:grid-rows-1 md:grid-cols-2">
                    <div className='col-span-1 flex flex-col gap-4'>
                        <h4 className='text-[#000099] text-3xl'>Welcome To Nypunya</h4>
                        <p>Nypunya means ‘Expertise’ in Sanskrit. Our Doctors are Experts in the true sense. After training in the most prestigious medical institutes , gaining an immense wealth of clinical experience and earning many academic laurels. Our doctors have more than a decade of experience in clinical practice. Experience matters! They have performed a wide variety of aesthetic surgical and nonsurgical procedures and NYPUNYA boasts of thousands of happy and satisfied patients. They believe in constantly updating themselves with the latest techniques and cutting edge technologies and refining their skills.</p>
                        <p>Services and facilities at NYPUNYA are world class and comprehensive. The unique feature is the entire spectrum of Dermatology and plastic surgery services are provided under one roof. This makes NYPUNYA a one stop solution to fulfill all your aesthetic goals. The best of Aesthetics, Dermatology and plastic surgery services to enhance the sense of well being and be the Best version of yourself!</p>
                    </div>
                    <div className='col-span-1'>
                        {/* <video controls className="w-full">
                            <source src="/home/home-video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video> */}
                        <img
                            src="/home/welcome_to_nypunya.jpeg"
                            alt="Welcome to Nypunya"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WelcomeNypunya
