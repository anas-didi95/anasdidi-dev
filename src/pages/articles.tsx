import React, { useMemo } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { animateScroll } from "react-scroll"
import { useReducerAction } from "../actions/index.action"
import AppLayout from "../layouts/AppLayout"
import ArticleList from "../components/ArticleList"
import { TArticle } from "../utils/types"
import { ArticlesQuery } from "../../graphql-types"

const ArticlesPage: React.FC<{}> = () => {
  const data: ArticlesQuery = useStaticQuery(graphql`
    query Articles {
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
  const [state, dispatch] = useReducerAction(data.articles.edges.length, 6)

  const handleNextPage = () => {
    dispatch({ type: "NEXT_PAGE" })
    animateScroll.scrollToTop({ duration: 750 })
  }
  const handlePreviousPage = () => {
    dispatch({ type: "PREVIOUS_PAGE" })
    animateScroll.scrollToTop({ duration: 750 })
  }

  const articles: TArticle[] = useMemo(
    () =>
      data.articles.edges
        .map((edge) => ({
          author: edge.node.frontmatter?.author ?? "",
          date: edge.node.frontmatter?.date ?? "",
          description: edge.node.frontmatter?.description ?? "",
          excerpt: edge.node.excerpt ?? "",
          slug: edge.node.fields?.slug ?? "",
          tags: edge.node.frontmatter?.tags ?? [],
          title: edge.node.frontmatter?.title ?? "",
        }))
        .slice(
          (state.currentPage - 1) * state.articlesPerPage,
          (state.currentPage - 1) * state.articlesPerPage +
            state.articlesPerPage
        ),
    [state.currentPage]
  )

  return (
    <AppLayout title="Articles">
      <div className="columns is-centered">
        <div className="column is-10">
          <ArticleList
            articles={articles}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            hasNextPage={state.hasNextPage}
            hasPreviousPage={state.hasPreviousPage}
          />
        </div>
      </div>
    </AppLayout>
  )
}

export default ArticlesPage
