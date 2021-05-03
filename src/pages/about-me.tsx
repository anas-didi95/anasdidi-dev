import React from "react"
import AppLayout from "../layouts/AppLayout"
import Box from "../components/Box"
import { useStaticQuery, graphql } from "gatsby"
import { AboutMeQuery } from "../../graphql-types"
import GatsbyImage, { FixedObject } from "gatsby-image"
import Icon from "../components/Icon"
import { useQueryMetadata } from "../utils/hooks/useQueryMetadata"
import ResponsiveBreakpoint from "../components/ResponsiveBreakpoint"

const AboutMePage: React.FC<{}> = () => {
  const metadata = useQueryMetadata()
  const data: AboutMeQuery = useStaticQuery(graphql`
    query AboutMe {
      content: markdownRemark(fileAbsolutePath: { regex: "/about-me/" }) {
        html
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
                {/*<GatsbyImage
                  fixed={
                    oc(data).profilePic.childImageSharp.fixed() as FixedObject
                  }
                  style={{ borderRadius: "25%" }}
                />*/}
              </div>
              <div className="column is-9">
                <p className="title is-3">{metadata.fullname}</p>
                <p className="subtitle is-5">{metadata.position}</p>
                <div className="table-container">
                  <table className="table">
                    <tbody>
                      <tr>
                        <TableColumnSocialLink
                          type="email"
                          link={metadata.social.email}
                        />
                        <TableColumnSocialLink
                          type="github"
                          link={metadata.social.github}
                        />
                      </tr>
                      <tr>
                        <TableColumnSocialLink
                          type="linkedin"
                          link={metadata.social.linkedin}
                        />
                        <TableColumnSocialLink
                          type="web"
                          link={metadata.social.web}
                        />
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
      <ResponsiveBreakpoint />
      <div className="columns">
        <div className="column" />
        <div className="column is-6">
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: data.content?.html ?? "" }}
          />
        </div>
        <div className="column" />
      </div>
    </AppLayout>
  )
}

const TableColumnSocialLink: React.FC<{
  type: "email" | "github" | "linkedin" | "web"
  link: string
}> = ({ type, link }) => (
  <>
    <td style={{ width: "5%" }}>
      <Icon type={type} />
    </td>
    <td style={{ width: "45%" }}>
      <a
        className="is-size-6"
        href={`${type === "email" ? "mailto:" + link : link}`}
        target="_blank"
        rel="noreferrer">
        {link}
      </a>
    </td>
  </>
)

export default AboutMePage
