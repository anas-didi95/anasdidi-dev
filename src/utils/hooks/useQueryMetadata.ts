import { useStaticQuery, graphql } from "gatsby"
import { FixedObject } from "gatsby-image"
import { oc } from "ts-optchain"
import { MetadataQuery } from "../../graphqlTypes"

export type IQueryMetadata = {
  headerImage: FixedObject
  title: string
  description: string
  author: string
  email: {
    value: string
    link: string
  }
  github: {
    value: string
    link: string
  }
  linkedin: {
    value: string
    link: string
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
          social {
            email {
              value
              link
            }
            github {
              value
              link
            }
            linkedin {
              value
              link
            }
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
    email: {
      link: oc(data).site.siteMetadata.social.email.link(""),
      value: oc(data).site.siteMetadata.social.email.value(""),
    },
    github: {
      link: oc(data).site.siteMetadata.social.github.link(""),
      value: oc(data).site.siteMetadata.social.github.value(""),
    },
    linkedin: {
      link: oc(data).site.siteMetadata.social.linkedin.link(""),
      value: oc(data).site.siteMetadata.social.linkedin.value(""),
    },
  }
}
