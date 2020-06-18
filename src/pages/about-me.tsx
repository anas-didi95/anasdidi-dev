import React from "react"
import AppLayout from "../layouts/AppLayout"
import Box from "../components/Box"
import { useStaticQuery, graphql } from "gatsby"
import { AboutMeQuery } from "../graphqlTypes"
import GatsbyImage, { FixedObject } from "gatsby-image"
import { oc } from "ts-optchain"

const AboutMePage: React.FC<{}> = () => {
  const data: AboutMeQuery = useStaticQuery(graphql`
    query AboutMe {
      profilePic: file(absolutePath: { regex: "/images/profile-pic/" }) {
        childImageSharp {
          fixed(width: 160, height: 160) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <AppLayout title="About Me">
      <div className="columns">
        <div className="column" />
        <div className="column is-8">
          <Box>
            <div className="columns">
              <div className="column is-3 has-text-centered">
                <GatsbyImage
                  fixed={
                    oc(data).profilePic.childImageSharp.fixed() as FixedObject
                  }
                  style={{ borderRadius: "25%" }}
                />
              </div>
              <div className="column is-9">hello world 2</div>
            </div>
          </Box>
        </div>
        <div className="column" />
      </div>
    </AppLayout>
  )
}

export default AboutMePage
