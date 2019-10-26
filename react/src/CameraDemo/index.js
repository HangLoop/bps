import React, { Component } from "react";

export default class CameraDemo extends Component {
  render() {
    return (
      <>
        <div style={{ display: "none" }}>
          <div id="info" style={{ display: "none" }}></div>
          <div id="loading" style={{ display: "flex" }}>
            <div class="spinner-text">Loading PoseNet model...</div>
            <div class="sk-spinner sk-spinner-pulse"></div>
          </div>
        </div>
        <div id="main" style={{ display: "none" }}>
          <video
            id="video"
            playsInline
            style={{
              transform: "scaleX(-1)",
              display: "none"
            }}
          ></video>
          <canvas id="output" />
        </div>
      </>
    );
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.src =
      "https://storage.googleapis.com/tfjs-models/demos/posenet/camera.d373f8d3.js";
    document.body.appendChild(script);

    const interval = setInterval(() => {
      const el = document.querySelector(".dg.ac");
      if (el) {
        el.remove();
        clearInterval(interval);
      }
    });
  }
}
