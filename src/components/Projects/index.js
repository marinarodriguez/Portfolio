import React from "react";
import "./styles.scss";
// import AwesomeReact from "../../images/awesome.png";
// import AwesomeJavascript from "../../images/awesomeoriginal.png";
// import Bmind from "../../images/bmind.png";
// import RockAndCode from "../../images/rockandcode.png";
// import HarryPotter from "../../images/harrypotter.png";
//import Project from "../Project";

const Projects = props => {
  return (
    <div className="projects__wrapper">
     
      <div className="projects__container">
      <h2 className="projects__title">Proyectos realizados</h2>
        <div className="project__container">
          <div className="project__image">
            <i className="fab fa-react symbol" />
          </div>
          <div>
            <h2 className="project__title">Proyecto Heredado: APC </h2>
            <p className="project__description">
              Migración integral del proyecto Awesome Profile Cards a React.
              Refactorización de código e implementación de nuevas
              funcionalidades. Realizado completamente en React.
              <br />
              <br />
              <a
                className="link__repo"
                href="https://github.com/Adalab/fairfax-m3-front-and-lefts"
                target="_blank"
              >
                <i className="fas fa-arrow-right" /> Repositorio en GitHub{" "}
              </a>
              <br />
              <a
                className="link__repo"
                href="http://beta.adalab.es/fairfax-m3-front-and-lefts/#/"
                target="_blank"
              >
                <i className="fas fa-arrow-right" /> Demo de la página{" "}
              </a>
            </p>

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
            </ul>
          </div>
        </div>

        <div className="project__container">
          <div className="project__image">
            <i className="fab fa-js-square symbol" />
          </div>
          <div>
            <h2 className="project__title">Awesome Profile Cards </h2>
            <p className="project__description">
              Proyecto realizado con JavaScript. Web responsive que permite al usuario crear una tarjeta de visita, personalizar el diseño y rellenarla con sus datos de contacto para después compartirla a través de un link o por Twitter. 
              <br />
              <br />
              <a
                className="link__repo"
                href="https://github.com/Adalab/f-m2-disena-tu-aventura"
                target="_blank"
              >
                <i className="fas fa-arrow-right" /> Repositorio en GitHub{" "}
              </a>
              <br />
              <a
                className="link__repo"
                href="http://beta.adalab.es/f-m2-disena-tu-aventura/"
                target="_blank"
              >
                <i className="fas fa-arrow-right" /> Demo de la página{" "}
              </a>
            </p>
            <ul className="skills__list--bubbles">
              <li className="list__bubble">JavaScript</li>
              <li className="list__bubble">CSS3</li>
              <li className="list__bubble">SASS</li>
              <li className="list__bubble">API REST</li>
              <li className="list__bubble">HTML5</li>
              <li className="list__bubble">Git</li>
              <li className="list__bubble">Diseño Responsive</li>
              <li className="list__bubble">Grid</li>
              <li className="list__bubble">E6</li>
            </ul>
          </div>
        </div>

        <div className="project__container">
          <div className="project__image">
            <i className="fab fa-react symbol" />
          </div>
          <div>
            <h2 className="project__title">BMind Holidays </h2>
            <p className="project__description">
              Una SPA realizada para BMind en 30 horas y usando una librería externa. Sobre la información recogida de una API, muestra los días de vacaciones de todos los empleados en un calendario anual, pudiendo filtrar por año. Además, el usuario logado (hard-coded en principio) puede escoger sus vacaciones y guardarlas.
              <br />
              <br />
              <a
                className="link__repo"
                href="https://github.com/marinarodriguez/f-m4-bmind-calendar"
                target="_blank"
              >
                <i className="fas fa-arrow-right" /> Repositorio en GitHub{" "}
              </a>
              <br />
              <a
                className="link__repo"
                href="http://beta.adalab.es/f-m4-bmind-calendar/#/"
                target="_blank"
              >
                <i className="fas fa-arrow-right" /> Demo de la página{" "}
              </a>
            </p>
            <ul className="skills__list--bubbles">
              <li className="list__bubble">JavaScript</li>
              <li className="list__bubble">React</li>
              <li className="list__bubble">CSS3</li>
              <li className="list__bubble">SASS</li>
              <li className="list__bubble">API REST</li>
              <li className="list__bubble">HTML5</li>
              <li className="list__bubble">Git</li>
              <li className="list__bubble">E6</li>
            </ul>
          </div>
        </div>

        <div className="project__container">
          <div className="project__image">
            <i className="fab fa-css3-alt symbol" />
          </div>
          <div>
            <h2 className="project__title">Rock & Code</h2>
            <p className="project__description">
              Proyecto de presentación como grupo, orientado completamente a maquetación responsive. Realizado principalmente con SASS y CSS3.
              <br />
              <br />
              <a
                className="link__repo"
                href="https://github.com/Adalab/f-m1-rock-code"
                target="_blank"
              >
                <i className="fas fa-arrow-right" /> Repositorio en GitHub{" "}
              </a>
              <br />
              <a
                className="link__repo"
                href="http://beta.adalab.es/f-m1-rock-code/"
                target="_blank"
              >
                <i className="fas fa-arrow-right" /> Demo de la página{" "}
              </a>
            </p>
            <ul className="skills__list--bubbles">
              <li className="list__bubble">CSS3</li>
              <li className="list__bubble">SASS</li>
              <li className="list__bubble">HTML5</li>
              <li className="list__bubble">Diseño Responsive</li>
              <li className="list__bubble">E6</li>
            </ul>
          </div>
        </div>

        <div className="project__container">
          <div className="project__image">
            <i className="fab fa-react symbol" />
          </div>
          <div>
            <h2 className="project__title">HP Characters Searcher</h2>
            <p className="project__description">
              Una SPA que recoge elementos de una API pública sobre los personajes de Harry Potter y puede ejecutar varios filtros encadenados sobre ellos. Tiene además un página de detalle que muestra más información sobre el personaje.
              <br />
              <br />
              <a
                className="link__repo"
                href="https://github.com/Adalab/f-m3-evaluacion-final-marinarodriguez"
                target="_blank"
              >
                <i className="fas fa-arrow-right" /> Repositorio en GitHub{" "}
              </a>
              <br />
              <a
                className="link__repo"
                href="http://beta.adalab.es/f-m3-evaluacion-final-marinarodriguez/#/"
                target="_blank"
              >
                <i className="fas fa-arrow-right" /> Demo de la página{" "}
              </a>
            </p>
            <ul className="skills__list--bubbles">
              <li className="list__bubble">JavaScript</li>
              <li className="list__bubble">React</li>
              <li className="list__bubble">CSS3</li>
              <li className="list__bubble">SASS</li>
              <li className="list__bubble">API REST</li>
              <li className="list__bubble">HTML5</li>
              <li className="list__bubble">Git</li>
              <li className="list__bubble">E6</li>
            </ul>
          </div>
        </div>
        <div className="project__container">
          <div className="project__image">
            <i className="fab fa-codepen symbol" />
          </div>
          <div>
            <h2 className="project__title">Jigglypuff</h2>
            <p className="project__description">
              Pequeño proyecto de investigación de posicionamiento en CSS, dibujando a Jigglypuff, un pokemon :).
              <br />
              <br />
              <a
                className="link__repo"
                href="http://beta.adalab.es/f-m3-evaluacion-final-marinarodriguez/#/"
                target="_blank"
              >
                <i className="fas fa-arrow-right" /> Proyecto en Codepen{" "}
              </a>
            </p>
            <ul className="skills__list--bubbles">
              <li className="list__bubble">CSS3</li>

              <li className="list__bubble">HTML5</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
