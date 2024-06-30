import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation } from 'react-router-dom';

//  here controls the visibility of the cards with red icon and 
// check props.cards to edit content





function WhyChooseUs(props) {

  const location = useLocation();
  const isAffiliatePage = location.pathname === "/affiliate-programme";
  const isAncillaryPage = location.pathname === "/ancillary-services";
  const isVisaPage = location.pathname === "/visa-and-immigration-services";

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <section className="relative bg-[#FFFFFF] flex flex-col justify-center items-center w-full overflow-hidden">
      <div className="static w-full flex flex-col justify-center items-center 2xl:w-[1280px] px-[15px] py-[70px] at500:px-[64px] my-0 mx-auto">
        <div className="flex flex-col justify-center items-center w-full">
          <h3
            className={`text-[#05284C] mb-[30px] text-center ${isVisaPage ? "lg:w-[636px] " : ""}`}
          >
            {props.title}
          </h3>

          <div
            className={`gap-x-5 gap-y-5 w-full mb-[30px] ${isAffiliatePage ? "!flex !flex-col !justify-center !items-center !w-full" : isAncillaryPage ? "grid md:grid-cols-3 items-start md:w-full " : isVisaPage ? "grid md:grid-cols-2 items-start md:w-[80%] gap-x-5 gap-y-5" : "grid md:grid-cols-2 items-start md:w-[80%] "}`}
          >
            <div className="flex flex-col justify-center items-center w-full  gap-[20px]">
              <img
                data-aos="fade-up"
                src={props.imgURL}
                className="w-[28px] h-[28px] object-cover"
                alt="Check icon"
              />
              <div className="flex flex-col justify-center items-center">
                <span
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className="txt6"
                >
                  {props.subTitle1}
                </span>
                <p
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className={`text-[16px] leading-[24px] text-center text-[#697E94] ${isAffiliatePage ? "lg:w-[917px]" : isAncillaryPage ? "lg:w-[298px] " : isVisaPage ? "lg:w-[400px] " : "lg:w-[352px]"}`}
                >
                  {props.details1}
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center w-full  gap-[20px]">
              <img
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                src={props.imgURL}
                className="w-[28px] h-[28px] object-cover"
                alt="Check icon"
              />
              <div className="flex flex-col justify-center items-center">
                <span
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className="txt6"
                >
                  {props.subTitle2}
                </span>
                <p
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className={`text-[16px] leading-[24px] text-center text-[#697E94] ${isAffiliatePage ? "lg:w-[663px]" : isAncillaryPage ? "lg:w-[298px] " : isVisaPage ? "lg:w-[478px] " : "lg:w-[363px]"}`}
                >
                  {props.details2}
                </p>
              </div>
            </div>

            <div
              className={`flex flex-col justify-center items-center w-full  gap-[20px] ${isAncillaryPage ? "lg:w-[284px]" : " hidden"}`}
            >
              <img
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                src={props.imgURL}
                className="w-[28px] h-[28px] object-cover"
                alt="Check icon"
              />
              <div className="flex flex-col justify-center items-center">
                <span
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className="txt6"
                >
                  {props.subTitle6}
                </span>
                <p
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className="text-[16px] leading-[24px] text-center text-[#697E94]"
                >
                  {props.details6}
                </p>
              </div>
            </div>
          </div>

          <div
            className={`flex gap-x-5 gap-y-5 w-full   ${isAffiliatePage ? "flex-col  justify-center items-center" : isAncillaryPage ? "hidden " : isVisaPage ? "grid md:grid-cols-2 items-start md:w-[85%]  gap-x-5 gap-y-5 " : "justify-between items-start  md:flex-row md:w-[85%] "}`}
          >
            <div className="flex flex-col justify-center items-center w-full  gap-[20px] ">
              <img
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                src={props.imgURL}
                className="w-[28px] h-[28px] object-cover"
                alt="Check icon"
              />
              <div className="flex flex-col justify-center items-center">
                <span
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className="txt6"
                >
                  {props.subTitle3}
                </span>
                <p
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className={`text-[16px] leading-[24px] text-center text-[#697E94] ${isAffiliatePage ? "lg:w-[577px]" : isVisaPage ? "lg:w-[478px] " : "lg:w-[397px]"}`}
                >
                  {props.details3}
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center w-full  gap-[20px]">
              <img
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                src={props.imgURL}
                className="w-[28px] h-[28px] object-cover"
                alt="Check icon"
              />
              <div className="flex flex-col justify-center items-center">
                <span
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className="txt6"
                >
                  {props.subTitle4}
                </span>
                <p
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className={`text-[16px] leading-[24px] text-center text-[#697E94] ${isAffiliatePage ? "lg:w-[771px]" : isVisaPage ? "lg:w-[402px] " : "lg:w-[412px]"}`}
                >
                  {props.details4}
                </p>
              </div>
            </div>

            <div
              className={`flex flex-col justify-center items-center w-full  gap-[20px] ${isAffiliatePage ? "lg:w-[819px]" : "lg:w-[363px] hidden"}`}
            >
              <img
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                src={props.imgURL}
                className="w-[28px] h-[28px] object-cover"
                alt="Check icon"
              />
              <div className="flex flex-col justify-center items-center">
                <span
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className="txt6"
                >
                  {props.subTitle5}
                </span>
                <p
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className="text-[16px] leading-[24px] text-center text-[#697E94]"
                >
                  {props.details5}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
