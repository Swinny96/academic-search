import React from "react";
import "./Test.css";
import Campus from "./Projects";

const Projects = ({ siteTitle }) => (
  <div>
    <div className="Tabs">
      <div className="Tab">Headingly</div>
      <div className="Tab">City Campus</div>
    </div>
    <h2 className="Campus-Title">Headingly</h2>
    <div className="Campuses">
      <Campus campus="Headingly" available="24" stock="25" />
      <Campus campus="Headingly" available="24" stock="25" />
      <Campus campus="Headingly" available="24" stock="25" />
      <Campus campus="Headingly" available="24" stock="25" />
    </div>
    <h2 className="Campus-Title">City Campus</h2>
    <div className="Campuses Secondary">
      <Campus campus="Headingly" available="24" stock="25" />
      <Campus campus="Headingly" available="24" stock="25" />
      <Campus campus="Headingly" available="24" stock="25" />
      <Campus campus="Headingly" available="24" stock="25" />
    </div>
  </div>
);

export default Projects;
