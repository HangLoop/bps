import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <>
        <div className="sidebar" data-color="blue">
          <div className="logo">
            <p className="simple-text">Behavior Protection System</p>
          </div>
          <div className="sidebar-wrapper" id="sidebar-wrapper">
            <ul className="nav">
              <li className="active ">
                <a href="./index.html">
                  <i className="now-ui-icons location_map-big"></i>
                  <p>Floor Plan</p>
                </a>
              </li>
              <li>
                <a href="./pages/dashboard.html">
                  <i className="now-ui-icons design_app"></i>
                  <p>Dashboard</p>
                </a>
              </li>
              <li>
                <a href="./pages/settings.html">
                  <i className="now-ui-icons ui-1_settings-gear-63"></i>
                  <p>Settings</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
