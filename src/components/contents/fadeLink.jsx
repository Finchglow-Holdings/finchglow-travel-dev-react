import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../contents/styles/fadeLink.css"; // Ensure this is the correct path to your CSS
import { FiLoader } from "react-icons/fi";

const FadeLink = ({ to, children, onClick }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
      navigate(to, { replace: true });
      window.scrollTo(0, 0); // Scroll to the top of the page
      // window.location.reload();
      setLoading(false);
    }, 100); // 1 second delay
    if (onClick) onClick();
  };

  return (
    <div
      className={`fade-link w-full flex justify-start items-start ${loading ? "fade-out" : "fade-in"}`}
    >
      <NavLink to={to} onClick={handleClick}>
        {children}
      </NavLink>
      {loading && (
        <div className="overlay">
          <div className="loading">
            <FiLoader size={30} />
          </div>
        </div>
      )}
    </div>
  );
};

export default FadeLink;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { RiLoader2Line } from "react-icons/ri";
// import "../contents/styles/fadeLink.css"; // Ensure you have the required CSS for the fade effect and loading spinner

// const FadeLink = ({ to, children }) => {
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleClick = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     setTimeout(() => {
//       navigate(to);
//       setLoading(false);
//     }, 500); // Adjust the timeout to match your fade duration
//   };

//   return (
//     <a href={to} onClick={handleClick} className="fade-link">
//       {children}
//       {loading && <RiLoader2Line className="spinner" />}
//     </a>
//   );
// };

// export default FadeLink;
