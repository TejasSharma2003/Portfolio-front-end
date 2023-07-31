import React from "react";
import "./index.scss";

import Section from "../Section";
import Container from "../Container";

import SectionTitle from "../../elements/SectionTitle";

import Projects from "./Projects";
import Work from "../../components/Work";

function Project() {
  let projects = Projects.map((project) => {
    return (
      <Work
        key={project.id}
        img={project.imgSrc}
        name={project.name}
        description={project.description}
        sourceCode={project.sourceCode}
        tags={project.tags}
        timeLine={project.timeLine}

      />
    );
  }); 

  return (
    <Section id="projects" classes="section--light">
      <Container>
        <div className="project">
          <SectionTitle>Projects.</SectionTitle>
          {projects}
        </div>
      </Container>
    </Section>
  );
}

export default Project;
