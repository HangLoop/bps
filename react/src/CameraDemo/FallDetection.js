import React, { Component } from "react";
import * as posenet from "@tensorflow-models/posenet";
import Services from "bds-services";

const DETECTION_INTERVAL = 1000;
const FLOOR_TOLERANCE = 10;
const THRESHOLD_SECONDS = 5;

const initNet = async () => {
  const net = await posenet.load({
    architecture: "MobileNetV1",
    outputStride: 16,
    inputResolution: 481,
    multiplier: 0.75
  });

  return net;
};

class FallDetection extends Component {
  render() {
    return (
      <div>
        <video
          playsInline
          ref={node => (this.video = node)}
          height="480"
          width="640"
        ></video>
      </div>
    );
  }

  componentDidMount() {
    this.setUp();
  }

  setUp = async () => {
    this.net = await initNet();
    this.startDetection();
    this.startAnalysis();
  };

  startDetection = () => {
    this.detectionInterval = setInterval(async () => {
      const poses = await this.net.estimateMultiplePoses(this.video, {
        flipHorizontal: false,
        maxDetections: 2,
        scoreThreshold: 0.6,
        nmsRadius: 20
      });

      this.setState({ poses });
    }, DETECTION_INTERVAL);
  };

  startAnalysis = () => {
    this.analysisInterval = setInterval(() => {
      const { poses } = this.state;
      const bodyPosition = poses.getBodyPosition();

      if (this.shouldTriggerAlert(bodyPosition)) {
        this.triggerAlert();
      }
    }, DETECTION_INTERVAL);
  };

  shouldTriggerAlert = ({
    leftShoulder,
    rightShoulder,
    leftKnee,
    rightKnee
  }) => {
    const exceedTimeLimit = now - this.lastTimestamp < THRESHOLD_SECONDS;
    return (
      isCloseToFloor(leftShoulder) &&
      isCloseToFloor(rightShoulder) &&
      isCloseToFloor(leftKnee) &&
      isCloseToFloor(rightKnee) &&
      exceedTimeLimit
    );
  };

  triggerAlert = () => {
    Services.callEmergencyCentre();
  };
}

export default FallDetection;

function isCloseToFloor(y) {
  return y >= 0 && y <= FLOOR_TOLERANCE;
}
