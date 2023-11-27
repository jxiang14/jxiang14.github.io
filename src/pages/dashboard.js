import React, { Component } from "react";
import Modal from './modal.js';
import { createPortal } from 'react-dom';

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
        <h3>Ametek</h3>
        <p>Interned at Amptek summer 2023. Built a full-stack Python app for testing all of the companies circuit boards.</p>
        <p>Libraries used: PySerial, PyUSB, Socket, MatPlotLib, Tkinter</p>
        </Modal>,
        document.body
      )}
  <button type="button" onClick={this.showModal}>
  Learn More
  </button>
  </main>
  ); }
}
export default Dashboard