import React from "react";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// check for contents in contentProps folder

function Title(props) {


  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  return (
    <section className="relative bg-[#EEF5FF] flex flex-col justify-center items-center w-full overflow-hidden">
      <div className="static w-full flex flex-col justify-center items-center 2xl:w-[1280px] px-[15px] py-[60px] at500:px-[64px] md:pr-[64px] md:pl-[94px] my-0 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between w-full gap-[30px] lg:gap-[168px]">
          <div className="relative flex flex-col justify-center items-start w-full text-left gap-[17px]">
            <span data-aos="fade-up"  className="txt2 text-[#0260EE]">
              {props.title}
            </span>
            <h3 data-aos="fade-up"  className="text-[#101828] xl:w-[595px]">
              {props.subTitle}
            </h3>
          </div>
          <div className="relative flex flex-col justify-center items-center lg:px-[30px] py-0 w-full h-auto">
            <div className="flex flex-col justify-center items-center border-l-[#CCDFFC] border-l-[4px] px-[20px]">
              <span data-aos="fade-up"  className="txt2 py-0 text-[#697E94] text-left xl:w-[340px]">
                {props.riteContent}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative flex flex-col justify-center items-center at500:bg-fixed bg-no-repeat bg-cover bg-center h-[474px] py-[70px] w-full overflow-hidden"
        style={{ backgroundImage: `url(${props.imgURL})` }}
      ></div>
    </section>
  );
}

export default Title;
