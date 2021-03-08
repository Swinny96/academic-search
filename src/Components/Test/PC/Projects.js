import React from "react";

const Campus = (props) => (
  <div className="Campus">
    <div className="Campus_Content">
      <p className="CampusName">{props.campus}</p>
    </div>
    <div className="Campus_PCs">
      <strong className="Stock">
        {props.available}/{props.stock}
      </strong>
      <span className="CampusText">Computers Currently Free</span>
    </div>
  </div>
);

export default Campus;
