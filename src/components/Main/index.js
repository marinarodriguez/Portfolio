import React from "react";
import "./styles.scss";
import AboutMe from "../AboutMe";
import { Route, Switch } from "react-router-dom";
import More from "../More";
import Projects from "../Projects";

const Main = props => {
  return (
    <div className="main__container">
      <Switch>
        <Route exact path="/" render={routerProps => <AboutMe />} />
        <Route
          path="/projects"
          render={routerProps => {
            return <Projects />;
          }}
        />
        <Route
          path="/more"
          render={routerProps => {
            return <More />;
          }}
        />
      </Switch>
    </div>
  );
};

export default Main;
