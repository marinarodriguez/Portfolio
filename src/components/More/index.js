import React from "react";
import "./styles.scss";

const More = props => {
  return (
    <div className="detail__container">
      <h2 className="experience__title">Algo más sobre mí</h2>
      <p>
        Me encanta competir en videojuegos y, sobre todo, mejorar con mi equipo.
        Disfruto desarrollando estrategias, proponiendo ideas y analizando
        nuestros puntos fuertes para equilibrar nuestras posibles debilidades.
        El haber liderado un equipo me ha ayudado a fortalecerme como
        <strong> organizadora</strong>, a potenciar mi <strong>trabajo en grupo</strong> y a saber <strong> adaptarme</strong> a
        cualquier situación.
      </p>
      <p>
        Sé que la derrota es un método más de aprendizaje y la victoria una
        recompensa al esfuerzo. Considero fundamental la <strong>autocrítica</strong> para poder
        avanzar en cualquier ámbito: una debe suplir sus posibles carencias
        enfrentándose a ellas y, por extraño que parezca, aquello a lo que temíamos se puede
        convertir en nuestro mejor aliado.
      </p>
      <h2 className="experience__title">Las tecnologías que más me interesan</h2>
      <p>
       Me he formado como Front-End, pero también quiero explorar otros lenguajes de programación y poder descubrir el mundo del Back-End.
      </p>
      <div className="experience__bars">
        <h3 className="experience__title">JavaScript</h3>
        <div className="experience__bar">
          <div className="fill__bar javascript" />
        </div>
        <h3 className="experience__title">Otras Librerías de JavaScript</h3>
        <div className="experience__bar">
          <div className="fill__bar libraries" />
        </div>
        <h3 className="experience__title">Aprender otros lenguajes</h3>
        <div className="experience__bar">
          <div className="fill__bar otherlanguages" />
        </div>
     
        <h3 className="experience__title">React</h3>
        <div className="experience__bar">
          <div className="fill__bar react" />
        </div>
      
        <h3 className="experience__title">CSS / SASS</h3>
        <div className="experience__bar">
          <div className="fill__bar css" />
        </div>
        <h3 className="experience__title">HTML</h3>
        <div className="experience__bar">
          <div className="fill__bar css" />
        </div>
      </div>
    </div>
  );
};

export default More;
