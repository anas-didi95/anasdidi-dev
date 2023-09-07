import { graphql, useStaticQuery } from "gatsby"
import { IGatsbyImageData } from "gatsby-plugin-image"

export const useQueryImage = () => {
  const data: Queries.ImageQuery = useStaticQuery(graphql`
  query Image {
    warning: file(absolutePath: { regex: "/images/warning/" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 112, height: 112)
      }
    }
    profile: file(absolutePath: { regex: "/images/profile/" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 160, height: 160)
      }
    }
    header: file(absolutePath: { regex: "/images/header/" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, height: 28)
      }
    }
    landing: file(absolutePath: { regex: "/images/landing/" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
  `)
  return {
    header: data.header?.childImageSharp?.gatsbyImageData as IGatsbyImageData,
    landing: data.landing?.childImageSharp?.gatsbyImageData as IGatsbyImageData,
    profile: data.profile?.childImageSharp?.gatsbyImageData as IGatsbyImageData,
    warning: data.warning?.childImageSharp?.gatsbyImageData as IGatsbyImageData,
  }
}
