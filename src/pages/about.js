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
      <div className="flex flex-col gap-y-4">
      <Typography className="font-hedvig underline decoration-lime-500"  gutterBottom variant="h4" component="div">
        Currently in school,
      </Typography>
      <Typography className="font-hedvig"  variant="body1" gutterBottom>
        <li>I am a junior studying computer science and chemistry at Cornell University.</li>
        <li>Within the two disciplines, my favorite classes revolve around machine learning, numerical analysis, and physical chemistry.</li>
        <li>I am currently working as a TA for CS 4780 (Machine Learning). I previously worked as a TA for CS 1110 (Intro to CS) and CS 2110 
        (Object-Oriented Programming).</li>
        <li>My current research interests lie in applying computational techniques to chemistry issues.</li>
      </Typography>
      <Typography className="font-hedvig underline decoration-lime-500"  gutterBottom variant="h4" component="div">
        Out in the world,
      </Typography>
      <Typography className="font-hedvig"  variant="body1" gutterBottom>
        <li>I enjoy playing soccer on my intramural team, going to the gym, and 
        exploring all Ithaca has to offer.</li><li> At home, I spend my time cooking and eating new dishes, 
        watching TV shows (currently watching Suits), and playing too much chess.</li>
      </Typography>
      <Typography className="font-hedvig underline decoration-lime-500"  gutterBottom variant="h4" component="div">
        In the future,
      </Typography>
      <Typography className="font-hedvig"  variant="body1" gutterBottom>
        <li>I hope to continue studying computational chemistry in graduate school, and I plan to apply to PhD programs in chemistry.</li>
      </Typography>
      </div>
    </section>
    </div>
  </Layout>
)

export default AboutPage
