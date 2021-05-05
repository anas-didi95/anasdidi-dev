import React from "react"
import { Link } from "gatsby"
import Box from "./Box"
import { TArticle } from "../utils/types"

interface IArticleList {
  articles: TArticle[]
}
const ArticleList: React.FC<IArticleList> = ({ articles }) => (
  <>
    <div className="columns is-multiline">
      {articles.map((article, i) => (
        <div key={`article${i}`} className="column is-6">
          <_Article article={article} />
        </div>
      ))}
    </div>
  </>
)

const _Article: React.FC<{ article: TArticle }> = ({ article }) => (
  <Box height="100%">
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
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
        <div className="tag">Hello</div>
        {/*blog.tags.map((tag, ii) => (
  <Tag
    key={`blog${i}tag${ii}`}
    value={oc(tag)("")}
    isHighlighted={true}
  />
))*/}
      </div>
    </div>
  </Box>

)

export default ArticleList
