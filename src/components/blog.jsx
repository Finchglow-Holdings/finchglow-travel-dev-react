import React from "react";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Nav from "./navigation/nav";
import Title from "./contents/title"; // Correct import statement
import contents from "./props/contents"; // Ensure this is the correct path
import BlogSlider from "./slider/blogSection";
import Footer from "./contents/footer";
import TestimonialSlide from "./testimonial/testimonial";
import OverlayForm from "./form/overlayForm";
import LatestBlogSection from "./slider/blogMobile";

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
  const [isOpen, setIsOpen] = useState(false);
  const openOverlay = () => setIsOpen(true);
  const closeOverlay = () => setIsOpen(false);

  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  return (
    <>
      <div>
        <Nav openOverlay={openOverlay} />
        <OverlayForm isOpen={isOpen} closeOverlay={closeOverlay} />

        <section className="flex justify-center items-center w-full mt-[70px]">
          {contents.filter((content) => content.id === 3).map(createTitle)}
        </section>

        <BlogSlider />
       

        <section className="relative flex flex-col justify-center items-center  md:h-[384px] w-full h-auto overflow-hidden">
          <div className="static w-full flex flex-col justify-center items-center  2xl:w-[1280px] px-[15px] py-[50px]  at500:px-[55px]  my-0 mx-auto overflow-hidden">
            <TestimonialSlide />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Blog;
