import React from "react";
import "./styles.scss";
import AboutMe from "../AboutMe";
import { Route, Switch } from "react-router-dom";
import Contact from "../Contact";
import Projects from "../Projects";

const Main = props => {
  return (
    <div claassName="main__container">
      <Switch>
        <Route exact path="/" render={routerProps => <AboutMe />} />
        <Route
          path="/Projects"
          render={routerProps => {
            return <Projects />;
          }}
        />
        <Route
          path="/Contact"
          render={routerProps => {
            return <Contact />;
          }}
        />
      </Switch>
    </div>
  );
};

export default Main;
