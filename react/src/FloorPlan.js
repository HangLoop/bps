import React, { Component } from "react";
import floorPlan from "./assets/img/apm_floor_plan.svg";
import cameraIcon from "./assets/img/icon/camera.svg";
import warningIcon from './assets/img/icon/warning.svg';

export default class FloorPlan extends Component {
  render() {
    return (
      <>
        <div className="panel-header panel-header-sm"></div>
        <div className="content">
          <div className="card">
            <h3 className="m-3 w-100 text-center">Ground Floor</h3>
            <div className="floor-plan-container">
              <img src={floorPlan} alt="floor plan" className="w-100" />
              <div className="cam cam--1 js-cam">
                <img src={warningIcon} alt="cam icon" />
              </div>
              <div className="cam cam--2 js-cam">
                <img src={cameraIcon} alt="cam icon" />
              </div>
              <div className="cam cam--3 js-cam">
                <img src={cameraIcon} alt="cam icon" />
              </div>
              <div className="cam cam--4 js-cam">
                <img src={cameraIcon} alt="cam icon" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
