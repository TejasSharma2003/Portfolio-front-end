import React from "react";
import "./index.scss";

function Section(props) {
  const classes = props.classes || "";

  return (
    <section id={props.id} className={`section ${classes}`}>
      {props.children}
    </section>
  );
}

export default Section;
