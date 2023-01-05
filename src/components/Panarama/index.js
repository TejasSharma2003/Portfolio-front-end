import React from "react";
import "./index.scss";

function Panarama(props) {
  return (
    <span data-aos="fade-up" className={`panarama ${props.classes}`}>
      {props.children}
    </span>
  );
}

export default Panarama;
