import React from "react"
import AppLayout from "../layouts/AppLayout"
//import BlogList from "../components/BlogList"
import { useStaticQuery, graphql } from "gatsby"
import { IndexQuery } from "../../graphql-types"
import { TArticle } from "../utils/types"
import ArticleList from "../components/ArticleList"
//import { IndexQuery } from "../graphqlTypes"
//import { oc } from "ts-optchain"

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
              date(formatString: "MMMM DD, YYYY")
              tags
            }
            excerpt
          }
        }
      }
    }
  `)

  const articles: TArticle[] = data.articles.edges.map(edge => ({
    author: edge.node.frontmatter?.author ?? "",
    date: edge.node.frontmatter?.date ?? "",
    description: edge.node.frontmatter?.description ?? "",
    excerpt: edge.node.excerpt ?? "",
    slug: "",
    tags: edge.node.frontmatter?.tags ?? [],
    title: edge.node.frontmatter?.title ?? ""
  }))

  return (
    <AppLayout title="Home">
      <div className="columns">
        <div className="column" />
        <div className="column is-7">
          <ArticleList articles={articles} />
        </div>
        <div className="column" />
      </div>
    </AppLayout>
  )
}

export default IndexPage
