import React from "react"
import Layout from "../components/layout"
// import splash from "../images/splash.png"
// import cropped from "../images/cropped1.png"
import cropped from "../images/splash_copy.png"
import { Typography } from "@mui/material"
import { Link } from "gatsby"

// import { StaticImage } from "gatsby-plugin-image"


const IndexPage = () => (
  <Layout className="splashMain">
    <div className="splash">
      <div className="px-[12vh]">
      <Typography className="font-hedvig underline decoration-lime-500"  gutterBottom variant="h2" component="div">
        Hi I'm Jeffrey!
      </Typography>
      <Typography className="font-hedvig text-xl"  variant="body1" gutterBottom>
        Researcher and Software Developer
      </Typography>
      <Typography className="font-hedvig text-xl"  variant="body1" gutterBottom>
      <Link to="/projects" className="hover:underline decoration-lime-500">Click around</Link>, I'll share a bit more about myself.
      </Typography>
        {/* <h1>Hi I'm Jeffrey</h1>
        <p>Researcher and Software Developer</p>
        <p>Click around, I'll share a bit more about myself.</p> */}
      </div>
      <img src={cropped} alt="Headshot of Jeffrey" width="52%" height="27%" ></img>
    </div>
    {/* <StaticImage
      src="../images/splash.png"
      alt="Headshot of Jeffrey"
      placeholder="blurred"
      layout="fixed"
      width={200}
      height={200}
    /> */}
  </Layout>
)

export default IndexPage

export const Head = () => <title>Home Page</title>
