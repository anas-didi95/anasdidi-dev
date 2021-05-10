import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import GatsbyImage from "gatsby-image"
import AppLayout from "../layouts/AppLayout"
import Box from "../components/Box"
import Icon from "../components/Icon"
import { TSocialEnum } from "../utils/types"
import { toTitleCase } from "../utils/common"
import { useQueryMetadata } from "../utils/hooks/useQueryMetadata"
import { AboutMeQuery } from "../../graphql-types"
import { useQueryImage } from "../utils/hooks/useQueryImage"

const AboutMePage: React.FC<{}> = () => {
  const { profile } = useQueryImage()
  const { fullname, position, social } = useQueryMetadata()
  const data: AboutMeQuery = useStaticQuery(graphql`
    query AboutMe {
      content: markdownRemark(fileAbsolutePath: { regex: "/about-me/" }) {
        html
      }
    }
  `)

  return (
    <AppLayout title="About Me">
      <div className="columns is-centered">
        <div className="column is-8">
          <Box>
            <div className="columns">
              <div className="column is-3 has-text-centered">
                <figure className="image">
                  <GatsbyImage
                    fixed={profile}
                    style={{ borderRadius: "25%" }}
                  />
                </figure>
              </div>
              <div className="column is-9">
                <p className="title is-3">{fullname}</p>
                <p className="subtitle is-5">{position}</p>
                <div className="columns is-multiline">
                  <div className="column is-6">
                    <_SocialLinkField type="email" link={social.email} />
                  </div>
                  <div className="column is-6">
                    <_SocialLinkField type="github" link={social.github} />
                  </div>
                  <div className="column is-6">
                    <_SocialLinkField type="linkedin" link={social.linkedin} />
                  </div>
                  <div className="column is-6">
                    <_SocialLinkField type="web" link={social.web} />
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </div>
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
