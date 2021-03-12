import React, { Component } from "react";
import Projects from "./Tabs";
import "./PC.css";

class PC extends Component {
  render() {
    return (
      <section className="PC">
        <h2 className="PC_Title">PC Avaliability</h2>
        <Projects />
      </section>
    );
  }
}

export default PC;
