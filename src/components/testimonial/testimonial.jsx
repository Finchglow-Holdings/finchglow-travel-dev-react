import React from 'react';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useLocation } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../slider/swiper/pagination.css';
import '../slider/swiper/navigation.css';
import './test.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TestimonialSlide from './TestimonialSlide';
import TestContents from '../props/testContents';

const TestSlide = () => {
  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  const location = useLocation();
  const isAboutUsPage = location.pathname === '/about';

  return (
    <div className="testimonial-container w-full flex gap-[30px] flex-col items-center">
      <Swiper
        className='relative flex flex-col md:!overflow-hidden'
        style={{ width: "100%" }}
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={30}
        loop={true}
        // loopFillGroupWithBlank={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next-test',
          prevEl: '.swiper-button-prev-test',
        }}
      >
        {TestContents.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialSlide
              rating={testimonial.rating}
              comment={testimonial.comment}
              customerName={testimonial.customerName}
              positionTitle={testimonial.positionTitle}
              isAboutUsPage={isAboutUsPage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="relative  flex !gap-[20px] !justify-center !items-center w-full  max-w-[1280px] px-[15px]  at500:px-[10px] my-0 mx-auto ">
          <div className="next  p-2 ">
          <FaArrowLeft size={20} className={`swiper-button-prev-test !relative  !top-0   ${isAboutUsPage ? '!text-[#05284C]' : '!text-[#CCDFFC]'}`} />
          </div>
          <div className="prev  p-2">
            <FaArrowRight size={20} className={`swiper-button-next-test !relative !top-0  ${isAboutUsPage ? '!text-[#05284C]' : '!text-[#E6EAED]'}`} />
          </div>
      </div>
    </div>
  );
};

export default TestSlide;
