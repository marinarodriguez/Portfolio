import React from "react";
import "./styles.scss";
import Homepage from "../Homepage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Homepage />
      </div>
    );
  }
}

export default App;
