import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useLocation } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../slider/swiper/pagination.css";
import "../slider/swiper/navigation.css";
import "./prevEpisodes.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import EpisodesSlide from './episodeSlide';
import EpisodeContent from '../props/episodeContent';







function PrevEpisodes() {


  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  const location = useLocation();
  // const isHomePage = location.pathname === '/App';

  

  return (
    <div className="episode-container w-full flex gap-[30px] flex-col items-center">
      <Swiper
        className="relative flex flex-col md:!overflow-hidden"
        style={{ width: "100%" }}
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={30}
        // loop={true}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next-episo",
          prevEl: ".swiper-button-prev-episo",
        }}
      >
        {EpisodeContent.map((episodes, index) => (
          <SwiperSlide key={index}>
            <EpisodesSlide
              key={episodes.id}
              mainTitle={episodes.mainTitle}
              mainSubtitle={episodes.mainSubtitle}
              episodeTitle={episodes.episodeTitle}
              topicLabel={episodes.topicLabel}
              topicText={episodes.topicText}
              topicSubtext={episodes.topicSubtext}
              speaker1Label={episodes.speaker1Label}
              speaker1Name={episodes.speaker1Name}
              speaker1Info={episodes.speaker1Info}
              speaker2Label={episodes.speaker2Label}
              speaker2Name={episodes.speaker2Name}
              speaker2Info={episodes.speaker2Info}
              imgURL={episodes.imgURL}
              imageDescription={episodes.rating}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="relative  flex !gap-[20px] !justify-end !items-end w-full  max-w-[1280px] px-[15px]  at500:px-[10px] pt-[30px] my-0 mx-auto "
      >
        <div className="next  p-2 ">
          <FaArrowLeft
            size={20}
            className="swiper-button-prev-episo !relative !text-[#05284C] !top-0"
          />
        </div>
        <div className="prev  p-2">
          <FaArrowRight
            size={20}
            className="swiper-button-next-episo !relative !top-0 !text-[#05284C]"
          />
        </div>
      </div>
    </div>
  );
};

export default PrevEpisodes;
