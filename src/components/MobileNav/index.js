import React, { useState } from "react";

function MobileNav() {
  const [navOpen, setNavOpen] = useState(false);

  const onClickHandler = () => {
    setNavOpen((pre) => !pre);
  };

  const showNavLinksClass = navOpen ? "navbar__mobile-links--show" : "";
  const animateMenuClass = navOpen ? "navbar__hamburger--animate" : "";
  const animateLinkClass = navOpen ? "navbar__mobile-link--animate" : "";
  const bgActiveClass = navOpen ? "navbar__bg--active" : "";

  return (
    <>
      <div
        onClick={onClickHandler}
        className={`navbar__bg ${bgActiveClass}`}
      ></div>
      <div onClick={onClickHandler} className="navbar__menu ">
        <div className={`navbar__hamburger ${animateMenuClass}`}></div>

        <ul className={`navbar__mobile-links ${showNavLinksClass}`}>
          <li className={`navbar__mobile-link ${animateLinkClass}`}>
            <a href="#about">About</a>
          </li>
          <li className={`navbar__mobile-link ${animateLinkClass}`}>
            <a href="#dexter">Dextirity</a>
          </li>
          <li className={`navbar__mobile-link ${animateLinkClass}`}>
            <a href="#projects">Projects</a>
          </li>
          <li className={`navbar__mobile-link ${animateLinkClass}`}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MobileNav;

// <div
// onClick={onClickHandler}
// className={`navbar__mobile ${showNavLinksClass}`}
// >
// <div className="navbar__bg"></div>

// <ul className="navbar__mobile-links">
//   <li className="navbar__mobile-link">
//     <a href="#about">About</a>
//   </li>
//   <li className="navbar__mobile-link">
//     <a href="#dexter">Dextirity</a>
//   </li>
//   <li className="navbar__mobile-link">
//     <a href="#projects">Projects</a>
//   </li>
//   <li className="navbar__mobile-link">
//     <a href="#contact">Contact</a>
//   </li>
// </ul>
// <div onClick={onClickHandler} className="navbar__menu ">
//   <div className={`navbar__hamburger ${animateMenuClass}`}></div>
// </div>
// </div>
