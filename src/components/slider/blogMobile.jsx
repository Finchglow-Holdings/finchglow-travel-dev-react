import React, { useEffect, useState } from "react";
import axios from "axios";
import ErrorPage from "../errorMessage/errorPage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Icon from "./blog-img/arrow-up.png";
import Link from "../contents/link";
import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import "./swiper/blog.css";
import "./swiper/pagination.css";
// import "./swiper/navigation.css";
import AOS from "aos";
import "aos/dist/aos.css";

const BlogSlide = () => {
  const [posts, setPosts] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [postLimit, setPostLimit] = useState(); //control amount cards

  useEffect(() => {
    axios
      .get("https://finchglowtravels.agency/wp-json/wp/v2/posts?_embed=&page=1")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setHasError(true);
      });
  }, []);

  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  if (hasError) {
    return <ErrorPage />;
  }

  return (
    <div className="blog-container w-full sm:hidden flex flex-col items-start overflow-hidden ">
      <div className="static w-full flex flex-col justify-center items-center 2xl:w-[1280px] px-[15px] py-[70px] at500:px-[70px] my-0 mx-auto">
        
        <Swiper
          className="relative flex flex-col sm:!py-[30px] "
          style={{ width: "100%" }}
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={25}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            520: { slidesPerView: 1 },
            950: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{
            nextEl: ".swiper-button-next-blog",
            prevEl: ".swiper-button-prev-blog",
          }}
        >
          {posts.slice(0, postLimit).map((post) => (
            <SwiperSlide key={post.id} className=" z-[4]">
              <div
                data-aos="zoom-in"
                className="flex flex-col  gap-[20px]  bg-[#E6EFFD] overflow-hidden rounded-b-[14px]"
              >
                <div className="flex flex-col relative w-full overflow-hidden">
                  {post._embedded["wp:featuredmedia"] && (
                    <img
                      className="h-[270px]"
                      src={
                        post._embedded["wp:featuredmedia"][0].media_details
                          .sizes.full.source_url
                      }
                      alt={
                        post._embedded["wp:featuredmedia"][0].alt_text ||
                        post.title.rendered
                      }
                      style={{
                        maxWidth: "100%",
                        objectFit: "cover",
                      }}
                    />
                  )}
                </div>
                <Link
                  to={`/blog/${post.slug}`}
                  className="flex flex-col overflow-hidden gap-[20px] "
                >
                  <div className="flex  flex-col justify-center w-full p-[30px] max-h-[300px]">
                    {post._embedded["wp:term"] && (
                      <p
                        data-aos="fade-up"
                        className="txt4 text-[#0260EE] leading-[24px]"
                      >
                        {post._embedded["wp:term"][0] &&
                          post._embedded["wp:term"][0][0].name}
                      </p>
                    )}

                    <div className="flex justify-between items-start w-full">
                      <h5
                        data-aos="fade-up"
                        className="text-[#101828] !leading-[25px] ip8:w-[268px]"
                      >
                        {post.title.rendered}
                      </h5>
                      <span data-aos="fade-up" className="arrow">
                        <img
                          className="relative group-hover:right-[-6px] h-auto object-cover"
                          src={Icon}
                          alt="arrow up"
                        />
                      </span>
                    </div>

                    <span
                      data-aos="fade-up"
                      className="txt5 !font-medium text-[#667085]"
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt.rendered,
                      }}
                    ></span>
                    {/* <span
                    data-aos="fade-up"
                    className="txt5 !font-medium text-[#667085]"
                  >
                    {post.excerpt.rendered.length >200 ? (
                      `${post.excerpt.rendered.substring(0, 200)}...`
                    ) : (
                      <span
                        dangerouslySetInnerHTML={{
                          __html: post.excerpt.rendered,
                        }}
                      />
                    )}
                  </span> */}
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="relative flex !items-end !justify-end w-full gap-2 2xl:w-[1280px] px-[15px] pt-[30px] at500:px-[10px] my-0 mx-auto">
          <div className="next p-2">
            <FaArrowLeft className="swiper-button-prev-blog relative  top-0 text-[#05284C] hover:text-[#05284C] w-[20px]" />
          </div>
          <div className="prev p-2">
            <FaArrowRight className="swiper-button-next-blog relative text-[#05284C] top-0 hover:text-[#05284C] w-[20px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSlide;
