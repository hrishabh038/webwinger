import React from "react";
import "./ClickerCSS/SNavClicker.css";
import "./ClickerCSS/Clicker.css";
import "./ClickerCSS/HollowClicker.css";

const Clicker = ({ icon, name, backicon, link, notification }) => {
  return (
    <a className="clicker" href={link}>
      <button>
        <div>
          {icon ? <i className={"clicker-icon" + " " + icon}></i> : null}
          {name ? <span className="clicker-name">{name}</span> : null}
        </div>
        {backicon ? (
          <i className={"clicker-backicon" + " " + backicon}></i>
        ) : null}

        {notification ? (
          <span className="clicker-notification-dot">
            <a>{notification <= 99 ? notification : "99+"}</a>
          </span>
        ) : null}
      </button>
    </a>
  );
};

export const HollowClicker = ({ icon, name, backicon, link, notification }) => {
  return (
    <a className="hollow-clicker" href={link}>
      <button>
        <div>
          {icon ? <i className={"hollow-clicker-icon" + " " + icon}></i> : null}
          {name ? <span className="hollow-clicker-name">{name}</span> : null}
        </div>
        {backicon ? (
          <i className={"hollow-clicker-backicon" + " " + backicon}></i>
        ) : null}

        {notification ? (
          <span className="hollow-clicker-notification-dot">
            <a>{notification <= 99 ? notification : "99+"}</a>
          </span>
        ) : null}
      </button>
    </a>
  );
};

export const SNavClicker = ({ icon, name, backicon, link, notification }) => {
  return (
    <a className="snav-clicker" href={link}>
      <button>
        <div>
          {icon ? <i className={"snav-clicker-icon" + " " + icon}></i> : null}
          {name ? <span className="snav-clicker-name">{name}</span> : null}
        </div>
        {backicon ? (
          <i className={"snav-clicker-backicon" + " " + backicon}></i>
        ) : null}

        {notification ? (
          <span className="snav-clicker-notification-dot">
            <a>{notification <= 99 ? notification : "99+"}</a>
          </span>
        ) : null}
      </button>
    </a>
  );
};

export default Clicker;
