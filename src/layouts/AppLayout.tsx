import React, { useState, ReactNode } from "react"
import Header from "../components/Header"
import { useQueryMetadata } from "../utils/hooks/useQueryMetadata"
import SEO from "../components/SEO"
import { GrMail, GrGithub, GrLinkedin } from "react-icons/gr"

const AppLayout: React.FC<{
  children: ReactNode
  description: string
  title: string
}> = ({ children, description, title }) => {
  const [isActive, setActive] = useState(false)
  const metadata = useQueryMetadata()

  const handler = {
    toggleMenu: () => setActive(prev => !prev),
  }

  return (
    <>
      <SEO
        title={title}
        author={metadata.author}
        description={description || metadata.description}
        siteTitle={metadata.title}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}>
        <Header
          isActive={isActive}
          toggleMenu={handler.toggleMenu}
          headerImage={metadata.headerImage}
        />
        <section className="section" style={{ flex: 1 }}>
          <div className="container">{children}</div>
        </section>
        <footer className="footer">
          <div className="content has-text-centered">
            <div className="columns">
              <div className="column" />
              <div className="buttons column">
                <a
                  className="button is-text"
                  target="_blank"
                  href="mailto:anas.didi95@gmail.com">
                  <span className="is-size-3">
                    <GrMail />
                  </span>
                </a>
                <a
                  className="button is-text"
                  target="_blank"
                  href="https://github.com/anas-didi95">
                  <span className="is-size-3">
                    <GrGithub />
                  </span>
                </a>
                <a
                  className="button is-text"
                  target="_blank"
                  href="https://www.linkedin.com/in/anas-juwaidi-mohd-jeffry">
                  <span className="is-size-3">
                    <GrLinkedin />
                  </span>
                </a>
              </div>
              <div className="column" />
            </div>
            <p>All rights reserved &copy; {new Date().getFullYear()}</p>
            <p>
              Built with <a href="https://bulma.io/">Bulma</a> and{" "}
              <a href="https://www.gatsbyjs.org/">GatsbyJS</a>{" "}
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default AppLayout
