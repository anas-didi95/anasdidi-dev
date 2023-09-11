import { Reducer, useReducer } from "react";

type TState = {
  isActive: boolean;
};
type TAction = { type: "TOGGLE_MENU" };

const reducer: Reducer<TState, TAction> = (state: TState, action: TAction) => {
  const { type } = action;

  if (type === "TOGGLE_MENU") {
    const { isActive } = state;

    return { ...state, isActive: !isActive };
  } else {
    throw new Error(`Action Type not defined! ${type}`);
  }
};

const initialState: TState = {
  isActive: false,
};
export const useReducerAction = () =>
  useReducer<Reducer<TState, TAction>>(reducer, { ...initialState });
