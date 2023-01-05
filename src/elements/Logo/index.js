import React from "react";

import logo from "../../assets/Logo.svg";

import "./index.scss";

function Logo() {
  return (
    <a className="logo" href="/">
      <img alt='logo' className="logo__img" src={logo} />
    </a>
  );
}

export default Logo;
