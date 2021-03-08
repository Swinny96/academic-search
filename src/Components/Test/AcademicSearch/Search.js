import React, { Component } from "react";
import A_Z from "../../Search/A-Z";
import Subject from "../../Search/Subject";

const Qualfications = {
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

// name: "Leeds School Of Arts",
// name: "School of Built Environment",
// name: "Engineering and Computing",
// name: "Leeds Business School",
// name: "School of Clinical and Applied Sciences",
// name: "School of Cultural Studies and Humanities",
// name: "Carnegie School of Education",
// name: "School of Events, Tourism and Hospitality Management",
// name: "School of Health and Community Studies",
// name: "Leeds Law School",
// name: "Leeds School of Social Sciences",

export default class AcademicSearch extends Component {
  state = {
    rows: [{}],
    dataValue: "int",
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
  addCourse() {}
  render() {
    const { dataValue } = this.state;
    const options = Qualfications[dataValue];

    return (
      <div>
        <section className="Search">
          <h3 className="Search-Title">Find an Academic Supervisior</h3>
          <p className="Search-Text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus ut
            auctor massa sed. Praesent montes, aliquet risus, est dui potenti
            sollicitudin nullam. Consequat maecenas pharetra nulla maecenas
            ornare dignissim a. Aliquet sit tortor scelerisque feugiat. Sit
            mattis magna volutpat mattis aliquam eu iaculis nulla fermentum.
          </p>
          <div className="Search-Fields">
            <select id="CourseSelection" onChange={this.onChange}>
              <option value="int">Find an expert by academic school</option>
              <option value="Arts">Leeds School Of Arts</option>
              <option value="Arts">School of Built Environment</option>
              <option value="Arts">Engineering and Computing</option>
              <option value="Arts">Leeds Business School</option>
              <option value="Arts">
                School of Clinical and Applied Sciences
              </option>
              <option value="Arts">
                School of Cultural Studies and Humanities
              </option>
              <option value="Arts">Carnegie School of Education</option>
              <option value="Arts">
                School of Events, Tourism and Hospitality Management
              </option>
              <option value="Arts">
                School of Health and Community Studies
              </option>
              <option value="Arts">Leeds Law School</option>
              <option value="Arts">Leeds School of Social Sciences</option>
            </select>
            <input
              className="Search-Input"
              placeholder="Search our experts..."
            ></input>
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
        <div>
          <section className="Results" onChange={this.handleChange}>
            {options.map((i) => (
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
      </div>
    );
  }
}
