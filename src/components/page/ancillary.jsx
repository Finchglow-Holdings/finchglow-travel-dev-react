import React from 'react';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Nav from '../navigation/nav'; // Correct import statement
import Title from '../contents/title'; // Correct import statement
import contents from '../props/contents'; // Ensure this is the correct path
import TalkToUs from '../contents/talkToUs';
import talk from '../props/talk';
import Footer from '../contents/footer'
import WhyChooseUs from '../contents/whyChoodeUs';
import cards from '../props/cards';
import ExperienceTheDifference from '../contents/experience';
import experience from '../props/exp';
import ExploreOurServices from '../contents/sections/explore';
import OverlayForm from "../form/overlayForm";
import PageTitle from "../pageTitle/pageTitle";


// go to props to input contents for the ones u can't input here
// also check for utilites 




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
      subTitle6={card.subTitle6}
      details6={card.details6}
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
      links={talk.links}
      pageLink={talk.pageLink}
     
    />
  );
}









function AncillaryServices() {
   const [isOpen, setIsOpen] = useState(false);
   const openOverlay = () => setIsOpen(true);
  const closeOverlay = () => setIsOpen(false);
  

   useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  return (
    <>
      <PageTitle title=" Ancillary Services | Finchglow Travels " />
      <div className="flex flex-col justify-center items-center w-full">
        <Nav openOverlay={openOverlay} />
        <OverlayForm isOpen={isOpen} closeOverlay={closeOverlay} />
        <section className="flex justify-center items-center w-full mt-[70px]">
          {contents.filter((content) => content.id === 9).map(createTitle)}
        </section>

        {/* WhyChooseUs */}
        <section className="flex justify-center items-center w-full ">
          {cards.filter((cards) => cards.id === 4).map(createWhyChooseUs)}
        </section>

        {/* Explore Our Range of Services */}
        <ExploreOurServices />

        <section className="relative bg-[#F9FAFB] flex flex-col justify-center items-center w-full h-auto overflow-hidden z-[3] lg:overflow-visible">
          <div className="static w-full flex flex-col justify-center items-center 2xl:w-[1280px] px-[15px] py-[55px] at500:px-[64px] md:pr-[64px] md:pl-[94px] my-0 mx-auto">
            {experience
              .filter((experience) => experience.id === 4)
              .map(createeExperience)}
          </div>
        </section>

        <section className="flex justify-center items-center w-full">
          {talk.filter((talk) => talk.id === 5).map(createTalkToUs)}
        </section>
        <Footer />
      </div>
    </>
  );
}

export default AncillaryServices;
