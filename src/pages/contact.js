// src/pages/about.js

import React from "react"
import Layout from "../components/layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import EmailIcon from '@mui/icons-material/Email';
import { Typography } from "@mui/material";

const AboutPage = () => (
  <Layout>
    <div className="flex flex-col justify-center items-center">
    <Typography gutterBottom variant="h3" component="div">
      Contact Me
    </Typography>
      <Typography gutterBottom variant="h6" component="div">
        <EmailIcon></EmailIcon> jjx5 at Cornell dot edu
      </Typography>
      <Typography gutterBottom variant="h6" component="div">
      <a href={"https://github.com/jxiang14"} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} /> jxiang14
      </a>
      </Typography>
      <Typography gutterBottom variant="h6" component="div">
      <a href={'https://www.linkedin.com/in/jeffrey-xiang/'} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} /> jeffrey-xiang
      </a>
      </Typography>
    </div>

  </Layout>
)

export default AboutPage
