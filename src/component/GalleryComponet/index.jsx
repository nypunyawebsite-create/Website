import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Banner from './Banner';
import Gallery from './Gallery';

const Index = () => {
  const location = useLocation();
  const scrollToSection = location.state?.scrollTo;

  const bannerRef = useRef(null);

  useEffect(() => {
    if (scrollToSection === "banner" && bannerRef.current) {
      bannerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [scrollToSection]);

  return (
    <>
      <Banner refProp={bannerRef} />
      <Gallery />
    </>
  );
};

export default Index;
