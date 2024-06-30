import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import Button from "../contents/Button";
import logo from "./logos/finchglow-logo.png";
import logo2 from "./logos/FT_logo_X5-01.png";
import FadeLink from "../contents/fadeLink"; // Import the FadeLink component

const Navbar = ({ openOverlay }) => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function openMenu() {
    setToggle(true);
  }

  function closeMenu() {
    setToggle(false);
  }

  const handleButtonClick = () => {
    window.open(
      "https://finchglowb2b.amadeusonlinesuite.com/Auth/Login",
      "_blank"
    );
  };

  return (
    <nav
      className={`fixed top-0 z-[999] ${scrolled ? "bg-[#F1F5FC]" : "bg-transparent"} flex justify-center items-center w-full `}
    >
      <div className="relative flex justify-center items-center w-full  2xl:w-[1280px] px-[15px] py-[20px] at500:px-[40px] my-0 mx-auto ">
        <div className="relative w-full mx-auto flex md:flex-row justify-between items-start md:items-center">
          <div className="relative flex justify-start items-start  text-white text-2xl font-bold mb-2 md:mb-0">
            <FadeLink to="/">
              {scrolled ? (
                <img src={logo2} alt="logo" className="h-auto w-[130px]" />
              ) : (
                <img src={logo} alt="logo" className="h-auto  w-[130px]" />
              )}
            </FadeLink>
          </div>

          <ul className="hidden silver:flex justify-end items-center space-x-4 ">
            <li className="relative flex flex-col gap-[10px] group">
              <span
                className={`relative flex gap-[10px] items-center py-[10px] pr-[10px] ${
                  scrolled ? "text-[#05284C]" : "text-white"
                }`}
              >
                <FadeLink to="/about-finchglow-travels">About us</FadeLink>
                <span className="cursor-pointer">
                  <SlArrowDown
                    size={13}
                    className={`${scrolled ? "text-[#05284C]" : "text-white"} group-hover:hidden`}
                  />
                  <SlArrowUp
                    size={13}
                    className={`${scrolled ? "text-[#05284C]" : "text-white"} hidden group-hover:inline`}
                  />
                </span>
              </span>
              <div className="dropdown cursor-pointer z-[30] absolute top-[38px] w-[230px] font-normal divide-gray-100 rounded-[2px] shadow dark:bg-[#EEF8FF] hidden group-hover:block">
                <ul className="flex flex-col ">
                  <li className="flex justify-center items-center w-full py-[7px] px-[10px] border-soild border-b-[2px] dark:hover:bg-gray-600 hover:border-l-[3px] hover:border-l-[#81B0F7] border-b-[#000] text-change">
                    <FadeLink to="/finchglow-travels-story">
                      <span className="dark-text-change">Our story</span>
                    </FadeLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="relative z-10 flex flex-col gap-[10px] group">
              <span
                className={`relative flex gap-[10px] items-center py-[10px] pr-[10px] ${
                  scrolled ? "text-[#05284C]" : "text-white"
                }`}
              >
                <FadeLink to="/our-services">Services</FadeLink>
                <span className="cursor-pointer">
                  <SlArrowDown
                    size={13}
                    className={`${scrolled ? "text-[#05284C]" : "text-white"} group-hover:hidden`}
                  />
                  <SlArrowUp
                    size={13}
                    className={`${scrolled ? "text-[#05284C]" : "text-white"} hidden group-hover:inline`}
                  />
                </span>
              </span>
              <div className="dropdown cursor-pointer absolute top-[38px] w-[230px] font-normal divide-gray-100 rounded-[2px] shadow dark:bg-[#EEF8FF] hidden group-hover:block">
                <ul className="flex flex-col ">
                  <li className="flex justify-center items-center w-full py-[7px] px-[10px] border-soild border-b-[2px] dark:hover:bg-gray-600 hover:border-l-[3px] hover:border-l-[#81B0F7] border-b-[#000] text-change">
                    <FadeLink
                      to="/affiliate-programme"
                      className="flex w-full px-4"
                    >
                      <span className="dark-text-change">
                        Affiliate Programs
                      </span>
                    </FadeLink>
                  </li>
                  <li className="flex justify-center items-center w-full py-[7px] px-[10px] border-soild border-b-[2px] dark:hover:bg-gray-600 hover:border-l-[3px] hover:border-l-[#81B0F7] border-b-[#000] text-change ">
                    <FadeLink
                      to="/corPorate-travel-management"
                      className="flex w-full px-4"
                    >
                      <span className="dark-text-change">
                        Corporate Travel Management
                      </span>
                    </FadeLink>
                  </li>
                  <li className="flex justify-center items-center w-full py-[7px] px-[10px] border-soild border-b-[2px] dark:hover:bg-gray-600 hover:border-l-[3px] hover:border-l-[#81B0F7] border-b-[#000] text-change ">
                    <FadeLink
                      to="/customised-travel-packages"
                      className="flex w-full px-4"
                    >
                      <span className="dark-text-change">
                        Customised Travel Packages
                      </span>
                    </FadeLink>
                  </li>
                  <li className="flex justify-center items-center w-full py-[7px] px-[10px] border-soild border-b-[2px] dark:hover:bg-gray-600 hover:border-l-[3px] hover:border-l-[#81B0F7] border-b-[#000] text-change ">
                    <FadeLink
                      to="/ancillary-services"
                      className="flex w-full px-4"
                    >
                      <span className="dark-text-change">
                        Ancillary Services
                      </span>
                    </FadeLink>
                  </li>
                  <li className="flex justify-center items-center w-full py-[7px] px-[10px] border-soild border-b-[2px] dark:hover:bg-gray-600 hover:border-l-[3px] hover:border-l-[#81B0F7] border-b-[#000] text-change ">
                    <FadeLink
                      to="/visa-and-immigration-services"
                      className="flex w-full px-4"
                    >
                      <span className="dark-text-change">
                        Visa and Immigration Services
                      </span>
                    </FadeLink>
                  </li>
                </ul>
              </div>
            </li>

            <li
              className={`py-[10px] px-[10px] hover:border-b-[5px] hover:border-b-[#81B0F7] ${activeLink === "blog" ? "border-b-[5px] border-b-[#81B0F7]" : ""} ${scrolled ? "text-[#05284C]" : "text-white"}`}
            >
              <FadeLink to="/">Blog</FadeLink>
            </li>

            <li
              className={`py-[10px] px-[10px] hover:border-b-[5px] hover:border-b-[#81B0F7] ${activeLink === "contact" ? "border-b-[5px] border-b-[#81B0F7]" : ""} ${scrolled ? "text-[#05284C]" : "text-white"}`}
            >
              <FadeLink to="/contact-us">Contact us</FadeLink>
            </li>

            <li className="py-[10px] w-[230px] pl-[18px]">
              <span className="flex  space-x-3">
                <Button
                  size="medium"
                  onClick={handleButtonClick}
                  className={`border-[1px] border-solid border-[#F48487]  ${scrolled ? "text-[#05284C] " : "text-white "} `}
                >
                  Log in
                </Button>
                <Button
                  size="medium"
                  onClick={openOverlay}
                  className={`border-[1px] border-solid bg-[#05284C] border-[#0260EE] text-white  ${scrolled ? "" : " "} `}
                >
                  Sign up
                </Button>
              </span>
            </li>
          </ul>

          <div className="flex flex-col gap-[10px] justify-end items-end silver:hidden cursor-pointer z-[999]">
            <div>
              {toggle ? (
                <AiOutlineClose
                  onClick={closeMenu}
                  size={20}
                  className={` ${scrolled ? "text-[#05284C]" : "text-[#FFFFFF]"} `}
                />
              ) : (
                <HiMenuAlt3
                  onClick={openMenu}
                  size={30}
                  className={` ${scrolled ? "text-[#05284C]" : "text-[#FFFFFF]"} `}
                />
              )}
            </div>
            <div className="w-full">
              <Button
                size="medium"
                onClick={openOverlay}
                className={` hover:text-gray-400 ${scrolled ? "bg-[#05284C] text-white" : "bg-white  text-[#05284C]"} `}
              >
                Register as Trade Partner
              </Button>
            </div>
          </div>
        </div>

        {toggle && (
          <div
            className={`silver:hidden z-30 flex justify-center items-center absolute top-[73px] w-full transition-all ease-in duration-300  ${scrolled ? "bg-[#F1F5FC]" : "bg-transparent"} border-b-[3px] border-solid`}
          >
            <ul className="flex flex-col justify-start items-start w-full py-[20px] px-[15px] at500:px-[20px] md:px-[79px] space-y-2">
              <li className="relative flex flex-col gap-[10px] group">
                <span
                  className={`relative flex gap-[10px] items-center py-[10px] pr-[10px] ${
                    scrolled ? "text-[#05284C]" : "text-white"
                  }`}
                >
                  <FadeLink to="/about-finchglow-travels">About us</FadeLink>
                  <span className="cursor-pointer">
                    <SlArrowDown
                      size={13}
                      className={`${scrolled ? "text-[#05284C]" : "text-white"} group-hover:hidden`}
                    />
                    <SlArrowUp
                      size={13}
                      className={`${scrolled ? "text-[#05284C]" : "text-white"} hidden group-hover:inline`}
                    />
                  </span>
                </span>
                <div className="dropdown cursor-pointer absolute top-[38px] w-[230px] font-normal divide-gray-100 rounded-[2px] shadow dark:bg-[#EEF8FF] hidden group-hover:block">
                  <ul className="flex flex-col ">
                    <li className="flex justify-center items-center w-full py-[7px] px-[10px] border-soild border-b-[2px] dark:hover:bg-gray-600 hover:border-l-[3px] hover:border-l-[#81B0F7] border-b-[#000] text-change">
                      <FadeLink to="/finchglow-travels-story">
                        <span className="dark-text-change">Our story</span>
                      </FadeLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="relative flex flex-col gap-[10px] group">
                <span
                  className={`relative flex gap-[10px] items-center py-[10px] pr-[10px] ${
                    scrolled ? "text-[#05284C]" : "text-white"
                  }`}
                >
                  <FadeLink to="/our-services">Services</FadeLink>
                  <span className="cursor-pointer">
                    <SlArrowDown
                      size={13}
                      className={`${scrolled ? "text-[#05284C]" : "text-white"} group-hover:hidden`}
                    />
                    <SlArrowUp
                      size={13}
                      className={`${scrolled ? "text-[#05284C]" : "text-white"} hidden group-hover:inline`}
                    />
                  </span>
                </span>
                <div className="dropdown cursor-pointer absolute top-[38px] w-[230px] font-normal divide-gray-100 rounded-[2px] shadow dark:bg-[#EEF8FF] hidden group-hover:block">
                  <ul className="flex flex-col ">
                    <li className="flex justify-center items-center w-full py-[7px] px-[10px] border-soild border-b-[2px] dark:hover:bg-gray-600 hover:border-l-[3px] hover:border-l-[#81B0F7] border-b-[#000] text-change">
                      <FadeLink
                        to="/affiliate-programme"
                        className="flex w-full px-4"
                      >
                        <span className="dark-text-change">
                          Affiliate Programs
                        </span>
                      </FadeLink>
                    </li>
                    <li className="flex justify-center items-center w-full py-[7px] px-[10px] border-soild border-b-[2px] dark:hover:bg-gray-600 hover:border-l-[3px] hover:border-l-[#81B0F7] border-b-[#000] text-change ">
                      <FadeLink
                        to="/corPorate-travel-management"
                        className="flex w-full px-4"
                      >
                        <span className="dark-text-change">
                          Corporate Travel Management
                        </span>
                      </FadeLink>
                    </li>
                    <li className="flex justify-center items-center w-full py-[7px] px-[10px] border-soild border-b-[2px] dark:hover:bg-gray-600 hover:border-l-[3px] hover:border-l-[#81B0F7] border-b-[#000] text-change ">
                      <FadeLink
                        to="/customised-travel-packages"
                        className="flex w-full px-4"
                      >
                        <span className="dark-text-change">
                          Customised Travel Packages
                        </span>
                      </FadeLink>
                    </li>
                    <li className="flex justify-center items-center w-full py-[7px] px-[10px] border-soild border-b-[2px] dark:hover:bg-gray-600 hover:border-l-[3px] hover:border-l-[#81B0F7] border-b-[#000] text-change ">
                      <FadeLink
                        to="/ancillary-services"
                        className="flex w-full px-4"
                      >
                        <span className="dark-text-change">
                          Ancillary Services
                        </span>
                      </FadeLink>
                    </li>
                    <li className="flex justify-center items-center w-full py-[7px] px-[10px] border-soild border-b-[2px] dark:hover:bg-gray-600 hover:border-l-[3px] hover:border-l-[#81B0F7] border-b-[#000] text-change ">
                      <FadeLink
                        to="/visa-and-immigration-services"
                        className="flex w-full px-4"
                      >
                        <span className="dark-text-change">
                          Visa and Immigration Services
                        </span>
                      </FadeLink>
                    </li>
                  </ul>
                </div>
              </li>

              <li
                className={`py-[10px] px-[10px] hover:border-b-[5px] hover:border-b-[#81B0F7] ${activeLink === "blog" ? "border-b-[5px] border-b-[#81B0F7]" : ""} ${scrolled ? "text-[#05284C]" : "text-white"}`}
              >
                <FadeLink to="/">Blog</FadeLink>
              </li>

              <li
                className={`py-[10px] px-[10px] hover:border-b-[5px] hover:border-b-[#81B0F7] ${activeLink === "contact-us" ? "border-b-[5px] border-b-[#81B0F7]" : ""} ${scrolled ? "text-[#05284C]" : "text-white"}`}
              >
                <FadeLink to="/contact-us">Contact us</FadeLink>
              </li>

              <li className="py-[10px] w-[230px] pl-[18px]">
                <span className="flex  space-x-3">
                  <Button
                    size="medium"
                    onClick={handleButtonClick}
                    className={`border-[1px] border-solid border-[#F48487]  ${scrolled ? "text-[#05284C] " : "text-white "} `}
                  >
                    Log in
                  </Button>
                  <Button
                    size="medium"
                    onClick={openOverlay}
                    className={`border-[1px] border-solid bg-[#05284C] border-[#0260EE] text-white  ${scrolled ? "" : " "} `}
                  >
                    Sign up
                  </Button>
                </span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
