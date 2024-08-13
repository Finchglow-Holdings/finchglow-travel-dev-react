import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import icon from "../image/icons/Check icon-min.png";

const ExploreOurServices = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  const services = [
    {
      title: "Hotels and Accommodation",
      description: "Find the perfect place to call your home away from home from our specially curated range of local and international hotels and apartments.",
      icon: "image/icons/Check icon.png"
    },
    {
      title: "Airport Transfers",
      description: "Arrive at your destination stress-free with our reliable and efficient airport transfer services. Enjoy a smooth journey from the moment you land.",
      icon: "image/icons/Check icon.png"
    },
    
    {
      title: "Travel Insurance",
      description: "Travel with peace of mind, knowing you have our comprehensive travel insurance plans. Your safety and security are our top priorities.",
      icon: "image/icons/Check icon.png"
    },
    {
      title: "Concierge Services",
      description: "From restaurant reservations to event tickets, our concierge services ensure an enriched travel experience with exclusive and memorable activities.",
      icon: "image/icons/Check icon.png"
    },
    {
      title: "VIP Lounge Access",
      description: "Elevate your pre-flight or layover experience with access to luxurious VIP lounges, offering comfort, relaxation, and a range of amenities.",
      icon: "image/icons/Check icon.png"
    },
    {
      title: "Local Experiences",
      description: "Immerse yourself in the culture and essence of your destination with our curated local experiences. Explore hidden gems, indulge in culinary delights, and create lasting memories.",
      icon: "image/icons/Check icon.png"
    },
    
  ];

  return (
    <section className="relative bg-[#EEF5FF] flex flex-col justify-center items-center w-full h-auto overflow-hidden z-[2] lg:overflow-visible">
      <div className="static w-full flex flex-col justify-center items-center 2xl:w-[1280px] px-[15px] py-[70px] at500:px-[64px] md:pr-[64px] md:pl-[94px] my-0 mx-auto">
        <div className="flex flex-col justify-center items-center w-full h-auto">
          <h3 className="text-[#05284C] mb-[30px]">
            Why choose our Ancillary Services?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 items-start gap-x-5 gap-y-5 w-full mb-[70px]">
            {services.slice(0, 3).map((service, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center w-full lg:w-[352px] gap-[20px]"
              >
                <img
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  src={icon}
                  className="w-[28px] h-[28px] object-cover"
                  alt={service.title}
                />
                <div className="flex flex-col justify-center items-center">
                  <span
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    className="txt6"
                  >
                    {service.title}
                  </span>
                  <p
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    className="text-[16px] leading-[24px] text-center text-[#697E94]"
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 items-start gap-x-5 gap-y-5 w-full">
            {services.slice(3).map((service, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center w-full lg:w-[352px] gap-[20px]"
              >
                <img
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  src={icon}
                  className="w-[28px] h-[28px] object-cover"
                  alt={service.title}
                />
                <div className="flex flex-col justify-center items-center">
                  <span
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    className="txt6"
                  >
                    {service.title}
                  </span>
                  <p
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    className="text-[16px] leading-[24px] text-center text-[#697E94]"
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreOurServices;
