import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../contents/styles/fadeLink.css'; // Ensure this is the correct path to your CSS
import { FiLoader } from "react-icons/fi";

const FadeLink = ({ to, children, onClick }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
      navigate(to);
      setLoading(false);
    }, 400); // 2 seconds delay
    if (onClick) onClick();
  };

  return (
    
        <div className={`fade-link ${loading ? 'fade-out' : 'fade-in'}`}>
            <NavLink to={to} onClick={handleClick}>
                {children}
            </NavLink>
            {loading && (
                <div className='overlay'>
                    <div className="loading">
                        <FiLoader size={30} />
                    </div>
                </div>
            )}
        </div>
    
  );
};

export default FadeLink;


