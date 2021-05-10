import React from "react"
import GatsbyImage from "gatsby-image"
import { graphql, Link, useStaticQuery } from "gatsby"
import { useQueryMetadata } from "../utils/hooks/useQueryMetadata"
import { useRoutes } from "../utils/hooks/useRoutes"
import { LandingQuery } from "../../graphql-types"

const IndexPage: React.FC<{}> = () => {
  const data: LandingQuery = useStaticQuery(graphql`
  query Landing {
    landingImage: file(absolutePath: { regex: "/images/landing.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
  const metadata = useQueryMetadata()
  const routes = useRoutes()

  return (
    <section
      className="hero is-primary is-fullheight" style={
        {
          backgroundImage: `url(${data.landingImage?.childImageSharp?.fluid?.src})`,
          backgroundSize: "cover",
          backgroundBlendMode: "darken",
        }
      }>
      <div className="hero-head" />
      <div className="hero-body" >
        <div className="container has-text-centered">
          <GatsbyImage
            fixed={metadata.profilePic}
            style={{ borderRadius: "50%" }}
          />
          <div className="mt-4">
            <p className="title">{metadata.fullname}</p>
            <p className="subtitle has-text-weight-bold">{metadata.position}</p>
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
  )
}

export default IndexPage
