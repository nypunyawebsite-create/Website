import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { breastAugmentationData } from "../../../utils/ServiceDatas/BreastData/breastData";

const BreastAugmentationComponent = () => {
  const informationRef = useRef(null);
  // const transformationRef = useRef(null);
  // const faqsRef = useRef(null);
  // const whyUsRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionRefs = {
        information: informationRef,
      };

      if (sectionRefs[location.state.scrollTo]?.current) {
        sectionRefs[location.state.scrollTo].current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <>
    <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center py-10 px-4 bg-white"  ref={informationRef}>
      <div className="flex flex-col lg:flex-row lg:gap-8 gap-5 w-full">
        <div className="lg:w-1/2 w-full">
          <p className="text-custom-blue text-2xl mb-4 text-center lg:text-left">
            Breast Augmentation / Breast Enhancement
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {breastAugmentationData.map((item, index) => (
              <div key={index} className="border border-custom-green p-4 rounded-xl shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 w-full flex items-center justify-center pt-0 lg:pt-10">
          <div className="relative w-full max-w-md lg:max-w-full">
            <img
              src="/services/breast_augmentation.png"
              alt="Breast Enhancement"
              className="rounded-lg w-full object-cover"
            />
            <span className="absolute bottom-4 right-6 text-6xl md:text-8xl font-bold text-[#9492c4] opacity-60 z-10">
              01
            </span>
          </div>
        </div>
      </div>
    </div>


        {/* Sections with refs for scrolling */}
        {/* <div ref={informationRef} className="mt-10">
          <h3 className="text-2xl font-bold">Information</h3>
          <p>Detailed information about Breast Augmentation.</p>
        </div>

        <div ref={transformationRef} className="mt-10">
          <h3 className="text-2xl font-bold">Transformation</h3>
          <p>Transformation stories and testimonials.</p>
        </div>

        <div ref={faqsRef} className="mt-10">
          <h3 className="text-2xl font-bold">FAQs</h3>
          <p>Frequently asked questions about Breast Augmentation.</p>
        </div>

        <div ref={whyUsRef} className="mt-10">
          <h3 className="text-2xl font-bold">Why Us</h3>
          <p>Reasons to choose our services.</p>
        </div> */}
    </>
  );
};

export default BreastAugmentationComponent;
