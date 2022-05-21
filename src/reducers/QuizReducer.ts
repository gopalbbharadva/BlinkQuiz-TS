import {
  ActionProps,
  QuizStateProps,
} from "../types/ContextTypes/QuizContext.types";

export const initialState = {
  isLoading: true,
  error: "",
  categories: [],
  quizzes: [],
};

export const QuizReducer = (state: QuizStateProps, action: ActionProps) => {
  switch (action.type) {
    case "FETCH_CATEGORIES":
      return { ...state, isLoading: true };

    case "GET_CATEGORIES":
      return {
        ...state,
        categories: action.payload.categories,
        isLoading: action.payload.isLoading,
      };

    case "GET_QUIZZES":
      return { ...state, quizzes: action.payload.quizzes };

    default:
      return state;
  }
};
