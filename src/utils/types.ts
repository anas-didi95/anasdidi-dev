import { Maybe } from "../graphqlTypes"

export type Blog = {
  title: string
  description: string
  author: string
  date: string
  tags: Maybe<string>[]
  excerpt: string
}
