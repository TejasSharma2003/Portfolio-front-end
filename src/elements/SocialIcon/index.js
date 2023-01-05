import React from "react";
import "./index.scss";

function SocialIcon(props) {
  return (
    <a target="_blank" href={props.directTo} className="social-icon">
      <span className="social-icon-span">{props.children}</span>
    </a>
  );
}

export default SocialIcon;
