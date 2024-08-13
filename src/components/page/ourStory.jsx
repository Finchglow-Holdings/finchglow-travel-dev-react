import React from "react";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Nav from "../navigation/nav"; // Correct import statement
import Title from "../contents/title"; // Correct import statement
import contents from "../props/contents"; // Ensure this is the correct path
import TestimonialSlider from "../testimonial/testimonial";
import TalkToUs from "../contents/talkToUs";
import talk from "../props/talk";
import Footer from "../contents/footer";
import background from "../contents/image/blue-background - Copy.webp";
import background2 from "../contents/image/sharing report.webp";
import background3 from "../contents/image/circle.webp";
import background4 from "../contents/image/blue-background - Copy.webp";
import icon1 from "../contents/image/icons/rocket (1) 1-min.png";
import icon2 from "../contents/image/icons/handshake (1) 1-min.png";
import icon3 from "../contents/image/icons/loca-min.png";
import icon4 from "../contents/image/icons/corporate-social-responsibility (1) 1-min.png";
import icon5 from "../contents/image/icons/award 119-min.png";
import icon6 from "../contents/image/icons/Check icon-min.png";
import OverlayForm from "../form/overlayForm";

function createTalkToUs(talk) {
  return (
    <TalkToUs
      key={talk.id}
      title={talk.title}
      details={talk.details}
      buttz={talk.buttz}
      links={talk.links}
      pageLink={talk.pageLink}
    />
  );
}

function createTitle(content) {
  return (
    <Title
      key={content.id}
      title={content.title}
      subTitle={content.subTitle}
      riteContent={content.riteContent}
      imgURL={content.imgURL}
    />
  );
}

function OurStory() {
  const [isOpen, setIsOpen] = useState(false);
  const openOverlay = () => setIsOpen(true);
  const closeOverlay = () => setIsOpen(false);

  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        <Nav openOverlay={openOverlay} />
        <OverlayForm isOpen={isOpen} closeOverlay={closeOverlay} />

        <section className="flex justify-center items-center w-full mt-[70px]">
          {contents.filter((content) => content.id === 5).map(createTitle)}
        </section>

        <section className="relative flex flex-col justify-center items-center  bg-[#FFFFFF]  md:h-[689px] w-full h-auto overflow-hidden">
          <div className="static w-[95%] flex flex-col justify-center items-center 2xl:w-[1280px] px-[15px] py-[30px] at500:px-[80px] my-0 mx-auto">
            <div className="flex flex-col justify-center gap-[48px] items-start w-full ">
              <div className="relative flex flex-col justify-start items-start gap-[6px]  h-auto text-left">
                <h3
                  data-aos="fade-up"
                  className="text-[#05284C] silver:w-[665px]"
                >
                  We committed to developing tailored travel solutions that
                  drive results
                </h3>
              </div>

              <div className="relative flex flex-col justify-start items-start gap-[30px] w-full h-auto text-left ">
                <h2
                  data-aos="fade-up"
                  className="text-[24px] leading-[32px] text-[#506982] lg:w-[1024px]"
                >
                  Finchglow Travels is an award-winning regional provider of
                  innovative and cost-effective travel solutions for emerging
                  travel agencies, CorPorate businesses and clients,
                  high-networth individuals, and burgeoning travellers.
                </h2>

                <div className="relative flex flex-col lg:flex-row justify-start items-start gap-[20px] lg:gap-[58px] w-full h-auto text-left">
                  <span
                    data-aos="fade-up"
                    className="txt5 !leading-[26px] text-[#506982] lg:w-[490.5px]"
                  >
                    We understand the complex travel needs of everyone in our
                    service ecosystem and are committed to developing tailored
                    travel solutions that drive results. <br />
                    <br />
                    With over 18 years in the travel industry, Finchglow Travels
                    is proud to support the travel needs of a diverse customer
                    portfolio with clients scattered across different Nigerian
                    cities and industries or with distinct goals.
                  </span>
                  <span
                    data-aos="fade-up"
                    className="txt5 !leading-[26px] !text-[#506982] lg:w-[490.5px]"
                  >
                    Our vast experience and expertise enable us to leverage
                    extensive knowledge, insights, and time-tested solutions
                    from diverse businesses to maximise savings and profits for
                    every client requiring our services. We support our clients
                    through every step of their journey with our automated
                    reservation system, travel desk, consular and immigration
                    services, protocol services, personalised itinerary
                    management, and accommodation services.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative flex flex-col justify-center items-center  bg-[#EEF8FF]  xl:h-[648px] w-full h-auto overflow-hidden">
          <div className="static w-[95%] flex flex-col justify-center items-start gap-[48px] 2xl:w-[1280px] px-[15px] py-[30px] at500:px-[40px] md:pl-[80px] md:pr-[40px] my-0 mx-auto">
            <h3 className="text-[#05284C]">Company snapshot</h3>
            <div className="flex flex-col xl:flex-row justify-start items-start w-full gap-[20px] xl:gap-[10px]">
              <div className="flex flex-col at500:flex-row justify-center items-start w-full gap-[20px] xl:gap-[10px]">
                <div className="bg-[#D4E8F6] flex flex-col justify-start items-start text-left rounded-[20px] gap-[20px] at500:gap-[50px] h-auto md:h-[395px] w-full p-[30px]">
                  <img
                    className=" w-[56px] h-auto object-contain"
                    src={icon1}
                    alt=""
                  />
                  <span className="txt5 !leading-[26px] text-[#506982]">
                    Founded in Nigeria in June, 2006. Finchglow Travels has
                    grown from a one-man start-up agency to a regional leader in
                    the travel industry and Nigeria’s foremost indigenous travel
                    consolidator.
                  </span>
                </div>

                <div className="bg-[#052444] flex flex-col justify-start items-start text-left rounded-[20px] gap-[20px] at500:gap-[50px] h-auto md:h-[395px] w-full p-[30px]">
                  <img
                    className=" w-[56px] h-auto object-contain"
                    src={icon2}
                    alt=""
                  />
                  <span className="txt5 !leading-[26px] text-[#FFFFFF]">
                    Proud members of foremost travel associations - NANTA
                    (National Association of Nigeria Travel Agency), IATA
                    (International Air Transport Association), and ACTE
                    (Association of CorPorate Travel Executives).
                  </span>
                </div>
              </div>

              <div className="flex flex-col at500:flex-row justify-center items-start gap-[20px] w-full xl:gap-[10px]">
                <div className="bg-[#B3CFFA] flex flex-col justify-start items-start text-left rounded-[20px] gap-[20px] at500:gap-[50px] h-auto md:h-[395px] w-full p-[30px]">
                  <img
                    className=" w-[56px] h-auto object-contain"
                    src={icon3}
                    alt=""
                  />
                  <span className="txt5 !leading-[26px] text-[#506982]">
                    Owned operations across four Nigerian regions (West, North,
                    North Central, and South), with a regional network spanning
                    nine offices and hundreds of travel partners.
                  </span>
                </div>

                <div className="bg-[#0260EE] flex flex-col justify-start items-start text-left rounded-[20px] gap-[20px] at500:gap-[50px] h-auto md:h-[395px] w-full p-[30px]">
                  <img
                    className=" w-[56px] h-auto object-contain"
                    src={icon4}
                    alt=""
                  />

                  <span className="txt5 !leading-[26px] text-[#FFFFFF]">
                    Commitment to Sustainability and CSR.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* award background */}
        <section
          className="relative flex flex-col justify-center items-center bg-[#03182E] bg-blend-soft-light bg-no-repeat bg-cover bg-center md:h-[383px] w-full h-auto overflow-hidden"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="static w-full flex flex-col justify-center items-center gap-[48px] 2xl:w-[1280px] px-[15px] py-[70px] at500:px-[40px] md:px-[80px] my-0 mx-auto">
            <div className=" relative z-[5] flex flex-col md:flex-row justify-between items-center gap-[30px]">
              <img src={icon5} alt="award" />
              <div className="p-[40px] blueColor ">
                <h2 className="text-[30px] md:text-[46px] md:leading-[44px] text-[#B3CFFA] lg:w-[633px] text-center md:text-left">
                  Award-winning travel consolidator
                  <strong className=" !font-[400] ">
                    helping businesses grow
                  </strong>
                </h2>
              </div>
            </div>
          </div>
        </section>
        {/* award text */}
        <section
          className="relative flex flex-col justify-center items-center bg-no-repeat bg-cover bg-center md:h-[540px] w-full h-auto overflow-hidden"
          style={{ backgroundImage: `url(${background3})` }}
        >
          <div className="static w-full flex flex-col justify-center items-start gap-[48px] 2xl:w-[1280px] px-[15px] py-[30px] at500:px-[40px] md:px-[80px] my-0 mx-auto">
            <div className=" relative w-full flex justify-center items-center text-left">
              <ul className="flex flex-col gap-[15px] justify-center items-start w-[80%] list-disc text-[#697E94] text-[20px] text-left">
                <li>
                  <span className="txt4 !text-[20px] leading-[30px] text-[#697E94]">
                    Delta Airlines Award for Excellence - 2023.
                  </span>
                </li>
                <li>
                  <span className="txt4 !text-[20px] leading-[30px] text-[#697E94]">
                    2023 British Airways Top Agent.
                  </span>
                </li>
                <li>
                  <span className="txt4 !text-[20px] leading-[30px] text-[#697E94]">
                    Delta Airlines 15 years award for Excellence Platinum agent
                    - 2022.
                  </span>
                </li>
                <li>
                  <span className="txt4 !text-[20px] leading-[30px] text-[#697E94]">
                    Rwandair award for support and outstanding performance -
                    2022.
                  </span>
                </li>
                <li>
                  <span className="txt4 !text-[20px] leading-[30px] text-[#697E94]">
                    Africa World Airlines award for 4th highest selling travel
                    agent - 2022.
                  </span>
                </li>
                <li>
                  <span className="txt4 !text-[20px] leading-[30px] text-[#697E94]">
                    Royal Air Maroc appreciation & special recognition - 2022.
                  </span>
                </li>
                <li>
                  <span className="txt4 !text-[20px] leading-[30px] text-[#697E94]">
                    2019 British Airways Top Agent.
                  </span>
                </li>
                <li>
                  <span className="txt4 !text-[20px] leading-[30px] text-[#697E94]">
                    Virgin Atlantic Platinum Achievement Award in recognition of
                    outstanding performance - 2018.
                  </span>
                </li>
                <li>
                  <span className="txt4 !text-[20px] leading-[30px] text-[#697E94]">
                    Delta Diamond Award for outstanding sales performance from
                    January - March 2017.
                  </span>
                </li>
                <li>
                  <span className="txt4 !text-[20px] leading-[30px] text-[#697E94]">
                    Air France KLM Swaga competition award for 3rd highest
                    revenue growth in 2013 IATA year.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* Mission and vision */}
        <section className="relative flex flex-col justify-center items-center  bigcolour2  w-full h-auto overflow-hidden">
          <div
            className="relative flex flex-col justify-center items-center  bg-fixed   bg-no-repeat bg-cover bg-center md:h-[425px] w-full h-auto overflow-hidden"
            style={{ backgroundImage: `url(${background2})` }}
          ></div>
          <div className="static w-[95%] flex flex-col justify-center items-center 2xl:w-[1280px] px-[15px] py-[70px] at500:px-[80px] my-0 mx-auto">
            <div className="flex flex-col lg:flex-row justify-between gap-[20px] items-start w-full silver:w-[977px]">
              <div className="relative flex flex-col justify-start items-center gap-[6px] w-full h-auto text-left">
                <div className="relative flex flex-col justify-center items-center gap-[17px] w-full h-auto text-left silver:w-[308px]">
                  <span
                    data-aos="fade-up"
                    className="txt2 text-[#3580F1] text-left w-full"
                  >
                    Mission
                  </span>
                  <h2 data-aos="fade-up" className="text-[#05284C] w-full ">
                    To redefine standards by rendering exceptional service
                    delivery through highly effective people, innovation, and
                    technology.
                  </h2>
                </div>
              </div>

              <div className="relative flex flex-col justify-center items-center gap-[40px] w-full h-auto text-left mb-[30px]">
                <div className="relative flex flex-col justify-center items-center gap-[17px] w-full h-auto text-left silver:w-[308px] ">
                  <span
                    data-aos="fade-up"
                    className="txt2 text-[#3580F1] text-left w-full"
                  >
                    Vision
                  </span>
                  <h2 data-aos="fade-up" className="text-[#05284C] w-full ">
                    To lead the evolution of travel consolidation, pioneering
                    advanced solutions that redefine convenience, efficiency,
                    and excellence in travel.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Our Values */}
        <section
          className="relative flex flex-col justify-center items-center bg-[#03182E] bg-blend-soft-light bg-no-repeat bg-cover bg-center md:h-[482px] w-full h-auto overflow-hidden"
          style={{ backgroundImage: `url(${background4})` }}
        >
          <div className="static w-full flex flex-col justify-center items-center gap-[48px] 2xl:w-[1280px] px-[15px] py-[70px] at500:px-[40px] md:px-[80px] my-0 mx-auto">
            <div className=" relative  flex flex-col md:flex-row justify-between items-center gap-[30px]">
              <div className=" flex gap-[17px] flex-col justify-center items-start w-full lg:w-[502px]">
                <span
                  data-aos="fade-up"
                  className="txt4 leading-[24px] text-[#67A0F5]"
                >
                  Our Values
                </span>
                <h3 data-aos="fade-up" className="text-[#FFFFFF]">
                  With Finchglow Travels, professionalism is a promise and a
                  guarantee.
                </h3>
                <span
                  data-aos="fade-up"
                  className="txt5 !leading-[26px] text-[#CDD4DB] lg:w-[468px]"
                >
                  Our team of travel experts is dedicated to providing
                  unparalleled service, backed by years of industry experience
                  and a commitment to excellence.
                </span>
              </div>

              <div className="flex gap-[40px] flex-col justify-center items-start w-full ">
                <span
                  data-aos="fade-up"
                  className="flex gap-[20px] justify-start items-start w-full"
                >
                  <img
                    src={icon6}
                    className="w-[28px] h-auto object-contain"
                    alt=""
                  />
                  <h2
                    data-aos="fade-up"
                    className="text-[20px] leading-[25px] text-[#CDD4DB]"
                  >
                    Professionalism in Service
                  </h2>
                </span>

                <span
                  data-aos="fade-up"
                  className="flex gap-[20px] justify-start items-start w-full"
                >
                  <img
                    src={icon6}
                    className="w-[28px] h-auto object-contain"
                    alt=""
                  />
                  <h2 className="text-[20px] leading-[25px] text-[#CDD4DB]">
                    Integrity in Relationships
                  </h2>
                </span>

                <span
                  data-aos="fade-up"
                  className="flex gap-[20px] justify-start items-start w-full"
                >
                  <img
                    src={icon6}
                    className="w-[28px] h-auto object-contain"
                    alt=""
                  />
                  <h2 className="text-[20px] leading-[25px] text-[#CDD4DB]">
                    Excellence in Delivery
                  </h2>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="relative flex flex-col justify-center items-center bg-[#E6EAED] md:h-[384px] w-full h-auto overflow-hidden">
          <div className="static w-full flex flex-col justify-center items-center  2xl:w-[1280px] px-[15px] py-[50px]  at500:px-[55px]  my-0 mx-auto overflow-hidden">
            <TestimonialSlider />
          </div>
        </section>
        <section className="flex justify-center items-center w-full ">
          {talk.filter((talk) => talk.id === 1).map(createTalkToUs)}
        </section>
        <Footer />
      </div>
    </>
  );
}

export default OurStory;
