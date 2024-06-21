import React from "react";
import FadeLink from "./contents/fadeLink";
import Title from "./contents/title";
import contents from "./props/contents";
import Nav from "./navigation/nav";
import Footer from "./contents/footer";
import RoundText from "./contents/roundText";
import { FaArrowRight } from "react-icons/fa";
import round from "./props/round";
import image1 from "./contents/images/service/tickets.jpeg";
import icons1 from "./contents/images/service/icon/Group 78.png";
import image2 from "./contents/images/service/hello.jpeg";
import icons2 from "./contents/images/service/icon/Vector 3.png";
import image3 from "./contents/images/service/traveller.jpeg";
import icons3 from "./contents/images/service/icon/Group 78.png";
import image4 from "./contents/images/service/business meeting.jpeg";
import icons4 from "./contents/images/service/icon/Group 78.png";

function createRoundText(content) {
  return (
    <RoundText
      key={content.id}
      title={content.title}
      subTitle={content.subTitle}
      description1={content.description1}
      description4={content.description4}
      imgURL={content.imgURL}
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

function Service() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Nav />
      <div className="flex justify-center items-center w-full my-[70px]">
        {contents.filter((content) => content.id === 1).map(createTitle)}
      </div>
      <section className="flex justify-center items-center w-full ">
        {round.filter((content) => content.id === 3).map(createRoundText)}
      </section>

      {/* Affiliate Programs */}
      <section className="relative bg-[#EEF5FF] flex flex-col justify-center items-center w-full h-auto lg:h-[667px] overflow-hidden z-[222] lg:overflow-visible">
        <div className="static w-full flex flex-col justify-center items-center  2xl:w-[1280px] px-[15px] py-[55px] lg:py-[200px]  at500:px-[64px] md:pr-[64px] md:pl-[94px] my-0 mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center  w-full h-auto ">
            <div className="relative lg:bottom-[-78px] flex justify-start items-start w-full h-auto mb-[30px] lg:mb-0 ">
              <img
                src={image1}
                className=" bg-gray-500 w-full h-[300px] lg:w-[559px] lg:h-[656px] object-cover"
                alt=""
              />
            </div>

            <div className="relative flex flex-col justify-center items-center w-full h-auto text-left ">
              <div className="relative flex flex-col justify-center items-start gap-[17px] w-full lg:w-[446px] h-auto text-left ">
                <span
                  data-aos="fade-up"
                  className="relative w-full h-auto mb-[10px]"
                >
                  <img
                    src={icons1}
                    className="h-[64px] w-[64px] object-cover"
                    alt=""
                  />
                </span>
                <div className="flex flex-col justify-center items-start gap-[16px] text-left w-full silver:w-[446px]">
                  <h3 data-aos="fade-up" className="text-[#05284C]">
                    Affiliate Programs
                  </h3>
                  <span
                    data-aos="fade-up"
                    className="txt2 text-[#667085] text-left w-full silver:w-[358px]"
                  >
                    Unlock Your Revenue Potential: Join Our Affiliate Program,
                    Trade PartnerPlus, Today!
                  </span>
                </div>
                <span
                  data-aos="fade-up"
                  className="txt2 text-[#667085] text-left w-full silver:w-[446px]"
                >
                  Are you a travel agency looking to increase revenue and offer
                  your clients unbeatable deals? Look no further! Join our
                  esteemed affiliate program, Trade Partner Plus, and say hello
                  to a tomorrow of limitless possibilities.
                </span>
                <FadeLink to="/affiliate">
                  <span data-aos="fade-up" className="arrow !text-[#0260EE]">
                    Why Partner With Us
                    <FaArrowRight />
                  </span>
                </FadeLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Travel */}
      <section className="relative bg-custom-gradient flex flex-col justify-center items-center w-full h-auto lg:h-[692px] overflow-hidden z-[22] lg:overflow-visible">
        <div className="static w-full flex flex-col justify-center items-center  2xl:w-[1280px] px-[15px] py-[55px] lg:pt-[300px] lg:pb-[200px]  at500:px-[64px] md:pr-[64px] md:pl-[94px] my-0 mx-auto">
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center  w-full h-auto ">
            <div className="relative flex flex-col justify-center items-start gap-[17px] w-full h-auto text-left ">
              <div
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-anchor-placement="top-bottom"
                className="relative w-full h-auto mb-[10px]"
              >
                <span className="relative h-[64px] w-[64px] flex justify-center items-center rounded-[50%] bg-[#FAC2C3]">
                  <img
                    src={icons2}
                    className=" absolute h-[20px] w-[20px] object-cover"
                    alt=""
                  />
                </span>
              </div>
              <div className="flex flex-col justify-center items-start gap-[16px] text-left w-full silver:w-[446px]">
                <h3
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  data-aos-anchor-placement="top-bottom"
                  className="text-[#05284C]"
                >
                  Corporate Travel Management
                </h3>
                <span
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  data-aos-anchor-placement="top-bottom"
                  className="txt2 text-[#667085] text-left w-full silver:w-[318px]"
                >
                  Transform Your Corporate Travel Experience with Us!
                </span>
              </div>
              <span
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-anchor-placement="top-bottom"
                className="txt2 text-[#667085] text-left w-full silver:w-[422px]"
              >
                Every decision matters in today's fast-paced business landscape,
                especially managing your company's travel needs. That's where we
                come in – your dedicated travel partner committed to
                transforming how your team travels.
              </span>
              <FadeLink to="/corPorate">
                <span data-aos="fade-up" className="arrow !text-[#0260EE]">
                  Why Choose Us
                  <FaArrowRight />
                </span>
              </FadeLink>
            </div>

            <div className="relative lg:bottom-[-85px] flex justify-end items-end w-full h-auto mb-[30px] lg:mb-0">
              <img
                src={image2}
                className="w-full h-auto lg:w-[457px] lg:h-[589px] object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customised Travel Packages */}
      <section className="relative bg-[#FFFFFF] flex flex-col justify-center items-center w-full overflow-hidden">
        <div className="static w-full flex flex-col justify-center items-center  2xl:w-[1280px] px-[15px] at500:px-[64px] py-[55px] lg:pt-[200px] lg:pb-0 md:pl-[94px] md:pr-[64px] lg:pl-0 my-0 mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center  w-full">
            <div className="relative w-full h-auto mb-[30px] lg:mb-0">
              <img
                src={image3}
                className="bg-gray-500 w-full h-auto lg:w-[623px] lg:h-[656px] object-cover"
                alt=""
              />
            </div>

            <div className="relative flex flex-col justify-center items-center gap-[17px] w-full h-auto text-left ">
              <div className="relative flex flex-col justify-center items-start gap-[17px] w-full lg:w-[446px] h-auto text-left">
                <span
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  data-aos-anchor-placement="top-bottom"
                  className="relative w-full h-auto mb-[10px]"
                >
                  <img
                    src={icons3}
                    className="h-[64px] w-[64px] object-cover"
                    alt=""
                  />
                </span>
                <div className="flex flex-col justify-center items-start gap-[16px] text-left w-full silver:w-[446px]">
                  <h3
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    data-aos-anchor-placement="top-bottom"
                    className="text-[#05284C]"
                  >
                    Customised Travel Packages
                  </h3>
                  <span
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    data-aos-anchor-placement="top-bottom"
                    className="txt2 text-[#667085] text-left w-full silver:w-[318px]"
                  >
                    Fulfil Your Travel Dreams with our Premier Travel Services
                  </span>
                </div>
                <span
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  data-aos-anchor-placement="top-bottom"
                  className="txt2 text-[#667085] text-left w-full silver:w-[422px]"
                >
                  It's time to enter a world of remarkable travel experiences
                  and seamless journeys. At Finchglow Travels, we've crafted
                  several possibilities that cater to your individual or group
                  needs, whether leisurely getaways or strategic business
                  ventures.
                </span>
                <FadeLink to="/travelPackages">
                  <span data-aos="fade-up" className="arrow !text-[#0260EE]">
                    Why Choose Us
                    <FaArrowRight />
                  </span>
                </FadeLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ancillary Services */}
      <section className="relative bg-[#EEF5FF] flex flex-col justify-center items-center w-full h-auto lg:h-[691px] overflow-hidden z-[22] lg:overflow-visible">
        <div className="static w-full flex flex-col justify-center items-center  2xl:w-[1280px] px-[15px] py-[55px] lg:pb-[70px] at500:px-[64px] md:pr-[64px] md:pl-[94px] my-0 mx-auto">
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center  w-full h-auto my-[50] lg:mt-0 lg:mb-[100px]">
            <div className="relative flex flex-col justify-center items-start gap-[17px] w-full h-auto text-left ">
              <span
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-anchor-placement="top-bottom"
                className="relative silver:w-[446px] h-auto mb-[10px]"
              >
                <img
                  src={icons4}
                  className="h-[64px] w-[64px] object-cover"
                  alt=""
                />
              </span>
              <div className="flex flex-col justify-center items-start gap-[16px] text-left w-full silver:w-[446px]">
                <h3
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  data-aos-anchor-placement="top-bottom"
                  className="text-[#05284C]"
                >
                  Ancillary Services
                </h3>
                <span
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  data-aos-anchor-placement="top-bottom"
                  className="txt2 text-[#667085] text-left w-full "
                >
                  Enrich Your Travels with Our Comprehensive Ancillary Services!
                </span>
              </div>
              <span
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-anchor-placement="top-bottom"
                className="txt2 text-[#667085] text-left w-full silver:w-[422px]"
              >
                Travelling shouldn’t feel like a chore, just one more thing to
                cross off your to-do list. It is an experience, and we’re here
                to make every aspect of that experience satisfying and
                unforgettable. Introducing our premium range of ancillary
                services – the perfect companions to enrich your travel
                experience like never before.
              </span>
              <FadeLink to="/ancillary">
                <span data-aos="fade-up" className="arrow !text-[#0260EE]">
                  Why Choose Our Ancillary Services
                  <FaArrowRight />
                </span>
              </FadeLink>
            </div>

            <div className="relative flex justify-end items-end w-full h-auto mb-[30px] lg:mb-0">
              <img
                src={image4}
                className=" bg-gray-500 w-full h-auto lg:w-[538px] lg:h-[689px] object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visa and Immigration Services */}
      <section className="relative bg-custom-gradient  flex flex-col justify-center items-center w-full h-auto  overflow-hidden ">
        <div className="static w-full flex flex-col justify-center items-center  2xl:w-[1280px] px-[15px] py-[70px]  at500:px-[64px] md:pr-[64px] md:pl-[94px] my-0 mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center  w-full h-auto ">
            <div className="relative  flex justify-start items-start w-full h-auto mb-[30px] lg:mb-0 ">
              <img
                src={image1}
                className=" bg-gray-500 w-full h-[300px] lg:w-[559px] lg:h-[656px] object-cover"
                alt=""
              />
            </div>

            <div className="relative flex flex-col justify-center items-center w-full h-auto text-left ">
              <div className="relative flex flex-col justify-center items-start gap-[17px] w-full lg:w-[446px] h-auto text-left ">
                <span
                  data-aos="fade-up"
                  className="relative w-full h-auto mb-[10px]"
                >
                  <img
                    src={icons1}
                    className="h-[64px] w-[64px] object-cover"
                    alt=""
                  />
                </span>
                <div className="flex flex-col justify-center items-start gap-[16px] text-left w-full silver:w-[446px]">
                  <h3 data-aos="fade-up" className="text-[#05284C]">
                    Visa and Immigration Services
                  </h3>
                  <span
                    data-aos="fade-up"
                    className="txt2 text-[#667085] text-left w-full silver:w-[358px]"
                  >
                    Simplify your Visa Experience with Finchglow Travels as your
                    Visa and Immigration Partner
                  </span>
                </div>
                <span
                  data-aos="fade-up"
                  className="txt2 text-[#667085] text-left w-full silver:w-[446px]"
                >
                  Visa and immigration processes can be daunting, but Finchglow
                  Travels' expert consultants are here to help. We specialise in
                  visa applications, ensuring all requirements and documents are
                  correctly handled. Whether moving abroad or travelling for
                  work or leisure, we provide personalised assistance for a
                  smooth journey.
                </span>
                <FadeLink to="/OurVisa">
                  <span data-aos="fade-up" className="arrow !text-[#0260EE]">
                    Why Choose Our Visa and Immigration Services?
                    <FaArrowRight />
                  </span>
                </FadeLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Service;
