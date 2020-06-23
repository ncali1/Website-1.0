import React, { Component } from "react";
import Drone from "./video/dronetest.mp4";

class Home extends Component {
  render() {
    return (
      <div class="video-size">
        <h1>Home Page </h1>
        <video autoplay controls loop muted>
          <source src={Drone} type="video/mp4" />
        </video>
      </div>
    );
  }
}
export default Home;
