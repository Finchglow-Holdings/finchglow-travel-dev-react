import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Nav from './navigation/nav';
import Title from './contents/title'; // Correct import statement
import contents from './props/contents'; // Ensure this is the correct path
import BlogSlider from './slider/blogSection';
import TestimonialSlide from './testimonial/testimonial';
import TalkToUs from './contents/talkToUs';
import Footer from './contents/footer';



function createTitle(content) {
  return (
    <Title
      key={content.id}
      title={content.title}
      subTitle={content.subTitle}
      riteContent={content.riteContent}
      imgURL={content.imgURL}
    />
  );
}

function Blog() {

    useEffect(() => {
        AOS.init({ duration: 3000, once: true });
    }, []);




    return (
      <div>
        <Nav />
        <section className="flex justify-center items-center w-full mt-[70px]">
          {contents.filter(content => content.id === 3).map(createTitle)}
        </section>
        <BlogSlider />
        <section className="relative flex flex-col justify-center items-center  md:h-[384px] w-full h-auto overflow-hidden">
          <div className="static w-full flex flex-col justify-center items-center  2xl:w-[1280px] px-[15px] py-[50px]  at500:px-[55px]  my-0 mx-auto overflow-hidden">
            <TestimonialSlide />
          </div>
        </section>
        <TalkToUs />
        <Footer/>
      </div>
    );
}

export default Blog;
