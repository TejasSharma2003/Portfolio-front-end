import React from "react";
import "./index.scss";

import Logo from "../../elements/Logo";
import Button from "../../elements/Button";
import Container from "../../ui/Container";
import MobileNav from "../../components/MobileNav";

function Navbar() {
  return (
    <Container>
      <nav className="navbar">
        <MobileNav />
        <ul className="navbar__links">
          <li className="navbar__link">
            <a href="#about">About</a>
          </li>
          <li className="navbar__link">
            <a href="#dexter">Dextirity</a>
          </li>
          <li className="navbar__link">
            <a href="#projects">Projects</a>
          </li>
        </ul>
        <div className="navbar__logo">
          <Logo />
        </div>

        <Button directTo="#contact" classes="btn-navbar">
          Email Me
        </Button>
      </nav>
    </Container>
  );
}

export default Navbar;
