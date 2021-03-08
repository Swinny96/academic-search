import React from "react";
import "./Profile.css";

const Academic = (props) => (
  <div>
    <div className="profile-single">
      <div className="profile-contents">
        <div className="profile-single_right-col">
          <a href={props.profile}>
            <img
              className="profile-single_image"
              src={props.picture}
              alt={props.name}
            />
          </a>
        </div>
        <div className="profile-single_left-col">
          <div className="profile-single_info">
            <h3 className="profile-single_name">
              <a className="profile-single_name_link" href={props.profile}>
                {props.name}
              </a>
            </h3>
            <div className="profile-single_position">
              {props.role} / {props.school}
            </div>
            <div className="profile-single_description">
              <div className="richtext">
                <p>
                  One of the preeminent recording engineers and producers of the
                  20th century Ken Scott has garnered Gold, Platinum, and
                  Diamond sales awards, Grammy nominations and a Clio (for the
                  classic Coke ad "I'd Like To Teach The World To Sing").
                </p>
              </div>
            </div>
            <div className="profile-single_get-in-touch">
              <div className="profile-single_get-item">
                <a className="profile-single_btn" href={props.email}>
                  Email {props.name}
                </a>
              </div>
              <ul className="profile-single_get-item">
                <li>
                  <a className="profile-single_contacts" href="tel:????">
                    <div className="inline__items">
                      <span>{props.phone}</span>
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
);

export default Academic;
