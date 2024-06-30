import React from "react";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Nav from "../navigation/nav"; // Correct import statement
import Title from "../contents/title"; // Correct import statement
import contents from "../props/contents"; // Ensure this is the correct path
import Footer from "../contents/footer";
import BlogInfoSection from "../contents/sections/blogInFo";
import IntroSection from "../contents/sections/blogIntro";
import intro from "../props/introContent";
import Sidebar from "../contents/sections/sideBar";
import LatestBlogSection from "../contents/sections/latestBlog";
import OverlayForm from "../form/overlayForm";








function createIntro(intro) {
  return (
    <IntroSection
      key={intro.id}
      title={intro.title}
      introText1={intro.introText1}
      introText2={intro.introText2}
      mainImageURL={intro.mainImageURL}
      quote={intro.quote}
      quoteAuthor={intro.quoteAuthor}
      textContent1={intro.textContent1}
      textContent2={intro.textContent2}
      textContent3={intro.textContent3}
      sectionTitle1={intro.sectionTitle1}
      sectionContent1={intro.sectionContent1}
      sectionTitle2={intro.sectionTitle2}
      sectionContent2={intro.sectionContent2}
      sectionListItem1={intro.sectionListItem1}
      sectionListItem2={intro.sectionListItem2}
      sectionListItem3={intro.sectionListItem3}
      imgURL={intro.imgURL}
      sectionText1={intro.sectionText1}
      sectionText2={intro.sectionText2}
      sectionTitle3={intro.sectionTitle3}
      sectionContent3={intro.sectionContent3}
      sectionContent4={intro.sectionContent4}
      sectionContent5={intro.sectionContent5}
      sectionContent6={intro.sectionContent6}
    />
  );
}

function createTitle(content) {
  return (
    <Title
      key={content.id}
      title={content.title}
      subTitle={content.subTitle}
      subTitle2={content.subTitle2}
      riteContent={content.riteContent}
      imgURL={content.imgURL}
    />
  );
}

function BlogPost() {
  const [isOpen, setIsOpen] = useState(false);
  const openOverlay = () => setIsOpen(true);
  const closeOverlay = () => setIsOpen(false);

  const linkToCopy = "https://example.com/specific-page"; // link here

  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  return (
    <>
      <div>
        <Nav openOverlay={openOverlay} />
        <OverlayForm isOpen={isOpen} closeOverlay={closeOverlay} />

        <section className="flex justify-center items-center w-full mt-[70px]">
          {contents.filter((content) => content.id === 12).map(createTitle)}
        </section>

        <BlogInfoSection linkToCopy={linkToCopy} />

        <section className="relative bg-[#FFFFFF] flex flex-col justify-center items-center w-full  overflow-hidden">
          <div className="static w-full  flex flex-col justify-center items-center 2xl:w-[1280px] px-[15px] py-[60px] at500:px-[64px] my-0 mx-auto">
            <div className="relative flex flex-col-reverse gap-[50px] lg:flex-row justify-between items-start w-full h-auto">
              <section className="flex justify-center items-center w-full">
                {intro.filter((intro) => intro.id === 1).map(createIntro)}
              </section>
              <Sidebar />
            </div>
          </div>
        </section>

        <LatestBlogSection />

        <Footer />
      </div>
    </>
  );
}

export default BlogPost;
