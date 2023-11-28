// src/pages/about.js

import React from "react"
import Layout from "../components/layout"
import proteinImage from "../images/protein.png";
import { Typography } from "@mui/material";

const ResearchPage = () => (
  <Layout>
    <div className="flex flex-row items-center pl-24">
    <section className="pl-12">
    <img src={proteinImage} alt="Jeffrey waving" width="70%" height="50%"></img>
    {/* <img className="py-6" src={soccerImage} alt="Jeffrey playing Soccer" width="70%" height="30%"></img> */}
    </section>
    
    <section className="px-12 w-full">
    <Typography gutterBottom variant="h4" component="div">
        Interests
      </Typography>
      <Typography variant="body1" gutterBottom>
        I am interested in using computational techniques, such as machine learning 
        and numerical methods, to approach chemical issues. I am open to learning about 
        novel ways of applying my background to modeling molecules and material design. 
        I also hope to learn more about and plan to take courses in high-powered computing.
      </Typography>
      <Typography gutterBottom variant="h4" component="div">
        Thiede Lab
      </Typography>
      <Typography variant="body1" gutterBottom>
        I currently work under Professor Erik Thiede in the Chemistry department 
        at Cornell. My current research involves generating sample protein conformations 
        using Rosetta. The plan is to integrate these identified structures into a 
        software package capable of better extracting data out of Cryo-EM images.
      </Typography>
    </section>
    </div>
  </Layout>
)

export default ResearchPage
