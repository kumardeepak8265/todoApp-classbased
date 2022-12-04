import React, { Component } from "react";
import Navbar from "./Component/Navbar";
import Todopage from "./TodoPage";

class App extends Component {
  render(): React.ReactNode {
    return (
      <div>
        <Navbar></Navbar>
        <Todopage n="kapil"></Todopage>
      </div>
    );
  }
}
export default App;
