import React from "react";

function IntroSection(props) {
  return (
    <div className="flex flex-col justify-start xl:w-[722px] gap-[48px]">
      {/* content with image */}
      <div className="flex flex-col justify-start gap-[48px]">
        <div className="flex flex-col justify-start gap-[24px]">
          <h3 data-aos="fade-up" className="text-[#05284C]">
            {props.title}
          </h3>
          <span data-aos="fade-up" className="txt2 text-[#667085]">
            {props.introText1}
          </span>
          <span data-aos="fade-up" className="txt2 text-[#667085]">
            {props.introText2}
          </span>
        </div>
        <div className="w-full h-auto">
          <img
            src={props.mainImageURL}
            className="h-[480px] w-[722px] object-cover"
            alt="chair"
          />
        </div>
        <div className="relative flex flex-col justify-start items-start py-0 w-full h-auto">
          <div className="flex flex-col justify-start items-start border-l-[#CCDFFC] border-l-[4px] pl-[20px] gap-[32px]">
            <span data-aos="fade-up" className="txt7 text-[#101828] text-left">
              {props.quote}
            </span>
            <span
              data-aos="fade-up"
              className="txt5 !font-bold italic text-[#667085]"
            >
              {props.quoteAuthor}
            </span>
          </div>
        </div>
      </div>
      {/* content text */}
      <div className="flex flex-col justify-start gap-[38px]">
        <div className="flex flex-col justify-start gap-[24px]">
          <span data-aos="fade-up" className="txt5 text-[#667085]">
            {props.textContent1}
          </span>
          <span data-aos="fade-up" className="txt5 text-[#667085]">
            {props.textContent2}
          </span>
          <span data-aos="fade-up" className="txt5 text-[#667085]">
            {props.textContent3}
          </span>
        </div>

        <div className="flex flex-col justify-start gap-[16px]">
          <h2
            data-aos="fade-up"
            className="text-[#05284C] leading-[32px] text-[24px]"
          >
            {props.sectionTitle1}
          </h2>
          <span data-aos="fade-up" className="txt2 text-[#667085]">
            {props.sectionContent1}
          </span>
        </div>

        <div className="flex flex-col justify-start gap-[16px]">
          <h2
            data-aos="fade-up"
            className="text-[#05284C] leading-[32px] text-[24px]"
          >
            {props.sectionTitle2}
          </h2>
          <span data-aos="fade-up" className="txt2 text-[#667085]">
            {props.sectionContent2}
          </span>
          <ul className="txt2 text-[#667085] list-disc">
            <li data-aos="fade-up" className="txt2 text-[#667085]">
              {props.sectionListItem1}
            </li>
            <li data-aos="fade-up" className="txt2 text-[#667085]">
              {props.sectionListItem2}
            </li>
            <li data-aos="fade-up" className="txt2 text-[#667085]">
              {props.sectionListItem3}
            </li>
          </ul>
        </div>
      </div>
      {/* content with image */}
      <div className="flex flex-col justify-start gap-[38px]">
        <div className="w-full h-auto">
          <img
            src={props.imgURL}
            className="h-[480px] w-[722px] object-cover"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-start gap-[16px]">
          <span data-aos="fade-up" className="txt2 text-[#667085]">
            {props.sectionText1}
          </span>
          <span data-aos="fade-up" className="txt2 text-[#667085]">
            {props.sectionText2}
          </span>
        </div>
        <div className="flex flex-col justify-start gap-[16px]">
          <h2
            data-aos="fade-up"
            className="text-[#05284C] leading-[32px] text-[24px]"
          >
            {props.sectionTitle3}
          </h2>
          <span data-aos="fade-up" className="txt2 text-[#667085]">
            {props.sectionContent3}
          </span>
          <span data-aos="fade-up" className="txt2 text-[#667085]">
            {props.sectionContent4}
          </span>
          <span data-aos="fade-up" className="txt2 text-[#667085]">
            {props.sectionContent5}
          </span>
          <span data-aos="fade-up" className="txt2 text-[#667085]">
            {props.sectionContent6}
          </span>
        </div>
      </div>
    </div>
  );
}

export default IntroSection;
