import React from "react";

const AboutNypunya = () => {
  return (
    <>
      {/* About Nypunya Section - Redesigned */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-12 relative -top-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Section Title with Accent */}
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-custom-blue mb-3">About Nypunya</h2>
            <div className="w-24 h-1 bg-custom-green mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-custom-green font-semibold italic">
              "Nypunya" means "Expertise" in Sanskrit
            </p>
          </div>

          {/* Content Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            
            {/* Card 1 - Expert Doctors */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-custom-blue">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-custom-blue rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-2xl font-bold text-custom-blue mt-2">Expert Doctors</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                Our Doctors are <b>Experts</b> in the true sense. After training in the most prestigious 
                medical institutes, gaining an immense wealth of clinical experience and earning many 
                academic laurels, they bring world-class expertise to serve you.
              </p>
            </div>

            {/* Card 2 - Comprehensive Services */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-custom-green">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-custom-green rounded-full flex items-center justify-center">
                  <span className="text-custom-blue text-2xl font-bold">2</span>
                </div>
                <h3 className="text-2xl font-bold text-custom-blue mt-2">Under One Roof</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                Services and facilities at <b>NYPUNYA</b> are world-class and comprehensive. 
                The unique feature is the entire spectrum of <b>Dermatology and Plastic Surgery</b> services 
                are provided under one roof.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Vision & Mission Section - Redesigned for better layout */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-6 md:py-8">
        
        {/* Vision & Mission Grid - Two Columns on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          
          {/* Vision Section */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
            {/* Vision Image */}
            <div className="mb-6">
              <img 
                src="/about-us/vision.jpg" 
                alt="Our Vision" 
                className="w-48 h-48 object-cover rounded-full shadow-md"
              />
            </div>
            {/* Vision Content */}
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-custom-blue mb-4">OUR VISION</h3>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                To provide Dermatology and plastic surgery services to you, which is world-class,
                custom-made, value-added, and ethical. To offer the best of services, experience,
                and technology to make it the best place for you.
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
            {/* Mission Image */}
            <div className="mb-6">
              <img 
                src="/about-us/mission.jpg" 
                alt="Our Mission" 
                className="w-48 h-48 object-cover rounded-full shadow-md"
              />
            </div>
            {/* Mission Content */}
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-custom-blue mb-4">OUR MISSION</h3>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                You are the center of all our efforts here. We put all our expertise and experience
                to make your aesthetic dreams into reality. Understanding your needs, empowering you
                with the knowledge of all the possibilities, and formulating a treatment plan to
                give the results, which both of us are proud of.
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default AboutNypunya;