import { DocumentData } from "firebase/firestore";

export type QuestionContextProps = {
  questionState: QuestionStateProps;
  questionDispatch: React.Dispatch<QuestionStateActions>;
};

export type QuestionStateProps = {
  isLoading: boolean;
  error: string;
  questions: DocumentData;
  currentAnswer: string;
  userAnswers: string[];
  totalScore: number;
  currentQuestionIndex: number;
};

export type QuestionStateActions =
  | QuestionAction
  | AnswerAction
  | UserAnswerAction
  | ScoreAction
  | ResetAction
  | QuestionIndexAction
  | FetchQuestionsAction;

export type ResetAction = {
  type: "RESET_QUIZ";
};

export type FetchQuestionsAction = {
  type: "FETCH_QUESTIONS";
  payload: {
    isLoading: boolean;
  };
};

export type QuestionIndexAction = {
  type: "SET_QUESTION_INDEX";
};

export type QuestionAction = {
  type: "GET_QUESTIONS";
  payload: {
    questions: DocumentData;
    isLoading: boolean;
  };
};

export type AnswerAction = {
  type: "SET_CURRENT_ANSWER";
  payload: {
    currentAnswer: string;
  };
};

export type UserAnswerAction = {
  type: "SET_USER_ANSWER";
  payload: {
    userAnswers: string;
  };
};

export type ScoreAction = {
  type: "TOTAL_SCORE";
  payload: {
    totalScore: number;
  };
};
