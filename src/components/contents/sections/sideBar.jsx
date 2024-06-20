import React from "react";
import icon from "../images/blog/icon/Featured icon.png";
import "../styles/_sideBar.css";

const Sidebar = () => {
  return (
    <div className="sidebar relative flex flex-col justify-start xl:w-[384px] z-0">
      {/* sign-up */}
      <div className="relative bg-[#E6EFFD] rounded-[14.22px] z-[33] shadow-md md:shadow-lg flex justify-center items-center w-full p-[30px] my-0 mx-auto">
        {/*row1 */}
        <div className="relative flex flex-col justify-start items-start w-full gap-[32px] ">
          <img
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-anchor-placement="top-bottom"
            src={icon}
            className="w-[56px] h-[56px] object-cover"
            alt="Check icon"
          />
          <div className="w-full  ">
            <h2
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-anchor-placement="top-bottom"
              className="leading-[38px] text-[#05284C] text-[30px]"
            >
              Weekly newsletter
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-anchor-placement="top-bottom"
              className="text-[#667085] leading-[28px] text-[18px] lg:w-[320px]"
            >
              No spam. Just the latest releases and tips, interesting articles,
              and exclusive interviews in your inbox every week.
            </p>
          </div>
          {/* news */}
          {/* Form Column */}
          <div className="flex flex-col justify-center w-full ">
            {/* <form method="post" action="#">
              <div className="flex flex-col justify-start items-start gap-4 w-full">
                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  data-aos-anchor-placement="top-bottom"
                  className="relative block m-0 rounded-[3px] w-full lg:w-[321px]"
                >
                  <input
                    className="leading-[24px] rounded-[4px] bg-none pb-5 text-white bg-regal-blue4 h-[50px] text-[14px] py-[13px] px-[20px] z-[2] shadow w-full"
                    type="email"
                    name="your email"
                    value="email"
                    
                    
                  />
                </div>
                <p
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  data-aos-anchor-placement="top-bottom"
                  className="text-[14px] leading-[20px] text-[#375370]"
                >
                  Read about our privacy policy
                </p>
                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  data-aos-anchor-placement="top-bottom"
                  className="w-full"
                >
                  <input type="submit" className="cdn" value="Subscribe" />
                </div>
              </div>
            </form> */}
          </div>
        </div>
        {/* Form Column */}
      </div>
    </div>
  );
};

export default Sidebar;
