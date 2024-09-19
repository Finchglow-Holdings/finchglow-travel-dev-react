import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "../image/WhatsApp Image 2024-09-17 at 17.44.12 (1) 1.png";
import Imgconnt from "../image/Group 421.png";
import icon from "../image/icons/arrow-up-min.png";
import Link from "../link";
import LoadBlurHashImage from "../../lazy/loadBlurHash";

const SectionPartner = () => {
  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  return (
    <section className="relative regale-blue flex justify-center flex-col items-center w-full h-auto overflow-hidden">
      <div className="static w-full flex flex-col justify-center items-center  2xl:w-[1280px] px-[15px] py-[70px]  at500:px-[64px]  md:px-[94px] my-0 mx-auto">
        <div className="relative flex flex-col lg:flex-row justify-between items-center w-full">
          <div className="relative flex flex-col justify-center items-start gap-[30px] w-full xl:w-[404px] h-auto text-left mb-[30px]">
            <div className="flex flex-col gap-[17px]">
              <span data-aos="fade-up" className="flex !font-bold txt2 !text-[25px] text-[#3580F1]">
                PartnerPlus
                <img src={Imgconnt} alt="" />
              </span>
              <h3 data-aos="fade-up" className="text-[#05284C] xl:w-[390px]">
                The webinar series that empowers you with the knowledge and
                opportunities you need to thrive in the travel industry.
              </h3>
            </div>
            <span
              data-aos="fade-up"
              className="txt3 !text-[#375370] xl:w-[367px]"
            >
              Bridging knowledge gaps for travel agents' success navigation.
            </span>

            <Link to="/partnerplus-connect">
              <span className="arrow !text-[#0260EE]">
                Learn more
                <img src={icon} alt="" />
              </span>
            </Link>
          </div>

          <div className="relative flex flex-col justify-center items-end w-full">
            <a href="https://partnerplus.finchglowtravels.com/">
              <LoadBlurHashImage
                src={Image}
                blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                className="w-full h-[300px] lg:w-[447px] lg:h-[656px] object-cover"
                alt="Affiliate Programs"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionPartner;
