import React from "react"
import AppLayout from "../layouts/AppLayout"
import Box from "../components/Box"
import ResponsiveBreakpoint from "../components/ResponsiveBreakpoint"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Error404PageQuery } from "../graphqlTypes"
import GatsbyImage, { FixedObject } from "gatsby-image"
import { oc } from "ts-optchain"
import Button from "../components/Button"

const Error404Page: React.FC<{}> = () => {
  const data: Error404PageQuery = useStaticQuery(graphql`
    query Error404Page {
      icon: file(absolutePath: { regex: "/images/warning.png/" }) {
        childImageSharp {
          fixed(width: 96, height: 96) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <AppLayout title="Error 404">
      <ResponsiveBreakpoint />
      <div className="columns">
        <div className="column" />
        <div className="column is-6">
          <Box>
            <div className="columns">
              <div className="column is-3 has-text-centered">
                <GatsbyImage
                  fixed={oc(data).icon.childImageSharp.fixed() as FixedObject}
                />
              </div>
              <div className="column">
                <p className="title">Page Not Found!</p>
                <p className="content">
                  Looks like you've followed a broken link or entered a URL that
                  doesn't exist on this site.
                </p>
                <div className="buttons">
                  <Button type="link" value="Return to Home" link="/" />
                </div>
              </div>
            </div>
          </Box>
        </div>
        <div className="column" />
      </div>
      <ResponsiveBreakpoint />
    </AppLayout>
  )
}

export default Error404Page