import React from "react";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Nav from "../navigation/nav"; // Correct import statement
import Title from "../contents/title"; // Correct import statement
import contents from "../props/contents"; // Ensure this is the correct path
import TalkToUs from "../contents/talkToUs";
import talk from "../props/talk";
import Footer from "../contents/footer";
import WhyChooseUs from "../contents/whyChoodeUs";
import cards from "../props/cards";
import TicketingSupport from "../contents/ticketingSupport";
import ticketing from "../props/ticketing";
import ExperienceTheDifference from "../contents/experience";
import experience from "../props/exp";
import background from "../contents/image/blue-background - Copy.webp";
import OverlayForm from "../form/overlayForm";




// go to props to input contents for the ones u can't input here

function createWhyChooseUs(card) {
  return (
    <WhyChooseUs
      key={card.id}
      imgURL={card.imgURL}
      title={card.title}
      subTitle1={card.subTitle1}
      details1={card.details1}
      subTitle2={card.subTitle2}
      details2={card.details2}
      subTitle3={card.subTitle3}
      details3={card.details3}
      subTitle4={card.subTitle4}
      details4={card.details4}
      subTitle5={card.subTitle5}
      details5={card.details5}
    />
  );
}

function createTicketingSupport(ticketing) {
  return (
    <TicketingSupport
      key={ticketing.id}
      imgURL={ticketing.imgURL}
      title={ticketing.title}
      subTitle1={ticketing.subTitle1}
      details1={ticketing.details1}
      subTitle2={ticketing.subTitle2}
      details2={ticketing.details2}
      subTitle3={ticketing.subTitle3}
      details3={ticketing.details3}
      subTitle4={ticketing.subTitle4}
      details4={ticketing.details4}
      imgURL1={ticketing.imgURL1}
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

function createeExperience(experience) {
  return (
    <ExperienceTheDifference
      key={experience.id}
      subTitle={experience.subTitle}
      details={experience.details}
    />
  );
}

function createTalkToUs(talk) {
  return (
    <TalkToUs
      key={talk.id}
      title={talk.title}
      details={talk.details}
      buttz={talk.buttz}
    />
  );
}

function AffiliatePrograms() {
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
          {contents.filter((content) => content.id === 8).map(createTitle)}
        </section>

        <section className="relative homeBg flex flex-col justify-center items-center w-full h-auto overflow-hidden z-[3] lg:overflow-visible">
          <div className="static w-full gap-[48px] flex flex-col justify-center items-start 2xl:w-[1280px] px-[15px] py-[90px] at500:px-[64px] md:pr-[64px] md:pl-[94px] my-0 mx-auto">
            <h3 className="text-[#05284C] text-left silver:w-[652px]">
              Join The Trade PartnerPlus Program, Become A Trade Partner
            </h3>
            <div className="flex flex-col md:flex-row justify-between gap-[30px] items-start w-full">
              <span className="txt2 !leading-[26px] w-full silver:w-[250.5px] text-[#506982]">
                With a dedicated platform to make your travel business
                activities seamless, regular webinars and industry-focused
                trainings, great commissions and more, the Trade PartnerPlus
                program is a brilliant opportunity to take your agency to new
                heights.
              </span>
              <span className="txt2 !leading-[26px] w-full silver:w-[396px] text-[#506982]">
                As a Trade Partner, you'll enjoy exclusive benefits, including
                access to our extensive network of suppliers, marketing support,
                and training resources. You'll access ticket issuance on GDS
                platforms wherever you are and hardware and software assistance
                from our world-class global support centre. Other benefits
                include unbelievable discounts on select products, deals, and
                packages, access to travel marketing resources, tips & tools,
                and training through our PartnerPlus Connect webinars, as well
                as receiving newsletters with definitive flight information,
                aviation intelligence, and analytics.
              </span>
              <span className="txt2 !leading-[26px] w-full silver:w-[250.5px] text-[#506982]">
                Whether you are a new agent or a seasoned pro, PartnerPlus
                provides the tools and support you need to succeed. Join over
                4,000 other travel agents and businesses and let Finchglow
                Travels be your partner in success.
              </span>
            </div>
          </div>
        </section>

        {/* TicketingSupport */}
        <section className="flex justify-center items-center w-full">
          {ticketing
            .filter((ticketing) => ticketing.id === 3)
            .map(createTicketingSupport)}
        </section>

        {/* WhyChooseUs */}
        <section className="flex justify-center items-center w-full">
          {cards.filter((cards) => cards.id === 3).map(createWhyChooseUs)}
        </section>

        <section className="relative bg-[#EEF5FF] flex flex-col justify-center items-center w-full h-auto overflow-hidden z-[3] lg:overflow-visible">
          <div className="static w-full flex flex-col justify-center items-center 2xl:w-[1280px] px-[15px] py-[55px] at500:px-[64px] md:pr-[64px] md:pl-[94px] my-0 mx-auto">
            {experience
              .filter((experience) => experience.id === 3)
              .map(createeExperience)}
          </div>
        </section>

        {/* We do this by hosting */}
        <section
          className="relative flex flex-col justify-center items-center  bg-[#03182E]  bg-blend-soft-light bg-no-repeat bg-cover bg-center md:h-[381px] w-full h-auto overflow-hidden"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="static w-full flex flex-col justify-center items-center 2xl:w-[1280px] px-[15px] py-[30px] at500:px-[80px] my-0 mx-auto">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-[70px] w-full">
              <h6
                data-aos="fade-up"
                className="!font-semibold text-[#FFFFFF] text-center lg:w-[850px]"
              >
                We do this by hosting an industry-focused monthly webinar,
                PartnerPlus Connect, where some of our top executives share
                industry insights, break down industry trends as they pertain to
                blooming agencies, and share tips and trade secrets to help
                aspiring or blossoming agents or agencies grow and scale their
                businesses effectively.
              </h6>
            </div>
          </div>
        </section>

        <section className="flex justify-center items-center w-full">
          {talk.filter((talk) => talk.id === 2).map(createTalkToUs)}
        </section>
        <Footer />
      </div>
    </>
  );
}

export default AffiliatePrograms;
