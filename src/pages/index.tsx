import React from "react"
import GatsbyImage from "gatsby-image"
import { Link } from "gatsby"
import { useQueryMetadata } from "../utils/hooks/useQueryMetadata"
import { useRoutes } from "../utils/hooks/useRoutes"

const IndexPage: React.FC<{}> = () => {
  const metadata = useQueryMetadata()
  const routes = useRoutes()

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
                {routes.map(route => (
                  <div key={`route${route.path}`} className="level-item has-text-centered mx-4">
                    <Link to={route.path} className="button is-rounded is-fullwidth" >{route.label}</Link>
                  </div>
                ))}
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
