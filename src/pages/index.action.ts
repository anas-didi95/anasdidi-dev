import { Reducer, useReducer } from "react"

type TState = {
  currentPage: number
  hasNextPage: boolean
  hasPreviousPage: boolean
  articlesPerPage: number
  totalPages: number
}
type TAction = { type: "NEXT_PAGE" } | { type: "PREVIOUS_PAGE" }

const reducer: Reducer<TState, TAction> = (state, action) => {
  const { type } = action

  if (type === "NEXT_PAGE") {
    const { currentPage, totalPages } = state
    const nextPage = currentPage + 1;

    return {
      ...state,
      currentPage: nextPage,
      hasNextPage: nextPage !== totalPages,
      hasPreviousPage: true,
    }
  } else if (type === "PREVIOUS_PAGE") {
    const { currentPage } = state
    const previousPage = currentPage - 1

    return {
      ...state,
      currentPage: previousPage,
      hasNextPage: true,
      hasPreviousPage: previousPage !== 1,
    }
  } else {
    throw new Error(`Action Type not defined! ${type}`)
  }
}

const initialState: TState = {
  currentPage: 1,
  hasNextPage: true,
  hasPreviousPage: false,
  articlesPerPage: -1,
  totalPages: -1,
}

export const useReducerAction = (totalArticles: number, articlesPerPage: number) =>
  useReducer<Reducer<TState, TAction>>(reducer, {
    ...initialState,
    articlesPerPage,
    hasNextPage: totalArticles / articlesPerPage !== 1,
    totalPages: Math.ceil(totalArticles / articlesPerPage),
  })
