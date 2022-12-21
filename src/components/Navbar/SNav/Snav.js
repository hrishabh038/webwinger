import React, { useState, useEffect } from "react";
import "./Snav.css";
import SNavButtons from "./SNavButtons/SNavButtons";
const Buttons = [
  {
    dropdown: true,
    clicker_container: null,
    clickers: [
      {
        icon: "bx bx-home",
        name: "Home",
        backicon: null,
        link: "#",
        notification: null,
      },
      {
        icon: "bx bx-podcast",
        name: "About",
        backicon: null,
        link: "#",
        notification: null,
      },
      {
        icon: "bx bx-bulb",
        name: "Blogs",
        backicon: null,
        link: "#",
        notification: null,
      },
    ],
  },
  {
    dropdown: true,
    clicker_container: "Web Services",
    clickers: [
      {
        icon: "bx bx-message-dots",
        name: "Contact",
        backicon: null,
        link: "/contact",
        notification: null,
      },
      {
        icon: "bx bx-line-chart",
        name: "Feedback",
        backicon: null,
        link: "/feedback",
        notification: null,
      },
    ],
  },
];
const Snav = ({ visibility }) => {
  
  return (
    <div className="snav" style={visibility ? null : { display: "none" }}>
      <section className="cc">
        <img
          src="https://i.postimg.cc/tTBc3p3X/hrishabh-jain-passport-photo-04-in-use.jpg"
          alt=""
        />
        <a>@hrishabh038</a>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          dolorum tenetur nobis pariatur obcaecati laborum quam suscipit
          repellat, amet fuga eius? Deserunt vitae enim tempora? Consectetur sed
          unde aut assumenda?
        </p>
        <ul>
          <li>
            <a href="#">
              <i className="bx bxl-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxl-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxl-github"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxl-instagram"></i>
            </a>
          </li>
        </ul>
      </section>
      {Buttons.map((button) => (
        <SNavButtons
          clicker_container={button.clicker_container}
          clickers={button.clickers}
          dropdown={button.dropdown}
        />
      ))}
    </div>
  );
};

export default Snav;
