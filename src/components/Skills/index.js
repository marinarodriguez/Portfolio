import React from "react";
import "./styles.scss";

const Skills = props => {
  return (
    <div className="skills__container">
        <h2 className="skills__title">Herramientas</h2>
      <ul className="skills__list--bubbles">
        <li className="list__bubble">JavaScript</li>
        <li className="list__bubble">React</li>
        <li className="list__bubble">CSS3</li>
        <li className="list__bubble">SASS</li>
        <li className="list__bubble">API REST</li>
        <li className="list__bubble">HTML5</li>
        <li className="list__bubble">Git</li>
        <li className="list__bubble">Diseño Responsive</li>
        <li className="list__bubble">Grid</li>
        <li className="list__bubble">E6</li>
        <li className="list__bubble soft">SCRUM</li>
        <li className="list__bubble soft">Metodologías Ágiles</li>
        <li className="list__bubble soft">Agile</li>
        <li className="list__bubble soft">Trello</li>
        <li className="list__bubble design">Photoshop</li>
        <li className="list__bubble design">Illustrator</li>
        <li className="list__bubble design">Premiere</li>
        <li className="list__bubble design">Sketch</li>
        <li className="list__bubble design">After Effects</li>
      </ul>
    </div>
  );
};

export default Skills;
