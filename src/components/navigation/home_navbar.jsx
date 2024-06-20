import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt3 } from 'react-icons/hi';
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import Button from '../contents/Button';
import logo from './logos/finchglow-logo.png';
import logo2 from './logos/FT_logo_X5-01.png';
import FadeLink from '../contents/fadeLink'; // Import the FadeLink component

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("about");
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function openMenu() {
    setToggle(true);
  }

  function closeMenu() {
    setToggle(false);
  }

  // function handleLinkClick(link) {
  //   setActiveLink(link);
  //   setToggle(false); // Close the menu if a link is clicked (for mobile view)
  // }

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <nav
      className={`fixed top-0 z-[88] ${scrolled ? "bg-[#F1F5FC]" : "bg-transparent"} flex justify-center items-center w-full `}
    >
      <div className="relative flex justify-center items-center w-full  2xl:w-[1280px] px-[15px] py-[20px] at500:px-[40px] my-0 mx-auto">
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
            <li
              className="relative flex flex-col gap-[10px]"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <span
                className={`relative flex gap-[10px] items-center py-[10px] pr-[10px] ${scrolled ? "text-[#05284C]" : "text-white"}`}
              >
                <FadeLink to="/about">About us</FadeLink>
                <span className="cursor-pointer">
                  {hovered ? (
                    <SlArrowUp
                      size={13}
                      className={`${scrolled ? "text-[#05284C]" : "text-white"}`}
                    />
                  ) : (
                    <SlArrowDown
                      size={13}
                      className={`${scrolled ? "text-[#05284C]" : "text-white"}`}
                    />
                  )}
                </span>
              </span>
              {hovered && (
                <div
                  className="dropdown cursor-pointer absolute top-[33px] w-[100px] font-normal divide-gray-100 rounded-[2px] shadow dark:bg-[#EEF8FF] border-b-[5px] border-b-[#81B0F7]"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  <ul className="flex flex-col py-2">
                    <li className="flex justify-center items-center w-full px-[5px]">
                      <FadeLink
                        to="/ourstory"
                        className="flex w-full px-4 text-[#05284C] dark:hover:text-gray-600"
                      >
                        Our story
                      </FadeLink>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <li
              className={`py-[10px] px-[10px] hover:border-b-[5px] hover:border-b-[#81B0F7] ${activeLink === "services" ? "border-b-[5px] border-b-[#81B0F7]" : ""} ${scrolled ? "text-[#05284C]" : "text-white"}`}
            >
              <FadeLink to="/services">Services</FadeLink>
            </li>

            <li
              className={`py-[10px] px-[10px] hover:border-b-[5px] hover:border-b-[#81B0F7] ${activeLink === "blog" ? "border-b-[5px] border-b-[#81B0F7]" : ""} ${scrolled ? "text-[#05284C]" : "text-white"}`}
            >
              <FadeLink to="/blog">Blog</FadeLink>
            </li>

            <li
              className={`py-[10px] px-[10px] hover:border-b-[5px] hover:border-b-[#81B0F7] ${activeLink === "contact" ? "border-b-[5px] border-b-[#81B0F7]" : ""} ${scrolled ? "text-[#05284C]" : "text-white"}`}
            >
              <FadeLink to="/contact">Contact us</FadeLink>
            </li>

            <li className="py-[10px] pl-[20px]">
              <Button
                size="medium"
                onClick={handleClick}
                className={` ${scrolled ? "text-[#05284C]" : "text-white"} `}
              >
                Register as Trade Partner
              </Button>
            </li>
          </ul>

          <div className="flex gap-[30px] justify-center items-center silver:hidden cursor-pointer z-[999]">
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
            <div className="w-[65px]">
              <Button
                size="small"
                onClick={handleClick}
                className={` hover:text-gray-400 ${scrolled ? "bg-[#05284C] text-white" : "bg-white  text-[#05284C]"} `}
              >
                login
              </Button>
            </div>
          </div>
        </div>

        {toggle && (
          <div
            className={`silver:hidden flex justify-center items-center absolute top-[73px] transition-all ease-in duration-300 w-full  ${scrolled ? "bg-[#F1F5FC]" : "bg-transparent"} border-b-[3px] border-solid`}
          >
            <ul className="flex flex-col justify-start items-start w-full py-[20px] px-[15px] at500:px-[20px] md:px-[79px] space-y-2">
              <li
                className="relative flex flex-col gap-[10px] "
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <span
                  className={`relative flex gap-[10px] items-center py-[10px] pr-[10px] ${activeLink === "about" ? "" : ""} ${scrolled ? "text-[#05284C]" : "text-white"}`}
                >
                  <FadeLink to="/about">About us</FadeLink>
                  <span className="cursor-pointer ">
                    {hovered ? (
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
                {hovered && (
                  <div
                    className="dropdown cursor-pointer absolute top-[40px] w-[100px] font-normal divide-gray-100 rounded-[2px] shadow dark:bg-[#EEF8FF] border-b-[5px] border-b-[#81B0F7]"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                  >
                    <ul className="flex flex-col py-2">
                      <li className="flex justify-center items-center w-full px-[5px]">
                        <FadeLink
                          to="/ourstory"
                          className="flex w-full pr-[10px] md:px-4 text-[#05284C] dark:hover:text-gray-600"
                        >
                          Our story
                        </FadeLink>
                      </li>
                    </ul>
                  </div>
                )}
              </li>

              <li
                className={`py-[10px] pr-[10px] hover:border-b-[5px] hover:border-b-[#81B0F7] ${activeLink === "services" ? "border-b-[5px] border-b-[#81B0F7]" : ""} ${scrolled ? "text-[#05284C]" : "text-white"}`}
              >
                <FadeLink to="/services">Services</FadeLink>
              </li>

              <li
                className={`py-[10px] pr-[10px] hover:border-b-[5px] hover:border-b-[#81B0F7] ${activeLink === "blog" ? "border-b-[5px] border-b-[#81B0F7]" : ""} ${scrolled ? "text-[#05284C]" : "text-white"}`}
              >
                <FadeLink to="/blog">Blog</FadeLink>
              </li>

              <li
                className={`py-[10px] pr-[10px] hover:border-b-[5px] hover:border-b-[#81B0F7] ${activeLink === "contact" ? "border-b-[5px] border-b-[#81B0F7]" : ""} ${scrolled ? "text-[#05284C]" : "text-white"}`}
              >
                <FadeLink to="/contact">Contact us</FadeLink>
              </li>

              <li className="py-[10px] pr-[20px]">
                <Button
                  size="medium"
                  onClick={handleClick}
                  className={` hover:text-gray-400 ${scrolled ? "text-[#05284C]" : "text-white"} `}
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

export default Navbar;
