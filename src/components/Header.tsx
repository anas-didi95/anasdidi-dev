import React from "react"
import GatsbyImage, { FixedObject } from "gatsby-image"
import { Link } from "gatsby"

const Header: React.FC<{
  headerImage?: FixedObject
  isActive: boolean
  toggleMenu: any
}> = ({ headerImage, isActive, toggleMenu }) => (
  <nav
    className="navbar is-dark"
    role="navigation"
    aria-label="main navigation"
    style={{ padding: "0.5rem" }}>
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">
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
      <div className="navbar-start">
        <Link className="navbar-item" to="/">
          Home
        </Link>
      </div>
    </div>
  </nav>
)

export default Header
