

"use client"; 

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import './SliderStyles.css'; 

const slides = [
  {
    id: 1,
    image: "https://t3.ftcdn.net/jpg/01/26/52/02/360_F_126520264_vUAYi5OHGK5RlhgWqghfrBtPnyJwc6xN.jpg",
    title: "Welcome to Be Scholar Scholarship Portal",
    description: "Unprecedented expansion of direct benefits to the deprived and deserving",
    alt:'hi',
  },
  {
    id: 2,
    image: "https://drive.google.com/uc?export=download&id=1mKeQ11L7N1S0qb7qe8G31n373pkc2ZtB",
    title: "Scholarships for All",
    description: "Empowering students through financial support.",
    alt:'hii',
  },
  {
    id: 3,
    image: "https://drive.google.com/uc?export=download&id=1mKeQ11L7N1S0qb7qe8G31n373pkc2ZtB",
    title: "Apply Now",
    description: "Join thousands of successful scholars.",
    alt:'hiii',
  },
  {
    id: 4,
    image: "https://media.gettyimages.com/id/1387157405/photo/mature-students-working-together.jpg?s=612x612&w=0&k=20&c=8rjbiBqf0uiM2JfHlSrx7EUT7SZBvQx_WDiA4ksm-wA=",
    title: "Start Your Journey",
    description: "A brighter future awaits you.",
    alt:'hiiii',
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change slides every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider-container w-3/4">
      <div className="slide">
        <div className="slide-content">
          <div className="image-container">
            <Image
              src={slides[currentIndex].image}
              alt={`Slide ${slides[currentIndex].id}`}
              layout="responsive"
              width={500}
              height={300}
              className="slide-image"
            />
          </div>
          <div className="text-content">
            <h2>{slides[currentIndex].title}</h2>
            <p>{slides[currentIndex].description}</p>
          </div>
        </div>
      </div>
      <div className="navigation">
        {/* <button onClick={goToPrevSlide}>&lt;</button>
        <button onClick={goToNextSlide}>&gt;</button> */}
      </div>
    </div>
  );
};

export default Slider;
