import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./news.css";
import ZohoOptinForm from "./zohoOptinForm";

const NewsLetter = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const closeOverlay = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="popup">
      <div className="flex justify-center items-center  px-[15px] py-[80px] md:px-[200px] my-0 mx-auto  w-full h-auto ">
        <div className="flex bg-[#E6EFFD] flex-col justify-center items-center rounded-[14.22px] w-[418px] md:w-[518px] p-[20px] sm:p-[30px] md:p-[56.89px] ">
          <div className="flex justify-end items-end w-full">
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
    </div>
  );
};

export default NewsLetter;
