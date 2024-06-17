import React, { useState, useEffect } from 'react';
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import FadeLink from '../fadeLink';
import 'aos/dist/aos.css';
import AOS from 'aos';
import image from '../images/ladies.jpeg';

function Faq() {
    const [toggles, setToggles] = useState(Array(6).fill(false));

    useEffect(() => {
        AOS.init();
    }, []);

    const toggleDropdown = (index) => {
        setToggles(toggles.map((toggle, i) => (i === index ? !toggle : toggle)));
    };

    return (
        <section className="relative bg-[#FFFFFF] flex justify-center flex-col items-center w-full h-auto">
            <div className="static w-full flex flex-col justify-center items-center 2xl:w-[1280px] px-[15px] py-[70px] at500:p4-[40px] md:px-[85px]  my-0 mx-auto">
                <div className="flex flex-col md:flex-row justify-between gap-[56.89px] w-full">
                    <div className="flex flex-col justify-start items-start w-full md:w-[398.22px] gap-[40px]">
                        <div className="flex flex-col justify-start items-start gap-[18px]">
                            <span data-aos="fade-up" className="txt4 leading-[24px] text-[#0260EE]">Support</span>
                            <h3 data-aos="fade-up" className="text-[#101828]">FAQs</h3>
                            <span data-aos="fade-up" className="txt4 leading-[20px] text-[#667085]">
                                Everything you need to know about our services. Can’t find the answer 
                                you’re looking for? Please <strong className="txt4 text-[#0260EE] hover:text-[#101828]"><a href="#">chat with our team.</a></strong>
                            </span>
                        </div>
                        <div className="w-full h-auto md:h-[448.56px] md:w-[398.22px] overflow-hidden">
                            <img src={image} className="w-full h-full object-cover" alt="" />
                        </div>
                    </div>

                    <div className="flex flex-col justify-end items-end w-full">
                        <div data-aos="fade-up" className=" bg-[#E6EFFD] cursor-pointer flex flex-col justify-center items-start rounded-[14.22px] p-[28.44px] gap-[6px] h-auto w-full transition-all duration-300 ease-linear mb-[8px]" onClick={() => toggleDropdown(0)}>
                            <div className="flex justify-between w-full" >
                                <span className="text-[16px] font-semibold leading-[24px] text-[#101828]">
                                    What is the difference between Trade PartnerPlus and PartnerPlus Connect?
                                </span>
                                <div className="flex flex-col justify-end items-end relative cursor-pointer h-[21.33px] w-[43.33px]" >
                                    {toggles[0] ? (
                                        <IoAddCircleOutline className='text-[#0260EE] transition-all duration-300 ease-linear' alt="close" />
                                    ) : (
                                        <IoRemoveCircleOutline className='text-[#0260EE] transition-all duration-300 ease-linear' alt="open" />
                                    )}
                                </div>
                            </div>
                            <div className={`${toggles[0] ? 'hidden' : 'block'} transition-all duration-300 ease-linear`}>
                                <p className="text-[14px] leading-[24px] text-[#667085]">
                                    Trade PartnerPlus is our affiliate programme for travel agents while PartnerPlus
                                    Connect is a webinar series for travel agents
                                </p>
                            </div>
                        </div>

                        <div className={`hover:bg-[#E6EFFD] cursor-pointer flex flex-col justify-center items-start rounded-[14.22px] p-[28.44px] gap-[6px] h-auto w-full transition-all duration-300 ease-in mb-[8px] ${toggles[1] ? 'bg-[#E6EFFD]' : ''}`} onClick={() => toggleDropdown(1)}>
                            <div data-aos="fade-up" className="flex justify-between w-full">
                                <span className="text-[16px] font-semibold leading-[24px] text-[#101828]">
                                    How competitive are your fares?
                                </span>
                                <div className="flex flex-col justify-end items-end relative cursor-pointer h-[21.33px] w-[43.33px]" >
                                    {toggles[1] ? (
                                        <IoRemoveCircleOutline className='text-[#0260EE] transition-all duration-300 ease-linear ' alt="close" />
                                    ) : (
                                        <IoAddCircleOutline className='text-[#0260EE] transition-all duration-300 ease-linear ' alt="open" />
                                    )}
                                </div>
                            </div>
                            {toggles[1] && (
                                <div className="block transition-all duration-300 ease-linear">
                                    <p className="text-[16px] leading-[24px] text-[#667085]">
                                        We have highly competitive fares and give great deals because of our strategic partnerships
                                        with airlines, hotels, cars for hire services, resorts, and more.
                                    </p>
                                </div>
                            )}
                        </div>

                        <div className={`hover:bg-[#E6EFFD] cursor-pointer flex flex-col justify-center items-start rounded-[14.22px] p-[28.44px] gap-[6px] h-auto w-full transition-all duration-300 ease-in mb-[8px] ${toggles[2] ? 'bg-[#E6EFFD]' : ''}`} onClick={() => toggleDropdown(2)}>
                            <div data-aos="fade-up" className="flex justify-between w-full">
                                <span className="text-[16px] font-semibold leading-[24px] text-[#101828]">
                                    How competitive are your fares?
                                </span>
                                <div className="flex flex-col justify-end items-end relative cursor-pointer h-[21.33px] w-[43.33px]" >
                                    {toggles[2] ? (
                                        <IoRemoveCircleOutline className='text-[#0260EE] transition-all duration-300 ease-linear ' alt="close" />
                                    ) : (
                                        <IoAddCircleOutline className='text-[#0260EE] transition-all duration-300 ease-linear ' alt="open" />
                                    )}
                                </div>
                            </div>
                            {toggles[2] && (
                                <div className="block transition-all duration-300 ease-linear">
                                    <p className="text-[16px] leading-[24px] text-[#667085]">
                                        We have highly competitive fares and give great deals because of our strategic
                                        partnerships with airlines, hotels, cars for hire services, resorts, and more.
                                    </p>
                                </div>
                            )}
                        </div>

                        <div className={`hover:bg-[#E6EFFD] cursor-pointer flex flex-col justify-center items-start rounded-[14.22px] p-[28.44px] gap-[6px] h-auto w-full transition-all duration-300 ease-in mb-[8px] ${toggles[3] ? 'bg-[#E6EFFD]' : ''}`} onClick={() => toggleDropdown(3)}>
                            <div data-aos="fade-up" className="flex justify-between w-full">
                                <span className="text-[16px] font-semibold leading-[24px] text-[#101828]">
                                   Do you provide other travel services besides flight tickets?
                                </span>
                                <div className="flex flex-col justify-end items-end relative cursor-pointer h-[21.33px] w-[43.33px]" >
                                    {toggles[3] ? (
                                        <IoRemoveCircleOutline className='text-[#0260EE] transition-all duration-300 ease-linear ' alt="close" />
                                    ) : (
                                        <IoAddCircleOutline className='text-[#0260EE] transition-all duration-300 ease-linear ' alt="open" />
                                    )}
                                </div>
                            </div>
                            {toggles[3] && (
                                <div className="flex flex-col justify-center items-start transition-all duration-300 ease-linear">
                                    <p className="text-[14px] leading-[24px] text-[#667085]">
                                        Yes. We offer hotel bookings, protocol services,
                                        visa and immigration services etc. See a full breakdown of all our services
                                    </p>
                                    <FadeLink to="/services"  >
                                        <span className='arrow hover:!text-[#667085]'>
                                            Here
                                            <FaArrowRight />
                                        </span>
                                    </FadeLink>
                                </div>
                            )}
                            
                            
                        </div>

                        <div className={`hover:bg-[#E6EFFD] cursor-pointer flex flex-col justify-center items-start rounded-[14.22px] p-[28.44px] gap-[6px] h-auto w-full transition-all duration-300 ease-in mb-[8px] ${toggles[4] ? 'bg-[#E6EFFD]' : ''}`} onClick={() => toggleDropdown(4)} >
                            <div data-aos="fade-up" className="flex justify-between w-full" >
                                <span className="text-[16px] font-semibold leading-[24px] text-[#101828]">
                                   Do you have relationships with Airlines (international and local)?
                                </span>
                                <div className="flex flex-col justify-end items-end relative cursor-pointer h-[21.33px] w-[43.33px]" >
                                    {toggles[4] ? (
                                        <IoRemoveCircleOutline className='text-[#0260EE] transition-all duration-300 ease-linear ' alt="close" />
                                    ) : (
                                        <IoAddCircleOutline className='text-[#0260EE] transition-all duration-300 ease-linear ' alt="open" />
                                    )}
                                </div>
                            </div>
                            {toggles[4] && (
                                <div className="flex flex-col justify-center items-start transition-all duration-300 ease-linear">
                                    <p className="text-[14px] leading-[24px] text-[#667085]">
                                        Yes, we have strategic partnerships with several airlines across different regions.
                                        See our growing list of airline partners
                                    </p>
                                    <FadeLink to="/partnerPlus" >
                                        <span className='arrow hover:!text-[#667085]'>
                                            Here
                                            <FaArrowRight />
                                        </span>
                                    </FadeLink>
                                </div>
                            )}
                            
                            
                        </div>

                        <div className={`hover:bg-[#E6EFFD] cursor-pointer flex flex-col justify-center items-start rounded-[14.22px] p-[28.44px] gap-[6px] h-auto w-full transition-all duration-300 ease-in mb-[8px] ${toggles[5] ? 'bg-[#E6EFFD]' : ''}`} onClick={() => toggleDropdown(5)}>
                            <div data-aos="fade-up" className="flex justify-between w-full">
                                <span className="text-[16px] font-semibold leading-[24px] text-[#101828]">
                                   Do you provide Visa Assistance Services?
                                </span>
                                <div className="flex flex-col justify-end items-end relative cursor-pointer h-[21.33px] w-[43.33px]" >
                                    {toggles[5] ? (
                                        <IoRemoveCircleOutline className='text-[#0260EE] transition-all duration-300 ease-linear ' alt="close" />
                                    ) : (
                                        <IoAddCircleOutline className='text-[#0260EE] transition-all duration-300 ease-linear ' alt="open" />
                                    )}
                                </div>
                            </div>
                            {toggles[5] && (
                                <div className="block transition-all duration-300 ease-linear">
                                    <p className="text-[14px] leading-[24px] text-[#667085]">
                                        Yes, we do. For a small fee, we will take away the hassle of dealing with long queues at embassies,
                                        scams, or misdirection. We also offer tailored packages that ensure a fully organised trip with
                                        a fun-filled or efficient itinerary, depending on your travel needs.
                                    </p>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
