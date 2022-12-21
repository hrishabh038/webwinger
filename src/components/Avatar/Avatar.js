import React from "react";
import "./Avatar.css"

const Avatar = ({ userimg, username }) => {
  return (
    <div className="avatar">
      <img src={userimg} alt={username} />
      <span>{username}</span>
    </div>
  );
};

export default Avatar;
