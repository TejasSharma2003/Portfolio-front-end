import React from "react";
import "./index.scss";

import Section from "../../ui/Section";
import SectionTitle from "../../elements/SectionTitle";
import Container from "../Container";

import Form from "../../components/Form";
import Panarama from "../../components/Panarama";

function Contact() {
  return (
    <Section id="contact">
      <Container>
        <div className="section__container">
          <div className="section__title-box">
            <SectionTitle>Contact.</SectionTitle>
          </div>

          <div className="section__text-box">
            <p className="para">
              <Panarama>work</Panarama>
              If you need a modern and powerful website for your business,
              startup, or for yourself, I am open to work. Or if you just wanna
              talk don't hesitate just mail me.
            </p>
            <Form />
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Contact;
