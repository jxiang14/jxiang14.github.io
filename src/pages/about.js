// src/pages/about.js

import React from "react"
import Layout from "../components/layout"

const AboutPage = () => (
  <Layout>
    <h2>About Me</h2>
    <p>Welcome to the About Me page of my portfolio website. Here, I'll share a bit about myself.</p>
    
    <section>
      <h3>Background</h3>
      <p>I have a background in [your field of study/profession]. Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
    </section>

    <section>
      <h3>Skills</h3>
      <p>Some of my key skills include:</p>
      <ul>
        <li>React.js</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
    </section>

    <section>
      <h3>Experience</h3>
      <p>I have worked on various projects, including [mention a few projects you're proud of].</p>
    </section>
  </Layout>
)

export default AboutPage
