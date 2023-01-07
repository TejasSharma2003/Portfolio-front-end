import React from "react";

import Tag from "../../elements/Tag";
import Heading from "../../elements/Heading";
import Button from "../../elements/Button";
import Para from "../../elements/Para";

import { BsArrowRight } from "react-icons/bs";

import Panarama from "../Panarama";

function Work(props) {
  return (
    <div className="project__row">
      <div className="project__text-box">
        <Panarama classes="panarama-project">{props.timeLine}</Panarama>
        <Heading>{props.name}</Heading>
        {props.tags.map((tag, idx) => {
          return (
            <Tag key={idx} classes="tag-project">
              {tag}
            </Tag>
          );
        })}

        <Para classes="para--project">{props.description}</Para>
        <Button
          target="_blank"
          directTo={props.sourceCode}
          classes="btn-project"
        >
          See the Project{" "}
          <span className="project__arrow-icon">
            <BsArrowRight />
          </span>
        </Button>
      </div>
      <div className="project__img-box">
        {/* <MyImage src={props.img} alt="Project-img"  */}
        <img className="project__img" src={props.img} alt="Project-img" />
      </div>
    </div>
  );
}

export default Work;
