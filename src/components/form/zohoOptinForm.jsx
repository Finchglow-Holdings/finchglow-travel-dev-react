import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import "./zoho.css";


const ZohoOptinForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://vkqvt-zgpvh.maillist-manage.net/js/optin.min.js";
    script.onload = () => {
      if (window.setupSF) {
        window.setupSF(
          'sf3zf872ce0486e1c60e8b6e94f2b182c0fafe686e016e87ed76766d4298099db22d',
          'ZCFORMVIEW',
          false,
          'light',
          false,
          '0'
        );
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add your custom event handling here before form submission
  };

  const location = useLocation();
  const isHomePage = location.pathname === "/";
    const isPartnerPlusPage = location.pathname === "/partnerPlus";
    const isBlogPostPage = location.pathname === "/blogPost";

  return (
    <div id="sf3zf872ce0486e1c60e8b6e94f2b182c0fafe686e016e87ed76766d4298099db22d" data-type="signupform">
      <div id="customForm">
        <div className="quick_form_19_css" name="SIGNUP_BODY">
          <div>
            <div id="SIGNUP_HEADING"></div>
            <div style={{ position: 'relative' }}>
              <div id="Zc_SignupSuccess" style={{ display: 'none', position: 'absolute', marginLeft: '4%', width: '90%', backgroundColor: 'white', padding: '3px', border: '3px solid rgb(194, 225, 154)', marginTop: '10px', marginBottom: '10px', wordBreak: 'break-all' }}>
                <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                  <tbody>
                    <tr>
                      <td width="10%">
                        <img className="successicon" src="https://vkqvt-zgpvh.maillist-manage.net/images/challangeiconenable.jpg" align="absmiddle" alt="Success Icon" />
                      </td>
                      <td>
                        <span id="signupSuccessMsg" style={{ color: 'rgb(73, 140, 132)', fontFamily: 'sans-serif', fontSize: '14px', wordBreak: 'break-word' }}>&nbsp;&nbsp;Thank you for Signing Up</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <form method="POST" id="zcampaignOptinForm" action="https://vkqvt-zgpvh.maillist-manage.net/weboptin.zc" target="_zcSignup" onSubmit={handleFormSubmit}>
              <div id="errorMsgDiv"></div>
              <div>
                <input type="text" placeholder="Enter your email" changeitem="SIGNUP_FORM_FIELD" name="CONTACT_EMAIL" id="EMBED_FORM_EMAIL_LABEL" />
              </div>
              <p className={`text-[14px] mb-[10px] text-[#375370] ${isBlogPostPage ? ' ' : 'hidden'}`}>Read about our privacy policy</p>
              <p className={`text-[14px] mb-[10px] leading-[20px] text-[#375370] ${isHomePage ? ' '  : 'hidden'}`}>We’ll keep your data safe.</p>
              <div>
                <input className={` ${isPartnerPlusPage ? ' hidden'  : isBlogPostPage ? 'hidden '  : isHomePage ? 'hidden '  : ''}`} type="text" placeholder="Name" changeitem="SIGNUP_FORM_FIELD" name="LASTNAME" id="EMBED_FORM_NAME_LABEL" />
              </div>
              <div>
                <input className={`submit ${isPartnerPlusPage ? 'signUp '  : ''}`} type="submit" name="SIGNUP_SUBMIT_BUTTON" id="zcWebOptin" value="Sign Up Now" />
              </div>
              <input type="hidden" id="fieldBorder" value="" />
              <input type="hidden" id="submitType" name="submitType" value="optinCustomView" />
              <input type="hidden" id="emailReportId" name="emailReportId" value="" />
              <input type="hidden" id="formType" name="formType" value="QuickForm" />
              <input type="hidden" name="zx" id="cmpZuid" value="12f60bbd1" />
              <input type="hidden" name="zcvers" value="3.0" />
              <input type="hidden" name="oldListIds" id="allCheckedListIds" value="" />
              <input type="hidden" id="mode" name="mode" value="OptinCreateView" />
              <input type="hidden" id="zcld" name="zcld" value="1e2e7c7346941391" />
              <input type="hidden" id="zctd" name="zctd" value="1e2e7c73462bdbe1" />
              <input type="hidden" id="document_domain" value="" />
              <input type="hidden" id="zc_Url" value="vkqvt-zgpvh.maillist-manage.net" />
              <input type="hidden" id="new_optin_response_in" value="0" />
              <input type="hidden" id="duplicate_optin_response_in" value="0" />
              <input type="hidden" name="zc_trackCode" id="zc_trackCode" value="ZCFORMVIEW" />
              <input type="hidden" id="zc_formIx" name="zc_formIx" value="3zf872ce0486e1c60e8b6e94f2b182c0fafe686e016e87ed76766d4298099db22d" />
              <input type="hidden" id="viewFrom" value="URL_ACTION" />
              <span style={{ display: 'none' }} id="dt_CONTACT_EMAIL">1,true,6,Contact Email,2</span>
              <span style={{ display: 'none' }} id="dt_FIRSTNAME">1,false,1,First Name,2</span>
              <span style={{ display: 'none' }} id="dt_LASTNAME">1,false,1,Last Name,2</span>
            </form>
          </div>
        </div>
      </div>
      <img src="https://vkqvt-zgpvh.maillist-manage.net/images/spacer.gif" className='hidden' id="refImage" onLoad={() => { window.referenceSetter && window.referenceSetter(document.getElementById('refImage')) }} alt="Reference" />
      <input type="hidden" id="signupFormType" value="QuickForm_Vertical" />
      <div id="zcOptinOverLay" onContextMenu={() => false} style={{ display: 'none', textAlign: 'center', backgroundColor: 'rgb(0, 0, 0)', opacity: 0.5, zIndex: 100, position: 'fixed', width: '100%', top: 0, left: 0, height: '988px' }}></div>
      <div id="zcOptinSuccessPopup" style={{ display: 'none', zIndex: 9999, width: '800px', height: '40%', top: '84px', position: 'fixed', left: '26%', backgroundColor: '#FFFFFF', borderColor: '#E6E6E6', borderStyle: 'solid', borderWidth: '1px', boxShadow: '0 1px 10px #424242', padding: '35px' }}>
        <span style={{ position: 'absolute', top: '-16px', right: '-14px', zIndex: 99999, cursor: 'pointer' }} id="closeSuccess">
          <img src="https://vkqvt-zgpvh.maillist-manage.net/images/videoclose.png" alt="Close" />
        </span>
        <div id="zcOptinSuccessPanel"></div>
      </div>
    </div>
  );
};

export default ZohoOptinForm;
