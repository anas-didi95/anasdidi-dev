import React, { useState, ReactNode } from "react"
import Header from "../components/Header"
import { useQueryMetadata } from "../utils/hooks/useQueryMetadata"
import Helmet from "react-helmet"

const AppLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isActive, setActive] = useState(false)
  const metadata = useQueryMetadata()

  const handler = {
    toggleMenu: () => setActive(prev => !prev),
  }

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
        title={metadata.title}
        titleTemplate={`%s | Home`}
        meta={[
          {
            name: `description`,
            content: metadata.description,
          },
          {
            property: `og:title`,
            content: metadata.title,
          },
          {
            property: `og:description`,
            content: metadata.description,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: metadata.author,
          },
          {
            name: `twitter:title`,
            content: metadata.title,
          },
          {
            name: `twitter:description`,
            content: metadata.description,
          },
        ].concat([])}
      />
      <Header
        isActive={isActive}
        toggleMenu={handler.toggleMenu}
        headerImage={metadata.headerImage}
      />
      {children}
    </>
  )
}

export default AppLayout
