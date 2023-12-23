// Navbar.js

import React from 'react';
import "../Navbar/Navbar.css";

const Navbar = () => {
  return (
    <div className=''>
      
    <div className='group-parent'>
         <div className="vector-parent">
          <img className="group-child" alt="" src="/logo.svg" />
          <b className="house">
            <span>H</span>
            <span className="ou">ou</span>
            <span>se</span>
          </b>
          <div className="bgr">BgR</div>
          <img
            className="blue-house-icon-isolated"
            alt=""
            src="/blue-house-icon-isolated@2x.png"
          />
        </div>
        

        <div className='frame-parent'>
        <div className="frame-wrapper">
            <div className="frame-group">
              <div className="vector-group">
                <img className="vector-icon" alt="" src="/vector@2x.png" />
                <div className="country">Country</div>
              </div>
              <div className="vector-group">
                <div className="country">State</div>
                <img className="vector-icon" alt="" src="/vector1.svg" />
              </div>
            </div>
          </div>

          <div className="an-agent-parent">
            <div className="an-agent">
            <h3 >Agent</h3>
            </div>
            <img className="jamworld-icon" alt="" src="/global.svg" />
            <div className="frame-container">
              <div className="line-parent">
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
              </div>
              <img className="user-circle-icon" alt="" src="./usercircle.svg" />
            </div>
          </div>
        </div>
    </div>
  
   
    </div>
  );
};

export default Navbar;
