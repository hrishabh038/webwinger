import React, { useState } from "react";
import "./SNavButtons.css";
import { SNavClicker } from "../../../Clicker/Clicker";

const SNavButtons = ({ clicker_container, clickers, dropdown }) => {
  const headingStyle = {
  backgroundColor: "#6dc8c2",
  color: "white"
}
  const [DD, setDD] = useState(dropdown);
  const ddStyle = {
    transform: "rotate(315deg)"
  }
  return (
    <div className="snav-buttons">
      {clicker_container ? (
        <div
          className="snav-buttons-heading"
          onClick={
            DD ? () => setDD(false) : () => setDD(true)
          }
          style={DD ? headingStyle : null}
        >
          <span>{clicker_container}</span>
          <i class="bx bx-plus" style={DD ? ddStyle : null}></i>
        </div>
      ) : null}
      {DD ? (
        <div className="snav-button-container">
          {clickers.map((clicker) => (
            <SNavClicker
              icon={clicker.icon}
              name={clicker.name}
              backicon={clicker.backicon}
              link={clicker.link}
              notification={clicker.notification}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default SNavButtons;
