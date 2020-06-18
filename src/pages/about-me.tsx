import React from "react"
import AppLayout from "../layouts/AppLayout"
import Box from "../components/Box"
import { useStaticQuery, graphql } from "gatsby"
import { AboutMeQuery } from "../graphqlTypes"
import GatsbyImage, { FixedObject } from "gatsby-image"
import { oc } from "ts-optchain"
import SocialIcon from "../components/SocialIcon"
import { useQueryMetadata } from "../utils/hooks/useQueryMetadata"

const AboutMePage: React.FC<{}> = () => {
  const metadata = useQueryMetadata()
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
              <div className="column is-9">
                <p className="title is-3">{metadata.fullname}</p>
                <p className="subtitle is-5">{metadata.position}</p>
                <div className="table-container">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td style={{ width: "10%" }}>
                          <SocialIcon type="email" />
                        </td>
                        <td style={{ width: "40%" }}>
                          {metadata.social.email}
                        </td>
                        <td style={{ width: "10%" }}>
                          <SocialIcon type="github" />
                        </td>
                        <td style={{ width: "40%" }}>
                          {metadata.social.github}
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: "10%" }}>
                          <SocialIcon type="linkedin" />
                        </td>
                        <td style={{ width: "40%" }}>
                          {metadata.social.linkedin}
                        </td>
                        <td style={{ width: "10%" }}>
                          <SocialIcon type="web" />
                        </td>
                        <td style={{ width: "40%" }}>{metadata.social.web}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Box>
        </div>
        <div className="column" />
      </div>
    </AppLayout>
  )
}

export default AboutMePage
