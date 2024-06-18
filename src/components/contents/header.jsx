import Navbar from '../navigation/home_navbar'
import ImageSlider from '../slider/image_slider'
import {FaArrowUp} from "react-icons/fa";

function header() {
  

  return (
    <div className=" flex flex-col justify-center items-center w-full ">
      <Navbar />

      <ImageSlider />
      
    </div>
  );
}

export default header;
