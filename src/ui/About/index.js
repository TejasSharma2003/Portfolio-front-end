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
              "I have learned some absolutely invaluable information, stuff that
              I would never have even thought about. And I am an agency owner!
              ...Vako actually takes the time to do a full video review of your
              finished product at the end of the course.
            </Para>
            <Navigator directTo="#dexter">Dexterity</Navigator>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default About;
