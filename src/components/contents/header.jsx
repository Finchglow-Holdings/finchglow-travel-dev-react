import React, { useState } from "react";
import Navbar from "../navigation/home_navbar";
import ImageSlider from "../slider/image_slider";
import OverlayForm from "../form/overlayForm";

function header() {
  const [isOpen, setIsOpen] = useState(false);

  const openOverlay = () => setIsOpen(true);
  const closeOverlay = () => setIsOpen(false);


  return (
    <div className=" flex flex-col justify-center items-center w-full ">
      <Navbar openOverlay={openOverlay} />
      <OverlayForm isOpen={isOpen} closeOverlay={closeOverlay} />

      <ImageSlider />
    </div>
  );
}

export default header;
