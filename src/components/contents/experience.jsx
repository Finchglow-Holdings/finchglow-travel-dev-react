import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ExperienceTheDifference(props) {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className="relative flex flex-col justify-center items-center w-full h-auto gap-[28.44px]">
      <div className="relative flex flex-col justify-center items-center w-full h-auto gap-[8px]">
        <h3 data-aos="fade-up"  className="text-[#05284C] text-center"dangerouslySetInnerHTML={{ __html: props.subTitle }}></h3>
        <p data-aos="fade-up"  className="text-[#375370] text-[16px] leading-[24px] text-center lg:w-[816px]">
            {props.details}
        </p>
      </div>
    </div>
  );
};

export default ExperienceTheDifference;
