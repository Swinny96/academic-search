import React, { Component } from "react";
import Academic from "./Academic";

class Results extends Component {
  render() {
    return (
      <section className="Results">
        <Academic
          picture="https://www.leedsbeckett.ac.uk/-/media/images/staff/kenscott.jpg?optimization=true&mw=50&hash=9EF906406AC061A627AF1D2E64F113AA%2050w%2050h,/-/media/images/staff/kenscott.jpg?optimization=true&mw=75&hash=EA4FA1C0577326584B1F0B61A0C40DFA%2075w%2075h,/-/media/images/staff/kenscott.jpg?optimization=true&mw=200&hash=96640529CCF6EB3921BC57944D4CAE2A%20200w%20200h"
          name="Ken Scott"
          profile="https://www.leedsbeckett.ac.uk/staff/ken-scott/"
          role="Senior Lecturer"
          school="Leeds School Of Arts"
          text="One of the preeminent recording engineers and producers of the 20th century Ken Scott has garnered Gold, Platinum, and Diamond sales awards, Grammy nominations and a Clio (for the classic Coke ad I'd Like To Teach The World To Sing)."
          phone="???"
          email="Email"
          subject="Subject Area"
        />
        <Academic
          picture="https://www.leedsbeckett.ac.uk/-/media/images/staff/kenscott.jpg?optimization=true&mw=50&hash=9EF906406AC061A627AF1D2E64F113AA%2050w%2050h,/-/media/images/staff/kenscott.jpg?optimization=true&mw=75&hash=EA4FA1C0577326584B1F0B61A0C40DFA%2075w%2075h,/-/media/images/staff/kenscott.jpg?optimization=true&mw=200&hash=96640529CCF6EB3921BC57944D4CAE2A%20200w%20200h"
          name="Ken Scott"
          profile="https://www.leedsbeckett.ac.uk/staff/ken-scott/"
          role="Senior Lecturer"
          school="Leeds School Of Arts"
          text="One of the preeminent recording engineers and producers of the 20th century Ken Scott has garnered Gold, Platinum, and Diamond sales awards, Grammy nominations and a Clio (for the classic Coke ad I'd Like To Teach The World To Sing)."
          phone="???"
          email="Email"
          subject="Subject Area"
        />
      </section>
    );
  }
}

export default Results;
