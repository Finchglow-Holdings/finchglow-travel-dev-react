import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Nav from './navigation/nav';
import Title from './contents/title'; // Correct import statement
import contents from './props/contents'; // Ensure this is the correct path
import Footer from './contents/footer';
import Location from './props/location';
import OurLocations from './contents/ourLocations';

import background from './contents/images/blue-background - Copy.png';
import GetInToch from './form/ContactForm';
import MapEmbed from './contents/sections/MapEmbed';




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

function createLocation(location) {
  return (
    <OurLocations
      key={location.id}
      office={location.office}
      address={location.address}
      line1={location.line1}
      line2={location.line2}
      link={location.link}
      view={location.view}
    />
  );
}




function ContactUs() {

    useEffect(() => {
        AOS.init({ duration: 3000, once: true });
    }, []);




    return (
      <div>
        <Nav />
        <section className="flex justify-center items-center w-full mt-[70px]">
          {contents.filter(content => content.id === 4).map(createTitle)}
        </section>
        <MapEmbed/>

        <GetInToch/>

        <section className="relative flex flex-col justify-center items-center  bg-[#03182E]  bg-blend-soft-light bg-no-repeat bg-cover bg-center md:h-[321px] w-full h-auto overflow-hidden"
          style={{ backgroundImage: `url(${background})` }}>
        
          <div className="static w-full flex flex-col justify-center items-center 2xl:w-[1280px] px-[15px] py-[30px] at500:px-[80px] my-0 mx-auto">
            <div className="flex flex-col lg:flex-row justify-between gap-[70px] items-start w-full">
              <div className="relative flex flex-col justify-center items-center gap-[45px] w-full h-auto text-left">
                
                <span data-aos="fade-up" className="txt8 text-[#B3CFFA] silver:w-[640px]">
                  Our team of experienced travel experts is dedicated to identifying opportunities to
                  optimise your travel needs, reduce costs, enhance efficiencies, ensure policy compliance, and maximise technology adoption.
                </span>
              </div>

              <div className="relative flex flex-col justify-center items-start gap-[40px] w-full h-auto text-left mb-[30px]">
                <div className="relative flex flex-col justify-center items-start  w-full h-auto text-left">
                  <span data-aos="fade-up" className="txt2 text-[#B3CFFA] lg:w-[333px]">
                    Contact Finchglow Travels today to streamline your travel operations and
                    unlock new possibilities for your travel goals.
                  </span>
                </div>
              </div>
            </div>
          </div>

        </section>

        <section className='relative flex flex-col justify-center items-center  bg-[#FFFFFF]   w-full h-auto overflow-hidden'>
          <div className='static w-full flex flex-col justify-center items-center 2xl:w-[1280px] px-[15px] py-[70px] at500:px-[80px] my-0 mx-auto'>
            <div className='flex flex-col justify-center items-center w-full gap-[10px] text-center'>
              <h3 data-aos="fade-up" className=' text-[#05284C] lg:w-[613px]'>
                Looking for a regional travel solution in Nigeria?
              </h3>
              <span data-aos="fade-up" className='txt2 text-[#506982] lg:w-[747px]'>
                Finchglow Travels is committed to meeting you at every point of your travel needs. Over the past 18 years, we have expanded
                to four Nigerian regions and developed a strong presence with nine offices across Nigeria in Lagos, Kano, Port Harcourt, and Abuja.
              </span>
            </div>
          </div>
        </section>

        <section className='relative flex flex-col justify-center items-center  bg-[#F3F8FF]   w-full h-auto overflow-hidden'>
          <div className='static w-full flex flex-col justify-center items-center 2xl:w-[1280px] px-[15px] py-[70px] at500:px-[80px] my-0 mx-auto'>
            <div className="grid  items-start grid-cols-1 md:grid-cols-2 silver:grid-cols-3 gap-x-9 gap-y-9 w-full">
              {Location.map(createLocation)}
            </div>
          </div>
        </section>
        
        
        <Footer/>
      </div>
    );
}

export default ContactUs;
