import React, { Component } from "react";

const Subjects = {
  A: [
    { subject: "Accounting Finance" },
    { subject: "Architecture" },
    { subject: "Art" },
  ],
  B: [
    { subject: "Biomedical Sciences" },
    { subject: "Business Strategy Ops Enterprise" },
  ],
  C: [
    { subject: "Children Youth Community Studies" },
    { subject: "Civil Engineering" },
    { subject: "Computing" },
    { subject: "Creative Technologies" },
    { subject: "Criminology" },
  ],
  D: [{ subject: "Design" }],
  E: [
    { subject: "Economics Analytics International Business" },
    { subject: "Education and Childhood" },
    { subject: "Engineering" },
    { subject: "English" },
    { subject: "Events Management" },
  ],
  F: [{ subject: "Film" }],
  // G: [{ subject: "N/A" }],
  H: [{ subject: "Health Promotion" }, { subject: "History" }],
  // I: [{ subject: "N/A" }],
  // J: [{ subject: "N/A" }],
  // K: [{ subject: "N/A" }],
  L: [
    { subject: "Law" },
    { subject: "Leadership Governance People Management" },
  ],
  M: [
    { subject: "Marketing" },
    { subject: "Media" },
    { subject: "Music Sound" },
  ],
  N: [{ subject: "Nursing Healthcare" }, { subject: "Nutrition Dietetics" }],
  // O: [{ subject: "N/A" }],
  P: [
    { subject: "Performing Arts" },
    { subject: "Planning Housing and Human Geography" },
    { subject: "Politics International Relations" },
    { subject: "PR Journalism" },
    { subject: "Psychological Therapies Mental Health" },
  ],
  // Q: [{ subject: "N/A" }],
  // R: [{ subject: "N/A" }],
  S: [
    { subject: "Safety Environmental Health" },
    { subject: "Social work" },
    { subject: "Sociology" },
    { subject: "Speech Language Therapies" },
    { subject: "Sport" },
    { subject: "Surveying Construction and Project Management" },
    { subject: "Sustainability" },
  ],
  T: [
    { subject: "Teaching" },
    { subject: "Therapautic Rehabilitation Sciences" },
    { subject: "Tourism Hospitality Management" },
  ],
  // U: [{ subject: "N/A" }],
  // V: [{ subject: "N/A" }],
  // W: [{ subject: "N/A" }],
  // X: [{ subject: "N/A" }],
  // Y: [{ subject: "N/A" }],
  // Z: [{ subject: "N/A" }],
};

class A_Z extends Component {
  state = {
    rows: [{}],
    dataValue: "A",
    value: "",
    name: "",
    CourseData: [],
  };

  handleChange = (idx) => (e) => {
    const { name, value } = e.target;
    const rows = [...this.state.rows];
    rows[idx] = {
      [name]: value,
    };
    this.setState({
      rows,
    });
  };
  onChange = ({ target: { value } }) => {
    this.setState({ dataValue: value });
  };
  handleChange() {
    this.setState({ pointsValue: this.state.CourseData.length });
  }
  render() {
    const { dataValue } = this.state;
    const options = Subjects[dataValue];
    return (
      <div>
        <div className="A-Z">
          <button onClick={this.onChange} value="A">
            A |
          </button>
          <button onClick={this.onChange} value="B">
            B |
          </button>
          <button onClick={this.onChange} value="C">
            C |
          </button>
          <button onClick={this.onChange} value="D">
            D |
          </button>
          <button onClick={this.onChange} value="E">
            E |
          </button>
          <button onClick={this.onChange} value="F">
            F |
          </button>
          {/* <button onClick={this.onChange} value="G">
            G |
          </button> */}
          <button onClick={this.onChange} value="H">
            H |
          </button>
          {/* <button onClick={this.onChange} value="I">
            I |
          </button>
          <button onClick={this.onChange} value="J">
            J |
          </button>
          <button onClick={this.onChange} value="K">
            K |
          </button> */}
          <button onClick={this.onChange} value="L">
            L |
          </button>
          <button onClick={this.onChange} value="M">
            M |
          </button>
          <button onClick={this.onChange} value="N">
            N |
          </button>
          {/* <button onClick={this.onChange} value="O">
            O |
          </button> */}
          <button onClick={this.onChange} value="P">
            P |
          </button>
          {/* <button onClick={this.onChange} value="Q">
            Q |
          </button>
          <button onClick={this.onChange} value="R">
            R |
          </button> */}
          <button onClick={this.onChange} value="S">
            S |
          </button>
          <button onClick={this.onChange} value="T">
            T |
          </button>
          {/* <button onClick={this.onChange} value="U">
            U |
          </button>
          <button onClick={this.onChange} value="V">
            V |
          </button>
          <button onClick={this.onChange} value="W">
            W |
          </button>
          <button onClick={this.onChange} value="X">
            X |
          </button>
          <button onClick={this.onChange} value="Y">
            Y |
          </button>
          <button onClick={this.onChange} value="Z">
            Z |
          </button> */}
        </div>
        <div class="Subjects-Grid" onClick={this.handleChange}>
          {options.map((i) => (
            <button className="Subject">
              <span>{i.subject}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default A_Z;
