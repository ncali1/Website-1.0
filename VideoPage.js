import React, { Component } from "react";
import Drone from "./video/dronetest.mp4";
import Drone1 from "./video/dronetest2.mp4";
import Drone2 from "./video/dronetest3.mp4";
import Drone3 from "./video/dronetest4.mp4";
import Drone4 from "./video/dronetest5.mp4";
import Drone5 from "./video/dronetest6.mp4";

class Video extends Component {
  render() {
    return (
      <div>
        <div>
          <h1 className="title"> Object Detection Videos/Our Projects</h1>
        </div>

        <div className="flex">
          <video className="videos" controls muted>
            <source src={Drone} type="video/mp4" />
          </video>

          <video className="videos" controls muted>
            <source src={Drone1} type="video/mp4" />
          </video>

          <video className="videos" controls muted>
            <source src={Drone2} type="video/mp4" />
          </video>

          <video className="videos" controls muted>
            <source src={Drone3} type="video/mp4" />
          </video>

          <video className="videos" controls muted>
            <source src={Drone4} type="video/mp4" />
          </video>

          <video className="videos" controls muted>
            <source src={Drone5} type="video/mp4" />
          </video>
        </div>
      </div>
    );
  }
}
export default Video;
