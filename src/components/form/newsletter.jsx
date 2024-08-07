import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./news.css";
import ZohoOptinForm from "./zohoOptinForm";

const NewsLetter = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= pageHeight / 2) {
        setIsVisible(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeOverlay = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="popup">
      <div className="popup-content flex flex-col justify-center items-center p-[20px] shadow-lg shadow-[#000] sm:p-[30px] md:p-[56.89px]">
        <div className="close-icon w-full">
          <AiOutlineClose
            onClick={closeOverlay}
            size={24}
            className="text-[#000000] cursor-pointer"
          />
        </div>
        <div className="flex flex-col gap-[30px] justify-center items-center px-[32px]">
          <div className="flex flex-col gap-[10px] justify-center items-center md:w-[340.22px]">
            <h2 className="text-[30px] leading-[38px] text-center text-[#05284C]">
              Sign up for our newsletter
            </h2>
            <p className="text-[18px] leading-[28px] text-center text-[#506982]">
              Be the first to know about the best deals, materials to aid
              business growth, travel industry news
            </p>
          </div>
          <div className="w-full">
            <ZohoOptinForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
