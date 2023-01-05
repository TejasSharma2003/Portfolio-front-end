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
    <Section id='dexter'>
      <Container>
        <div className="section__container">
          <div className="section__title-box">
            <SectionTitle>Dexterity.</SectionTitle>
          </div>
          <div className="section__text-box">
            <Panarama>design</Panarama>
            <Para classes="para--dexter">
              I'm probably not the typical designer positioned behind an
              Illustrator artboard adjusting pixels, but I design. Immersed in
              stylesheets tweaking font sizes and contemplating layouts is where
              you'll find me.
            </Para>
            <Panarama>development</Panarama>
            <Para>
              I'm probably not the typical designer positioned behind an
              Illustrator artboard adjusting pixels, but I design. Immersed in
              stylesheets tweaking font sizes and contemplating layouts is where
              you'll find me.
            </Para>
            <Navigator directTo='#projects'>Projects</Navigator>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Dexter;
