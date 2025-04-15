import React from "react";
import doctors from "../../utils/ourDoctorsData"; // Importing doctors data

const ContentComponent = ({ selectedDoctor }) => {
  const doctor = doctors[selectedDoctor] || doctors["prashantha"]; // Default to Dr. Prashantha if no doctor is selected

  return (
    <div className="bg-white text-black py-6 rounded-lg flex flex-col md:flex-row items-center container mx-auto">
      <div className="md:w-2/3">
        <h3 className="md:text-6xl text-3xl py-5">{doctor.name}</h3>
        {/* <p className="text-lg">{doctor.designation}</p> */}

        {/* Mapping through paragraphs dynamically */}
        {doctor.paragraphs.map((para, index) => (
          <p key={index} className="py-2">
            {para}
          </p>
        ))}

        {/* If a description exists, display it */}
        {doctor.description && <p className="mt-4">{doctor.description}</p>}
      </div>
      
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-end">
        <img src={doctor.image} alt={doctor.name}/>
      </div>
    </div>
  );
};

export default ContentComponent;
