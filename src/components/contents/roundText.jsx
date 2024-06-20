import React, { useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function RoundText(props) {
  const location = useLocation();
  const isServicePage = location.pathname === '/service';

  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  return (
    <section
      className="relative bg-white flex flex-col justify-center items-center bg-no-repeat bg-cover bg-center py-[30px] w-full h-auto overflow-hidden"
      style={{ backgroundImage: `url(${props.imgURL})` }}
    >
      <div className="static w-full flex flex-col justify-center items-center 2xl:w-[1280px] px-[15px] py-[30px] at500:px-[80px] my-0 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-[30px] md:gap-[20px] items-start w-full">
          <div className="relative flex flex-col justify-start items-start gap-[6px] w-full h-auto text-left">
            <span data-aos="fade-up" className="txt2 text-[#3580F1]">
              {props.title}
            </span>
            <h3
              data-aos="fade-up"
              className="text-[#05284C] silver:w-[388px]"
            >
              {props.subTitle}
            </h3>
          </div>

          <div className="relative flex flex-col justify-center items-start w-full h-auto text-left mb-[30px]">
            <div className="flex flex-col justify-center items-start w-full h-auto  gap-[20px] text-left ">
              <span
                data-aos="fade-up"
                className={`txt3 !text-[#697E94] ${isServicePage ? 'lg:w-[541px]' : 'xl:!w-[609px]'}`} dangerouslySetInnerHTML={{ __html: props.description1 }}
              >
              </span>
              <span
                data-aos="fade-up"
                className={`txt2 !text-[#697E94] ${isServicePage ? 'lg:w-[541px]' : 'xl:!w-[609px]'}`}
              >
                {props.description2}
              </span>
              <span
                data-aos="fade-up"
                className={`txt2 !text-[#697E94] ${isServicePage ? 'lg:w-[541px]' : 'xl:!w-[609px]'}`}
              >
                {props.description3}
              </span>
              <span
                data-aos="fade-up"
                className={`txt2 !text-[#697E94] ${isServicePage ? 'lg:w-[541px]' : 'xl:!w-[609px]'}`}
              >
                {props.description4}
              </span>
            </div>
            <a
              data-aos="fade-up"
              href="#"
              className={`arrow !text-[#0260EE] ${location.pathname === '/' ? '' : '!hidden'}`}
            >
              {props.buttonText}
              <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoundText;
