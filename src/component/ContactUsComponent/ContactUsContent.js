import React from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { GoMail, GoDeviceMobile, GoClock, GoLocation } from 'react-icons/go'

import { IoTimeOutline } from "react-icons/io5";

const ContactUs = () => {
  return (
    <>
      <div className="bg-[#040857] text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6 md:py-20 pt-20">
            <h2 className="text-2xl sm:text-3xl font-semibold">GET IN TOUCH</h2>
            <p className="text-gray-300 text-sm sm:text-base">
              {/* Lorem ipsum dolor sit amet consectetur. Ultrices posuere faucibus egestas
              luctus turpis non tincidunt volutpat neque. Accumsan lectus id volutpat rhoncus
              risus. Augue enim dolor tincidunt in interdum eu adipiscing. */}
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-[#203372] p-5 sm:p-6 rounded-lg">
                <h3 className="text-xl sm:text-2xl flex items-center gap-2">
                  <MdEmail className="text-2xl" /> Contact Us
                </h3>
                <p className="mt-3 text-gray-300 flex items-center gap-2 text-sm sm:text-base">
                  <GoMail /> clinic.nypunyaaesthetic@gmail.com
                </p>
                <p className="mt-2 text-gray-300 flex items-start gap-2 text-sm sm:text-base">
                  <p>
                    <GoDeviceMobile className="mt-1 text-white" />
                  </p>
                  <p className='flex flex-row flex-wrap items-center gap-2'>

                    <a href="tel:+9380902115">+91 9380902115 (Plastic Surgery),</a>
                    <a href="tel:+9380902114">+91 9380902114 (Dermatology),</a>
                    <a href="tel:+9380902110">+91 9380902110</a>
                  </p>
                </p>
              </div>
              <div className="bg-[#203372] p-5 sm:p-6 rounded-lg">
                <h3 className="text-xl sm:text-2xl flex items-center gap-2">
                  <MdLocationOn className="text-2xl" /> Visit Us
                </h3>
                <p className="mt-3 text-gray-300 text-sm sm:text-base">
                  #3, 1st Cross Off 24th Main, 2nd Phase, J. P. Nagar, Bengaluru
                </p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="bg-custom-green text-black p-6 my-6 lg:mt-0 rounded-2xl rounded-t-none">
            <h3 className="text-2xl sm:text-3xl flex items-center gap-4">
              <IoTimeOutline className="text-2xl sm:text-3xl" /> OPENING HOURS
            </h3>
            <div className="mt-4 space-y-4">
              {[
                { day: "Monday - Wednesday", time: "10:00 AM - 8:30 PM" },
                { day: "Thursday - Friday", time: "10:00 AM - 8:30 PM" },
                { day: "Saturday", time: "10:00 AM - 8:30 PM" },
                { day: "Sunday", time: "10:00 AM - 8:30 PM" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="py-4 border-b border-b-black last:border-b-0 flex justify-between text-sm sm:text-base"
                >
                  <p>{item.day}</p>
                  <p className="text-gray-700">{item.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <iframe className="w-full h-[70vh]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.6193083791723!2d77.5865634974667!3d12.916153829207719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae159f89eb734f%3A0xc159ff3d3c8abec4!2sNypunya%20Aesthetic%20Clinic%20%7C%20Dermatology%20and%20Cosmetic%20Plastic%20Surgeon%20in%20Bengaluru!5e1!3m2!1sen!2sin!4v1745859791796!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  );
};

export default ContactUs;
