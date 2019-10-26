import React, { Component } from "react";
import FloorPlan from "./FloorPlan";
import Settings from "./Settings";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <SideBar />
        <div className="main-panel" id="main-panel">
          <NavBar />
          <div className="panel-header panel-header-sm"></div>
          <div className="content">
            <Settings />
          </div>
        </div>
      </div>
    );
  }
}
