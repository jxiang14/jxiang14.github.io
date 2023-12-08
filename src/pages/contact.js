// src/pages/about.js

import React from "react"
import Layout from "../components/layout"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import EmailIcon from '@mui/icons-material/Email';
import { Typography } from "@mui/material";

const ContactPage = () => (
  <Layout>
    <div className="flex flex-col justify-center items-center">
    <Typography className="font-hedvig underline decoration-lime-500"  gutterBottom variant="h3" component="div">
      Contact Me
    </Typography>
      <Typography className="font-hedvig"  gutterBottom variant="h6" component="div">
        <EmailIcon></EmailIcon> jjx5 at Cornell dot edu
      </Typography>
      <Typography className="font-hedvig"  gutterBottom variant="h6" component="div">
        <div >
          <a className="flex flex-row items-center" href={"https://github.com/jxiang14"} target="_blank" rel="noopener noreferrer">
            <FaGithub className="mr-2"/> jxiang14
          </a>
      </div>
      </Typography>
      <Typography className="font-hedvig"  gutterBottom variant="h6" component="div">
      <a className="flex flex-row items-center" href={'https://www.linkedin.com/in/jeffrey-xiang/'} target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="mr-2"/> jeffrey-xiang
      </a>
      </Typography>
    </div>

  </Layout>
)

export default ContactPage
