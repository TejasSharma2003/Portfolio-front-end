import React from "react";
import "./index.scss";

import { AiOutlineArrowDown } from "react-icons/ai";

function Navigator(props) {
  return (
    <a href={props.directTo || "#"} className="navigator">
      Next up{" "}
      <span className="navigator__span">
        {props.children}
        <AiOutlineArrowDown />
      </span>
    </a>
  );
}

export default Navigator;
