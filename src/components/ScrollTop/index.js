import React from "react";
import "./index.scss";

import { RxDoubleArrowUp } from "react-icons/rx";

function ScrollTop(props) {
  const onClickHandler = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const showBtnClass = props.showSrollTop ? "scroll-to-top--show" : " ";

  return (
    <button
      className={`scroll-to-top ${showBtnClass}`}
      onClick={onClickHandler}
    >
      <span className="scroll-to-top__icon">
        <RxDoubleArrowUp />
      </span>
    </button>
  );
}

export default ScrollTop;
