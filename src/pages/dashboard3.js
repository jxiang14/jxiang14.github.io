import React, { Component } from "react";
import Modal from './modal.js';
import { createPortal } from 'react-dom';
import { Typography } from "@mui/material";
import gaitImage from "../images/gait.png";


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
  <main>
    {this.state.show && createPortal(
    <Modal show={this.state.show} handleClose={this.hideModal}>
        <div className="p-12">
        <Typography className="font-hedvig underline decoration-lime-500 text-center"  gutterBottom variant="h2" component="div">
        Dog Leg Prediction Model
        </Typography>
        {/* <div className="flex flex-col justify-center items-center">
        <img src={dp5Image} alt="Circuit Board" width="35%" height="20%" ></img>
        </div> */}
        <div className="flex flex-row justify-center items-center">
          <section>
            <div className="flex flex-col justify-center items-center gap-y-3">
            <img src={gaitImage} alt="Dog completing gait test" width="80%" height="60%" ></img>
          <figcaption className="text-base">Dog completing gait test</figcaption>
            {/* <img src={courseImage} alt="Robonation course layout" width="60%" height="15%" ></img>
          <figcaption className="text-base">Robonation Course</figcaption> */}
          </div>
          {/* <img className="py-6" src={soccerImage} alt="Jeffrey playing Soccer" width="70%" height="30%"></img> */}
          </section>
          {/* <div className="flex flex-col justify-center items-center">
          <section>
          <img src={testingImage} alt="Autoboat members out testing" width="60%" height="20%" ></img>
          <img src={courseImage} alt="Robonation course layout" width="80%" height="20%" ></img>
          </section>
          </div> */}
    
        <section className="px-6">
          <div className="flex flex-col gap-y-2">
          <Typography className="font-hedvig underline decoration-lime-500"  gutterBottom variant="h5" component="div">
            Predicting dog health.
          </Typography>
          <Typography className="font-hedvig"  variant="body1" gutterBottom>
            One of my projects for CS 4780, Machine Learning, 
            was to develop a model to predict whether a dog's legs were lame or not 
            from force gauge data.
          </Typography>
          <Typography className="font-hedvig"  variant="body1" gutterBottom>
            The data was not complete, so patterns in the data were used to fill 
            out any gaps. After cleaning the data, an Adaboost classifier was used.
          </Typography>
          <Typography className="font-hedvig"  variant="body1" gutterBottom>
            In order to increase the accuracy of the model, a grid search was conducted 
            to find the best hyperparameters. At the end, the model was able to predict whether a dog's 
            legs were lame or not with 83% accuracy.
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