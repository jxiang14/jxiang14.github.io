import React, { Component } from "react";
import Modal from './modal.js';
import { createPortal } from 'react-dom';
import { Typography } from "@mui/material";
import dp5Image from "../images/dp5.png"

class Dashboard extends Component {
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
  <main>
    {this.state.show && createPortal(
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <div className="p-12">
        <Typography className="font-hedvig underline decoration-lime-500 text-center"  gutterBottom variant="h2" component="div">
        Ametek
      </Typography>
      <Typography className="font-hedvig"  variant="body1" gutterBottom>
        {/* <div className="flex flex-col justify-center items-center">
        <img src={dp5Image} alt="Circuit Board" width="35%" height="20%" ></img>
        </div> */}
        <div className="flex flex-row justify-center items-center pl-6">
    <section>
    <img src={dp5Image} alt="Circuit Board" width="100%" height="50%" ></img>
    </section>
    
    <section className="px-12 w-full">
      <div className="flex flex-col gap-y-4">
      <Typography className="font-hedvig underline decoration-lime-500"  gutterBottom variant="h5" component="div">
        Built a full-stack application.
      </Typography>
      <Typography className="font-hedvig"  variant="body1" gutterBottom>
        Revamped the company's internal application for testing all of their 
        custom circuit boards, porting it from Visual Basic to Python in the process. 
        The application is used to test each circuit board that the company manufactures.
      </Typography>
      <Typography className="font-hedvig"  variant="body1" gutterBottom>
        The circuit boards, shown to the left, serve as digital pulse processors
        for the company's x-ray detection sensors. Tests for high voltage, analog 
        to digital conversion, and other tests in the existing test suite were 
        reimplmented into the backend of the Python application.
      </Typography>
      <Typography className="font-hedvig"  variant="body1" gutterBottom>
        The frontend user interface was redesigned to be more user friendly and 
        modern using the customTkinter library. Increased data visualizations using MatPlotLib were 
        incorporated into the application to provide better feedback to the user.
      </Typography>
      </div>
    </section>
    </div>
      </Typography>
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
export default Dashboard