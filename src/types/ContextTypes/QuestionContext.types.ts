import { DocumentData } from "firebase/firestore";

export type QuestionContextProps = {
  questionState: QuestionStateProps;
  questionDispatch: React.Dispatch<QuestionStateActions>;
};

export type QuestionStateProps = {
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
  | QuestionIndexAction;

export type ResetAction = {
  type: "RESET_QUIZ";
};

export type QuestionIndexAction = {
  type: "SET_QUESTION_INDEX";
};

export type QuestionAction = {
  type: "GET_QUESTIONS";
  payload: {
    questions: DocumentData;
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
