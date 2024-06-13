import React from 'react';
import { GoStarFill } from "react-icons/go";


const TestimonialSlide = ({ rating, comment, customerName, positionTitle, isAboutUsPage }) => (

  <div className="flex flex-col justify-center items-center w-full">
    <div data-aos="fade-up" className="flex flex-col justify-center gap-[32px] items-center w-full">
      <span className="rating">
        {[...Array(rating)].map((_, index) => (
          <GoStarFill key={index} />
        ))}
      </span>
      <div className={`comment text-[16px] leading-[24px] ${isAboutUsPage ? 'text-[#05284C]' : 'text-[#CCDFFC]'}`} dangerouslySetInnerHTML={{ __html: comment }}></div>
      <div className='flex flex-col justify-center items-center gap-[4px]'>
        <h2 className={`customer_name ${isAboutUsPage ? 'text-[#05284C]' : 'text-[#CCDFFC]'}`}>{customerName}</h2>
        <p className={`text-[16px] leading-[24px] ${isAboutUsPage ? 'text-[#05284C]' : 'text-[#CCDFFC]'}`}>{positionTitle}</p>
      </div>
    </div>
  </div>
);

export default TestimonialSlide;
