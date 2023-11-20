import React from "react"
import Layout from "../components/layout"
// import splash from "../images/splash.png"
import cropped from "../images/cropped1.png"
// import { StaticImage } from "gatsby-plugin-image"


const IndexPage = () => (
  <Layout className="splashMain">
    <div className="splash">
      <div className="splash-text">
        <h1>Hi I'm Jeffrey</h1>
        <p>Researcher and Software Developer</p>
        <p>Click around, I'll share a bit more about myself.</p>
      </div>
      <img src={cropped} alt="Headshot of Jeffrey"width="54%" height="30%" ></img>
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
