import React from "react";
import { useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import iconLocaton from "./image/icons/Group 78-min.png";
import iconCall from './image/icons/call icon-min.png'





// check for location.js in contentProps folder for the content?



function OurLocations(props) {


    useEffect(() => {
        AOS.init({ duration: 3000, once: true });
    }, []);


    return (
      <div className="flex flex-col justify-center items-start w-full lg:w-[352px] gap-[20px]">
        <img
          data-aos="fade-up"
          src={iconLocaton}
          className="w-[64px] h-[64px] object-cover"
          alt="Check icon"
        />

        <div className="flex flex-col justify-center items-start w-full gap-[16px]">
          <h3 data-aos="fade-up" className="text-[#05284C]">
            {props.office}
          </h3>
          <div className="flex flex-col justify-start items-start w-full text-left gap-[16px]">
            {/* address */}
            <span
              data-aos="fade-up"
              className="txt2 text-left text-[#697E94] lg:w-[259.43px]"
              dangerouslySetInnerHTML={{ __html: props.address }}
            ></span>
            {/* address */}

            {/* phone number */}
            <div className="flex flex-col justify-start items-start gap-[20px] p-3 w-full">
              <div
                data-aos="fade-up"
                className="flex justify-center items-start gap-[12px] text-left"
              >
                <img src={iconCall} className="w-[28px] h-[28px]" alt="" />
                {props.line1}
                <span className="txt2 text-[#667085] text-left"></span>
              </div>

              <div
                data-aos="fade-up"
                className="flex justify-center items-start gap-[12px] text-left"
              >
                <img src={iconCall} className="w-[28px] h-[28px]" alt="" />
                {props.line2}
                <span className="txt2 text-[#667085] text-left"></span>
              </div>
            </div>
            {/* phone number ends here*/}
            <div
              data-aos="fade-up"
              className="flex justify-start items-start w-full"
            >
              <span>
                <a
                  href={props.link}
                  className="arrow !text-[#3580F1]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {props.view}
                  <FaArrowRight />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
}

export default OurLocations;
