import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import FadeLink from "./fadeLink";
import Button from "./Button";
import AOS from "aos";
import "aos/dist/aos.css";

function TalkToUs(props) {
  const location = useLocation();
  const ispartnerPage = location.pathname === "/partnerPlus";
  const isaAcillaryPage = location.pathname === "/ancillary";

  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  return (
    <section
      className={`relative  flex flex-col justify-center items-center w-full h-auto ${ispartnerPage ? "bg-[#EEF5FF] " : "bg-[#05284C]"}`}
    >
      <div
        className={`static  w-full flex flex-col justify-center items-center 2xl:w-[1280px] px-[15px] at500:px-[64px] my-0 mx-auto ${ispartnerPage ? " py-[60px] " : " pt-[70px] mb-[60px]"}`}
      >
        {/* <!-- start growing your business --> */}
        <div className="flex flex-col justify-center items-center text-center w-full">
          <h2
            data-aos="fade-up"
            className={` mb-[10px] text-[38px] sm:text-[48px] leading-[60px]  tracking-[-2%] ${ispartnerPage ? "text-[#05284C] " : "text-[#FFFFFF]"}`}
          >
            {props.title}
          </h2>
          <div className="relative w-full flex flex-col justify-center items-center ">
            <p
              data-aos="fade-up"
              className="text-[18px] sm:text-[20px] leading-[30px] text-[#CDD4DB] mb-[10px] lg:w-[802px] w-full"
            >
              {props.details}
            </p>
            <div
              data-aos="fade-up"
              className="flex flex-col items-center justify-center  h-auto "
            >
             

{/* 
              <FadeLink to={props.pageLink}>
                <Button
                  size="cdn"
                  
                >
                  <a href={props.links}>{props.buttz}</a>
                </Button>
              </FadeLink> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TalkToUs;
