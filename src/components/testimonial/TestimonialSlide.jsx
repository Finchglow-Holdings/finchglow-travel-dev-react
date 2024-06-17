import React from 'react';
import { GoStarFill } from "react-icons/go";
import { useLocation } from 'react-router-dom';
import DOMPurify from 'dompurify';

 

function TestimonialSlide(props) {

  const location = useLocation();
  const sanitizedComment = DOMPurify.sanitize(props.comment);
  

  return (

    <div className="flex flex-col justify-center items-center w-full">
        <div data-aos="fade-up" className="flex flex-col justify-center gap-[32px] items-center w-full">
        <span className="rating">
          {[...Array(props.rating)].map((_, index) => (
            <GoStarFill key={index} />
          ))}
        </span>
        <div className={`comment text-[16px] leading-[24px] text-[#CCDFFC] ${location.pathname === '/' ? '' : '!text-[#05284C]'}`} 
          dangerouslySetInnerHTML={{ __html: sanitizedComment }}>
        </div>
        <div className='flex flex-col justify-center items-center gap-[4px]'>
          <h2 className={`customer_name text-[#CCDFFC] ${location.pathname === '/' ? '' : '!text-[#05284C]'}`}>{props.customerName}</h2>
          <p className={`text-[16px] leading-[24px] text-[#CCDFFC] ${location.pathname === '/' ? '' : '!text-[#05284C]'}`}>{props.positionTitle}</p>
        </div>
      </div>
    </div>

  );

 
};

export default TestimonialSlide;
