import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaTimes } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from '../Button'; // Assuming you have a Button component
import image from '../images/traveller.jpeg'; // Replace with your actual image path

const VideoSection = () => {
    const [showVideo, setShowVideo] = useState(false);
    const videoRef = useRef(null);

    const handlePlayClick = () => {
        setShowVideo(true);
    };

    const handleCloseClick = () => {
    setShowVideo(false);
    if (videoRef.current) {
      const iframeSrc = videoRef.current.src;
      videoRef.current.src = iframeSrc; // Resetting the src will stop the video playback
    }
    };
    
    useEffect(() => {
    AOS.init({ duration: 3000, once: true });
    }, []);

    return (
      
        <section className="relative flex flex-col justify-center items-center bg-[#03182E] w-full h-auto overflow-hidden">
            <div className="static w-full flex flex-col justify-center items-center gap-[30px] 2xl:w-[1280px] px-[15px] py-[70px] at500:px-[40px] md:px-[100px] my-0 mx-auto">
                <h3  className='text-[#FFFFFF] mt-[25px]'>
                    Experience The Finchglow Travels Difference
                </h3>

                <div className='relative w-full flex justify-center items-center'>
                    <img src={image} alt="image" />
                    <Button
                        size='play'
                        className='w-[60px] h-[60px] sm:w-[98px] sm:h-[98px] absolute'
                        onClick={handlePlayClick}
                    >
                        <FaPlay className='w-[25px] h-[25px] sm:w-[50px] sm:h-[50px] text-[#EF474B]' />
                    </Button>
                    {showVideo && (
                        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75">
                        <iframe
                            ref={videoRef}
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/5dy261AbRaQ?autoplay=1"// add just this link '5dy261AbRaQ' and add autoplay=1
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                        <button
                            className=" bg-none absolute top-4 right-4 text-white text-2xl"
                            onClick={handleCloseClick}
                        >
                            <FaTimes />
                        </button>
                        </div>
                    )}
                </div>
            </div>
        </section>

    );
};

export default VideoSection;
