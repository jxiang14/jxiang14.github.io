import React, { Component } from "react";
import Modal from './modal.js';
import { createPortal } from 'react-dom';
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
        <h3>Cornell AutoBoat</h3>
        <p>Worked on software for controlling the boat's motors.</p>
        <p>Technologies used: Python, C++, PySerial</p>
    </Modal>,
        document.body
    )}
  <button className="border px-20 py-2 hover:bg-gray-300" type="button" onClick={this.showModal}>
  Learn More
  </button>
  </main>
  ); }
}
export default Dashboard1