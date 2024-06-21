import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./_getinTouchForm.css";

function GetinTouchForm() {
  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  return (
    <section className="flex flex-col justify-center items-center w-full h-auto py-12 bg-white">
      <div className="max-w-[600px] text-center w-full px-4">
        <span
          data-aos="fade-up"
          className="text-center txt4 text-[#0260EE] mb-4"
        >
          Contact us
        </span>
        <h3
          data-aos="fade-up"
          className="text-center text-2xl font-bold text-[#05284C] mb-2"
        >
          Get in touch
        </h3>
        <p
          data-aos="fade-up"
          className="text-center txt2 !leading-[26px] text-[#697E94] mb-8"
        >
          We'd love to hear from you. Please fill out this form.
        </p>
        <form className="space-y-2 text-left">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label
                data-aos="fade-up"
                className="block mb-2 text-sm font-medium text-[#344054]"
                htmlFor="first-name"
              >
                First name
              </label>
              <input
                data-aos="fade-up"
                type="text"
                id="first-name"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="First name"
                required
              />
            </div>
            <div className="flex-1">
              <label
                data-aos="fade-up"
                className="block mb-2 text-sm font-medium text-[#344054]"
                htmlFor="last-name"
              >
                Last name
              </label>
              <input
                data-aos="fade-up"
                type="text"
                id="last-name"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Last name"
                required
              />
            </div>
          </div>
          <div>
            <label
              data-aos="fade-up"
              className="block mb-2 text-sm font-medium text-[#344054]"
              htmlFor="email"
            >
              Email
            </label>
            <input
              data-aos="fade-up"
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="you@company.com"
              required
            />
          </div>
          <div>
            <label
              data-aos="fade-up"
              className="block mb-2 text-sm font-medium text-[#344054]"
              htmlFor="phone-number"
            >
              Phone number
            </label>
            <div data-aos="fade-up" className="flex">
              <select className=" cursor-pointer h-[44px] p-3 border border-r-[0px] border-gray-300 rounded-l-lg ">
                <option value="US">US</option>
                <option value="US">NG</option>
                {/* Add more options as needed */}
              </select>
              <input
                type="tel"
                id="phone-number"
                className="flex-1 p-3 border-l-[0px] rounded-l-[0px] border border-gray-300 rounded-r-lg"
                placeholder="+1 (555) 000-0000"
                required
              />
            </div>
          </div>
          <div>
            <label
              data-aos="fade-up"
              className="block mb-2 text-sm font-medium text-[#344054]"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              data-aos="fade-up"
              id="message"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Your message"
              rows="4"
              required
            ></textarea>
          </div>
          <div data-aos="fade-up" className="flex justify-start items-center">
            <input
              type="checkbox"
              id="privacy-policy"
              className="mr-2 w-[17px] cursor-pointer"
              required
            />
            <label htmlFor="privacy-policy" className="text-sm  text-[#667085]">
              You agree to our friendly privacy policy.
            </label>
          </div>
          <button
            data-aos="fade-up"
            type="submit"
            className="submit"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default GetinTouchForm;
