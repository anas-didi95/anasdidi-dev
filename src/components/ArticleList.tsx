import React from "react"
import { Link } from "gatsby"
import Box from "./Box"
import Tag from "./Tag"
import Icon from "./Icon"
import { TArticle } from "../utils/types"

interface IArticleList {
  articles: TArticle[]
  hasNextPage: boolean
  hasPreviousPage: boolean
  handleNextPage?: () => void
  handlePreviousPage?: () => void
}
const ArticleList: React.FC<IArticleList> = ({
  articles,
  hasNextPage,
  hasPreviousPage,
  handleNextPage,
  handlePreviousPage,
}) => (
  <>
    <div className="columns is-multiline">
      {articles.map((article, i) => (
        <div key={`article${i}`} className="column is-6">
          <_Article article={article} />
        </div>
      ))}
    </div>
    {!!handleNextPage && !!handlePreviousPage && (
      <nav className="pagination" role="navigation" aria-label="pagination">
        <button
          className="pagination-previous button is-dark"
          onClick={handlePreviousPage}
          disabled={!hasPreviousPage}>
          <span
            className="mr-2"
            style={{ display: "flex", alignItems: "center" }}>
            <Icon type="previous" />
          </span>
          <span>Previous</span>
        </button>
        <button
          className="pagination-next button is-dark"
          onClick={handleNextPage}
          disabled={!hasNextPage}>
          <span>Next page</span>
          <span
            className="ml-2"
            style={{ display: "flex", alignItems: "center" }}>
            <Icon type="next" />
          </span>
        </button>
      </nav>
    )}
  </>
)

const _Article: React.FC<{ article: TArticle }> = ({ article }) => (
  <Box height="100%">
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}>
      <div>
        <Link className="title is-3" to={article.slug}>
          <p>{article.title}</p>
        </Link>
        <div className="mt-2">
          <div className="columns is-mobile">
            <div className="column">
              <p className="subtitle is-6 is-italic">{article.date}</p>
            </div>
          </div>
        </div>
        <p className="mt-5 mb-5">{article.excerpt}</p>
      </div>
      <div className="tags are-medium">
        {!!article.tags &&
          article.tags.map((tag, i) => (
            <Tag key={`tag${i}`} value={tag ?? ""} isHighlighted />
          ))}
      </div>
    </div>
  </Box>
)

export default ArticleList
