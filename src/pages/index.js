import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h1>Welcome to My Portfolio</h1>
    <p>This is the homepage of my portfolio website.</p>
    <nav>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/research">Research</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </Layout>
)

export default IndexPage

export const Head = () => <title>Home Page</title>
