import { useStaticQuery, graphql } from "gatsby"
import { FixedObject } from "gatsby-image"
import { oc } from "ts-optchain"
import { MetadataQuery } from "../../graphqlTypes"

export type IQueryMetadata = {
  headerImage: FixedObject
  title: string
  description: string
  author: string
  fullname: string
  position: string
  social: {
    email: string
    github: string
    linkedin: string
    web: string
  }
}

export const useQueryMetadata = (): IQueryMetadata => {
  const data: MetadataQuery = useStaticQuery(graphql`
    query Metadata {
      file(relativePath: { eq: "header-brand.png" }) {
        childImageSharp {
          fixed(height: 32) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          title
          description
          author
          fullname
          position
          social {
            email
            github
            linkedin
            web
          }
        }
      }
    }
  `)

  return {
    headerImage: oc(data).file.childImageSharp.fixed() as FixedObject,
    author: oc(data).site.siteMetadata.author(""),
    description: oc(data).site.siteMetadata.description(""),
    title: oc(data).site.siteMetadata.title(""),
    fullname: oc(data).site.siteMetadata.fullname(""),
    position: oc(data).site.siteMetadata.position(""),
    social: {
      email: oc(data).site.siteMetadata.social.email(""),
      github: oc(data).site.siteMetadata.social.github(""),
      linkedin: oc(data).site.siteMetadata.social.linkedin(""),
      web: oc(data).site.siteMetadata.social.web(""),
    },
  }
}
