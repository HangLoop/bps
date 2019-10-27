import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class SideBar extends Component {
  render() {
    const pathname = this.props.location.pathname;
    return (
      <>
        <div className="sidebar" data-color="blue">
          <div className="logo">
            <p className="simple-text">Behavior Detection System</p>
          </div>
          <div className="sidebar-wrapper" id="sidebar-wrapper">
            <ul className="nav">
              <li className="active ">
                <a href="http://localhost:5501/index.html">
                  <i className="now-ui-icons location_map-big"></i>
                  <p>Floor Plan</p>
                </a>
              </li>
              <li>
                <a href="http://localhost:5501/pages/dashboard.html">
                  <i className="now-ui-icons design_app"></i>
                  <p>Dashboard</p>
                </a>
              </li>
              <li>
                <a href="http://localhost:5501/pages/settings.html">
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

export default withRouter(SideBar);
