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
  H: [{ subject: "Health Promotion" }, { subject: "History" }],
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
  P: [
    { subject: "Performing Arts" },
    { subject: "Planning Housing and Human Geography" },
    { subject: "Politics International Relations" },
    { subject: "PR Journalism" },
    { subject: "Psychological Therapies Mental Health" },
  ],
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
};

class A_Z extends Component {
  state = {
    rows: [{}],
    dataValue: "C",
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
          <button onChange={this.onChange} value="A">
            A |
          </button>
          <button onChange={this.onChange} value="B">
            B |
          </button>
          <button onChange={this.onChange}>C |</button>
          <button onChange={this.onChange}>D |</button>
          <button onChange={this.onChange}>E |</button>
          <button onChange={this.onChange}>F |</button>
          <button onChange={this.onChange}>G |</button>
          <button onChange={this.onChange}>H |</button>
          <button onChange={this.onChange}>J |</button>
          <button onChange={this.onChange}>K |</button>
          <button onChange={this.onChange}>L |</button>
          <button onChange={this.onChange}>M |</button>
          <button onChange={this.onChange}>O |</button>
          <button onChange={this.onChange}>P |</button>
          <button onChange={this.onChange}>Q |</button>
          <button onChange={this.onChange}>R |</button>
          <button onChange={this.onChange}>S |</button>
          <button onChange={this.onChange}>T |</button>
          <button onChange={this.onChange}>U |</button>
          <button onChange={this.onChange}>V |</button>
          <button onChange={this.onChange}>W |</button>
          <button onChange={this.onChange}>X |</button>
          <button onChange={this.onChange}>Y |</button>
          <button onChange={this.onChange}>Z |</button>
        </div>
        <div class="Subjects-Grid" onChange={this.handleChange}>
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
