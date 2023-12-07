import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from "../images/logo.png"
import "./layout.css" // You can add your custom styles here

const Layout = ({ children }) => (
  <>
    <header>
    <Link to="/">
      <div className="flex flex-row">
        <div className="pl-8">
        <img src={logo} alt="Logo with initials JX" width="35px" height="18px"></img>
        </div>
      <h1 className="px-3">Jeffrey Xiang</h1>
      </div></Link>
      <nav>
        <ul>
          {/* <li><Link to="/">Home</Link></li> */}
          <li><Link to="/about">About</Link></li>
          <li><Link to="/research">Research</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          {/* <li>
            <label htmlFor="resume">resume: </label>
            <a href={resume} target="_blank" rel="noreferrer" id="email">
              Resume
            </a>
          </li> */}
          <li><Link to="/resume">Resume</Link></li>
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