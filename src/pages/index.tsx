import { Link } from "gatsby"
import GatsbyImage from "gatsby-image"
import React from "react"
import Button from "../components/Button"
import { useQueryMetadata } from "../utils/hooks/useQueryMetadata"

const IndexPage: React.FC<{}> = () => {
  const metadata = useQueryMetadata()

  return (
    <section className="hero is-primary is-fullheight">
      <div className="hero-head" />
      <div className="hero-body">
        <div className="container has-text-centered">
          <GatsbyImage fixed={metadata.profilePic} style={{ borderRadius: "50%" }} />
          <div className="mt-2">
            <p className="title">{metadata.fullname}</p>
            <p className="subtitle">{metadata.position}</p>
          </div>
          <div className="columns is-centered is-mobile mt-6">
            <div className="column is-7">
              <nav className="level">
                <div className="level-item has-text-centered mx-4">
                  <Link to="/articles" className="button is-rounded is-fullwidth" >Articles</Link>
                </div>
                <div className="level-item has-text-centered mx-4">
                  <Link to="/tags" className="button is-rounded is-fullwidth" >Tags</Link>
                </div>
                <div className="level-item has-text-centered mx-4">
                  <Link to="/about-me" className="button is-rounded is-fullwidth" >About Me</Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-foot" />
    </section>
  )
}

export default IndexPage
