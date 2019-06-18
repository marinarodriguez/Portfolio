import React from "react";
import "./styles.scss";
import AwesomeReact from "../../images/awesome.png";
import AwesomeJavascript from "../../images/awesomeoriginal.png";
import Bmind from "../../images/bmind.png";
import RockAndCode from "../../images/rockandcode.png";
import HarryPotter from "../../images/harrypotter.png";
import Project from "../Project";

const Projects = props => {
  return (


    
    <div className="projects__container">
      
      <Project
        title="APC: Código Heredado"
        url="https://github.com/Adalab/fairfax-m3-front-and-lefts"
        image={AwesomeReact}
        description="Proyecto en React sobre código heredado"
      />
      <Project
        title="Awesome Profile Cards"
        url="https://github.com/Adalab/f-m2-disena-tu-aventura"
        image={AwesomeJavascript}
      />
      <Project
        title="BMind Holidays"
        url="https://github.com/marinarodriguez/f-m4-bmind-calendar"
        image={Bmind}
      />
      <Project
        title="Rock & Code"
        url="https://github.com/Adalab/f-m1-rock-code"
        image={RockAndCode}
      />
      <Project
        title="Harry Potter characters"
        url="https://github.com/Adalab/f-m3-evaluacion-final-marinarodriguez"
        image={HarryPotter}
      />
    </div>
  );
};

export default Projects;
