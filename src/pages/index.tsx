import React from "react"
import GatsbyImage from "gatsby-image"
import { Link } from "gatsby"
import SEO from "../components/SEO"
import { useQueryMetadata } from "../utils/hooks/useQueryMetadata"
import { useRoutes } from "../utils/hooks/useRoutes"
import { useQueryImage } from "../utils/hooks/useQueryImage"

const IndexPage: React.FC<{}> = () => {
  const { landing, profile } = useQueryImage()
  const { author, description, title, fullname, position } = useQueryMetadata()
  const routes = useRoutes()

  return (
    <>
      <SEO
        author={author}
        description={description}
        siteTitle={title}
        title="Home"
      />
      <section
        className="hero is-primary is-fullheight"
        style={{
          backgroundImage: `url(${landing.src})`,
          backgroundSize: "cover",
          backgroundBlendMode: "darken",
        }}>
        <div className="hero-head" />
        <div className="hero-body">
          <div className="container has-text-centered">
            <GatsbyImage
              fixed={profile}
              style={{ borderRadius: "50%" }}
            />
            <div className="mt-4">
              <p className="title">{fullname}</p>
              <p className="subtitle has-text-weight-bold">
                {position}
              </p>
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
