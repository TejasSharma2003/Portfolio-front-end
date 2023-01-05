import React from "react";
import "./index.scss";

import Section from "../../ui/Section";
import SectionTitle from "../../elements/SectionTitle";
import Container from "../Container";

import Form from "../../components/Form";

function Contact() {
  return (
    <Section id='contact'>
      <Container>
        <div className="section__container">
          <div className="section__title-box">
            <SectionTitle>Contact.</SectionTitle>
          </div>

          <div className="section__text-box">
            <p className="para">
              Immersed in stylesheets tweaking font sizes and contemplating
              layouts is where you'll find me.
            </p>
            <Form />
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Contact;
