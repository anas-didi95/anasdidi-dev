import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import GatsbyImage, { FixedObject } from "gatsby-image"
import AppLayout from "../layouts/AppLayout"
import Box from "../components/Box"
import Icon from "../components/Icon"
import ResponsiveBreakpoint from "../components/ResponsiveBreakpoint"
import { useQueryMetadata } from "../utils/hooks/useQueryMetadata"
import { AboutMeQuery } from "../../graphql-types"

const AboutMePage: React.FC<{}> = () => {
  const metadata = useQueryMetadata()
  const data: AboutMeQuery = useStaticQuery(graphql`
    query AboutMe {
      content: markdownRemark(fileAbsolutePath: { regex: "/about-me/" }) {
        html
      }
      profilePic: file(absolutePath: {regex: "/images/profile-pic/"}) {
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
                <figure className="image">
                  <GatsbyImage
                    fixed={
                      data.profilePic?.childImageSharp?.fixed as FixedObject
                    }
                    style={{ borderRadius: "25%" }}
                  />
                </figure>
              </div>
              <div className="column is-9">
                <p className="title is-3">{metadata.fullname}</p>
                <p className="subtitle is-5">{metadata.position}</p>
                <div className="columns is-multiline">
                  <div className="column is-6">
                    <_SocialLinkField type="email" link={metadata.social.email} />
                  </div>
                  <div className="column is-6">
                    <_SocialLinkField type="github" link={metadata.social.github} />
                  </div>
                  <div className="column is-6">
                    <_SocialLinkField type="linkedin" link={metadata.social.linkedin} />
                  </div>
                  <div className="column is-6">
                    <_SocialLinkField type="web" link={metadata.social.web} />
                  </div>
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

const _SocialLinkField: React.FC<{
  type: "email" | "github" | "linkedin" | "web"
  link: string
}> = ({ type, link }) => (
  <div className="field">
    <label className="label">
      <div style={{ display: "flex", alignItems: "center" }}>
        <Icon type={type} />
        <span className="ml-2">
          {type.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}
        </span>
      </div>
    </label>
    <div className="control">
      <a
        href={`${type === "email" ? "mailto:" + link : link}`}
        target="_blank"
        rel="noreferrer">
        {link}
      </a>
    </div>
  </div>
)

const _TColumnSocialLink: React.FC<{
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
