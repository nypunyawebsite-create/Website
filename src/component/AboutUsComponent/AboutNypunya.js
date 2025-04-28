import React from "react";

const AboutNypunya = () => {
  return (
    <>
      {/* Header Section */}
      <div className="container mx-auto px-2 md:px-6 md:pb-10 py-5 relative -top-10">
        <h4 className="text-custom-green text-3xl font-semibold">About Nypunya</h4>
        {/* <h2 className="text-3xl text-custom-blue py-2">WELCOME TO THE NEWLOOK</h2>
        <h3 className="text-xl font-semibold py-2">
          What it takes to offer YOU the best Dermatology and Plastic Surgery Services?
        </h3> */}
        <p className="text-gray-700 leading-relaxed py-2">
          Nypunya means ‘Expertise’ in Sanskrit. Our Doctors are Experts in the true sense. 
          After training in the most prestigious medical institutes, gaining an immense wealth 
          of clinical experience and earning many academic laurels...
        </p>
        <p className="text-gray-700 leading-relaxed py-2">
          Services and facilities at NYPUNYA are world-class and comprehensive. 
          The unique feature is the entire spectrum of Dermatology and plastic surgery services 
          are provided under one roof.
        </p>
      </div>
      

      <div className="flex justify-center items-center px-6 pb-24 ">
        <div className="md:max-w-3xl text-center">

          {/* Vision Section - Content Left, Image Right */}
          <div className=" flex flex-col md:flex-row items-center text-left py-5 md:py-0">
            <div className="md:w-1/2 md:pr-6">
              <h3 className="text-3xl text-custom-blue ">OUR VISION</h3>
              <p className="text-gray-600 leading-relaxed mt-2">
                To provide Dermatology and plastic surgery services to you, which is world-class, 
                custom-made, value-added, and ethical. To offer the best of services, experience, 
                and technology to make it the best place for you.
              </p>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <img src="/about-us/our_vision.png" alt="Vision" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Mission Section - Image Left, Content Right */}
          <div className="flex flex-col md:flex-row-reverse items-center text-left py-5 md:py-0">
            <div className="md:w-1/2 md:pl-6">
              <h3 className="text-3xl text-custom-blue">OUR MISSION</h3>
              <p className="text-gray-600 leading-relaxed mt-2">
                You are the center of all our efforts here. We put all our expertise and experience 
                to make your aesthetic dreams into reality. Understanding your needs, empowering you 
                with the knowledge of all the possibilities, and formulating a treatment plan to 
                give the results, which both of us are proud of.
              </p>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <img src="/about-us/our_mission.png" alt="Mission" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutNypunya;