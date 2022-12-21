import React, { useState } from "react";
import "./UserInputCSS/Input.css";
import "./UserInputCSS/Textarea.css";

const Input = ({ id, label, type }) => {
  const style = [
    { border: "2px solid #B7B5B5", backgroundColor: "white" },
    { border: "2px solid #6DC8C2", backgroundColor: "#6dc8c23b" },
  ];
  const [clicked, setClicked] = useState(false);
  return (
    <div
      className="input"
      onClick={() => setClicked(true)}
      onBlur={() => setClicked(false)}
      style={clicked ? style[1] : style[0]}
    >
      <label for={id} id={"placeholder-" + id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        aria-labelledby={"placeholder-" + id}
      />
    </div>
  );
};

export const Textarea = ({ id, label, type, height }) => {
  const style = [
    { border: "2px solid #B7B5B5", backgroundColor: "white" },
    { border: "2px solid #6DC8C2", backgroundColor: "#6dc8c23b" },
  ];
  const [clicked, setClicked] = useState(false);
  return (
    <div
      className="textarea"
      onClick={() => setClicked(true)}
      onBlur={() => setClicked(false)}
      style={clicked ? style[1] : style[0]}
    >
      <label for={id} id={"placeholder-" + id}>
        {label}
      </label>
      <textarea
        style={{ height: height }}
        type={type}
        id={id}
        name={id}
        aria-labelledby={"placeholder-" + id}
      />
    </div>
  );
};

export default Input;
