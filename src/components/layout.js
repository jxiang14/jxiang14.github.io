import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./layout.css" // You can add your custom styles here

const Layout = ({ children }) => (
  <>
    <header>
      <h1>Jeffrey Xiang</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/research">Research</Link></li>
          {/* <li>
            <label htmlFor="resume">resume: </label>
            <a href={resume} target="_blank" rel="noreferrer" id="email">
              Resume
            </a>
          </li> */}
          <li><Link to="/resume" target='_blank'>Resume</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
    <main className="regMain">{children}</main>
    <footer>
      <p>© {new Date().getFullYear()}, Made by Jeffrey</p>
    </footer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout