import React from "react";
import "./index.scss";

function Tag(props) {
  return <span data-aos='fade-up' className={`tag ${props.classes}`}>{props.children}</span>;
}

export default Tag;
