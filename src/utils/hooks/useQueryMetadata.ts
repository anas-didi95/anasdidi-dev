import { useStaticQuery, graphql } from "gatsby"
import { FixedObject } from "gatsby-image"
import { MetadataQuery } from "../../../graphql-types"

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
    file(absolutePath: {regex: "/images/header-brand.png/"}) {
      childImageSharp {
        fixed(height: 28) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
      `)

  return {
    headerImage: data.file?.childImageSharp?.fixed as FixedObject,
    author: data.site?.siteMetadata?.author ?? "",
    description: data.site?.siteMetadata?.description ?? "",
    fullname: data.site?.siteMetadata?.fullname ?? "",
    position: data.site?.siteMetadata?.position ?? "",
    title: data.site?.siteMetadata?.title ?? "",
    social: {
      email: data.site?.siteMetadata?.social?.email ?? "",
      github: data.site?.siteMetadata?.social?.github ?? "",
      linkedin: data.site?.siteMetadata?.social?.linkedin ?? "",
      web: data.site?.siteMetadata?.social?.web ?? "",
    },
  }
}
