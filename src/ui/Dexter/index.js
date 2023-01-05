import React from "react";
import "./index.scss";

import Section from "../Section";
import SectionTitle from "../../elements/SectionTitle";
import Navigator from "../../elements/Navigator";
import Container from "../Container";
import Panarama from "../../components/Panarama";
import Para from "../../elements/Para";

function Dexter() {
  return (
    <Section id="dexter">
      <Container>
        <div className="section__container">
          <div className="section__title-box">
            <SectionTitle>Dexterity.</SectionTitle>
          </div>
          <div className="section__text-box">
            <Panarama>design</Panarama>
            <Para classes="para--dexter">
              The Principle is to Keep it minimal and aesthetic. I design every
              website keeping this principle on my mind. Our brain is naturally
              more accustomed to an uncluttered room than a cluttered one which
              also makes us skeptical and overwhelmed minimal design is always
              promising and makes a website trustworthy to the audience.
            </Para>
            <Panarama>development</Panarama>
            <Para>
              I have exceptional knowledge of most web technologies such as
              React, HTML5, CSS3, Javascript, Nodejs, and Express with the help
              of these modern technologies I can create responsive as well as
              dynamic websites for modern businesses. Any business today needs a
              fully functional and responsive website with first-rate
              performance and I make sure the website is up to that standard.
            </Para>
            <Navigator directTo="#projects">Projects</Navigator>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Dexter;
