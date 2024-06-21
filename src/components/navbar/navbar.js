import React from 'react';
import './navbar.css';
import Recordicon from "./record.png"
import Annotating from "./annotating.jpeg"
import VishalValvi from "./vishalvalvi.jpg"
const Navbar = () => {
  return (
    <div className="navbar">
        <button className="button">
          <img src={Recordicon}alt="Record" />
        </button>
        <button className="button"> 
        <img src={Annotating} alt="Annotating" />
        </button>
      <div className="navbar-center presenting">
        <div className=''> <img src={VishalValvi} alt=''/><strong> Vishal Valvi (presenting)</strong></div>
        {/* <button className="stop-presenting">Stop presenting</button> */}
      </div>
    </div>
  );
};

export default Navbar;
