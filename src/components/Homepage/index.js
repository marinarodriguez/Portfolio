import React from "react";
import "./styles.scss";
import Footer from "../Footer";
import Header from "../Header";
import Main from "../Main";

const Homepage = props => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Homepage;
