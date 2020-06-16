import { useStaticQuery, graphql } from "gatsby"
import { FixedObject } from "gatsby-image"
import { oc } from "ts-optchain"
import { MetadataQuery } from "../../graphqlTypes"

export type IQueryMetadata = {
  headerImage: FixedObject
  title: string
  description: string
  author: string
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
        }
      }
    }
  `)

  return {
    headerImage: oc(data).file.childImageSharp.fixed() as FixedObject,
    author: oc(data).site.siteMetadata.author(""),
    description: oc(data).site.siteMetadata.description(""),
    title: oc(data).site.siteMetadata.title(""),
  }
}
