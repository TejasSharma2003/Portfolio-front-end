import React from "react";
import "./index.scss";

import Section from "../../ui/Section";
import Logo from "../../elements/Logo";
import Container from "../../ui/Container";

import SocialIcon from "../../elements/SocialIcon";

import { CiTwitter } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

function Form() {
  const year = new Date().getFullYear();

  return (
    <Section classes="section--light section-footer">
      <Container>
        <footer className="footer">
          <Logo />
          <div className="footer__social-icon-container">
            <SocialIcon directTo="#">
              <CiTwitter />
            </SocialIcon>
            <SocialIcon directTo="#">
              <CiMail />
            </SocialIcon>
            <SocialIcon directTo="#">
              <CiLinkedin />
            </SocialIcon>
          </div>
          <span className="para"></span>
        </footer>
        <p className="footer__copyright">
          Handcrafted by me.
          <span className="footer__copyright-symbol-box">
            <AiOutlineCopyrightCircle className="footer__copyright-symbol" />{" "}
            TEJAS SHARMA <span>{year}</span>
          </span>
        </p>
      </Container>
    </Section>
  );
}

export default Form;
