import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Feedback.css";

const Feedback = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Load Elfsight script once
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    customPaging: (i) => (
      <div
        style={{
          width: "15px",
          height: "15px",
          backgroundColor: i === activeIndex ? "black" : "#d9d9d9",
          borderRadius: "50%",
          margin: "5px",
          transition: "all 0.3s ease-in-out",
        }}
      ></div>
    ),
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">
        Our Patient feedback about us
      </h2>

      {/* Combined YouTube Videos Slider */}
      <div className="my-10 text-center">
        <h3 className="text-2xl font-bold text-blue-900 mb-6">Patient Testimonials</h3>
        <Slider {...settings}>
          <div className="p-2">
            <iframe
              src="https://www.youtube.com/embed/cWQUxbrEKcw"
              title="Patient Feedback Shorts"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full aspect-video rounded-lg shadow-lg"
            ></iframe>
          </div>
          <div className="p-2">
            <iframe
              src="https://www.youtube.com/embed/Abi8A7q3MOI"
              title="Patient Feedback Video 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full aspect-video rounded-lg shadow-lg"
            ></iframe>
          </div>
          <div className="p-2">
            <iframe
              src="https://www.youtube.com/embed/1iszYwsxYSk"
              title="Patient Feedback Video 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full aspect-video rounded-lg shadow-lg"
            ></iframe>
          </div>
          <div className="p-2">
            <iframe
              src="https://www.youtube.com/embed/SZHKwTghpjI"
              title="Patient Feedback Video 3"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full aspect-video rounded-lg shadow-lg"
            ></iframe>
          </div>
        </Slider>
      </div>

      <div className="mt-10">
        <div
          className="elfsight-app-caf1dd5e-3b7a-495d-9ff2-da9c6c549f34"
          data-elfsight-app-lazy
        ></div>
      </div>
    </div>
  );
};

export default Feedback;
