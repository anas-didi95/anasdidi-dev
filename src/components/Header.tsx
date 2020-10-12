import React from "react"
import GatsbyImage, { FixedObject } from "gatsby-image"
import { Link } from "gatsby"

const Header: React.FC<{
  headerImage?: FixedObject
  isActive: boolean
  toggleMenu: any
}> = ({ headerImage, isActive, toggleMenu }) => (
  <header>
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
      style={{ padding: "0.5rem" }}>
      <div className="navbar-brand">
        <span className="ml-4" />
        <Link className="navbar-item" to="/" aria-label="Home">
          <GatsbyImage fixed={headerImage} />
        </Link>
        <a
          role="button"
          className={`navbar-burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          onClick={toggleMenu}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
        <div className="navbar-end">
          <Link className="navbar-item" to="/">
            Home
          </Link>
          <Link className="navbar-item" to="/projects">
            Projects
          </Link>
          <Link className="navbar-item" to="/tags">
            Tags
          </Link>
          <Link className="navbar-item" to="/about-me">
            About Me
          </Link>
          <span className="mr-6" />
        </div>
      </div>
    </nav>
  </header>
)

export default Header
