import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import Button from "../contents/Button"; // Ensure this is the correct import statement
import logo from "./logos/FT_logo_X5-01.png"; // Ensure this is the correct path
import FadeLink from "../contents/fadeLink"; // Import the FadeLink component
import { useLocation } from "react-router-dom";

const Nav = ({ openOverlay }) => {
  const [toggle, setToggle] = useState(false);
  const [hovered, setHovered] = useState({});
  const { pathname } = useLocation();

  const [activeLink, setActiveLink] = useState(pathname.substring(1));

  useEffect(() => {
    // Extract the active link from the pathname
    setActiveLink(pathname.substring(1));
  }, [pathname]);

  const handleHover = (index, state) => {
    setHovered((prev) => ({ ...prev, [index]: state }));
  };

  function openMenu() {
    setToggle(true);
  }

  function closeMenu() {
    setToggle(false);
  }


  return (
    <nav className="flex justify-center items-center w-full fixed top-0 z-[88] bg-[#F1F5FC]">
      <div className="relative flex justify-center items-center w-full 2xl:w-[1280px] py-[20px] px-[15px] at500:px-[40px]">
        <div className="relative w-full mx-auto flex md:flex-row justify-between items-start md:items-center">
          <div className="relative flex justify-start items-start text-white text-2xl font-bold mb-2 md:mb-0">
            <FadeLink to="/">
              <img src={logo} alt="logo" className="h-auto w-[130px]" />
            </FadeLink>
          </div>

          <ul className="hidden silver:flex justify-end items-center space-x-4">
            <li
              className="relative flex flex-col gap-[10px]"
              onMouseEnter={() => handleHover(0, true)}
              onMouseLeave={() => handleHover(0, false)}
            >
              <span
                className={`relative flex gap-[10px] items-center text-[#05284C] py-[10px] pr-[10px] ${activeLink === "about" ? "border-b-[5px] border-b-[#81B0F7]" : ""}`}
              >
                <FadeLink to="/about">About us</FadeLink>
                <span className="cursor-pointer z-40">
                  {hovered[0] ? (
                    <SlArrowUp
                      size={13}
                      onClick={closeMenu}
                      className="text-[#05284C]"
                    />
                  ) : (
                    <SlArrowDown
                      size={13}
                      onClick={openMenu}
                      className="text-[#05284C]"
                    />
                  )}
                </span>
              </span>
              {hovered[0] && (
                <div
                  className="dropdown cursor-pointer absolute top-[33px] w-[100px] font-normal divide-gray-100 rounded-[2px] shadow dark:bg-[#EEF8FF] border-b-[5px] border-b-[#81B0F7]"
                  onMouseEnter={() => handleHover(0, true)}
                  onMouseLeave={() => handleHover(0, false)}
                >
                  <ul className="flex flex-col py-2 z-10">
                    <li className="flex justify-center items-center w-full px-[5px]">
                      <FadeLink
                        to="/ourstory"
                        className={`flex w-full px-4 !text-[#05284C] dark:hover:text-gray-600 ${activeLink === "ourstory" ? "border-b-[5px] border-b-[#81B0F7]" : ""}`}
                        onClick={() => setActiveLink("ourstory")}
                      >
                        Our story
                      </FadeLink>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li
              className="relative flex flex-col gap-[10px]"
              onMouseEnter={() => handleHover(1, true)}
              onMouseLeave={() => handleHover(1, false)}
            >
              <span
                className={`relative flex gap-[10px] items-center text-[#05284C] py-[10px] pr-[10px] ${(activeLink === "services") | "affiliate" ? "border-b-[5px] border-b-[#81B0F7]" : ""}`}
              >
                <FadeLink to="/services">Services</FadeLink>
                <span className="cursor-pointer z-40">
                  {hovered[1] ? (
                    <SlArrowUp
                      size={13}
                      onClick={closeMenu}
                      className="text-[#05284C]"
                    />
                  ) : (
                    <SlArrowDown
                      size={13}
                      onClick={openMenu}
                      className="text-[#05284C]"
                    />
                  )}
                </span>
              </span>
              {hovered[1] && (
                <div
                  className="dropdown cursor-pointer absolute top-[33px] w-[100px] font-normal divide-gray-100 rounded-[2px] shadow dark:bg-[#EEF8FF] border-b-[5px] border-b-[#81B0F7]"
                  onMouseEnter={() => handleHover(1, true)}
                  onMouseLeave={() => handleHover(1, false)}
                >
                  <ul className="flex flex-col gap-[10px] py-2 z-10">
                    <li className="flex justify-center items-center w-full px-[5px]">
                      <FadeLink
                        to="/affiliate"
                        className={`flex w-full px-4 !text-[#05284C] dark:hover:text-gray-600 ${activeLink === "services" ? "border-b-[5px] border-b-[#81B0F7]" : ""}`}
                        onClick={() => setActiveLink("ourstory")}
                      >
                        Affiliate
                      </FadeLink>
                    </li>
                    <li className="flex justify-center items-center w-full px-[5px]">
                      <FadeLink
                        to="/ancillary"
                        className={`flex w-full px-4 !text-[#05284C] dark:hover:text-gray-600 ${activeLink === "services" ? "border-b-[5px] border-b-[#81B0F7]" : ""}`}
                        onClick={() => setActiveLink("ourstory")}
                      >
                        Ancillary
                      </FadeLink>
                    </li>
                    <li className="flex justify-center items-center w-full px-[5px]">
                      <FadeLink
                        to="/ancillary"
                        className={`flex w-full px-4 !text-[#05284C] dark:hover:text-gray-600 ${activeLink === "services" ? "border-b-[5px] border-b-[#81B0F7]" : ""}`}
                        onClick={() => setActiveLink("ourstory")}
                      >
                        Ancillary
                      </FadeLink>
                    </li>
                    <li className="flex justify-center items-center w-full px-[5px]">
                      <FadeLink
                        to="/travelPackages"
                        className={`flex w-full px-4 !text-[#05284C] dark:hover:text-gray-600 ${activeLink === "services" ? "border-b-[5px] border-b-[#81B0F7]" : ""}`}
                        onClick={() => setActiveLink("ourstory")}
                      >
                        Travel
                      </FadeLink>
                    </li>
                    <li className="flex justify-center items-center w-full px-[5px]">
                      <FadeLink
                        to="/corPorate"
                        className={`flex w-full px-4 !text-[#05284C] dark:hover:text-gray-600 ${activeLink === "corPorate" ? "border-b-[5px] border-b-[#81B0F7]" : ""}`}
                        onClick={() => setActiveLink("corPorate")}
                      >
                        corPorate
                      </FadeLink>
                    </li>
                    <li className="flex justify-center items-center w-full px-[5px]">
                      <FadeLink
                        to="/partnerPlus"
                        className={`flex w-full px-4 !text-[#05284C] dark:hover:text-gray-600 ${activeLink === "partnerPlus" ? "border-b-[5px] border-b-[#81B0F7]" : ""}`}
                        onClick={() => setActiveLink("partnerPlus")}
                      >
                        partnerPlus
                      </FadeLink>
                    </li>
                    <li className="flex justify-center items-center w-full px-[5px] 00456792 union back">
                      <FadeLink
                        to="/blogPost"
                        className={`flex w-full px-4 !text-[#05284C] dark:hover:text-gray-600 ${activeLink === "services" ? "border-b-[5px] border-b-[#81B0F7]" : ""}`}
                        onClick={() => setActiveLink("ourstory")}
                      >
                        API Stack
                      </FadeLink>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <li
              className={`py-[10px] px-[10px] hover:border-b-[5px] text-[#05284C] hover:border-b-[#81B0F7] ${activeLink === "blog" ? "border-b-[5px] border-b-[#81B0F7]" : ""}`}
            >
              <FadeLink to="/">Blog</FadeLink>
            </li>
            <li
              className={`py-[10px] px-[10px] hover:border-b-[5px] text-[#05284C] hover:border-b-[#81B0F7] ${activeLink === "contact" ? "border-b-[5px] border-b-[#81B0F7]" : ""}`}
            >
              <FadeLink to="/contact">Contact us</FadeLink>
            </li>
            <li className="py-[10px] pl-[20px]">
              <Button
                size="medium"
                onClick={openOverlay}
                className="text-[#05284C]"
              >
                Register as Trade Partner
              </Button>
            </li>
          </ul>

          <div className="flex flex-col gap-[10px] justify-end items-end silver:hidden cursor-pointer z-[999]">
            <div>
              {toggle ? (
                <AiOutlineClose
                  onClick={closeMenu}
                  size={20}
                  className="text-[#05284C]"
                />
              ) : (
                <HiMenuAlt3
                  onClick={openMenu}
                  size={30}
                  className="text-[#05284C]"
                />
              )}
            </div>
            <div className="w-full">
              <Button
                size="medium"
                onClick={openOverlay}
                className="hover:text-gray-400 bg-[#05284C] text-white"
              >
                Register as Trade Partner
              </Button>
            </div>
          </div>
        </div>

        {toggle && (
          <div className="silver:hidden flex justify-center items-center absolute top-[73px] transition-all ease-in duration-300 w-full bg-[#F1F5FC] border-b-[3px] border-solid">
            <ul className="flex flex-col justify-start items-start w-full py-[20px] px-[15px] at500:px-[20px] md:px-[79px] space-y-2 z-[30]">
              <li
                className="relative flex flex-col gap-[10px]"
                onMouseEnter={() => handleHover(0, true)}
                onMouseLeave={() => handleHover(0, false)}
              >
                <span
                  className={`relative z-[999] flex gap-[10px] items-center text-[#05284C] py-[10px] pr-[10px] ${activeLink === "about" ? "border-b-[5px] border-b-[#81B0F7]" : ""}`}
                >
                  <FadeLink to="/about">About us</FadeLink>
                  <span className="cursor-pointer z-40">
                    {hovered[0] ? (
                      <SlArrowUp
                        size={13}
                        onClick={closeMenu}
                        className="text-[#05284C]"
                      />
                    ) : (
                      <SlArrowDown
                        size={13}
                        onClick={openMenu}
                        className="text-[#05284C]"
                      />
                    )}
                  </span>
                </span>
                {hovered[0] && (
                  <div
                    className="dropdown cursor-pointer absolute top-[33px] w-[100px] font-normal divide-gray-100 rounded-[2px] shadow dark:bg-[#EEF8FF] border-b-[5px] border-b-[#81B0F7]"
                    onMouseEnter={() => handleHover(0, true)}
                    onMouseLeave={() => handleHover(0, false)}
                  >
                    <ul className="flex flex-col py-2 z-10">
                      <li className="flex justify-center items-center w-full px-[5px]">
                        <FadeLink
                          to="/ourstory"
                          className={`flex w-full px-4 !text-[#05284C] dark:hover:text-gray-600 ${activeLink === "ourstory" ? "border-b-[5px] border-b-[#81B0F7]" : ""}`}
                          onClick={() => setActiveLink("ourstory")}
                        >
                          Our story
                        </FadeLink>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li
                className="relative flex flex-col gap-[10px]"
                onMouseEnter={() => handleHover(1, true)}
                onMouseLeave={() => handleHover(1, false)}
              >
                <span
                  className={`relative flex gap-[10px] items-center text-[#05284C] py-[10px] pr-[10px] ${(activeLink === "services") | "affiliate" ? "border-b-[5px] border-b-[#81B0F7]" : ""}`}
                >
                  <FadeLink to="/services">Services</FadeLink>
                  <span className="cursor-pointer z-40">
                    {hovered[1] ? (
                      <SlArrowUp
                        size={13}
                        onClick={closeMenu}
                        className="text-[#05284C]"
                      />
                    ) : (
                      <SlArrowDown
                        size={13}
                        onClick={openMenu}
                        className="text-[#05284C]"
                      />
                    )}
                  </span>
                </span>
                {hovered[1] && (
                  <div
                    className="dropdown cursor-pointer absolute top-[33px] w-[100px] font-normal divide-gray-100 rounded-[2px] shadow dark:bg-[#EEF8FF] border-b-[5px] border-b-[#81B0F7]"
                    onMouseEnter={() => handleHover(1, true)}
                    onMouseLeave={() => handleHover(1, false)}
                  >
                    <ul className="flex flex-col gap-[10px] py-2 z-10">
                      <li className="flex justify-center items-center w-full px-[5px]">
                        <FadeLink
                          to="/affiliate"
                          className={`flex w-full px-4 !text-[#05284C] dark:hover:text-gray-600 ${activeLink === "services" ? "border-b-[5px] border-b-[#81B0F7]" : ""}`}
                          onClick={() => setActiveLink("ourstory")}
                        >
                          Affiliate
                        </FadeLink>
                      </li>
                      <li className="flex justify-center items-center w-full px-[5px]">
                        <FadeLink
                          to="/ancillary"
                          className={`flex w-full px-4 !text-[#05284C] dark:hover:text-gray-600 ${activeLink === "services" ? "border-b-[5px] border-b-[#81B0F7]" : ""}`}
                          onClick={() => setActiveLink("ourstory")}
                        >
                          Ancillary
                        </FadeLink>
                      </li>
                      <li className="flex justify-center items-center w-full px-[5px]">
                        <FadeLink
                          to="/ancillary"
                          className={`flex w-full px-4 !text-[#05284C] dark:hover:text-gray-600 ${activeLink === "services" ? "border-b-[5px] border-b-[#81B0F7]" : ""}`}
                          onClick={() => setActiveLink("ourstory")}
                        >
                          Ancillary
                        </FadeLink>
                      </li>
                      <li className="flex justify-center items-center w-full px-[5px]">
                        <FadeLink
                          to="/travelPackages"
                          className={`flex w-full px-4 !text-[#05284C] dark:hover:text-gray-600 ${activeLink === "services" ? "border-b-[5px] border-b-[#81B0F7]" : ""}`}
                          onClick={() => setActiveLink("ourstory")}
                        >
                          Travel
                        </FadeLink>
                      </li>
                      <li className="flex justify-center items-center w-full px-[5px]">
                        <FadeLink
                          to="/corPorate"
                          className={`flex w-full px-4 !text-[#05284C] dark:hover:text-gray-600 ${activeLink === "corPorate" ? "border-b-[5px] border-b-[#81B0F7]" : ""}`}
                          onClick={() => setActiveLink("corPorate")}
                        >
                          corPorate
                        </FadeLink>
                      </li>
                      <li className="flex justify-center items-center w-full px-[5px]">
                        <FadeLink
                          to="/partnerPlus"
                          className={`flex w-full px-4 !text-[#05284C] dark:hover:text-gray-600 ${activeLink === "partnerPlus" ? "border-b-[5px] border-b-[#81B0F7]" : ""}`}
                          onClick={() => setActiveLink("partnerPlus")}
                        >
                          partnerPlus
                        </FadeLink>
                      </li>
                      <li className="flex justify-center items-center w-full px-[5px] 00456792 union back">
                        <FadeLink
                          to="/blogPost"
                          className={`flex w-full px-4 !text-[#05284C] dark:hover:text-gray-600 ${activeLink === "services" ? "border-b-[5px] border-b-[#81B0F7]" : ""}`}
                          onClick={() => setActiveLink("ourstory")}
                        >
                          API Stack
                        </FadeLink>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li
                className={`py-[10px] px-[10px] hover:border-b-[5px] text-[#05284C] hover:border-b-[#81B0F7] ${activeLink === "blog" ? "border-b-[5px] border-b-[#81B0F7]" : ""}`}
              >
                <FadeLink to="/">Blog</FadeLink>
              </li>
              <li
                className={`py-[10px] px-[10px] hover:border-b-[5px] text-[#05284C] hover:border-b-[#81B0F7] ${activeLink === "contact" ? "border-b-[5px] border-b-[#81B0F7]" : ""}`}
              >
                <FadeLink to="/contact">Contact us</FadeLink>
              </li>
              <li className="py-[10px]">
                <Button
                  size="medium"
                  onClick={openOverlay}
                  className="text-[#05284C]"
                >
                  Register as Trade Partner
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
