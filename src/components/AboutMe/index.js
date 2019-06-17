import React from "react";
import "./styles.scss";
import AvatarImage from "../../images/avatar2.png";
import Skills from "../Skills";

const AboutMe = props => {
  return (
    <div className="aboutme__container">
      <div className="aboutme__info">
        <div className="aboutme__presentation">
        <div
          className="avatar__image"
          style={{ backgroundImage: `url('${AvatarImage}')` }}
        />
        <div>
        <h1 className="aboutme__name">Marina Rodríguez</h1>
        <h3 className="aboutme__job">Front-End Developer</h3>
        </div>
        </div>
        <p className="aboutme__description">
          Habiéndome graduado en Bellas Artes y Comunicación Audiovisual y
          dedicando casi todo mi trabajo creativo al diseño gráfico, entré en
          contacto con el mundo del desarrollo Front-End al diseñar la interfaz
          de varias aplicaciones en proceso de creación. Ya había programado
          anteriormente y me había gustado, pero aquella experiencia me animó a
          seguir mi carrera profesional en el mundo del Front-End.
        </p>
      </div>
      <Skills />
    </div>
  );
};

export default AboutMe;
