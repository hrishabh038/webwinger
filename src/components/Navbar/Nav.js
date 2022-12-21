import React, { useState, useEffect } from "react";
import "./Nav.css";
import logo from "../../images/logo/5.png";
import logo2 from "../../images/logo/4.png";
import Clicker, { HollowClicker } from "../Clicker/Clicker";
import Avatar from "../Avatar/Avatar";
const Nav = ({ sidenavVisibility, onSideNavButtonClick }) => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // we use the useEffect hook to listen to the window resize event
  useEffect(() => {
    window.onresize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
  }, []);
  return (
    <nav className="nav">
      <div className="nav-left">
        <i
          class="bx bx-menu-alt-left"
          onClick={
            sidenavVisibility
              ? () => onSideNavButtonClick(false)
              : () => onSideNavButtonClick(true)
          }
        ></i>
        <img
          src={windowSize.width <= 400 ? logo2 : logo}
          style={
            windowSize.width <= 400 ? { width: "60px" } : { width: "150px" }
          }
          alt=""
        />
      </div>
      <div className="nav-center">
        <span>Good evening Hrishabh,</span>
        <p>Be proud of what you have achieved till now!!!</p>
      </div>
      <div className="nav-right">
        <div className="nav-right-forms">
          <HollowClicker name={"Signin"} />
          <div className="nav-button-separator"></div>
          <Clicker name={"Signup"} />
        </div>
        {/* <Avatar
          userimg={
            "https://i.postimg.cc/tTBc3p3X/hrishabh-jain-passport-photo-04-in-use.jpg"
          }
          username={"hrishabh038"}
        /> */}
      </div>
    </nav>
  );
};

export default Nav;
