import { useStaticQuery, graphql } from "gatsby"
import { FixedObject } from "gatsby-image"
import { oc } from "ts-optchain"
import { MetadataQuery } from "../../graphqlTypes"

export type IQueryMetadata = {
  headerImage: FixedObject
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
    }
  `)

  return {
    headerImage: oc(data).file.childImageSharp.fixed() as FixedObject,
  }
}
