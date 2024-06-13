import React from 'react';
import { useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";
import Button from './Button';
import AOS from 'aos';
import 'aos/dist/aos.css';

function   TalkToUs() {

    useEffect(() => {
        AOS.init({ duration: 3000, once: true });
      }, []);

  return (
    <section className="bg-[#05284C]  relative  flex flex-col justify-center items-center w-full h-auto ">
        <div className="static  w-full flex flex-col justify-center items-center 2xl:w-[1280px]  pt-[70px] mb-[60px] px-[15px] at500:px-[64px] my-0 mx-auto">
          
          {/* <!-- start growing your business --> */}
            <div className="flex flex-col justify-center items-center text-center w-full">
                <h2 data-aos="fade-up" className="text-[#FFFFFF] mb-[20px] text-[38px] sm:text-[48px] leading-[60px] sm:leading-[72px] tracking-[-2%]">Want to speak with us about our services?</h2>
                <div className="relative w-full flex flex-col justify-center items-center ">
                    <p data-aos="fade-up" className="text-[18px] sm:text-[20px] leading-[30px] text-[#CDD4DB] mb-[10px] at594:w-[350px] sm:w-full">
                        Speak with a representative about all your travel needs now.
                    </p>
                    <div data-aos="fade-up"  className="flex flex-col items-center justify-center w-[178px] h-auto "> 
                    <Button  size="cdn" className="">
                        <a  href="#" className="cdn">
                            Chart with us!
                        </a>
                    </Button>
                        
                    </div>
                </div>
            </div>
        </div>
      </section>
  )
}

export default TalkToUs;