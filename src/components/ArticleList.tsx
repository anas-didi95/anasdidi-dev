import React from "react"
import { Link } from "gatsby"
import Box from "./Box"
import { TArticle } from "../utils/types"

interface IArticleList {
  articles: TArticle[]
}
const ArticleList: React.FC<IArticleList> = ({ articles }) => (
  <>
    {articles.map((article, i) => (
      <Box key={`blog${i}`}>
        <Link className="title is-3" to={article.slug}>
          <p>{article.title}</p>
        </Link>
        <div className="mb-5 mt-2">
          <div className="columns is-mobile">
            <div className="column">
              <p className="subtitle is-6 is-italic">{article.date}</p>
            </div>
          </div>
        </div>
        <p className="mb-5">{article.excerpt}</p>
        <div className="tags are-medium">
          {/*blog.tags.map((tag, ii) => (
            <Tag
              key={`blog${i}tag${ii}`}
              value={oc(tag)("")}
              isHighlighted={true}
            />
          ))*/}
        </div>
      </Box>
    ))}
  </>
)

export default ArticleList
