import React from "react";

const Campus = (props) => (
  <div className="Campus">
    <div className="Campus_Content">
      <p className="CampusName">{props.campus}</p>
    </div>
    <div className="Campus_PCs">
      <div className="Campus_Text">
        <strong className="Stock">
          {props.available}/{props.stock}
        </strong>
        <span className="CampusText Reverse">Computers Currently Free</span>
      </div>
      <div className="Campus_Text_Reverse">
        <span className="CampusText">Computers Currently Free:</span>
        <strong className="Stock">
          {props.available}/{props.stock}
        </strong>
      </div>
    </div>
  </div>
);

export default Campus;
