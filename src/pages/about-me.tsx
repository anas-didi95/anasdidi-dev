import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import GatsbyImage, { FixedObject } from "gatsby-image"
import AppLayout from "../layouts/AppLayout"
import Box from "../components/Box"
import Icon from "../components/Icon"
import ResponsiveBreakpoint from "../components/ResponsiveBreakpoint"
import { TSocialEnum } from "../utils/types"
import { toTitleCase } from "../utils/common"
import { useQueryMetadata } from "../utils/hooks/useQueryMetadata"
import { AboutMeQuery } from "../../graphql-types"

const AboutMePage: React.FC<{}> = () => {
  const metadata = useQueryMetadata()
  const data: AboutMeQuery = useStaticQuery(graphql`
    query AboutMe {
      content: markdownRemark(fileAbsolutePath: { regex: "/about-me/" }) {
        html
      }
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
                    <_SocialLinkField
                      type="email"
                      link={metadata.social.email}
                    />
                  </div>
                  <div className="column is-6">
                    <_SocialLinkField
                      type="github"
                      link={metadata.social.github}
                    />
                  </div>
                  <div className="column is-6">
                    <_SocialLinkField
                      type="linkedin"
                      link={metadata.social.linkedin}
                    />
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
      <div className="columns is-centered mt-2">
        <div className="column is-6">
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: data.content?.html ?? "" }}
          />
        </div>
      </div>
    </AppLayout>
  )
}

const _SocialLinkField: React.FC<{
  type: TSocialEnum
  link: string
}> = ({ type, link }) => (
  <div className="field">
    <label className="label">
      <div style={{ display: "flex", alignItems: "center" }}>
        <Icon type={type} />
        <span className="ml-2">{toTitleCase(type)}</span>
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

export default AboutMePage
