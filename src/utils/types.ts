import { Maybe } from "../graphqlTypes"

export type Blog = {
  title: string
  description: string
  author: string
  date: string
  tags: Maybe<string>[]
  excerpt: string
  slug: string
}

export type Project = {
  title: string
  description: string
  html: string
  link: string
  source: string
  tags: Maybe<string>[]
}
