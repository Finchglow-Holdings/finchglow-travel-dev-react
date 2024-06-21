// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// function ContactForm() {
//   useEffect(() => {
//     AOS.init({ duration: 3000, once: true });
//   }, []);

//   return (
//     <section className="flex flex-col justify-center items-center w-full h-auto py-12 bg-white">
//       <div className="max-w-[600px] text-center w-full px-4">
//         <span
//           data-aos="fade-up"
//           className="text-center txt4 text-[#0260EE] mb-4"
//         >
//           Contact us
//         </span>
//         <h3
//           data-aos="fade-up"
//           className="text-center text-2xl font-bold text-[#05284C] mb-2"
//         >
//           Get in touch
//         </h3>
//         <p
//           data-aos="fade-up"
//           className="text-center txt2 !leading-[26px] text-[#697E94] mb-8"
//         >
//           We'd love to hear from you. Please fill out this form.
//         </p>
//         <form
//           action="https://forms.zohopublic.com/finchglowholdings1/form/TravelsContactForm/formperma/bw9jn327NZwu5fqz4IEJWkWHiuBSAF9F14L8ELdqnFk/htmlRecords/submit"
//           name="form"
//           id="form"
//           method="POST"
//           acceptCharset="UTF-8"
//           encType="multipart/form-data"
//           className="space-y-6 text-left"
//         >
//           <input type="hidden" name="zf_referrer_name" value="" />
//           <input type="hidden" name="zf_redirect_url" value="" />
//           <input type="hidden" name="zc_gad" value="" />

//           <div className="flex flex-col md:flex-row gap-4">
//             <div className="flex-1">
//               <label
//                 data-aos="fade-up"
//                 className="block mb-2 text-sm font-medium text-[#344054]"
//                 htmlFor="first-name"
//               >
//                 First Name
//               </label>
//               <input
//                 data-aos="fade-up"
//                 type="text"
//                 name="Name_First"
//                 fieldType="7"
//                 className="w-full p-3 border border-gray-300 rounded-lg"
//                 placeholder="First name"
//                 required
//               />
//             </div>
//             <div className="flex-1">
//               <label
//                 data-aos="fade-up"
//                 className="block mb-2 text-sm font-medium text-[#344054]"
//                 htmlFor="last-name"
//               >
//                 Last Name
//               </label>
//               <input
//                 data-aos="fade-up"
//                 type="text"
//                 name="Name_Last"
//                 fieldType="7"
//                 className="w-full p-3 border border-gray-300 rounded-lg"
//                 placeholder="Last name"
//                 required
//               />
//             </div>
//           </div>

//           <div>
//             <label
//               data-aos="fade-up"
//               className="block mb-2 text-sm font-medium text-[#344054]"
//               htmlFor="email"
//             >
//               Email
//             </label>
//             <input
//               data-aos="fade-up"
//               type="text"
//               name="Email"
//               fieldType="9"
//               className="w-full p-3 border border-gray-300 rounded-lg"
//               placeholder="you@company.com"
//               required
//             />
//           </div>

//           <div>
//             <label
//               data-aos="fade-up"
//               className="block mb-2 text-sm font-medium text-[#344054]"
//               htmlFor="phone-number"
//             >
//               Phone Number
//             </label>

//             <div data-aos="fade-up" className="flex">
//               <select
//                 data-aos="fade-up"
//                 className=" h-[44px] cursor-pointer p-3 border border-r-[0px] border-gray-300 rounded-l-lg "
//               >
//                 <option value="US">NG</option>
//                 <option value="US">US</option>
//                 {/* Add more options as needed */}
//               </select>
//               <input
//                 data-aos="fade-up"
//                 type="text"
//                 compname="PhoneNumber"
//                 name="PhoneNumber_countrycode"
//                 phoneFormat="1"
//                 isCountryCodeEnabled={false}
//                 maxlength="20"
//                 className="w-full p-3 flex-1  border-l-[0px] rounded-l-[0px] border border-gray-300 rounded-r-lg"
//                 placeholder="+234 (812) 000-0000"
//                 required
//               />
//             </div>
//           </div>

//           <div>
//             <label
//               data-aos="fade-up"
//               className="block mb-2 text-sm font-medium text-[#344054]"
//               htmlFor="nature-of-enquiry"
//             >
//               Nature of Enquiry
//             </label>
//             <select
//               data-aos="fade-up"
//               name="Dropdown"
//               className="w-full p-3 border border-gray-300 rounded-lg"
//               required
//             >
//               <option selected="true" value="-Select-">
//                 -Select-
//               </option>
//               <option value="Partnerships &amp; Collaboration">
//                 Partnerships & Collaboration
//               </option>
//               <option value="General Enquiries">General Enquiries</option>
//               <option value="Trade Partner Enquiry">
//                 Trade Partner Enquiry
//               </option>
//               <option value="Request for Proposal">Request for Proposal</option>
//             </select>
//           </div>

//           <div>
//             <label
//               data-aos="fade-up"
//               className="block mb-2 text-sm font-medium text-[#344054]"
//               htmlFor="message"
//             >
//               Message
//             </label>
//             <textarea
//               data-aos="fade-up"
//               name="MultiLine"
//               maxlength="65535"
//               className="w-full p-3 border border-gray-300 rounded-lg"
//               placeholder="Enter your message here"
//               rows="4"
//               required
//             ></textarea>
//           </div>

//           <button
//             data-aos="fade-up"
//             type="submit"
//             className="w-full p-3 bg-[#ED3237] text-white rounded-lg text-lg font-semibold hover:bg-red-600"
//           >
//             Send message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default ContactForm;
