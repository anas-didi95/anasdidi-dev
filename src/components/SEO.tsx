import React from "react"
import Helmet from "react-helmet"

const SEO: React.FC<{ title: string; description: string; author: string }> = ({
  title,
  description,
  author,
}) => (
  <Helmet
    htmlAttributes={{
      lang: "en",
    }}
    title={title}
    titleTemplate={`${description} | %s`}
    meta={[
      {
        name: `description`,
        content: description,
      },
      {
        property: `og:title`,
        content: title,
      },
      {
        property: `og:description`,
        content: description,
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
        content: author,
      },
      {
        name: `twitter:title`,
        content: title,
      },
      {
        name: `twitter:description`,
        content: description,
      },
    ].concat([])}
  />
)

export default SEO
