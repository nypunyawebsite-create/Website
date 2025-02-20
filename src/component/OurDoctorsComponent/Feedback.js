import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Feedback = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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

  const feedbacks = [
    {
      id: 1,
      name: "Neelima Joe",
      location: "Bangalore, Karnataka",
      image: "https://via.placeholder.com/60",
      rating: 4.5,
      review:
        "Lorem ipsum dolor sit amet consectetur. Nec pretium amet magna facilisi dui velit tristique vel at. Lorem ut lectus non nullam. Id bibendum sem dignissim posuere mauris hendrerit eget massa cursus. Sapien mauris feugiat ultrices vel aliquet.",
    },
    {
      id: 2,
      name: "Neelima Joe",
      location: "Bangalore, Karnataka",
      image: "https://via.placeholder.com/60",
      rating: 4.5,
      review:
        "Lorem ipsum dolor sit amet consectetur. Nec pretium amet magna facilisi dui velit tristique vel at. Lorem ut lectus non nullam. Id bibendum sem dignissim posuere mauris hendrerit eget massa cursus. Sapien mauris feugiat ultrices vel aliquet.",
    },
    {
        id: 3,
        name: "Neelima Joe",
        location: "Bangalore, Karnataka",
        image: "https://via.placeholder.com/60",
        rating: 4.5,
        review:
          "Lorem ipsum dolor sit amet consectetur. Nec pretium amet magna facilisi dui velit tristique vel at. Lorem ut lectus non nullam. Id bibendum sem dignissim posuere mauris hendrerit eget massa cursus. Sapien mauris feugiat ultrices vel aliquet.",
      },
  ];

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">
        Our Patient feedback about us
      </h2>
      <Slider {...settings}>
        {feedbacks.map((feedback) => (
          <div key={feedback.id} className="p-4">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-4">
                <img
                  src={feedback.image}
                  alt={feedback.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-lg">{feedback.name}</h3>
                  <p className="text-gray-600">{feedback.location}</p>
                  <div className="text-blue-400">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <p className="text-gray-700 mt-4">{feedback.review}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Feedback;
