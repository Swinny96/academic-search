import React, { Component } from "react";
import A_Z from "../AcademicSearch/A-Z";
import SchoolData from "./Data/Schools.json";

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
      SupervisorName: "",
      ProfileImage: "",
      ProfileUrl: "",
      Department: "",
      EmailAddress: "",
      PhoneNumber: "",
      JobTitle: "",
      Excerpt: "",
    },
  ],
  Arts: [
    {
      name: "Dr Justin Morey",
      SupervisorName: "Dr Justin Morey",
      ProfileImage:
        "https://www.leedsbeckett.ac.uk/-/media/images/staff/justin-2.jpg?mw=400&hash=750013ED880FA59D6AD82D3A91707C55%5C",
      ProfileUrl: "https://www.leedsbeckett.ac.uk/staff/dr-justin-morey/",
      Department: "Leeds School Of Arts",
      EmailAddress: "J.Morey@leedsbeckett.ac.uk",
      PhoneNumber: "01138127373",
      JobTitle: "Senior Lecturer",
      Excerpt:
        "Justin has more than ten years experience as an independent studio owner, engineer and producer. His research interests include digital sampling, copyright, and creative practice in music production. He was awarded his doctorate in July 2017 for his thesis, ' A Study of Sampling Practice in British Dance Music, 1987-2012'.",
    },
    {
      name: "Dr Matt Green",
      SupervisorName: "Dr Matt Green",
      ProfileImage:
        "https://www.leedsbeckett.ac.uk/-/media/images/staff/matt_green.jpg?mw=400&hash=97819C316B287CD864F4F9634ECFE32A%5C",
      ProfileUrl: "https://www.leedsbeckett.ac.uk/staff/dr-matt-green/",
      Department: "Leeds School Of Arts",
      EmailAddress: "Matthew.Green@leedsbeckett.ac.uk",
      PhoneNumber: "01138126544",
      JobTitle: "Senior Lecturer",
      Excerpt:
        "Matt Green is a practice-based researcher. He is a producer of site-specific sound art. The vast majority of Matt’s practice concerns public urban space, and has served to frame, accent and augment the host location through soundscape composition. These compositions are delivered via either multichannel sound installation/performance or mobile sound application.",
    },
  ],
};

export default class AcademicSearch extends Component {
  state = {
    rows: [{}],
    dataValue: "int",
    value: "",
    name: "",
    CourseData: [],
  };

  SchoolsDidMount() {
    fetch(SchoolData)
      .then((response) => {
        //below method return promise based response by converting stream object to json
        return response.json();
      })
      .then((json) => {
        //Once succcessful callback return you can find length of number of item
        console.log(json.length, json[2], json[3]);
      });
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
  render() {
    const { dataValue } = this.state;
    const options = Schools[dataValue];
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
              {SchoolData.map((SchoolsList) => {
                return <option value="Arts">{SchoolsList.schoolName}</option>;
              })}
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
          </div>
        </section>
        <div>
          <section className="Results" onChange={this.handleChange}>
            {options.map((i) => (
              <div key={i.name} value={i.name} id={i.name}>
                <div className="profile-single">
                  <div className="profile-contents">
                    <div className="profile-single_right-col">
                      <a href={i.ProfileUrl}>
                        <img
                          className="profile-single_image"
                          src={i.ProfileImage}
                          alt={i.SupervisorName}
                        />
                      </a>
                    </div>
                    <div className="profile-single_left-col">
                      <div className="profile-single_info">
                        <h3 className="profile-single_name">
                          <a
                            className="profile-single_name_link"
                            href={i.ProfileUrl}
                          >
                            {i.SupervisorName}
                          </a>
                        </h3>
                        <div className="profile-single_position">
                          {i.JobTitle} / {i.Department}
                        </div>
                        <div className="profile-single_description">
                          <div className="richtext">
                            <p>{i.Excerpt}</p>
                          </div>
                        </div>
                        <div className="profile-single_get-in-touch">
                          <div className="profile-single_get-item">
                            <a
                              className="profile-single_btn"
                              href={i.EmailAddress}
                            >
                              Email {i.SupervisorName}
                            </a>
                          </div>
                          <ul className="profile-single_get-item">
                            <li>
                              <a
                                className="profile-single_contacts"
                                href="tel:????"
                              >
                                <div className="inline__items">
                                  <span>{i.PhoneNumber}</span>
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
