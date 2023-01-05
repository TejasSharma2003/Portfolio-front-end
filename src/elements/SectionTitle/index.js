import React from "react";

function SectionTitle(props) {
  return (
    <h1 data-aos="fade-right" className="section__title">
      {props.children}
    </h1>
  );
}

export default SectionTitle;
