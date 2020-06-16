import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FixedObject } from "gatsby-image"
import { IndexPageQueryQuery } from "../graphqlTypes"
import { oc } from "ts-optchain"
import Header from "../components/Header"

const IndexPage: React.FC<{}> = () => {
  const [isActive, setActive] = useState(false)
  const data: IndexPageQueryQuery = useStaticQuery(graphql`
    query IndexPageQuery {
      file(relativePath: { eq: "header-brand.png" }) {
        childImageSharp {
          fixed(height: 32) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const handler = {
    toggleMenu: () => setActive(prev => !prev),
    getMenuActive: () => {
      if (isActive) {
        return "is-active"
      } else {
        return ""
      }
    },
  }

  return (
    <>
      <Header
        isActive={isActive}
        toggleMenu={handler.toggleMenu}
        headerImage={oc(data).file.childImageSharp.fixed() as FixedObject}
      />
    </>
  )
}

export default IndexPage
