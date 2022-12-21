import React, { useState } from "react";
import "./Service.css";

const Service = ({ image, service, description }) => {
  const [select, setSelect] = useState(false);
  const style = [
    {
      border: "2px solid #e0e6e7",
      background: "white",
    },
    {
      border: "2px solid #6dc8c2",
      background: "#6dc8c23b",
    },
  ];
  return (
    <div
      className="service"
      style={select ? style[1] : style[0]}
      onClick={select ? () => setSelect(false) : () => setSelect(true)}
    >
      <i className={select ? "bx bxs-bolt-circle" : null}></i>
      <img src={image} alt="" />
      <span>{service}</span>
      <p>{description}</p>
    </div>
  );
};

export default Service;
