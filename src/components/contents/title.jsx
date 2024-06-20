import React from "react";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// check for contents in contentProps folder

function Title(props) {


  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  const location = useLocation();
  const isBlogPage = location.pathname === '/blog';
  const isContactPage = location.pathname === '/contact';
  const isBlogPostPage = location.pathname === "/blogPost";

  return (
    <section className="relative bg-[#EEF5FF] flex flex-col justify-center items-center w-full overflow-hidden">
      <div className="static w-full flex flex-col justify-center items-center 2xl:w-[1280px] px-[15px] py-[60px] at500:px-[64px] md:pr-[64px] md:pl-[94px] my-0 mx-auto">
        <div className="flex flex-col xl:flex-row xl:justify-between justify-start items-start xl:items-center w-full gap-[30px] xl:gap-[168px]">
          <div className="relative flex flex-col justify-center items-start w-full silver:w-[513px] text-left gap-[17px]">
            <span data-aos="fade-up" className="txt2 text-[#0260EE]">
              {props.title}
            </span>
            <h3
              data-aos="fade-up"
              className={`text-[#101828]  ${isBlogPage ? "lg:!w-[513px]" : isContactPage ? "lg:!w-[396px]" : "xl:w-[595px]"}`}
            >
              {props.subTitle}
            </h3>
            <span
              data-aos="fade-up"
              className={`text-[#697E94] txt2 !leading-[26px] xl:w-[407px]  ${isBlogPostPage ? "block" : "hidden"}`}
            >
              {props.subTitle2}
            </span>
          </div>

          <div className="relative flex flex-col xl:justify-center justify-start items-start xl:items-end xl:px-[30px] py-0 w-full h-auto">
            <div className="flex flex-col justify-center items-center border-l-[#CCDFFC] border-l-[4px] px-[20px]">
              <span
                data-aos="fade-up"
                className="txt2 py-0 text-[#697E94] text-left xl:w-[340px]"
              >
                {props.riteContent}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`relative flex flex-col justify-center items-center at500:bg-fixed bg-no-repeat bg-cover bg-center h-[474px] py-[70px] w-full overflow-hidden  ${isContactPage ? "hidden" : "block"}`}
        style={{ backgroundImage: `url(${props.imgURL})` }}
      ></div>
    </section>
  );
}

export default Title;
