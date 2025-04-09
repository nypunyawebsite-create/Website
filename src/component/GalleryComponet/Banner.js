import React from "react";

const Banner = ({ refProp }) => {
  return (
    <>
      <div ref={refProp} className="relative w-full h-[600px] bg-gradient-to-b from-custom-blue to-[#187fb7] text-white">
        <h2 className="absolute bottom-32 left-1/2 transform -translate-x-1/2 text-6xl font-bold">
          Patient Gallery
        </h2>
      </div>
    </>
  );
};

export default Banner;
