import React, { useRef, useEffect, useState } from "react";
import "./index.scss";

import me from "../../assets/Me.png";
import placeHolderMe from "../../assets/Me-placeholder.jpg";

import Container from "../Container";

import Button from "../../elements/Button";
import Para from "../../elements/Para";

import { AiOutlineArrowDown } from "react-icons/ai";

import MyImage from "../../components/MyImage";
import ScrollTop from "../../components/ScrollTop";

function Hero() {
  const containerRef = useRef();
  const [showSrollTop, setShowScrollTop] = useState(false);

  const observerCallBack = (event) => {
    const [entry] = event;
    if (entry.isIntersecting) {
      setShowScrollTop(false);
    } else {
      setShowScrollTop(true);
    }
  };

  useEffect(() => {
    const current = containerRef.current;
    const options = {
      root: null,
      rootMargin: "400px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(observerCallBack, options);
    observer.observe(current);

    return () => {
      observer.unobserve(current);
    };
  }, []);

  return (
    <>
      <Container>
        <section className="hero">
          <div ref={containerRef} className="hero__text-area">
            <h1 className="hero__intro">Hi. I'm Tejas.</h1>
            <Para classes="para--hero">
              I'm a Web Developer and Designer. Developing and Designing things
              from the scratch to ground up fascinates me a lot. send me an
              email. If we are a good fit, I will give you a time and cost
              estimate.
            </Para>
            <Button directTo="#about" classes="btn-hero hero__btn btn--fadeup">
              Explore
              <span className="hero__btn-span">
                <AiOutlineArrowDown />
              </span>
            </Button>
          </div>
          <div className="hero__img-box">
            <MyImage src={me} alt="me" placeHolderMe={placeHolderMe} />
          </div>
        </section>
      </Container>
      <ScrollTop showSrollTop={showSrollTop} />
    </>
  );
}

export default Hero;
