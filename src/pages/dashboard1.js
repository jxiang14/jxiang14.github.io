import React, { Component } from "react";
import Modal from './modal.js';
import { createPortal } from 'react-dom';
import { Typography } from "@mui/material";
import testingImage from "../images/testing.png"
import courseImage from "../images/course.png"


class Dashboard1 extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
showModal = () => {
  this.setState({ show: true });
};
hideModal = () => {
  this.setState({ show: false });
}; 

render() {
  return (
  <main >
    {this.state.show && createPortal(
    <Modal show={this.state.show} handleClose={this.hideModal}>
        <div className="p-12">
        <Typography className="font-hedvig underline decoration-lime-500 text-center"  gutterBottom variant="h2" component="div">
        Cornell Autoboat
        </Typography>
        {/* <div className="flex flex-col justify-center items-center">
        <img src={dp5Image} alt="Circuit Board" width="35%" height="20%" ></img>
        </div> */}
        <div className="flex flex-row justify-center items-center">
          <section>
            <div className="flex flex-col justify-center items-center gap-y-3">
            <img src={testingImage} alt="Autoboat members out testing" width="50%" height="20%" ></img>
          <figcaption className="text-base">Testing at Cayuga Lake</figcaption>
            <img src={courseImage} alt="Robonation course layout" width="60%" height="15%" ></img>
          <figcaption className="text-base">Robonation Course</figcaption>
          </div>
          {/* <img className="py-6" src={soccerImage} alt="Jeffrey playing Soccer" width="70%" height="30%"></img> */}
          </section>
          {/* <div className="flex flex-col justify-center items-center">
          <section>
          <img src={testingImage} alt="Autoboat members out testing" width="60%" height="20%" ></img>
          <img src={courseImage} alt="Robonation course layout" width="80%" height="20%" ></img>
          </section>
          </div> */}
    
        <section className="w-full">
          <div className="flex flex-col gap-y-2">
          <Typography className="font-hedvig underline decoration-lime-500"  gutterBottom variant="h5" component="div">
            Led development of control algorithms and microcontrollers.
          </Typography>
          <Typography className="font-hedvig"  variant="body1" gutterBottom>
            The Cornell Autoboat project team builds a boat capable of autonomous navigation 
            through an obstacle course. The team, composed of hardware, software, and 
            business teams, competes at the annual <a className="underline hover:decoration-lime-500" href="https://roboboat.org/" target="_blank" rel="noopener noreferrer">Robonation competition</a>. I head the controls 
            subteam, within the software team.
          </Typography>
          <Typography className="font-hedvig"  variant="body1" gutterBottom>
            The controls subteam is responsible for developing the algorithms that translate 
            desired navigation paths into motor commands. The subteam developed a pure 
            pursuit algorithm that maps a desired path based on waypoints given. It also 
            developed and tuned a PID controller to control the boat's motors.
          </Typography>
          <Typography className="font-hedvig"  variant="body1" gutterBottom>
            The controls subteam is also responsible for the microcontrollers that control 
            all the electronics on board. Currently, both Arduinos and MicroMod processors 
            are used on the boat. They are connected by serial communication to the 
            onboard Jetson Xavier computer. The subteam also works on setting up and testing inputs to the microcontrollers, 
            such as sensor and remote control inputs.
          </Typography>
          </div>
        </section>
        </div>
      </div>
    </Modal>,
        document.body
    )}
  <button className="border px-20 py-2 hover:bg-lime-500" type="button" onClick={this.showModal}>
  Learn More
  </button>
  </main>
  ); }
}
export default Dashboard1