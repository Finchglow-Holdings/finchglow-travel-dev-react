import React, { useState } from "react";
import Navbar from "../navigation/home_navbar";
import OverlayForm from "../form/overlayForm";
import image from "../contents/images/background-img.jpeg";
import "./styles/cas.css";
import { GoArrowDown } from "react-icons/go";
import NewsLetter from "../form/newsletter";


function header() {
  const [isOpen, setIsOpen] = useState(false);
  const openOverlay = () => setIsOpen(true);
  const closeOverlay = () => setIsOpen(false);


  return (
    <div
      className="relative flex flex-col justify-center items-center bg-gray-600 bg-blend-multiply bg-no-repeat bg-cover bg-center h-screen py-[70px] w-full overflow-hidden"
      style={{ backgroundImage: `url(${image})` }}
    >
      <Navbar openOverlay={openOverlay}  />
      <OverlayForm isOpen={isOpen} closeOverlay={closeOverlay} />
      <NewsLetter />
      <div className=" absolute bottom-[-154px]  flex flex-col justify-center items-center w-full 2xl:w-[1280px] px-[15px] at500:px-[40px] my-0 mx-auto h-full">
        <div className="content">
          <div className="text-container flex flex-col text-left w-full">
            <h1
              className=" font-metropolis uppercase text-[#E6EAED] text-[29px] leading-[38px] at500:text-[39px] at500:leading-[48px] md:text-[55px] md:leading-[60px]"
              style={{ textAlign: "left", fontWeight: "900" }}
            >
              Turning <br />
              Business dreams <br />
              into reality
            </h1>
            <p
              className=" font-metropolis  text-[#E6EAED] text-[14px] leading-[18px] at500:text-[20px] at500:leading-[24px] sm:w-[521px]"
              style={{ textAlign: "left", fontWeight: "600" }}
            >
              The leading travel consolidator, connecting travellers with the
              world for over 18 years.
            </p>
          </div>
        </div>
        <div className="relative w-full z-[888]  cursor-pointer ">
          <a href="#middle">
            <GoArrowDown className="text-[#FFFFFF] hover:text-[#3580F1] absolute right-[-46px] sm:right-0 bottom-0  w-[57.82px] h-[57.82px] object-cover cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default header;
