import React, { useState } from "react";
import copyLinkImg from "../image/blog/icon/copy-min.png";
import twitterImg from "../image/blog/icon/_Button base-min.png";
import facebookImg from "../image/blog/icon/fb_Button base-min.png";
import linkedinImg from "../image/blog/icon/linkedinButton-min.png";


const BlogInfoSection = () => {
  const [copyMessage, setCopyMessage] = useState("");

  const handleCopyLink = () => {
    const link = window.location.href;
    navigator.clipboard.writeText(link).then(() => {
      setCopyMessage("Link copied ");
      setTimeout(() => setCopyMessage(""), 2000); // Clear the message after 2 seconds
    });
  };

  return (
    <section className="relative bg-[#FFFFFF] flex flex-col justify-center items-center w-full overflow-hidden z-[20]">
      <div className="static w-full flex flex-col justify-center items-center 2xl:w-[1280px] px-[15px] py-[60px] at500:px-[64px] my-0 mx-auto">
        <div className="flex flex-col gap-[50px] ipx:flex-row justify-start items-start silver:justify-between w-full">
          <div className="flex flex-col gap-[20px] lg:flex-row justify-start items-start sm:justify-between w-[300px]">
            <div className="flex flex-col gap-[12px]">
              <span
                data-aos="fade-up"
                className="txt4 leading-[28px] text-[#0260EE]"
              >
                Written by
              </span>
              <span
                data-aos="fade-up"
                className="txt4 leading-[28px] text-[#667085]"
              >
                Alec Whitten
              </span>
            </div>
            <div className="flex flex-col gap-[12px]">
              <span
                data-aos="fade-up"
                className="txt4 leading-[28px] text-[#0260EE]"
              >
                Published on
              </span>
              <span
                data-aos="fade-up"
                className="txt4 leading-[28px] text-[#667085]"
              >
                17 Jan 2022
              </span>
            </div>
          </div>
          <div className="w-full xl:w-[279px] flex flex-col gap-[20px] silver:flex-row ipx:justify-end ipx:items-end">
            <div
              data-aos="fade-up"
              className=" flex flex-col gap-[15px] w-[129px] cursor-pointer px-[10px] py-[10px] border-[1px] h-[40px] border-solid border-[#667085] hover:rounded-[2px] rounded-[8px]"
              onClick={handleCopyLink}
            >
              <span className="flex gap-[8px]">
                <img
                  src={copyLinkImg}
                  className="w-[20px] h-[20px]"
                  alt="copy-link"
                />
                <span className="text-[#667085] font-medium leading-[20px] text-[14px] transition-all duration-300 ease-in-out">
                  Copy link
                </span>
              </span>
              <span className="copy-message">{copyMessage}</span>
            </div>
            <ul className="flex gap-3">
              <li data-aos="fade-up">
                <a href="">
                  <span>
                    <img
                      src={twitterImg}
                      className="w-[40px] h-[40px]"
                      alt="twitter"
                    />
                  </span>
                </a>
              </li>
              <li data-aos="fade-up">
                <a href="">
                  <span>
                    <img
                      src={facebookImg}
                      className="w-[40px] h-[40px]"
                      alt="facebook"
                    />
                  </span>
                </a>
              </li>
              <li data-aos="fade-up">
                <a href="">
                  <span>
                    <img
                      src={linkedinImg}
                      className="w-[40px] h-[40px]"
                      alt="linkedin"
                    />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogInfoSection;
