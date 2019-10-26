import React, { Component } from "react";
import floorPlan from "./assets/img/apm_floor_plan.svg";
import cameraIcon from "./assets/img/icon/camera.svg";
import warningIcon from './assets/img/icon/warning.svg';
import CameraDemo from './CameraDemo';

export default class FloorPlan extends Component {
  render() {
    return (
      <>
        <div className="panel-header panel-header-sm"></div>
        <div className="content">
          <div className="card">
            <h3 className="m-3 w-100 text-center text-danger">
              Alert
            </h3>
            <h3 className="m-3 w-100 text-center">
              Unusal Behaviour found at Ground Floor
            </h3>

            <div>
              <CameraDemo />
            </div>
          </div>
        </div>
      </>
    );
  }
}
