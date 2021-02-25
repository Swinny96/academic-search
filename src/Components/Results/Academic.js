import React from "react";

const Academic = (props) => (
  <button className="Academic">
    <div className="Left">
      <img className="Academic-Picture" src={props.picture} />
    </div>
    <div className="Right">
      <div className="fithty50">
        <h3 className="Academic-Title">{props.name}</h3>
        <a className="Academic-School" href={props.schoollink}>
          {props.school}
        </a>
      </div>
      <span className="Academic-Text">{props.text}</span>
      <div className="Academic-Links">
        <button className="Academic-Link" href="tel:">
          <img src="" />
          {props.phone}
        </button>
        <button className="Academic-Link" href="mailto:">
          <img src="" />
          {props.email}
        </button>
      </div>
      <span className="Academic-Subject">
        Area of expertise: {props.subject}
      </span>
    </div>
  </button>
);

export default Academic;
