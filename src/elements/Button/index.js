import React from "react";
import "./index.scss";

function Button(props) {
  const animationName = props.animation || null;

  return (
    <a
      data-aos={animationName}
      href={props.directTo || "#"}
      className={`btn ${props.classes}`}
    >
      {props.children}
    </a>
  );
}

export default Button;
