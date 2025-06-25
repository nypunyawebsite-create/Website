import React, { useEffect, useState } from "react";
import { doctors, team } from "../../utils/ourDoctorsData";

const ContentComponent = ({ selectedDoctor }) => {
  const [currentDoctorKey, setCurrentDoctorKey] = useState(selectedDoctor || "prashantha");

  useEffect(() => {
    if (selectedDoctor) {
      setCurrentDoctorKey(selectedDoctor);
    }
  }, [selectedDoctor]);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Get all doctor keys
      const doctorKeys = Object.keys(doctors);
      // Find the index of the current doctor
      const currentIndex = doctorKeys.indexOf(currentDoctorKey);
      // Get the next doctor key (looping back to 0 if at the end)
      const nextIndex = (currentIndex + 1) % doctorKeys.length;
      setCurrentDoctorKey(doctorKeys[nextIndex]);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentDoctorKey]);

  const doctor = doctors[currentDoctorKey];

  return (
    <div className="bg-[#f6f8f9] min-h-screen flex flex-col justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center min-h-[70vh] py-12">
        {/* Left: Content */}
        <div className="md:w-1/2 flex flex-col items-center justify-center text-center px-4">
          <h2
            className="text-xl font-normal mb-2 cursor-pointer"
            onClick={() => {
              const doctorKeys = Object.keys(doctors);
              const currentIndex = doctorKeys.indexOf(currentDoctorKey);
              const nextIndex = (currentIndex + 1) % doctorKeys.length;
              setCurrentDoctorKey(doctorKeys[nextIndex]);
            }}
          >
            {doctor.name}
          </h2>
          <div className="w-16 h-1  bg-custom-blue  mb-4"></div>
          <h1 className="text-6xl font-bold mb-4">
            OUR <span className="text-custom-blue">TEAM</span>
          </h1>
          <p className="text-lg text-gray-700 mb-6 max-w-xl">
            {doctor.paragraphs && doctor.paragraphs.length > 1 ? (
              <>
                {doctor.paragraphs[0]}
                <br />
                {doctor.paragraphs[1]}
              </>
            ) : (
              doctor.description
            )}
          </p>

          {/* Signature image if available */}
          {doctor.signature && (
            <img
              src={doctor.signature}
              alt="Signature"
              className="h-16 mb-6 mx-auto"
            />
          )}
        </div>
        {/* Right: Doctor Image */}
        <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
          <img src={doctor.image} alt={doctor.name} />
        </div>
      </div>
      {/* Button centeblue below the section */}
      <div className="flex justify-center pb-12">
        <button className="bg-custom-blue text-white px-8 py-3 rounded font-semibold hover:bg-blue-700 transition">
          Our Doctors
        </button>
      </div>
      {/* Doctors Team Section */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-12">
        {team.map((member, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-lg flex flex-col items-center p-8">
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full object-cover object-top mb-4"
            />
            <div className=" rounded-full p-4 -mt-12 mb-4">
              {/* SVG medical icon based on role */}
              {/* {member.title === "Diabetic Foot Care Specialist" && (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16" />
                </svg>
              )}
              {member.title === "Dermatologist" && (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
              {member.title === "Plastic Surgeon" && (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              )}
              {member.title === "Fellowship in Microvascular Surgery" && (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              )} */}
            </div>
            <div className="text-sm text-gray-500 font-semibold mb-1 uppercase tracking-wide">{member.title}</div>
            <div className="w-12 h-1 bg-custom-blue my-2"></div>
            <div className="text-xl font-bold mb-2 text-center">{member.name}</div>
            <p className="text-gray-600 text-center mb-4 text-sm">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentComponent;
