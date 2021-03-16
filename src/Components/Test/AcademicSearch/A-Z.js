import React, { Component } from "react";
import SubjectsData from "./Data/Subjects.json";

const Subjects = {
  A: [
    { subject: "Accounting Finance" },
    { subject: "Architecture" },
    { subject: "Art", value: "Arts" },
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

const Schools = {
  int: [
    {
      name: "NA",
      picture: "",
      role: "",
      school: "",
      about: "",
      email: "",
      number: "",
    },
  ],
  Arts: [
    {
      name: "Ken Scott",
      picture:
        "https://www.leedsbeckett.ac.uk/-/media/images/staff/kenscott.jpg?optimization=true&mw=50&hash=9EF906406AC061A627AF1D2E64F113AA%2050w%2050h,/-/media/images/staff/kenscott.jpg?optimization=true&mw=75&hash=EA4FA1C0577326584B1F0B61A0C40DFA%2075w%2075h,/-/media/images/staff/kenscott.jpg?optimization=true&mw=200&hash=96640529CCF6EB3921BC57944D4CAE2A%20200w%20200h",
      role: "Senior Lecturer",
      school: "Leeds School Of Arts",
      about:
        "One of the preeminent recording engineers and producers of the 20th century Ken Scott has garnered Gold, Platinum, and Diamond sales awards, Grammy nominations and a Clio (for the classic Coke ad 'I'd Like To Teach The World To Sing').",
      email: "",
      number: "????",
    },
  ],
};

class A_Z extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [{}],
      dataValue: "A",
      academicValue: "int",
      value: "",
      name: "",
      CourseData: [],
      AcademicData: [],
    };
  }

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
  handleSubjectChange = (idx) => (e) => {
    const { name, value } = e.target;
    const rows = [...this.state.rows];
    rows[idx] = {
      [name]: value,
    };
    this.setState({
      rows,
    });
  };
  onSubjectChange = ({ target: { value } }) => {
    this.setState({ academicValue: value });
  };
  handleSubjectChange() {
    this.setState({ pointsValue: this.state.AcademicData.length });
  }
  render() {
    const { dataValue } = this.state;
    const options = Subjects[dataValue];
    const { academicValue } = this.state;
    const academic = Schools[academicValue];
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
          {SubjectsData.map((SubjectsList) => {
            return (
              <button className="None" value="Arts" id={SubjectsList.id}>
                {SubjectsList.subjectName}
              </button>
            );
          })}
          {options.map((i) => (
            <div key={i}>
              <button
                className="Subject"
                onClick={this.handleSubjectChange}
                value={i.value}
              >
                <span>{i.subject}</span>
              </button>
            </div>
          ))}
        </div>
        <section className="Results" onChange={this.handleSubjectChange}>
          {academic.map((i) => (
            <div key={i.name} value={i.name} id={i.name}>
              <div className="profile-single">
                <div className="profile-contents">
                  <div className="profile-single_right-col">
                    <a href={i.profile}>
                      <img
                        className="profile-single_image"
                        src={i.picture}
                        alt={i.name}
                      />
                    </a>
                  </div>
                  <div className="profile-single_left-col">
                    <div className="profile-single_info">
                      <h3 className="profile-single_name">
                        <a
                          className="profile-single_name_link"
                          href={i.profile}
                        >
                          {i.name}
                        </a>
                      </h3>
                      <div className="profile-single_position">
                        {i.role} / {i.school}
                      </div>
                      <div className="profile-single_description">
                        <div className="richtext">
                          <p>{i.about}</p>
                        </div>
                      </div>
                      <div className="profile-single_get-in-touch">
                        <div className="profile-single_get-item">
                          <a className="profile-single_btn" href={i.email}>
                            Email {i.name}
                          </a>
                        </div>
                        <ul className="profile-single_get-item">
                          <li>
                            <a
                              className="profile-single_contacts"
                              href="tel:????"
                            >
                              <div className="inline__items">
                                <span>{i.phone}</span>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    );
  }
}

export default A_Z;
