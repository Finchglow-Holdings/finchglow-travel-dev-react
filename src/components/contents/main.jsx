// import React, { useState } from "react";
import { useEffect } from 'react';
import RoundText from "./roundText";
import contents from '../props/round'; 
import Cards from "../slider/cards";
import AchievementsSection from './sections/achievement';
import SectionWhereWeAre from './sections/where-we-are';
import BlogSlide from '../slider/blog_cards';
import FAQ from './sections/FAQ';
import OurPartners from '../testimonial/partners';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TestimonialSlider from '../testimonial/testimonial';
import background from './images/blue-background.png';

function createRoundText(content) {
  return (
    <RoundText
      key={content.id}
      title={content.title}
      subTitle={content.subTitle}
      description1={content.description1}
      description2={content.description2}
      buttonText={content.buttonText}
      imgURL={content.imgURL}
    />
  );
}


function Main() {
 
  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);
 
  return (
    <div className="relative flex flex-col justify-center items-center w-full ">
      
      <section className="flex justify-center items-center w-full ">
        {contents.filter(content => content.id === 1).map(createRoundText)}
      </section>

      <section className="relative bg-[#EEF5FF] flex justify-center flex-col items-center w-full h-auto">
        <div className="static w-full flex flex-col justify-center items-center  2xl:w-[1280px] px-[15px] py-[70px]  at500:px-[40px] md:pl-[80px] md:pr-0 my-0 mx-auto overflow-hidden">
          <div className="relative flex flex-col justify-center items-start w-full text-left lg:mb-[30px]">
            <span data-aos="fade-up"  className="txt2 text-[#0260EE] gap-y-[17px]">
                What we do
            </span>
            <h3 data-aos="fade-up"  className="text-[#101828] lg:w-[689px]">
                We are the leading travel Consolidator in Nigeria’s travel industry.
            </h3>
          </div>
          <Cards/>
        </div>
      </section>

      <AchievementsSection/>
      <SectionWhereWeAre />

      <section className="relative bg-[#EEF5FF] flex justify-center flex-col items-center w-full h-auto">
        <div className="static w-full flex flex-col justify-center items-center  2xl:w-[1280px] px-[15px] py-[70px]  at500:px-[40px] md:pl-[80px] md:pr-0  my-0 mx-auto overflow-hidden">
          <div className="relative flex flex-col justify-center items-start w-full text-left lg:mb-[30px]">
            <span data-aos="fade-up"  className="txt2 text-[#0260EE] gap-y-[17px]">
                What we do
            </span>
            <h3 data-aos="fade-up"  className="text-[#101828] lg:w-[689px]">
                We are the leading travel Consolidator in Nigeria’s travel industry.
            </h3>
          </div>
          <BlogSlide/>
        </div>
      </section>

      <section className="relative flex flex-col justify-center items-center bg-[#03182E] bg-blend-soft-light bg-no-repeat bg-cover bg-center md:h-[384px] w-full h-auto overflow-hidden"
        style={{ backgroundImage: `url(${background})` }}>
        <div className="static w-full flex flex-col justify-center items-center  2xl:w-[1280px] px-[15px] py-[50px]  at500:px-[55px]  my-0 mx-auto overflow-hidden">
          
          <TestimonialSlider/>
        </div>
      </section>
      <FAQ/>
   
          
      <OurPartners/>
       
      
    
    </div>
  );
}

export default Main;
