import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AppLayout from "../layouts/AppLayout"
import ArticleList from "../components/ArticleList"
import { TArticle } from "../utils/types"
import { IndexQuery } from "../../graphql-types"

const IndexPage: React.FC<{}> = () => {
  const data: IndexQuery = useStaticQuery(graphql`
    query Index {
      articles: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/articles/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              description
              author
              date(formatString: "YYYY, MMMM DD")
              tags
            }
            excerpt
          }
        }
      }
    }
  `)

  const articles: TArticle[] = data.articles.edges.map((edge) => ({
    author: edge.node.frontmatter?.author ?? "",
    date: edge.node.frontmatter?.date ?? "",
    description: edge.node.frontmatter?.description ?? "",
    excerpt: edge.node.excerpt ?? "",
    slug: "",
    tags: edge.node.frontmatter?.tags ?? [],
    title: edge.node.frontmatter?.title ?? "",
  }))

  return (
    <AppLayout title="Home">
      <div className="columns is-centered">
        <div className="column is-10">
          <ArticleList articles={articles} />
        </div>
      </div>
    </AppLayout>
  )
}

export default IndexPage
