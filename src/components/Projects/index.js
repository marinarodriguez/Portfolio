import React from "react";
import "./styles.scss";
import Avatar from "../../images/avatar.jpg";
import Project from "../Project";

const Projects = props => {
  return (
    <div className="projects__container">
      <Project
        title="APC: Código Heredado"
        url="https://github.com/marinarodriguez/f-m4-bmind-calendar"
      />
      <Project
        title="Awesome Profile Cards"
        url="https://github.com/marinarodriguez/f-m4-bmind-calendar"
      />
      <Project
        title="BMind Holidays"
        url="https://github.com/marinarodriguez/f-m4-bmind-calendar"
      />
      <Project
        title="Rock & Code"
        url="https://github.com/marinarodriguez/f-m4-bmind-calendar"
      />
      <Project
        title="Harry Potter characters"
        url="https://github.com/marinarodriguez/f-m4-bmind-calendar"
      />
    </div>
  );
};

export default Projects;
