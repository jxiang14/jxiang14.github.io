// src/pages/about.js

import React from "react"
import Layout from "../components/layout"
import aboutImage from "../images/aboutCropped.png";
import soccerImage from "../images/aboutSoccer.png";
import { Typography } from "@mui/material";

const AboutPage = () => (
  <Layout>
    <div className="flex flex-row items-center pl-24">
    <section className="pl-12">
    <img src={aboutImage} alt="Jeffrey waving" width="70%" height="50%"></img>
    <img className="py-6" src={soccerImage} alt="Jeffrey playing Soccer" width="70%" height="30%"></img>
    </section>
    
    <section className="px-12 w-full">
      <Typography gutterBottom variant="h4" component="div">
        Currently in school,
      </Typography>
      <Typography variant="body1" gutterBottom>
        I am a junior studying computer science and chemistry at Cornell University.
        Within the two disciplines, my favorite classes revolve around machine learning, numerical analysis, and physical chemistry.
        I have worked as a TA for CS1110 (Intro to CS) and CS2110 (Object-Oriented Programming) and 
        plan to work as a TA for CS4780 (Machine Learning).
        My current research interests lie in applying computational techniques to chemistry issues.
      </Typography>
      <Typography gutterBottom variant="h4" component="div">
        Out in the world,
      </Typography>
      <Typography variant="body1" gutterBottom>
        I enjoy playing soccer on my intramural team, going to the gym, and 
        exploring all Ithaca has to offer. At home, I spend my time cooking and eating new dishes, 
        watching TV shows (currently watching Suits), and playing too much chess.
      </Typography>
      <Typography gutterBottom variant="h4" component="div">
        In the future,
      </Typography>
      <Typography variant="body1" gutterBottom>
        I hope to continue studying computational chemistry in graduate school, and I plan to apply to PhD programs in chemistry.
      </Typography>
    </section>
    </div>
  </Layout>
)

export default AboutPage
