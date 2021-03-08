import React, { Component } from "react";

export default class Test extends Component {
  state = {
    locations: [
      {
        name: "Ojo",
        zone: "Lagos State",
        region: "South West",
      },
      {
        name: "Ahiazu Mstrongaise",
        zone: "Imo State",
        region: "South East",
      },
      {
        name: "Akoko-Edo",
        zone: "Edo State",
        region: "South South",
      },
      {
        name: "Anka",
        zone: "Zamfara State",
        region: "North West",
      },
      {
        name: "Akwanga",
        zone: "Nasarawa State",
        region: "North Central",
      },
    ],
    schools: [
      {
        name: "Leeds School Of Arts",
      },
    ],
  };
  render() {
    return (
      <div>
        <div>
          <div>
            <h2>Locations</h2>
          </div>
        </div>
        <div>
          {/* {this.state.locations.map((location) => (
            <LocationCard key={location.id} {...location} />
          ))} */}
          {this.state.schools.map((school) => (
            <SchoolsCard key={school.id} {...school} />
          ))}
        </div>
      </div>
    );
  }
}

// const LocationCard = (props) => {
//   return (
//     <div>
//       <hr />
//       <p>
//         <strong>Name:</strong> {props.name.toUpperCase()}
//       </p>
//       <p>
//         <strong>Zone:</strong> {props.zone}
//       </p>
//       <p>
//         <strong>Region:</strong> {props.region}
//       </p>
//       <hr />
//     </div>
//   );
// };

const SchoolsCard = (props) => {
  return (
    <div>
      <hr />
      <p>
        <strong>School</strong> {props.name}
      </p>
      <hr />
    </div>
  );
};
