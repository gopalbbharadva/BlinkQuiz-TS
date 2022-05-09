import {
  ActionProps,
  QuizStateProps,
} from "../types/ContextTypes/QuizContext.types";

export const initialState = {
  categories: [],
  quizzes: [],
};

export const QuizReducer = (state: QuizStateProps, action: ActionProps) => {
  switch (action.type) {
    case "GET_CATEGORIES":
      return { ...state, categories: action.payload.categories };

    case "GET_QUIZZES":
      return { ...state, quizzes: action.payload.quizzes };

    default:
      return state;
  }
};
