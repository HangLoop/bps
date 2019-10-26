import React, { Component } from "react";

import NavBar from "./NavBar";
import SideBar from "./SideBar";

import FloorPlan from "./FloorPlan";
import Settings from "./Settings";
import Dashboard from "./Dashboard";

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <SideBar />
        <div className="main-panel" id="main-panel">
          <NavBar />
          <div className="panel-header panel-header-sm"></div>
          <div className="content">
            <Dashboard />
          </div>
        </div>
      </div>
    );
  }
}
