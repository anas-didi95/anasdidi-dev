import { Maybe } from "../../graphql-types"

export type TSocialEnum = "email" | "github" | "linkedin" | "web"

export type TPaginationEnum = "next" | "previous"

export type TArticle = {
  title: string
  author: string
  date: string
  description: string
  tags?: Maybe<string>[]
  excerpt: string
  slug: string
}

export type TArticleNode = {
  frontmatter: {
    title: string
  }
  fields: {
    slug: string
  }
}
