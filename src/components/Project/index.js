import React from "react";
import "./styles.scss";

const Project = props => {
  return (
    <a href={props.url} target="_blank">
      <div className="project__container">
        <div
          className="project__image"
          style={{ backgroundImage: `url('${props.image}')` }}
        />
        <h2 className="project__title">{props.title}</h2>
        <p className="project__description">{props.description}</p>
      </div>
    </a>
  );
};

export default Project;
