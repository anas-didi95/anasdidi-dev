import React from "react"
import GatsbyImage, { FixedObject } from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import AppLayout from "../layouts/AppLayout"
import Box from "../components/Box"
import ResponsiveBreakpoint from "../components/ResponsiveBreakpoint"
import Button from "../components/Button"
import { useQueryImage } from "../utils/hooks/useQueryImage"

const Error404Page: React.FC<{}> = () => {
  const { warning } = useQueryImage()

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
                  fixed={warning}
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
