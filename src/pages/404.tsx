import React from "react"
import AppLayout from "../layouts/AppLayout"
import Box from "../components/Box"
import ResponsiveBreakpoint from "../components/ResponsiveBreakpoint"
import { useStaticQuery, graphql } from "gatsby"
import { Error404PageQuery } from "../graphqlTypes"
import GatsbyImage, { FixedObject } from "gatsby-image"
import { oc } from "ts-optchain"

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
            <GatsbyImage
              fixed={oc(data).icon.childImageSharp.fixed() as FixedObject}
            />
            Page Not Found Looks like you've followed a broken link or entered a
            URL that doesn't exist on this site.
          </Box>
        </div>
        <div className="column" />
      </div>
      <ResponsiveBreakpoint />
    </AppLayout>
  )
}

export default Error404Page
