import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./layout.css" // You can add your custom styles here

const Layout = ({ children }) => (
  <>
    <header>
      <h1>My Portfolio</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/research">Research</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
    <main>{children}</main>
    <footer>
      <p>© {new Date().getFullYear()}, Made with love by Jeffrey</p>
    </footer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout