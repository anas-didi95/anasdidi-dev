import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import GatsbyImage, { FixedObject } from "gatsby-image"
import { IndexPageQueryQuery } from "../graphqlTypes"
import { oc } from "ts-optchain"

const IndexPage: React.FC<{}> = () => {
  const [isActive, setActive] = useState(false)
  const data: IndexPageQueryQuery = useStaticQuery(graphql`
    query IndexPageQuery {
      file(relativePath: { eq: "header-brand.png" }) {
        childImageSharp {
          fixed(height: 32) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const handler = {
    toggleMenu: () => setActive(prev => !prev),
    getMenuActive: () => {
      if (isActive) {
        return "is-active"
      } else {
        return ""
      }
    },
  }

  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <GatsbyImage
            fixed={
              (oc(data).file.childImageSharp.fixed() as FixedObject) || null
            }
          />
        </a>
        <a
          role="button"
          className={`navbar-burger ${handler.getMenuActive()}`}
          aria-label="menu"
          aria-expanded="false"
          onClick={handler.toggleMenu}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        id="navbarBasicExample"
        className={`navbar-menu ${handler.getMenuActive()}`}
      >
        <div className="navbar-start">
          <a className="navbar-item">Home</a>

          <a className="navbar-item">Documentation</a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">More</a>

            <div className="navbar-dropdown">
              <a className="navbar-item">About</a>
              <a className="navbar-item">Jobs</a>
              <a className="navbar-item">Contact</a>
              <hr className="navbar-divider" />
              <a className="navbar-item">Report an issue</a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default IndexPage
