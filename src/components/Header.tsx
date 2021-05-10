import React from "react"
import GatsbyImage, { FixedObject } from "gatsby-image"
import { Link } from "gatsby"
import { TRoutes } from "../utils/hooks/useRoutes"

interface IHeader {
  headerImage: FixedObject
  isActive: boolean
  routes: TRoutes[]
  toggleMenu: () => void
}
const Header: React.FC<IHeader> = ({ headerImage, isActive, routes, toggleMenu }) => (
  <header>
    <nav
      className="navbar is-dark is-spaced"
      role="navigation"
      aria-label="main navigation">
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
          {routes.map(route => (
            <Link key={`route${route.path}`} className="navbar-item" to={route.path}>
              {route.label}
            </Link>
          ))}
          <span className="mr-6" />
        </div>
      </div>
    </nav>
  </header>
)

export default Header
