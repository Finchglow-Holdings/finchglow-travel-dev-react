// import React from "react";
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import "./form.css";

// function SignUp() {
//   useEffect(() => {
//     AOS.init({ duration: 3000, once: true });
//   }, []);

//   return (
//     <div>
//       <div className="modal z-[999]">
//         <div className="modal-content">
//           <div className="modal-header">
//             <h2 className="text-[]">Sign Up Trade Partner</h2>
//             <span className="close">&times;</span>
//           </div>
//           <p>Please fill the form below</p>
//           <form
//             action="https://forms.zohopublic.com/finchglowholdings1/form/TravelsTradePartnerRegistration/formperma/g9hFj_hVi5JOGxIHVrkseK3XaZk2ei78smdXQ0-mhLQ/htmlRecords/submit"
//             name="form"
//             id="form"
//             method="POST"
//             accept-charset="UTF-8"
//             enctype="multipart/form-data"
//           >
//             <input type="hidden" name="zf_referrer_name" value="" />
//             <input type="hidden" name="zf_redirect_url" value="" />
//             <input type="hidden" name="zc_gad" value="" />
//             <h2>Travels Trade Partner Registration</h2>
//             <p></p>
//             <label> Name </label>
//             <input
//               type="text"
//               maxlength="255"
//               name="Name_First"
//               fieldType={7}
//               placeholder=""
//             />
//             <label>First Name</label>
//             <input
//               type="text"
//               maxlength="255"
//               name="Name_Last"
//               fieldType={7}
//               placeholder=""
//             />
//             <label>Last Name</label>
//             <label> Email </label>
//             <input
//               type="text"
//               maxlength="255"
//               name="Email"
//               value=""
//               fieldType={9}
//               placeholder=""
//             />
//             <label> Phone </label>
//             <input
//               type="text"
//               compname="PhoneNumber"
//               name="PhoneNumber_countrycode"
//               phoneFormat="1"
//               isCountryCodeEnabled={false}
//               maxlength="20"
//               value=""
//               fieldType={11}
//               id="international_PhoneNumber_countrycode"
//               placeholder=""
//             />
//             <label>Number</label>
//             <label>
//               <h2
//                 style={{
//                   boxSizing: "border-box",
//                   fontFamily: "goldplay",
//                   margin: 0,
//                   fontWeight: "bold",
//                   lineHeight: "1em",
//                   color: "#333",
//                   fontSize: "16px",
//                   clear: "both",
//                   display: "block",
//                   padding: 0,
//                   border: 0,
//                   textAlign: "left",
//                   fontStyle: "normal",
//                   fontVariantLigatures: "none",
//                   fontVariantCaps: "normal",
//                   letterSpacing: "normal",
//                   orphans: 2,
//                   textIndent: 0,
//                   textTransform: "none",
//                   widows: 2,
//                   wordSpacing: 0,
//                   whiteSpace: "normal",
//                   backgroundColor: "#fff",
//                   textDecorationColor: "initial",
//                 }}
//                 className="forminator-title"
//               >
//                 TRADE PARTNER BUSINESS DETAILS
//                 <br />
//               </h2>
//               <div>
//                 <br />
//               </div>
//             </label>
//             <label> Agency Name </label>
//             <input
//               type="text"
//               name="SingleLine"
//               value=""
//               fieldType={1}
//               maxlength="255"
//               placeholder=""
//             />
//             <label>
             
//               Business Address <em>*</em>
//             </label>
//             <input
//               type="text"
//               maxlength="255"
//               name="Address_AddressLine1"
//               placeholder=""
//             />
//             <label>Street Address</label>
//             <select name="Address_Country">
//               <option value="-Select-">-Select-</option>
//               <option>&Aring;land Islands</option>
//               <option>Afghanistan</option>
//               <option>Akrotiri</option>
//               <option>Albania</option>
//               <option>Algeria</option>
//               <option>American Samoa</option>
//               <option>Andorra</option>
//               <option>Angola</option>
//               <option>Anguilla</option>
//               <option>Antarctica</option>
//               <option>Antigua and Barbuda</option>
//               <option>Argentina</option>
//               <option>Armenia</option>
//               <option>Aruba</option>
//               <option>Ashmore and Cartier Islands</option>
//               <option>Australia</option>
//               <option>Austria</option>
//               <option>Azerbaijan</option>
//               <option>Bahrain</option>
//               <option>Bangladesh</option>
//               <option>Barbados</option>
//               <option>Bassas Da India</option>
//               <option>Belarus</option>
//               <option>Belgium</option>
//               <option>Belize</option>
//               <option>Benin</option>
//               <option>Bermuda</option>
//               <option>Bhutan</option>
//               <option>Bolivia</option>
//               <option>Bosnia and Herzegovina</option>
//               <option>Botswana</option>
//               <option>Bouvet Island</option>
//               <option>Brazil</option>
//               <option>British Indian Ocean Territory</option>
//               <option>British Virgin Islands</option>
//               <option>Brunei</option>
//               <option>Bulgaria</option>
//               <option>Burkina Faso</option>
//               <option>Burma</option>
//               <option>Burundi</option>
//               <option>Cambodia</option>
//               <option>Cameroon</option>
//               <option>Canada</option>
//               <option>Cape Verde</option>
//               <option>Caribbean Netherlands</option>
//               <option>Cayman Islands</option>
//               <option>Central African Republic</option>
//               <option>Chad</option>
//               <option>Chile</option>
//               <option>China</option>
//               <option>Christmas Island</option>
//               <option>Clipperton Island</option>
//               <option>Cocos (Keeling) Islands</option>
//               <option>Colombia</option>
//               <option>Comoros</option>
//               <option>Cook Islands</option>
//               <option>Coral Sea Islands</option>
//               <option>Costa Rica</option>
//               <option>Cote D'Ivoire</option>
//               <option>Croatia</option>
//               <option>Cuba</option>
//               <option>Curaçao</option>
//               <option>Cyprus</option>
//               <option>Czech Republic</option>
//               <option>Democratic Republic of the Congo</option>
//               <option>Denmark</option>
//               <option>Dhekelia</option>
//               <option>Djibouti</option>
//               <option>Dominica</option>
//               <option>Dominican Republic</option>
//               <option>Ecuador</option>
//               <option>Egypt</option>
//               <option>El Salvador</option>
//               <option>Equatorial Guinea</option>
//               <option>Eritrea</option>
//               <option>Estonia</option>
//               <option>Ethiopia</option>
//               <option>Europa Island</option>
//               <option>Falkland Islands (Islas Malvinas)</option>
//               <option>Faroe Islands</option>
//               <option>Federated States of Micronesia</option>
//               <option>Fiji</option>
//               <option>Finland</option>
//               <option>France</option>
//               <option>French Guiana</option>
//               <option>French Polynesia</option>
//               <option>French Southern and Antarctic Lands</option>
//               <option>Gabon</option>
//               <option>Gaza Strip</option>
//               <option>Georgia</option>
//               <option>Germany</option>
//               <option>Ghana</option>
//               <option>Gibraltar</option>
//               <option>Glorioso Islands</option>
//               <option>Greece</option>
//               <option>Greenland</option>
//               <option>Grenada</option>
//               <option>Guadeloupe</option>
//               <option>Guam</option>
//               <option>Guatemala</option>
//               <option>Guernsey</option>
//               <option>Guinea</option>
//               <option>Guinea-bissau</option>
//               <option>Guyana</option>
//               <option>Haiti</option>
//               <option>Heard Island and Mcdonald Islands</option>
//               <option>Holy See (Vatican City)</option>
//               <option>Honduras</option>
//               <option>Hong Kong</option>
//               <option>Hungary</option>
//               <option>Iceland</option>
//               <option>India</option>
//               <option>Indonesia</option>
//               <option>Iran</option>
//               <option>Iraq</option>
//               <option>Ireland</option>
//               <option>Isle of Man</option>
//               <option>Israel</option>
//               <option>Italy</option>
//               <option>Jamaica</option>
//               <option>Jan Mayen</option>
//               <option>Japan</option>
//               <option>Jersey</option>
//               <option>Jordan</option>
//               <option>Juan De Nova Island</option>
//               <option>Kazakhstan</option>
//               <option>Kenya</option>
//               <option>Kiribati</option>
//               <option>Kosovo</option>
//               <option>Kuwait</option>
//               <option>Kyrgyzstan</option>
//               <option>Laos</option>
//               <option>Latvia</option>
//               <option>Lebanon</option>
//               <option>Lesotho</option>
//               <option>Liberia</option>
//               <option>Libya</option>
//               <option>Liechtenstein</option>
//               <option>Lithuania</option>
//               <option>Luxembourg</option>
//               <option>Macau</option>
//               <option>Madagascar</option>
//               <option>Malawi</option>
//               <option>Malaysia</option>
//               <option>Maldives</option>
//               <option>Mali</option>
//               <option>Malta</option>
//               <option>Marshall Islands</option>
//               <option>Martinique</option>
//               <option>Mauritania</option>
//               <option>Mauritius</option>
//               <option>Mayotte</option>
//               <option>Mexico</option>
//               <option>Moldova</option>
//               <option>Monaco</option>
//               <option>Mongolia</option>
//               <option>Montenegro</option>
//               <option>Montserrat</option>
//               <option>Morocco</option>
//               <option>Mozambique</option>
//               <option>Namibia</option>
//               <option>Nauru</option>
//               <option>Navassa Island</option>
//               <option>Nepal</option>
//               <option>Netherlands</option>
//               <option>New Caledonia</option>
//               <option>New Zealand</option>
//               <option>Nicaragua</option>
//               <option>Niger</option>
//               <option>Nigeria</option>
//               <option>Niue</option>
//               <option>Norfolk Island</option>
//               <option>North Korea</option>
//               <option>North Macedonia</option>
//               <option>Northern Mariana Islands</option>
//               <option>Norway</option>
//               <option>Oman</option>
//               <option>Pakistan</option>
//               <option>Palau</option>
//               <option>Palestine</option>
//               <option>Panama</option>
//               <option>Papua New Guinea</option>
//               <option>Paraguay</option>
//               <option>Peru</option>
//               <option>Philippines</option>
//               <option>Pitcairn Islands</option>
//               <option>Poland</option>
//               <option>Portugal</option>
//               <option>Puerto Rico</option>
//               <option>Qatar</option>
//               <option>Republic of the Congo</option>
//               <option>Réunion</option>
//               <option>Romania</option>
//               <option>Russia</option>
//               <option>Rwanda</option>
//               <option>Saint Barthelemy</option>
//               <option>Saint Helena</option>
//               <option>Saint Kitts and Nevis</option>
//               <option>Saint Lucia</option>
//               <option>Saint Martin</option>
//               <option>Saint Pierre and Miquelon</option>
//               <option>Saint Vincent and the Grenadines</option>
//               <option>Samoa</option>
//               <option>San Marino</option>
//               <option>Sao Tome and Principe</option>
//               <option>Saudi Arabia</option>
//               <option>Senegal</option>
//               <option>Serbia</option>
//               <option>Seychelles</option>
//               <option>Sierra Leone</option>
//               <option>Singapore</option>
//               <option>Sint Eustatius</option>
//               <option>Sint Maarten</option>
//               <option>Slovakia</option>
//               <option>Slovenia</option>
//               <option>Solomon Islands</option>
//               <option>Somalia</option>
//               <option>South Africa</option>
//               <option>South Georgia and the South Sandwich Islands</option>
//               <option>South Korea</option>
//               <option>South Sudan</option>
//               <option>Spain</option>
//               <option>Sri Lanka</option>
//               <option>Sudan</option>
//               <option>Suriname</option>
//               <option>Svalbard</option>
//               <option>Swaziland</option>
//               <option>Sweden</option>
//               <option>Switzerland</option>
//               <option>Syria</option>
//               <option>Taiwan</option>
//               <option>Tajikistan</option>
//               <option>Tanzania</option>
//               <option>Thailand</option>
//               <option>The Bahamas</option>
//               <option>The Gambia</option>
//               <option>Timor-leste</option>
//               <option>Togo</option>
//               <option>Tokelau</option>
//               <option>Tonga</option>
//               <option>Trinidad and Tobago</option>
//               <option>Tunisia</option>
//               <option>Turkey</option>
//               <option>Turkmenistan</option>
//               <option>Turks and Caicos Islands</option>
//               <option>Tuvalu</option>
//               <option>Uganda</option>
//               <option>Ukraine</option>
//               <option>United Arab Emirates</option>
//               <option>United Kingdom</option>
//               <option>United States</option>
//               <option>Uruguay</option>
//               <option>Uzbekistan</option>
//               <option>Vanuatu</option>
//               <option>Venezuela</option>
//               <option>Vietnam</option>
//               <option>Wake Island</option>
//               <option>Wallis and Futuna</option>
//               <option>Western Sahara</option>
//               <option>Yemen</option>
//               <option>Zambia</option>
//               <option>Zimbabwe</option>
//             </select>
//             <label>Country</label>
//             <input type="submit" name="submitForm" value="Submit" />
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignUp;
