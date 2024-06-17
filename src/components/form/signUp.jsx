import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './form.css'





function SignUp() {

    useEffect(() => {
        AOS.init({ duration: 3000, once: true });
    }, []);




    return (
    <div>
            
        <div className="modal z-[999]">
            <div className="modal-content">
                <div className="modal-header">
                    <h2 className="text-[]">Sign Up Trade Partner</h2>
                    <span className="close">&times;</span>
                </div>
                <p>Please fill the form below</p>
                <form>
                    <label htmlFor="company-name">
                        Company Name <span>*</span>
                    </label>
                    <input
                        type="text"
                        id="company-name"
                        name="company-name"
                        placeholder="Enter full name"
                        required
                    />

                    <label htmlFor="office-address">
                        Office Address <span>*</span>
                    </label>
                    <input
                        type="text"
                        id="office-address"
                        name="office-address"
                        placeholder="Enter address"
                        required
                    />

                    <label htmlFor="official-email">
                        Official Email <span>*</span>
                    </label>
                    <input
                        type="email"
                        id="official-email"
                        name="official-email"
                        placeholder="Enter email address"
                        required
                    />

                    <label htmlFor="phone-number">
                        Office Phone Number <span>*</span>
                    </label>
                    <input
                        type="tel"
                        id="phone-number"
                        name="phone-number"
                        placeholder="Enter phone number"
                        required
                    />

                    <label htmlFor="company-website">
                        Company Website <span>*</span>
                    </label>
                    <input
                        type="url"
                        id="company-website"
                        name="company-website"
                        placeholder="Enter website URL"
                        required
                    />

                    <button type="submit">Register</button>
                </form>
            </div>
        </div>

      </div>
    );
}

export default SignUp;
