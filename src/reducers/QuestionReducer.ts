import {
  QuestionStateActions,
  QuestionStateProps,
} from "../types/ContextTypes/QuestionContext.types";

export const questionInitialState = {
  questions: [],
  currentAnswer: "",
  userAnswers: [],
  totalScore: 0,
  currentQuestionIndex: 0,
  isLoading: true,
  error: "",
};

export const questionReducer = (
  state: QuestionStateProps,
  action: QuestionStateActions
) => {
  switch (action.type) {
    case "FETCH_QUESTIONS":
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };

    case "GET_QUESTIONS":
      return {
        ...state,
        questions: action.payload.questions,
        isLoading: action.payload.isLoading,
      };

    case "SET_CURRENT_ANSWER":
      return {
        ...state,
        currentAnswer: action.payload.currentAnswer,
      };

    case "SET_USER_ANSWER":
      return {
        ...state,
        userAnswers: [...state.userAnswers, action.payload.userAnswers],
      };

    case "TOTAL_SCORE":
      return {
        ...state,
        totalScore: state.totalScore + action.payload.totalScore,
      };

    case "SET_QUESTION_INDEX":
      return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 };

    case "RESET_QUIZ":
      return { ...questionInitialState };

    default:
      return state;
  }
};
