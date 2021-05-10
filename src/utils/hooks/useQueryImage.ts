import { graphql, useStaticQuery } from "gatsby"
import { FixedObject, FluidObject } from "gatsby-image"
import { ImageQuery } from "../../../graphql-types"

export type TQueryImage = {
  warning: FixedObject
  profile: FixedObject
  header: FixedObject
  landing: FluidObject
}
export const useQueryImage = (): TQueryImage => {
  const data: ImageQuery = useStaticQuery(graphql`
    query Image {
      warning: file(absolutePath: { regex: "/images/warning.png/" }) {
        childImageSharp {
          fixed(width: 112, height: 112) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      profile: file(absolutePath: { regex: "/images/profile-pic/" }) {
        childImageSharp {
          fixed(width: 160, height: 160) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      header: file(absolutePath: { regex: "/images/header-brand.png/" }) {
        childImageSharp {
          fixed(height: 28) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      landing: file(absolutePath: { regex: "/images/landing.jpg/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return {
    header: data.header?.childImageSharp?.fixed as FixedObject,
    landing: data.landing?.childImageSharp?.fluid as FluidObject,
    profile: data.profile?.childImageSharp?.fixed as FixedObject,
    warning: data.warning?.childImageSharp?.fixed as FixedObject,
  }
}
