import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import { SlArrowUp, SlArrowDown, SlArrowRight } from "react-icons/sl";
import Button from "../contents/Button";
import logo from "./logos/finchglow-logo.png";
import logo2 from "./logos/FT_logo_X5-01.png";
import FadeLink from "../contents/fadeLink"; // Import the FadeLink component

const Navbar = ({ openOverlay }) => {
  const [toggle, setToggle] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState([false, false]); // Array to manage multiple dropdown states
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("about");

  const toggleDropdown = (index) => {
    setIsDropdownOpen((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

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
      "https://connectpro.finchglowtravels.com/Auth/Login ",
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
                  <li className="flex justify-center items-center w-full py-[7px] px-[10px] dark:hover:bg-[#CCDFFC] hover:border-l-[3px] hover:border-l-[#81B0F7] ">
                    <FadeLink to="/finchglow-travels-story">
                      <span className="text-[#05284C]">Our story</span>
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
                  <li className="flex justify-center items-center w-full py-[7px] px-[10px] dark:hover:bg-[#CCDFFC] hover:border-l-[3px] hover:border-l-[#81B0F7]">
                    <FadeLink
                      to="/affiliate-programme"
                      className="flex w-full px-4"
                    >
                      <span className="text-[#05284C]">Affiliate Programs</span>
                    </FadeLink>
                  </li>
                  <li className="flex justify-center items-center w-full py-[7px] px-[10px] dark:hover:bg-[#CCDFFC] hover:border-l-[3px] hover:border-l-[#81B0F7] ">
                    <FadeLink
                      to="/ancillary-services"
                      className="flex w-full px-4"
                    >
                      <span className="text-[#05284C]">Ancillary Services</span>
                    </FadeLink>
                  </li>
                  <li className="flex justify-center items-center w-full py-[7px] px-[10px] dark:hover:bg-[#CCDFFC] hover:border-l-[3px] hover:border-l-[#81B0F7] ">
                    <FadeLink
                      to="/Corporate-travel-management"
                      className="flex w-full px-4"
                    >
                      <span className="text-[#05284C]">
                        Corporate Travel Management
                      </span>
                    </FadeLink>
                  </li>
                  <li className="flex justify-center items-center w-full py-[7px] px-[10px] dark:hover:bg-[#CCDFFC] hover:border-l-[3px] hover:border-l-[#81B0F7] ">
                    <FadeLink
                      to="/partnerplus-connect"
                      className="flex w-full px-4"
                    >
                      <span className="text-[#05284C]">
                        Partnerplus Connect
                      </span>
                    </FadeLink>
                  </li>
                  <li className="flex justify-center items-center w-full py-[7px] px-[10px] dark:hover:bg-[#CCDFFC] hover:border-l-[3px] hover:border-l-[#81B0F7] ">
                    <FadeLink
                      to="/customised-travel-packages"
                      className="flex w-full px-4"
                    >
                      <span className="text-[#05284C]">
                        Customised Travel Packages
                      </span>
                    </FadeLink>
                  </li>
                  <li className="flex justify-center items-center w-full py-[7px] px-[10px] dark:hover:bg-[#CCDFFC] hover:border-l-[3px] hover:border-l-[#81B0F7] ">
                    <FadeLink
                      to="/partnerplus-connect"
                      className="flex w-full px-4"
                    >
                      <span className="text-[#05284C]">
                        Partnerplus Connect
                      </span>
                    </FadeLink>
                  </li>
                  <li className="flex justify-center items-center w-full py-[7px] px-[10px] dark:hover:bg-[#CCDFFC] hover:border-l-[3px] hover:border-l-[#81B0F7] ">
                    <FadeLink
                      to="/visa-and-immigration-services"
                      className="flex w-full px-4"
                    >
                      <span className="text-[#05284C]">
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

          <div className="flex  gap-[10px] justify-center items-center silver:hidden cursor-pointer z-[999] ">
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
                onClick={handleButtonClick}
                className={` ${scrolled ? "bg-[#05284C] text-white" : "bg-white  text-[#05284C]"} `}
              >
                Log in
              </Button>
            </div>
          </div>
        </div>

        {toggle && (
          <div
            className={`silver:hidden z-30 flex justify-center items-center absolute top-[73px] w-full transition-all ease-in duration-300  ${scrolled ? "bg-[#F1F5FC]" : " bg-gray-600"} border-b-[3px] border-solid`}
          >
            <ul className="flex flex-col justify-start items-start w-full py-[20px] px-[15px] at500:px-[20px] md:px-[79px] space-y-2">
              <li className="relative flex flex-col justify-start items-start gap-[10px] w-full">
                <span
                  className={`relative flex justify-between w-full gap-[10px] items-center hover:border-l-[3px] hover:border-l-[#81B0F7] hover:text-[#05284C] dark:hover:bg-[#E6EFFD] py-[7px] px-[10px] ${
                    scrolled ? "text-[#05284C]" : "text-white"
                  }`}
                >
                  <FadeLink to="/about-finchglow-travels">About us</FadeLink>
                  <span
                    className={`cursor-pointer z-40 border-solid border-[1px]  rounded-sm p-[2px] ${
                      scrolled ? "border-[#000]" : "border-white"
                    }`}
                    onClick={() => toggleDropdown(0)}
                  >
                    {isDropdownOpen[0] ? (
                      <SlArrowDown
                        size={13}
                        className={`${
                          scrolled ? "text-[#05284C]" : "text-white"
                        } `}
                      />
                    ) : (
                      <SlArrowRight
                        size={13}
                        className={`${
                          scrolled ? "text-[#05284C]" : "text-white"
                        } `}
                      />
                    )}
                  </span>
                </span>
                <div
                  className={`dropdown cursor-pointer w-full font-normal    ${
                    isDropdownOpen[0] ? "block" : "hidden"
                  }`}
                >
                  <ul className="flex flex-col">
                    <li className="flex justify-center items-center w-full py-[7px] px-[10px]  group dark:hover:bg-[#E6EFFD] hover:border-l-[3px] hover:border-l-[#81B0F7] text-change">
                      <FadeLink to="/finchglow-travels-story">
                        <span
                          className={`group-hover:text-[#05284C] ${
                            scrolled ? "text-[#05284C]" : "text-white"
                          } `}
                        >
                          Our story
                        </span>
                      </FadeLink>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="relative flex flex-col justify-start items-start gap-[10px] w-full">
                <span
                  className={`relative flex justify-between w-full gap-[10px] items-center hover:border-l-[3px] hover:border-l-[#81B0F7] hover:text-[#05284C] dark:hover:bg-[#E6EFFD] py-[7px] px-[10px] ${
                    scrolled ? "text-[#05284C]" : "text-white"
                  }`}
                >
                  <FadeLink to="/our-services">Services</FadeLink>
                  <span
                    className={`cursor-pointer z-40 border-solid border-[1px]  rounded-sm p-[2px] ${
                      scrolled ? "border-[#000]" : "border-white"
                    }`}
                    onClick={() => toggleDropdown(1)}
                  >
                    {isDropdownOpen[1] ? (
                      <SlArrowDown
                        size={13}
                        className={`${
                          scrolled ? "text-[#05284C]" : "text-white"
                        } `}
                      />
                    ) : (
                      <SlArrowRight
                        size={13}
                        className={`${
                          scrolled ? "text-[#05284C]" : "text-white"
                        } `}
                      />
                    )}
                  </span>
                </span>
                <div
                  className={`dropdown cursor-pointer  w-full font-normal ${
                    isDropdownOpen[1] ? "block" : "hidden"
                  }`}
                >
                  <ul className="flex flex-col">
                    <li className="flex justify-center items-center w-full py-[7px] px-[10px] border-soild hover:border-l-[3px] dark:hover:bg-[#E6EFFD] hover:border-l-[#81B0F7] group text-change">
                      <FadeLink to="/affiliate-programme">
                        <span
                          className={`group-hover:text-[#05284C] ${
                            scrolled ? "text-[#05284C]" : "text-white"
                          } `}
                        >
                          Affiliate Programs
                        </span>
                      </FadeLink>
                    </li>
                    <li className="flex justify-center items-center w-full py-[7px] px-[10px] border-soild hover:border-l-[3px] dark:hover:bg-[#E6EFFD] hover:border-l-[#81B0F7] group text-change">
                      <FadeLink to="/ancillary-services">
                        <span
                          className={`group-hover:text-[#05284C] ${
                            scrolled ? "text-[#05284C]" : "text-white"
                          } `}
                        >
                          Ancillary Services
                        </span>
                      </FadeLink>
                    </li>
                    <li className="flex justify-center items-center w-full py-[7px] px-[10px] border-soild hover:border-l-[3px] dark:hover:bg-[#E6EFFD] hover:border-l-[#81B0F7] group text-change">
                      <FadeLink to="/Corporate-travel-management">
                        <span
                          className={`group-hover:text-[#05284C] ${
                            scrolled ? "text-[#05284C]" : "text-white"
                          } `}
                        >
                          CorPorate Travel Management
                        </span>
                      </FadeLink>
                    </li>
                    <li className="flex justify-center items-center w-full py-[7px] px-[10px] border-soild hover:border-l-[3px] dark:hover:bg-[#E6EFFD] hover:border-l-[#81B0F7] group text-change">
                      <FadeLink to="/partnerplus-connect">
                        <span
                          className={`group-hover:text-[#05284C] ${
                            scrolled ? "text-[#05284C]" : "text-white"
                          } `}
                        >
                          Partnerplus Connect
                        </span>
                      </FadeLink>
                    </li>
                    <li className="flex justify-center items-center w-full py-[7px] px-[10px] border-soild hover:border-l-[3px] dark:hover:bg-[#E6EFFD] hover:border-l-[#81B0F7] group text-change">
                      <FadeLink to="/customised-travel-packages">
                        <span
                          className={`group-hover:text-[#05284C] ${
                            scrolled ? "text-[#05284C]" : "text-white"
                          } `}
                        >
                          Customised Travel Packages
                        </span>
                      </FadeLink>
                    </li>
                    <li className="flex justify-center items-center w-full py-[7px] px-[10px] border-soild hover:border-l-[3px] dark:hover:bg-[#E6EFFD] hover:border-l-[#81B0F7] group text-change">
                      <FadeLink to="/visa-and-immigration-services">
                        <span
                          className={`group-hover:text-[#05284C] ${
                            scrolled ? "text-[#05284C]" : "text-white"
                          } `}
                        >
                          Visa and Immigration Services
                        </span>
                      </FadeLink>
                    </li>
                  </ul>
                </div>
              </li>

              <li
                className={`w-full py-[10px] px-[10px] hover:border-l-[3px] hover:text-[#05284C] dark:hover:bg-[#E6EFFD] hover:border-l-[#81B0F7] ${scrolled ? "text-[#05284C]" : "text-white"}`}
              >
                <FadeLink to="/">Blog</FadeLink>
              </li>

              <li
                className={`w-full py-[10px] px-[10px] hover:border-l-[3px] hover:text-[#05284C] dark:hover:bg-[#E6EFFD] hover:border-l-[#81B0F7] ${scrolled ? "text-[#05284C]" : "text-white"}`}
              >
                <FadeLink to="/contact-us">Contact us</FadeLink>
              </li>

              <li className="py-[10px] w-full pl-[10px]">
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
