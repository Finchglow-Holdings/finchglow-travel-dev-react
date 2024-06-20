import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { GoArrowDown } from "react-icons/go";
import slideImage from './slide-img/background-img.jpeg'; 
import slideImage1 from './slide-img/0_h2iP-6qo5GkYTh0K.jpg';
import slideImage2 from './slide-img/20191101-Dawn-over-the-Dolomites.jpg';

const ImageSlider = () => {

  const slides = [
    {
      image: slideImage,
      title: (
        <>
          Turning <br />
          Business dreams <br />
          into reality
        </>
      ),
      subTitle: "The leading travel consolidator, connecting travellers with the world for over 18 years."
    },
    {
      image: slideImage1,
      title: "Another Slide Title",
      subTitle: "Another Slide Subtitle"
    },
    {
      image: slideImage2,
      title1: "Yet Another Slide Title",
      subTitle1: "Yet Another Slide Subtitle"
    }
  ];

  return (
    <div className="slider-container">
      <Fade>
        {slides.map((slide, index) => (
          <div key={index} className="each-fade flex flex-col justify-center items-center">
            <div className="image-container"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundColor: '#00000066',
                backgroundBlendMode: 'multiply',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh', // Adjust the height as needed
                width: '100%'
              }}>
            </div>

            <div className=" flex flex-col justify-center items-center w-full 2xl:w-[1280px] px-[15px] at500:px-[40px] my-0 mx-auto h-full">
              {slide.title && slide.subTitle && (
                <div className="content">
                  <div className="text-container absolute bottom-[50px] flex flex-col text-left w-full">
                    <h1 className=" font-metropolis uppercase text-[#E6EAED] text-[29px] leading-[38px] at500:text-[39px] at500:leading-[48px] md:text-[55px] md:leading-[60px]" style={{ textAlign: "left", fontWeight: "900" }}>{slide.title}</h1>
                    <p className=" font-metropolis  text-[#E6EAED] text-[14px] leading-[18px] at500:text-[20px] at500:leading-[24px] sm:w-[521px]" style={{ textAlign: "left", fontWeight: "600" }}>{slide.subTitle}</p>
                  </div>
                </div>
              )}
              {slide.title1 && slide.subTitle1 && (
                <div className="content ">
                  <div className="text-container absolute bottom-[190px] flex justify-center items-center flex-col text-center w-full">
                    <h1 className=" font-metropolis  uppercase text-[#E6EAED] text-[29px] leading-[38px] at500:text-[39px] at500:leading-[48px] md:text-[55px] md:leading-[60px]" style={{  fontWeight: "900" }}>{slide.title1}</h1>
                    <p className=" font-metropolis  text-[#E6EAED] text-[14px] leading-[18px] at500:text-[20px] at500:leading-[24px] sm:w-[521px]" style={{  fontWeight: "600" }}>{slide.subTitle1}</p>
                  </div>
                </div>
              )}
            </div>
          
          </div>
        ))}
      </Fade>
        <div className='relative flex flex-col justify-center items-center w-full 2xl:w-[1280px] px-[15px] at500:px-[40px] my-0 mx-auto z-[888]'>
          <div className="relative w-full  z-[555] cursor-pointer ">
            <a href="#down">
                <GoArrowDown className="text-[#FFFFFF] hover:text-[#3580F1] absolute right-0 bottom-[84px] hover:bottom-[70px] w-[57.82px] h-[57.82px] object-cover cursor-pointer" />
            </a>
          </div>
        </div>
      
      
    </div>
  );
};

export default ImageSlider;
