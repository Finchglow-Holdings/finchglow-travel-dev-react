import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./log.css";

  const LogInForm = ({ isShow, hideLogIn }) => {
  if (!isShow) return null;

  return (
    <div className="overlay1 z-[88] " id="overlay">
      <div className="flex justify-center items-center  px-[15px] py-[70px] md:px-[200px] my-0 mx-auto  w-full h-auto ">
        <div className="form-container">
          <div className="flex justify-between items-start w-full ">
            <div>
              <h2>Log in to your account</h2>
              <p>Welcome back! Please enter your details.</p>
            </div>
            <AiOutlineClose
              onClick={hideLogIn}
              size={30}
              className="  text-[#9ABFF8] cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-[20px] w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default LogInForm;
