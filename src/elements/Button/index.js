import React from "react";
import "./index.scss";

function Button(props) {
  const animationName = props.animation || null;
  const target = props.target || "";

  return (
    <a
      target={target}
      data-aos={animationName}
      href={props.directTo || "#"}
      className={`btn ${props.classes}`}
    >
      {props.children}
    </a>
  );
}

export default Button;
