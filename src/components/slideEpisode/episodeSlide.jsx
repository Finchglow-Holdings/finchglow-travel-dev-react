import React from "react";

function EpisodesSlide(props) {
  return (
    <div className="flex flex-col justify-center items-start gap-[68px] w-full ">
      <div>
        <h3 data-aos="fade-up" className="text-[#05284C]">
          {props.mainTitle}
        </h3>
        <span
          data-aos="fade-up"
          className="txt2 !leading-[26px] text-[#667085]"
        >
          {props.mainSubtitle}
        </span>
      </div>

      <div className="flex flex-col silver:flex-row justify-between gap-[32px] items-start w-full">
        <div className="flex flex-col justify-center items-start gap-[30px] lg:w-[419px]">
          <h3 data-aos="fade-up" className="text-[#05284C]">
            {props.episodeTitle}
          </h3>
          <div className="flex flex-col justify-center items-start pl-[20px] border-l-[1px] border-l-[#ED3237]">
            <span data-aos="fade-up" className="txt3 !text-[#F15B5F]">
              {props.topicLabel}
            </span>
            <span
              data-aos="fade-up"
              className="txt8 text-[#506982] !leading-[27px]"
            >
              {props.topicText}
            </span>
            <span
              data-aos="fade-up"
              className="txt2 !leading-[26px] text-[#667085]"
            >
              {props.topicSubtext}
            </span>
          </div>
          <div className="flex flex-col justify-center items-start pl-[20px] border-l-[1px] border-l-[#ED3237]">
            <span data-aos="fade-up" className="txt3 !text-[#F15B5F]">
              {props.speaker1Label}
            </span>
            <span
              data-aos="fade-up"
              className="txt8 text-[#506982] !leading-[27px]"
            >
              {props.speaker1Name}
            </span>
            <span
              data-aos="fade-up"
              className="txt2 !leading-[26px] text-[#667085]"
            >
              {props.speaker1Info}
            </span>
          </div>
          <div className="flex flex-col justify-center items-start pl-[20px] border-l-[1px] border-l-[#ED3237]">
            <span data-aos="fade-up" className="txt3 !text-[#F15B5F]">
              {props.speaker2Label}
            </span>
            <span
              data-aos="fade-up"
              className="txt8 text-[#506982] !leading-[27px]"
            >
              {props.speaker2Name}
            </span>
            <span
              data-aos="fade-up"
              className="txt2 !leading-[26px] text-[#667085]"
            >
              {props.speaker2Info}
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-full lg:w-[555px] bg-[#D4E8F6] gap-[10px] p-[15px] sm:px-[50px] sm:py-[30px]">
          <img
            src={props.imgURL}
            className="w-full h-auto object-cover"
            alt=""
          />
          <span
            data-aos="fade-up"
            className="txt2 !leading-[26px] text-[#506982]"
          >
            {props.imageDescription}
          </span>
        </div>
      </div>
    </div>
  );
}

export default EpisodesSlide;
