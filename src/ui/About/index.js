import React from "react";
import "./index.scss";

import Container from "../Container";
import Section from "../Section";
import SectionTitle from "../../elements/SectionTitle";
import Para from "../../elements/Para";
import Navigator from "../../elements/Navigator";
import Panarama from "../../components/Panarama";
function About() {
  return (
    <Section id="about" classes="section--light">
      <Container>
        <div className="section__container">
          <div className="section__title-box">
            <SectionTitle>About.</SectionTitle>
          </div>
          <div className="section__text-box">
            <Panarama>Myself</Panarama>
            <Para classes="para--about">
              My full name is Tejas Sharma. I am a web developer with a
              Bachelor's degree in Computer Science. I live in India at a very
              early age I became addicted to trying new stuff mostly related to
              technology but due to a lack of resources, I couldn't able to
              master the skills I needed to become adroit in the field despite
              mulling over the things I lack I decided to keep moving and learning anyway and
              made myself a utilitarian.
            </Para>
            <Navigator directTo="#dexter">Dexterity</Navigator>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default About;
