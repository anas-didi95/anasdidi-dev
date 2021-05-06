import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AppLayout from "../layouts/AppLayout"
import ArticleList from "../components/ArticleList"
import { TArticle } from "../utils/types"
import { IndexQuery } from "../../graphql-types"
import { GrNext, GrPrevious } from "react-icons/gr"
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5"

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
            fields {
              slug
            }
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
    slug: edge.node.fields?.slug ?? "",
    tags: edge.node.frontmatter?.tags ?? [],
    title: edge.node.frontmatter?.title ?? "",
  }))

  return (
    <AppLayout title="Home">
      <div className="columns is-centered">
        <div className="column is-10">
          <ArticleList articles={articles} />
          <nav className="pagination" role="navigation" aria-label="pagination">
            <button className="pagination-previous button is-dark" disabled>
              <span className="mr-2" style={{ display: "flex", alignItems: "center" }}><IoArrowBackOutline /></span>
              <span>
                Previous
                </span>
            </button>
            <button className="pagination-next button is-dark">
              <span>
                Next page
                </span>
              <span className="ml-2" style={{ display: "flex", alignItems: "center" }}><IoArrowForwardOutline /></span>
            </button>
          </nav>
        </div>
      </div>
    </AppLayout>
  )
}

export default IndexPage
