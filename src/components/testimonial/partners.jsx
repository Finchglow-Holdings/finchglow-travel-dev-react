import React from 'react';
// import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../slider/swiper/swiper-bundle.min.css';
import '../slider/swiper/swiper.min.css';
import './our_partners.css'

import logo1 from '../contents/images/logos/logo1.png'
import logo2 from '../contents/images/logos/logo2.png'
import logo3 from '../contents/images/logos/logo3.png'
import logo4 from '../contents/images/logos/logo4.png'
import logo5 from '../contents/images/logos/logo5.png'
import logo6 from '../contents/images/logos/logo6.png'
import logo7 from '../contents/images/logos/logo7.png'
import logo8 from '../contents/images/logos/logo8.png'
import logo9 from '../contents/images/logos/logo9.png'
import logo10 from '../contents/images/logos/logo10.png'




function OurPartners() {
    return (
      
        <section className="relative flex flex-col justify-center items-center bg-[#F9FAFB]  md:h-[320px] w-full h-auto overflow-hidden">
            <div className="static w-full flex flex-col justify-center items-center  2xl:w-[1280px] px-[15px] py-[50px]  at500:px-[85px]  my-0 mx-auto overflow-hidden">
                <div data-aos="fade-up"  className="text-center mb-[30px]">
                    <span  className="txt3 !font-semibold !text-[#667085]">Our Trusted Partners</span>
                </div>
                <div data-aos="fade-up"  className='our_partners-container w-full flex gap-[30px] flex-col items-center'>
                    <Swiper 
                        modules={[Navigation, Pagination, Autoplay]}
                        slidesPerView={3}
                        spaceBetween={80}
                        slidesPerGroup={1}
                        loop={true}
                        autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                        }}
                        // loopFillGroupWithBlank={true}
                        pagination={{ el: '.swiper-pagination', clickable: true }}
                        navigation={{
                        nextEl: '.swiper-button-next-partner',
                        prevEl: '.swiper-button-prev-partner',
                        }}
                        breakpoints={{
                        0: {
                            slidesPerView: 2,
                        },
                        520: {
                            slidesPerView: 4,
                        },
                        950: {
                            slidesPerView: 7,
                        },
                        }}
                        className=" relative flex flex-col w-full mb-[30px]"
                    >
                    <SwiperSlide className="!h-[80px] w-full our_partners_image">
                    <img src={logo1} className="h-[80px] object-cover " alt="Logo 1" />
                    </SwiperSlide>

                    <SwiperSlide className="!h-[80px] w-full our_partners_image">
                    <img src={logo2} className="h-[80px] object-cover " alt="Logo 2" />
                    </SwiperSlide>

                    <SwiperSlide className="!h-[80px] w-full our_partners_image">
                    <img src={logo3} className="h-[80px] !object-cover " alt="Logo 3" />
                    </SwiperSlide>
                        
                    <SwiperSlide className="!h-[80px] w-full our_partners_image">
                    <img src={logo4} className="h-[80px] !object-fill " alt="Logo 4" />
                    </SwiperSlide>
                        
                    <SwiperSlide className="!h-[80px] w-full our_partners_image">
                    <img src={logo5} className="h-[80px] object-cover " alt="Logo 5" />
                    </SwiperSlide>
                        
                    <SwiperSlide className="!h-[80px] w-full our_partners_image">
                    <img src={logo6} className="h-[80px] object-cover " alt="Logo 6" />
                    </SwiperSlide>
                        
                    <SwiperSlide className="!h-[80px] w-full our_partners_image">
                    <img src={logo7} className="h-[80px] object-cover " alt="Logo 7" />
                    </SwiperSlide>
                        
                    <SwiperSlide className="!h-[80px] w-full  our_partners_image">
                    <img src={logo8} className="h-[80px]  object-contain" alt="Logo 8" />
                        </SwiperSlide>
                        
                    <SwiperSlide className="!h-[80px] w-full our_partners_image">
                    <img src={logo9} className="h-[80px]  object-contain" alt="Logo 9" />
                        </SwiperSlide>
                        
                    <SwiperSlide className="!h-[80px] w-full our_partners_image">
                    <img src={logo10} className="h-[80px] object-contain " alt="Logo 10" />
                    </SwiperSlide>
                        
                        </Swiper>
                        <div  className="relative  flex !justify-end !gap-[30px] !items-end w-full  max-w-[1280px] px-[15px]  at500:px-[10px] my-0 mx-auto ">
                            <div className=" ">
                                <FaArrowLeft size={20} className='swiper-button-prev-partner !relative !left-[-3px] !top-0 !text-[#05284C] hover:!text-[#05284C] !w-[20px] ' />
                            </div>
                            <div className="">
                                <FaArrowRight size={20} className='swiper-button-next-partner !text-[#05284C] !top-0 hover:!text-[#05284C] !w-[20px] ' />
                            </div>
                        </div>
                </div>
            </div>
      </section>
        
  );
};



export default OurPartners;
