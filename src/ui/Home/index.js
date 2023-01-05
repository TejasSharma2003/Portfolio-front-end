import React, { useRef, useEffect } from "react";
import "./index.scss";

import me from "../../assets/Me.png";

import Container from "../Container";

import Button from "../../elements/Button";
import Para from "../../elements/Para";

import { AiOutlineArrowDown } from "react-icons/ai";

function Home(props) {
  const containerRef = useRef();

  // const animation = "fade-up";

  const options = {
    root: null,
    rootMargin: "400px",
    threshold: 1.0,
  };

  const observerCallBack = (event) => {
    const [entry] = event;
    if (entry.isIntersecting) {
      props.visibility(false);
    } else {
      props.visibility(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallBack, options);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <Container>
      <section className="hero">
        <div ref={containerRef} className="hero__text-area">
          <h1 className="hero__intro">Hi. I'm Tejas.</h1>
          <Para classes="para--hero">
            I'm a Web & Mobile Designer and a Best-Selling Instructor. I'm not
            currently taking on new projects but email me and I will direct you
            towards capable Web Designers.
          </Para>
          <Button
            directTo="#about"
            classes="btn-hero hero__btn btn--fadeup"
          >
            Explore
            <span className="hero__btn-span">
              <AiOutlineArrowDown />
            </span>
          </Button>
        </div>
        <div data-aos="zoom-in-left" className="hero__img-box">
          <img className="hero__img" src={me} />
        </div>
      </section>
    </Container>
  );
}

export default Home;
