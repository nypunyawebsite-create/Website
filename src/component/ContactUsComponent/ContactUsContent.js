import React from "react";
import { CiTimer } from "react-icons/ci";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";

const ContactUs = () => {
  return (
    <div className="bg-[#040857] text-white">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 items-start ">
        {/* Contact Info */}
        <div className="lg:col-span-2 p-10">
          <h2 className="text-3xl font-semibold">GET IN TOUCH</h2>
          <p className="mt-4 text-gray-300">
            Lorem ipsum dolor sit amet consectetur. Ultrices posuere faucibus
            egestas luctus turpis non tincidunt volutpat neque. Accumsan lectus
            id volutpat rhoncus risus. Augue enim dolor tincidunt in interdum eu
            adipiscing.
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="bg-[#203372] p-6 rounded-lg">
              <h3 className="text-2xl flex items-center gap-2">
                <MdEmail className="text-2xl" /> Contact Us
              </h3>
              <p className="mt-3 text-gray-300 flex items-center gap-2">
                <MdEmail /> clinic.nypunyaaesthetic@gmail.com
              </p>
              <p className="mt-2 text-gray-300 flex items-center gap-2">
                <MdPhone /> +91 97385 45945
              </p>
            </div>
            <div className="bg-[#203372] p-6 rounded-lg">
              <h3 className="text-2xl flex items-center gap-2">
                <MdLocationOn className="text-2xl" /> Visit Us
              </h3>
              <p className="mt-3 text-gray-300">
                #3, 1st Cross Off 24th Main, 2nd Phase, J. P. Nagar, Bengaluru
              </p>
            </div>
          </div>
        </div>
        
        {/* Opening Hours */}
        <div className="bg-custom-green text-black p-6 mt-0 rounded-2xl rounded-t-none mb-10">
          <h3 className="text-3xl flex items-center gap-8">
            <IoTimeOutline className="text-3xl"/> OPENING HOURS
          </h3>
          <div className="mt-4">
            {[
              { day: "Monday - Wednesday", time: "10:00 AM - 8:30 PM" },
              { day: "Thursday - Friday", time: "10:00 AM - 8:30 PM" },
              { day: "Saturday", time: "10:00 AM - 8:30 PM" },
              { day: "Sunday", time: "10:00 AM - 8:30 PM" },
            ].map((item, index) => (
              <div key={index} className="py-5 border-b border-b-black last:border-b-0 flex justify-between">
                <p className="text-lg ">{item.day}</p>
                <p className="text-gray-700">{item.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
