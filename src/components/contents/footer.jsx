import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaArrowUp,
} from "react-icons/fa";
import logo from "./images/Accredited Agent logo.png";
import logo2 from "./images/FT_logo_X5-01.png";
import FadeLink from "./fadeLink";

import "../contents/styles/_footer.css";

const currentYear = new Date().getFullYear();

function footer() {
  return (
    <footer
      id="down"
      className="relative flex flex-col justify-center items-center w-full h-auto "
    >
      <section className="bg-footer-pop relative flex flex-col justify-center items-center w-full h-auto ">
        <div className="static  w-full flex flex-col justify-center items-center 2xl:w-[1280px] pt-[50px] px-[15px] at500:px-[64px] my-0 mx-auto ">
          {/* back to top */}
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="relative z-[23] flex justify-center items-center silver:justify-end silver:items-end w-full "
          >
            <span className="relative  flex justify-center items-center bottom-[69px] !text-center !right-0 bg-[#697E94] !h-[36px] !w-[158px] !py-[8px] !px-[15px]">
              <a
                href="#top"
                className="back-to-top-box  flex justify-center items-center  gap-[10px] !text-[#FFFFFF] "
              >
                Back to top
                <FaArrowUp className="back-to-top w-[20px] H-[20px]" />
              </a>
            </span>
          </div>
          {/* back to top */}
          <div className="w-full flex flex-col md:flex-row gap-[48px] justify-between items-center mb-[30px]">
            <div className="flex flex-col justify-between w-full md:w-[403px] md:h-[244px] gap-[42px]  at500:gap-0">
              <div
                data-aos="fade-up"
                className="text-2xl cursor-pointer w-[128.07px] h-[36.02px]"
              >
                <a className="w-full" href="index.html">
                  <img
                    className="w-full h-auto transition-all duration-300 ease-in-out"
                    src={logo2}
                  />
                </a>
              </div>
              <p
                data-aos="fade-up"
                className="text-[16px] leading-[24px] text-[#506982] "
              >
                Finchglow Travels Nigeria Limited is a leading travel management
                company headquartered in Nigeria with 8 offices across Lagos,
                Abuja, Kano and Port Harcourt.
              </p>
              <div className="flex">
                <ul className="ipx:flex justify-center items-center gap-y-4 gap-x-8">
                  <li
                    data-aos="fade-up"
                    className=" w-[182.74px] h-[60px] mix-blend-multiply"
                  >
                    <a href="#">
                      <img
                        src={logo}
                        className="w-[182.74px] h-[60px] object-cover"
                        alt="Accredited Agent logo"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex  justify-between md:h-[244px] w-full md:w-[385px] gap-[32px]">
              <div className="w-full md:w-[176.5px]">
                <ul className=" md:flex flex-col justify-center items-start text-left gap-[12px]">
                  <li data-aos="fade-up">
                    <a
                      className="font-medium font-Metropolis text-[16px] leading-[24px] text-[#506982] hover:text-[#166534]"
                      href="about.html"
                    >
                      About us
                    </a>
                  </li>
                  <li data-aos="fade-up">
                    <FadeLink to="/partnerPlus">
                      <span className="font-medium font-Metropolis text-[16px] leading-[24px] text-[#506982] hover:text-[#166534]">
                        Trade Partner Plus
                      </span>
                    </FadeLink>
                  </li>
                  <li data-aos="fade-up">
                    <a
                      className="font-medium font-Metropolis text-[16px] leading-[24px] text-[#506982] hover:text-[#166534]"
                      href="corporate.html"
                    >
                      Corporate Travel Management
                    </a>
                  </li>
                  <li data-aos="fade-up">
                    <a
                      className="font-medium font-Metropolis text-[16px] leading-[24px] text-[#506982] hover:text-[#166534]"
                      href="bespoke.html"
                    >
                      Leisure Travel
                    </a>
                  </li>
                  <li data-aos="fade-up">
                    <FadeLink to="/ancill">
                      <span className="font-medium font-Metropolis text-[16px] leading-[24px] text-[#506982] hover:text-[#166534]">
                        Ancillary Services
                      </span>
                    </FadeLink>
                  </li>
                  <li data-aos="fade-up">
                    <a
                      className="font-medium font-Metropolis text-[16px] leading-[24px] text-[#506982] hover:text-[#166534]"
                      href="#"
                    >
                      Products
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!----contact Us --> */}
              <div className="w-full md:w-[176.5px]">
                <ul className=" md:flex flex-col justify-center items-start text-left gap-[12px]">
                  <li data-aos="fade-up">
                    <a
                      className="font-medium font-Metropolis text-[16px] leading-[24px] text-[#506982] hover:text-[#166534]"
                      href="blog.html"
                    >
                      Blog
                    </a>
                  </li>
                  <li data-aos="fade-up">
                    <a
                      className="font-medium font-Metropolis text-[16px] leading-[24px] text-[#506982] hover:text-[#166534]"
                      href="newsletter.html"
                    >
                      Newsletter
                    </a>
                  </li>
                  <li data-aos="fade-up">
                    <a
                      className="font-medium font-Metropolis text-[16px] leading-[24px] text-[#506982] hover:text-[#166534]"
                      href="branches.html"
                    >
                      Contact us
                    </a>
                  </li>
                  <li data-aos="fade-up">
                    <a
                      className="font-medium font-Metropolis text-[16px] leading-[24px] text-[#506982] hover:text-[#166534]"
                      href="faq.html"
                    >
                      FAQ
                    </a>
                  </li>
                  <li data-aos="fade-up">
                    <a
                      className="font-medium font-Metropolis text-[16px] leading-[24px] text-[#506982] hover:text-[#166534]"
                      href="testimonials.html"
                    >
                      Testimonials
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!--hr line--> */}
          <hr className="h-[2px] w-full bg-[#81B0F7]" />
          {/* <!--copyright--> */}
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="md:flex justify-between items-center w-full h-auto my-[30px] md:h-[24px]"
          >
            <div className="flex w-full my-[20px]">
              <p className="text-[#353F50] leading-[16.8px] text-left text-[16px] !font-semibold">
                © {currentYear} Finchglow Travels. All rights reserved
              </p>
            </div>
            <div>
              <ul className="flex gap-4">
                <li>
                  <a href="">
                    <FaInstagram
                      size={20}
                      className=" text-[#8294A6] hover:text-[#166534] transition-all duration-300 ease-in-out"
                    />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaTwitter
                      size={20}
                      className=" text-[#8294A6] hover:text-[#166534] transition-all duration-300 ease-in-out"
                    />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaFacebook
                      size={20}
                      className=" text-[#8294A6] hover:text-[#166534] transition-all duration-300 ease-in-out"
                    />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaLinkedin
                      size={20}
                      className=" text-[#8294A6] hover:text-[#166534] transition-all duration-300 ease-in-out"
                    />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaYoutube
                      size={20}
                      className=" text-[#8294A6] hover:text-[#166534] transition-all duration-300 ease-in-out"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default footer;
