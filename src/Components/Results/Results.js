import React, { Component } from "react";
import Academic from "./Academic";
import Placeholder from "../../assets/person.jpg";

class Results extends Component {
  render() {
    return (
      <section className="Results">
        <div className="Academics">
          <Academic
            picture={Placeholder}
            name="Dr. Full Name"
            schoollink=""
            school="Leeds school of arts"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ac aliquam lorem mattis ridiculus dolor suscipit nullam. Imperdiet mattis neque, viverra iaculis aenean placerat in morbi. Ornare aliquam commodo id ultricies est facilisi aenean duis. Suspendisse id auctor sit feugiat egestas porta nisi, diam. Cursus aliquet dolor a mauris. Sit morbi tristique etiam faucibus. At mus a vestibulum nunc, a, elementum, tellus arcu consectetur. Vulputate enim, diam id mauris sed pretium amet magna. Turpis arcu facilisi ornare egestas cursus fermentum consectetur volutpat. Convallis cras nibh sit fermentum mattis. Neque fusce sapien sapien enim non et eget tristique. Turpis volutpat elit ac elementum donec aliquet diam.
            Urna leo dictum cras ipsum. Quis congue turpis leo dictum enim ornare. Diam et quam facilisi natoque sed laoreet urna quisque cursus. Iaculis cursus orci libero."
            phone="Tel"
            email="Email"
            subject="Subject Area"
          />
          <Academic
            picture={Placeholder}
            name="Dr. Full Name"
            schoollink=""
            school="Leeds school of arts"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ac aliquam lorem mattis ridiculus dolor suscipit nullam. Imperdiet mattis neque, viverra iaculis aenean placerat in morbi. Ornare aliquam commodo id ultricies est facilisi aenean duis. Suspendisse id auctor sit feugiat egestas porta nisi, diam. Cursus aliquet dolor a mauris. Sit morbi tristique etiam faucibus. At mus a vestibulum nunc, a, elementum, tellus arcu consectetur. Vulputate enim, diam id mauris sed pretium amet magna. Turpis arcu facilisi ornare egestas cursus fermentum consectetur volutpat. Convallis cras nibh sit fermentum mattis. Neque fusce sapien sapien enim non et eget tristique. Turpis volutpat elit ac elementum donec aliquet diam.
            Urna leo dictum cras ipsum. Quis congue turpis leo dictum enim ornare. Diam et quam facilisi natoque sed laoreet urna quisque cursus. Iaculis cursus orci libero."
            phone="Tel"
            email="Email"
            subject="Subject Area"
          />
        </div>
      </section>
    );
  }
}

export default Results;
