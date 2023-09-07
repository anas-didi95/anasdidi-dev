import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { HeadFC } from "gatsby"
import { useQueryMetadata } from "../utils/hooks/use-query-metadata"
import { useRoutes } from "../utils/hooks/use-routes"
import { useQueryImage } from "../utils/hooks/use-query-image"

import SEO from "../components/seo"

const IndexPage: React.FC<{}> = () => {
  const { fullname, position } = useQueryMetadata()
  const { landing, profile } = useQueryImage()
  const routes = useRoutes()

  return (
    <>
      <section
        className="hero is-primary is-fullheight"
        style={{
          backgroundImage: `url(${landing?.images.fallback?.src})`,
          backgroundSize: "cover",
          backgroundBlendMode: "darken",
        }}>
        <div className="hero-head" />
        <div className="hero-body">
          <div className="container has-text-centered">
            <GatsbyImage image={profile} style={{ borderRadius: "50%", display: "inline-block" }} alt="Profile" />
            <div className="mt-4">
              <p className="title">{fullname}</p>
              <p className="subtitle has-text-weight-bold">{position}</p>
            </div>
            <div className="columns is-centered is-mobile mt-6">
              <div className="column is-7">
                <nav className="level">
                  {routes.map((route) => (
                    <div
                      key={`route${route.path}`}
                      className="level-item has-text-centered mx-4">
                      <Link
                        to={route.path}
                        className="button is-rounded is-fullwidth">
                        {route.label}
                      </Link>
                    </div>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-foot" />
      </section>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <SEO siteTitle="Home" />
