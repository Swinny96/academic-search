import React, { Component } from "react";
import A_Z from "./A-Z";
import Subject from "./Subject";

class Search extends Component {
  render() {
    return (
      <section className="Search">
        <h3 className="Search-Title">Find an Academic Supervisior</h3>
        <p className="Search-Text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus ut
          auctor massa sed. Praesent montes, aliquet risus, est dui potenti
          sollicitudin nullam. Consequat maecenas pharetra nulla maecenas ornare
          dignissim a. Aliquet sit tortor scelerisque feugiat. Sit mattis magna
          volutpat mattis aliquam eu iaculis nulla fermentum.
        </p>
        <div className="Search-Fields">
          <select>
            <option>Find an expert by academic school</option>
          </select>
          <input className="Search-Input" placeholder="Search our experts..."></input>
        </div>
        <div className="Explore">
          <span className="BigTxt">Or</span>
          <span className="ExploreTxt">Explore by subject</span>
          <A_Z />
          <div className="Subjects-Grid">
            <Subject subject="Words" />
            <Subject subject="Words" />
            <Subject subject="Words" />
          </div>
        </div>
      </section>
    );
  }
}

export default Search;
