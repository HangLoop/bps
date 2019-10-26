import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./NavBar";
import SideBar from "./SideBar";

import FloorPlan from "./FloorPlan";
import Settings from "./Settings";
import Dashboard from "./Dashboard";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <SideBar />
          <div className="main-panel" id="main-panel">
            <NavBar />

            <Switch>
              <Route exact path="/">
                <FloorPlan />
              </Route>
              <Route exact path="/dashboard">
                <Dashboard />
              </Route>
              <Route exact path="/settings">
                <Settings />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
