import React, { Component } from "react";
import Modal from './modal.js';
import { createPortal } from 'react-dom';
import { Typography } from "@mui/material";
import terminalImage from "../images/goFishSeq.png"

class Dashboard2 extends Component {
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
        Go Fish Terminal Game
        </Typography>
        {/* <div className="flex flex-col justify-center items-center">
        <img src={dp5Image} alt="Circuit Board" width="35%" height="20%" ></img>
        </div> */}
        <div className="flex flex-row justify-center items-center">
          <section>
            <div className="flex flex-col justify-center items-center gap-y-3">
            <img src={terminalImage} alt="Terminal output" width="80%" height="60%" ></img>
          <figcaption className="text-base">Sample Game</figcaption>
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
    
        <section className="px-6 w-10/12">
          <div className="flex flex-col gap-y-2">
          <Typography className="font-hedvig underline decoration-lime-500"  gutterBottom variant="h5" component="div">
            Implemented game flow.
          </Typography>
          <Typography className="font-hedvig"  variant="body1" gutterBottom>
            My final project for CS 3110, Data Structures and Functional Programming, 
            was a terminal-based go fish game. I worked in a team of 3 to implement the project.
          </Typography>
          <Typography className="font-hedvig"  variant="body1" gutterBottom>
            My main work was developing the software that would continously run the game until 
            a player won or the game was quit. At each turn in the game, the game would 
            make checks and progress forward to the next turn.
          </Typography>
          <Typography className="font-hedvig"  variant="body1" gutterBottom>
            I also focused on information sharing. In order to adapt the game to a terminal setting, 
            we had to create methods to show common knowledge while also hiding private information. 
            As a solution, I implemented a scoreboard and game log for other players to track 
            the game's progress.
          </Typography>
          <Typography className="font-hedvig"  variant="body1" gutterBottom>
            <a className="underline hover:decoration-lime-500" href="https://github.com/jxiang14/Go-Fish-Game-Final" target="_blank" rel="noopener noreferrer">Check out the repository</a>
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
export default Dashboard2