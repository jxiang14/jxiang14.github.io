// src/pages/about.js

import React from "react"
import Layout from "../components/layout"
import proteinImage from "../images/protein.png";
import cryoImage from "../images/cryo.png";
import { Typography } from "@mui/material";

const ResearchPage = () => (
  <Layout>
    <div className="flex flex-row items-center pl-24">
    <section>
      <div className="flex flex-col justify-center items-center gap-y-3">
    <img src={proteinImage} alt="Protein" width="50%" height="50%"></img>
    <figcaption>PptT protein visualization</figcaption>
    <img src={cryoImage} alt="Cryo-em sample" width="40%" height="50%"></img>
    <figcaption>Sample cryo-em image</figcaption>
    </div>
    {/* <img className="py-6" src={soccerImage} alt="Jeffrey playing Soccer" width="70%" height="30%"></img> */}
    </section>
    
    <section className="px-12 w-full">
    <div className="flex flex-col gap-y-6">
    <Typography className="font-hedvig underline decoration-lime-500"  gutterBottom variant="h4" component="div">
        Interests
      </Typography>
      <Typography className="font-hedvig"  variant="body1" gutterBottom>
        I am interested in using computational techniques, such as machine learning 
        and numerical methods, to approach chemical issues. I am open to learning about 
        novel ways of applying my background to modeling molecules and material design. 
        I also hope to learn more about and plan to take courses in high-powered computing.
      </Typography>
      <Typography className="font-hedvig underline decoration-lime-500"  gutterBottom variant="h4" component="div">
        Thiede Lab
      </Typography>
      <Typography className="font-hedvig"  variant="body1" gutterBottom>
        I currently work under Professor Erik Thiede in the Chemistry department 
        at Cornell. My current research involves training a neural network to accurately
        reweight an ensemble of protein conformations based on cryo-em images. The idea 
        is to compare proteins found in images to a set of protein conformations generated
        in order to find the probability of a protein conformation being in a certain state.
      </Typography>
      <Typography className="font-hedvig"  variant="body1" gutterBottom>
        I previously researched generating a prior by using sample protein conformations 
        created with Rosetta. The plan is to use other molecular dynamics software to 
        create the potential protein conformations to look for.
      </Typography>
    </div>
    </section>
    </div>
  </Layout>
)

export default ResearchPage
