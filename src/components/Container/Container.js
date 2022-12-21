import React from "react";
import "./Container.css";

const Container = ({ heading, content, icon, button }) => {
  return (
    <section className="container">
      <div className="container-heading">
        <span>{heading}</span>
        {button ? button : <i className={icon}></i>}
      </div>
      <div className="container-content">{content}</div>
    </section>
  );
};

export default Container;
