import React from 'react'
import { FaTwitter, FaLinkedin, FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'

const Footer = () => {
    const location = useLocation();

    return (
        <div className="bg-[#4B4B68] md:grid md:grid-cols-6 gap-6 h-full items-start justify-center mx-auto lg:p-20 p-8 text-white flex flex-col">
            <div className='col-span-3 flex flex-col gap-8'>
                <img src='/footer-logo.svg' alt='Footer Logo' className='lg:w-[60%]' />
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p> */}
                <div className='flex flex-col gap-2 md:pt-10'>
                    <h4 className='text-2xl font-semibold'>Follow us on Social Media</h4>
                    <div className='flex gap-4'>
                        <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
                            <FaTwitter className='text-[#92E0E0] w-6 h-6' />
                        </a>
                        <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer'>
                            <FaLinkedin className='text-[#92E0E0] w-6 h-6' />
                        </a>
                        <a href='https://www.youtube.com' target='_blank' rel='noopener noreferrer'>
                            <FaYoutube className='text-[#92E0E0] w-6 h-6' />
                        </a>
                        <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
                            <FaFacebook className='text-[#92E0E0] w-6 h-6' />
                        </a>
                        <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
                            <FaInstagram className='text-[#92E0E0] w-6 h-6' />
                        </a>
                    </div>
                </div>
            </div>
            <div className='col-span-1 flex flex-col gap-2'>
                <Link to='/' className={`relative w-fit ${location.pathname === '/' ? 'text-[#92E0E0] font-bold' : ''} after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-[#92E0E0] after:transition-all after:duration-300 hover:after:w-full ${location.pathname === '/' ? 'after:w-full' : ''}`}>Home</Link>
                <Link to='/about-us' className={`relative w-fit ${location.pathname === '/about-us' ? 'text-[#92E0E0] font-bold' : ''} after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-[#92E0E0] after:transition-all after:duration-300 hover:after:w-full ${location.pathname === '/about-us' ? 'after:w-full' : ''}`}>About us</Link>
                <Link to='/services' className={`relative w-fit ${location.pathname === '/services' ? 'text-[#92E0E0] font-bold' : ''} after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-[#92E0E0] after:transition-all after:duration-300 hover:after:w-full ${location.pathname === '/services' ? 'after:w-full' : ''}`}>Services</Link>
                <Link to='/our-doctors' className={`relative w-fit ${location.pathname === '/our-doctors' ? 'text-[#92E0E0] font-bold' : ''} after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-[#92E0E0] after:transition-all after:duration-300 hover:after:w-full ${location.pathname === '/our-doctors' ? 'after:w-full' : ''}`}>Our Doctors</Link>
                <Link to='/appointment' className={`relative w-fit ${location.pathname === '/appointment' ? 'text-[#92E0E0] font-bold' : ''} after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-[#92E0E0] after:transition-all after:duration-300 hover:after:w-full ${location.pathname === '/appointment' ? 'after:w-full' : ''}`}>Appointment</Link>
                <Link to='/blogs' className={`relative w-fit ${location.pathname === '/blogs' ? 'text-[#92E0E0] font-bold' : ''} after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-[#92E0E0] after:transition-all after:duration-300 hover:after:w-full ${location.pathname === '/blogs' ? 'after:w-full' : ''}`}>Blogs</Link>
                <Link to='/patient-stories' className={`relative w-fit ${location.pathname === '/patient-stories' ? 'text-[#92E0E0] font-bold' : ''} after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-[#92E0E0] after:transition-all after:duration-300 hover:after:w-full ${location.pathname === '/patient-stories' ? 'after:w-full' : ''}`}>Patient Stories</Link>
                <Link to='/gallery' className={`relative w-fit ${location.pathname === '/gallery' ? 'text-[#92E0E0] font-bold' : ''} after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-[#92E0E0] after:transition-all after:duration-300 hover:after:w-full ${location.pathname === '/gallery' ? 'after:w-full' : ''}`}>Gallery</Link>
                <Link to='/contact-us' className={`relative w-fit ${location.pathname === '/contact-us' ? 'text-[#92E0E0] font-bold' : ''} after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-[#92E0E0] after:transition-all after:duration-300 hover:after:w-full ${location.pathname === '/contact-us' ? 'after:w-full' : ''}`}>Contact us</Link>
            </div>
            <div className='col-span-2 flex flex-col gap-2'>
                <a href='https://maps.app.goo.gl/1syipVGCs8CVZCb46' target='_blank' rel='noopener noreferrer' className="relative w-fit after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-[#92E0E0] after:transition-all after:duration-300 hover:after:w-full">#3,1st Cross Off 24th Main, 2nd Phase, J. P. Nagar, Bengaluru</a>
                <a href='tel:+919738545945' className="relative w-fit after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-[#92E0E0] after:transition-all after:duration-300 hover:after:w-full">+91 97385 45945</a>
                <a href='mailto:clinic.nypunyaaesthetic@gmail.com' className="relative w-fit after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-[#92E0E0] after:transition-all after:duration-300 hover:after:w-full">clinic.nypunyaaesthetic@gmail.com</a>
            </div>
        </div>
    )
}

export default Footer
