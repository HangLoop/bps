import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class SideBar extends Component {
  render() {
    const pathname = this.props.location.pathname;
    return (
      <>
        <div className="sidebar" data-color="blue">
          <div className="logo">
            <p className="simple-text">Behavior Protection System</p>
          </div>
          <div className="sidebar-wrapper" id="sidebar-wrapper">
            <ul className="nav">
              <li className={pathname === "/" ? "active" : ""}>
                <Link to="/">
                  <i className="now-ui-icons location_map-big"></i>
                  <p>Floor Plan</p>
                </Link>
              </li>
              <li className={pathname === "/dashboard" ? "active" : ""}>
                <Link to="/dashboard">
                  <i className="now-ui-icons design_app"></i>
                  <p>Dashboard</p>
                </Link>
              </li>
              <li className={pathname === "/settings" ? "active" : ""}>
                <Link to="/settings">
                  <i className="now-ui-icons ui-1_settings-gear-63"></i>
                  <p>Settings</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(SideBar);
