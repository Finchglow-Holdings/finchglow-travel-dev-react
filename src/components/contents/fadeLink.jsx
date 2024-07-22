// import React, { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import "../contents/styles/fadeLink.css"; // Ensure this is the correct path to your CSS
// import { FiLoader } from "react-icons/fi";

// const FadeLink = ({ to, children, onClick }) => {
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleClick = (event) => {
//     event.preventDefault();
//     setLoading(true);
//     setTimeout(() => {
//       navigate(to, { replace: true });
//       window.scrollTo(0, 0); // Scroll to the top of the page
//       // window.location.reload();
//       setLoading(false);
//     }, 1000); // 1 second delay
//     if (onClick) onClick();
//   };

//   return (
//     <div
//       className={`fade-link w-full flex justify-start items-start ${loading ? "fade-out" : "fade-in"}`}
//     >
//       <NavLink to={to} onClick={handleClick}>
//         {children}
//       </NavLink>
//       {loading && (
//         <div className="overlay">
//           <div className="loading">
//             <FiLoader size={50} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FadeLink;


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
      navigate(to, { replace: false });
      window.scrollTo(0, 0); // Scroll to the top of the page
      setLoading(false);
    }, 1000); // 1 second delay
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
            <FiLoader size={50} />
          </div>
        </div>
      )}
    </div>
  );
};

export default FadeLink;
